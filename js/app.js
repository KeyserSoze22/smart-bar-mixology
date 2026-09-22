// ==========================================================================
// SMART BAR MIXOLOGY - CORE APPLICATION CONTROLLER
// UI Interactions, Navigation, Search, Filter Hub, Cart, & PWA Controller
// ==========================================================================

    let currentRecipeKeys = {
      bp: 'beachbucket',
      mc: 'irish_wake',
      obs: 'obs_blt',
      cl: 'classic_mojito'
    };

    let previousNavigationState = null;

    function recordNavigationOrigin(sourceName) {
      previousNavigationState = {
        scrollY: window.pageYOffset || document.documentElement.scrollTop,
        source: sourceName || 'Smart Bar Builder'
      };
    }

    function returnToPreviousLocation() {
      if (previousNavigationState && typeof previousNavigationState.scrollY === 'number') {
        window.scrollTo({
          top: previousNavigationState.scrollY,
          behavior: 'smooth'
        });
        showToast(`↩ Returned to ${previousNavigationState.source}`);
      } else {
        const bar = document.getElementById('section-custombar');
        if (bar) bar.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function getReturnBreadcrumbHtml() {
      if (!previousNavigationState) return '';
      return `
        <div class="return-breadcrumb-bar">
          <button type="button" class="return-breadcrumb-btn" onclick="returnToPreviousLocation()">
            <span>↩</span> Return to ${previousNavigationState.source}
          </button>
        </div>
      `;
    }

    
    // ==========================================================================
    // DRINK PRICING & RESTAURANT MENU COSTS DATABASE (46 COCKTAILS)
    // ==========================================================================

    // ==========================================================================
    // MASTER FILTER & SORT CONTROLLER
    // ==========================================================================
    let currentMasterStyle = 'all';

    function setDrinkStyleFilter(styleKey) {
      currentMasterStyle = styleKey;
      document.querySelectorAll('#styleFilterPills .style-pill-btn').forEach(btn => {
        const isTarget = btn.getAttribute('onclick')?.includes(`'${styleKey}'`);
        btn.classList.toggle('active', isTarget);
      });
      applyMasterFilters();
    }

    function resetMasterFilters() {
      currentMasterStyle = 'all';
      const spiritSel = document.getElementById('filterSpiritSelect');
      const venueSel = document.getElementById('filterVenueSelect');
      const sortSel = document.getElementById('filterSortSelect');
      if (spiritSel) spiritSel.value = 'all';
      if (venueSel) venueSel.value = 'all';
      if (sortSel) sortSel.value = 'featured';

      document.querySelectorAll('#styleFilterPills .style-pill-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick')?.includes("'all'"));
      });
      applyMasterFilters();
      showToast('↺ Filters reset to all 46 cocktails');
    }

    function handlePricingTierChange(val) {
      currentPricingTier = val;
      applyMasterFilters();
      if (typeof showUnifiedRecipe === 'function') {
        showUnifiedRecipe(currentUnifiedRecipeKey);
      }
    }

    function applyMasterFilters() {
      const spiritVal = document.getElementById('filterSpiritSelect')?.value || 'all';
      const venueVal = document.getElementById('filterVenueSelect')?.value || 'all';
      const sortVal = document.getElementById('filterSortSelect')?.value || 'featured';

      const searchIndex = buildSearchIndex();
      let matches = searchIndex.filter(item => {
        const pricing = drinkPricingDatabase[item.key] || {};
        
        // 1. Style / Type check
        if (currentMasterStyle !== 'all') {
          if (currentMasterStyle === 'selected') {
            const selected = (typeof customBarSelectedDrinks !== 'undefined') ? customBarSelectedDrinks : new Set();
            const normKey = (typeof normalizeDrinkKey === 'function') ? normalizeDrinkKey(item.key) : item.key;
            if (!selected.has(item.key) && !selected.has(normKey)) return false;
          } else if (currentMasterStyle === 'whiskey') {
            if (pricing.type !== 'whiskey' && pricing.spirit !== 'whiskey') return false;
          } else if (pricing.type !== currentMasterStyle) {
            return false;
          }
        }

        // 2. Spirit check
        if (spiritVal !== 'all') {
          if (spiritVal === 'none') {
            if (pricing.spirit !== 'none') return false;
          } else if (pricing.spirit !== spiritVal && item.spirit !== spiritVal) {
            return false;
          }
        }

        // 3. Venue check
        if (venueVal !== 'all') {
          if (item.venue !== venueVal) return false;
        }

        return true;
      });

      // Sort matches
      if (sortVal === 'savings_desc') {
        matches.sort((a, b) => {
          const pa = drinkPricingDatabase[a.key] || { barPrice: 0, diyCost: 0 };
          const pb = drinkPricingDatabase[b.key] || { barPrice: 0, diyCost: 0 };
          return (pb.barPrice - pb.diyCost) - (pa.barPrice - pa.diyCost);
        });
      } else if (sortVal === 'bar_price_desc') {
        matches.sort((a, b) => {
          const pa = drinkPricingDatabase[a.key] || { barPrice: 0 };
          const pb = drinkPricingDatabase[b.key] || { barPrice: 0 };
          return pb.barPrice - pa.barPrice;
        });
      } else if (sortVal === 'diy_cost_asc') {
        matches.sort((a, b) => {
          const pa = drinkPricingDatabase[a.key] || { diyCost: 0 };
          const pb = drinkPricingDatabase[b.key] || { diyCost: 0 };
          return pa.diyCost - pb.diyCost;
        });
      } else if (sortVal === 'name_asc') {
        matches.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortVal === 'potency_desc') {
        const potOrder = { high: 3, med: 2, mocktail: 1 };
        matches.sort((a, b) => (potOrder[b.potency] || 2) - (potOrder[a.potency] || 2));
      }

      // Update stats banner
      renderFilterStats(matches);

      // Render interactive cards gallery
      renderFilterGallery(matches);

      // Also synchronize Smart Bar Builder drink cards below
      syncSmartBarCardsFilter(matches);
    }

    function renderFilterStats(matches) {
      const textEl = document.getElementById('filterStatsText');
      const highEl = document.getElementById('filterSavingsHighlight');
      if (!textEl || !highEl) return;

      const count = matches.length;
      if (count === 0) {
        textEl.textContent = 'No drinks match the selected filters';
        highEl.innerHTML = '<span>⚠️</span> Try selecting "All Spirits" or resetting filters';
        return;
      }

      let totalBar = 0;
      let totalDiy = 0;
      matches.forEach(m => {
        const p = drinkPricingDatabase[m.key] || { barPrice: 18.00, diyCost: 3.00 };
        const effBar = getEffectiveBarPrice(m.key);
        totalBar += effBar;
        totalDiy += p.diyCost;
      });

      const avgBar = totalBar / count;
      const avgDiy = totalDiy / count;
      const avgSavings = avgBar - avgDiy;
      const pct = Math.round((avgSavings / avgBar) * 100);

      textEl.textContent = `Showing ${count} cocktail${count === 1 ? '' : 's'} matching criteria`;
      highEl.innerHTML = `<span>💰</span> Avg Bar: $${avgBar.toFixed(2)} • Avg DIY: ~$${avgDiy.toFixed(2)} (Save $${avgSavings.toFixed(2)} / ${pct}%)`;
    }

    function renderFilterGallery(matches) {
      const gallery = document.getElementById('filterResultsGallery');
      if (!gallery) return;

      if (matches.length === 0) {
        gallery.innerHTML = `
          <div style="grid-column: 1 / -1; padding: 28px; text-align: center; color: var(--text-muted);">
            No cocktails found. Click <button type="button" class="filter-reset-btn" onclick="resetMasterFilters()" style="display: inline-block; margin-left: 6px;">Reset Filters</button> to view all 46 drinks.
          </div>
        `;
        return;
      }

      let html = '';
      matches.forEach(m => {
        const p = drinkPricingDatabase[m.key] || { barPrice: 18.00, diyCost: 3.00, barName: 'Bar', styleLabel: 'Cocktail' };
        const effectiveBarPrice = getEffectiveBarPrice(m.key);
        const savings = Math.max(0, effectiveBarPrice - p.diyCost);
        const savingsPct = Math.round((savings / effectiveBarPrice) * 100);
        const inCart = customBarSelectedDrinks && customBarSelectedDrinks.has(m.key);
        const cleanTitle = m.title.split('(')[0].trim();

        html += `
          <div class="filter-card" onclick="navigateToRecipe('${m.key}', event, 'Filter &amp; Sort Hub')">
            <div>
              <div class="filter-card-top">
                <div>
                  <div class="filter-card-title">${cleanTitle}</div>
                  <div class="filter-card-venue">${m.venueName} • ${p.styleLabel}</div>
                </div>
                <span class="deal-badge" style="font-size: 0.7rem; font-weight: 800;">${m.spirit ? m.spirit.toUpperCase() : 'DRINK'}</span>
              </div>
            </div>

            <div class="filter-pricing-badge-row">
              <div>
                <span style="font-size: 0.72rem; color: var(--text-muted); display: block;">Bar Price</span>
                <span class="filter-bar-price">$${effectiveBarPrice.toFixed(2)}</span>
              </div>
              <div style="text-align: center;">
                <span style="font-size: 0.72rem; color: var(--text-muted); display: block;">Condo DIY</span>
                <span class="filter-diy-price">~$${p.diyCost.toFixed(2)}</span>
              </div>
              <div style="text-align: right;">
                <span style="font-size: 0.72rem; color: var(--text-muted); display: block;">Savings</span>
                <span style="color: #0284c7; font-weight: 800; font-size: 0.8rem;">Save $${savings.toFixed(2)} (${savingsPct}%)</span>
              </div>
            </div>

            <div class="filter-card-actions" onclick="event.stopPropagation()">
              <button type="button" class="filter-jump-btn" onclick="navigateToRecipe('${m.key}', event, 'Filter &amp; Sort Hub')">
                📖 View Recipe ➔
              </button>
              <button type="button" class="filter-cart-toggle-btn ${inCart ? 'in-cart' : ''}" onclick="toggleCustomDrinkFromRecipe('${m.key}')" title="Add or remove from Bar Cart">
                ${inCart ? '✓ In Cart' : '+ Cart'}
              </button>
            </div>
          </div>
        `;
      });
      gallery.innerHTML = html;
    }

    function syncSmartBarCardsFilter(matchingList) {
      const matchingKeys = new Set(matchingList.map(m => m.key));
      document.querySelectorAll('.drink-card').forEach(card => {
        const dKey = card.getAttribute('onclick')?.match(/'([^']+)'/)?.[1] || '';
        if (!dKey) return;
        card.style.display = matchingKeys.has(dKey) ? 'flex' : 'none';
      });
    }


    function renderRecipeCarousels() {
      renderSingleCarousel('bp', 'carousel_bp', recipeData, showRecipe);
      renderSingleCarousel('mc', 'carousel_mc_strip', mcguiresRecipeData, showMcguiresRecipe);
      renderSingleCarousel('obs', 'carousel_obs_strip', oldBayRecipeData, showOldBayRecipe);
      renderSingleCarousel('cl', 'carousel_cl_strip', classicRecipeData, showClassicRecipe);
    }

    function renderSingleCarousel(venue, containerId, dataset, showFn) {
      const container = document.getElementById(containerId);
      if (!container) return;
      const keys = venueDrinkKeys[venue];
      let html = '';
      keys.forEach(k => {
        const r = dataset[k];
        if (!r) return;
        const icon = (r.title.match(/^[^\w\s]+/g) || ['🍹'])[0];
        const cleanTitle = r.title.replace(/^[^\w]+/, '').split('(')[0].trim();
        html += `
          <button type="button" class="recipe-pill-btn" id="pill_${venue}_${k}" onclick="${showFn.name}('${k}')">
            <span>${icon}</span> <span>${cleanTitle}</span>
          </button>
        `;
      });
      container.innerHTML = html;
    }

    function updateCarouselActivePill(venue, key) {
      currentRecipeKeys[venue] = key;
      const containerId = venue === 'bp' ? 'carousel_bp' : (venue === 'mc' ? 'carousel_mc_strip' : (venue === 'obs' ? 'carousel_obs_strip' : 'carousel_cl_strip'));
      const container = document.getElementById(containerId);
      if (!container) return;

      container.querySelectorAll('.recipe-pill-btn').forEach(btn => {
        btn.classList.remove('active');
      });

      const activeBtn = document.getElementById(`pill_${venue}_${key}`);
      if (activeBtn) {
        activeBtn.classList.add('active');
        // Horizontally center pill inside carousel container without scrolling the window
        const left = activeBtn.offsetLeft - (container.clientWidth / 2) + (activeBtn.clientWidth / 2);
        container.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
      }
    }

    function stepRecipe(venue, delta) {
      const keys = venueDrinkKeys[venue];
      const currentKey = currentRecipeKeys[venue] || keys[0];
      let idx = keys.indexOf(currentKey);
      if (idx === -1) idx = 0;
      let nextIdx = (idx + delta + keys.length) % keys.length;
      const nextKey = keys[nextIdx];

      if (venue === 'bp') showRecipe(nextKey);
      else if (venue === 'mc') showMcguiresRecipe(nextKey);
      else if (venue === 'obs') showOldBayRecipe(nextKey);
      else if (venue === 'cl') showClassicRecipe(nextKey);
    }

    function getStepperHtml(venue, key, dataset) {
      const keys = venueDrinkKeys[venue];
      const idx = keys.indexOf(key);
      const prevIdx = (idx - 1 + keys.length) % keys.length;
      const nextIdx = (idx + 1) % keys.length;
      const prevRaw = dataset[keys[prevIdx]]?.title || 'Previous';
      const nextRaw = dataset[keys[nextIdx]]?.title || 'Next';
      const prevTitle = prevRaw.split('(')[0].trim();
      const nextTitle = nextRaw.split('(')[0].trim();

      return `
        <div class="recipe-stepper-bar">
          <button type="button" class="recipe-stepper-btn" onclick="stepRecipe('${venue}', -1)" title="Previous: ${prevTitle}">
            ◀ <span>${prevTitle}</span>
          </button>
          <span class="recipe-stepper-counter">Drink ${idx + 1} of ${keys.length}</span>
          <button type="button" class="recipe-stepper-btn" onclick="stepRecipe('${venue}', 1)" title="Next: ${nextTitle}">
            <span>${nextTitle}</span> ▶
          </button>
        </div>
      `;
    }

    // ==========================================================================
    // UNIVERSAL LIVE SEARCH & COMMAND PALETTE
    // ==========================================================================
    let allDrinksSearchIndex = null;

    function buildSearchIndex() {
      if (allDrinksSearchIndex) return allDrinksSearchIndex;
      const list = [];

      Object.keys(recipeData).forEach(k => {
        const r = recipeData[k];
        const fullKey = 'bp_' + k;
        const meta = drinkMetadata[fullKey] || {};
        list.push({
          key: fullKey,
          recipeKey: k,
          venue: 'bp',
          venueName: '🌴 Beach Bar & Punch',
          title: r.title,
          tag: r.tag,
          desc: r.desc,
          potency: meta.potency || 'med',
          spirit: meta.spirit || '',
          ingredients: (r.single || []).join(' ')
        });
      });

      Object.keys(mcguiresRecipeData).forEach(k => {
        const r = mcguiresRecipeData[k];
        const fullKey = 'mc_' + k;
        const meta = drinkMetadata[fullKey] || {};
        list.push({
          key: fullKey,
          recipeKey: k,
          venue: 'mc',
          venueName: "🍀 McGuire's Pub",
          title: r.title,
          tag: r.tag,
          desc: r.desc,
          potency: meta.potency || 'high',
          spirit: meta.spirit || '',
          ingredients: (r.single || []).join(' ')
        });
      });

      Object.keys(oldBayRecipeData).forEach(k => {
        const r = oldBayRecipeData[k];
        const fullKey = k.startsWith('obs_') ? k : 'obs_' + k;
        const meta = drinkMetadata[fullKey] || {};
        list.push({
          key: fullKey,
          recipeKey: k,
          venue: 'obs',
          venueName: '🦀 Old Bay Steamer',
          title: r.title,
          tag: r.tag,
          desc: r.desc,
          potency: meta.potency || 'med',
          spirit: meta.spirit || '',
          ingredients: (r.single || []).join(' ')
        });
      });

      Object.keys(classicRecipeData).forEach(k => {
        const r = classicRecipeData[k];
        const fullKey = k.startsWith('cl_') ? k : 'cl_' + k;
        const meta = drinkMetadata[fullKey] || {};
        list.push({
          key: fullKey,
          recipeKey: k,
          venue: 'cl',
          venueName: '🍸 Vacation Classics',
          title: r.title,
          tag: r.tag,
          desc: r.desc,
          potency: meta.potency || 'med',
          spirit: meta.spirit || '',
          ingredients: (r.single || []).join(' ')
        });
      });

      allDrinksSearchIndex = list;
      return list;
    }

    function handleUniversalSearch(query) {
      const q = (query || '').trim().toLowerCase();
      const dropdown = document.getElementById('universalSearchResults');
      const clearBtn = document.getElementById('searchClearBtn');
      if (clearBtn) {
        clearBtn.style.display = (query && query.length > 0) ? 'inline-block' : 'none';
      }
      if (!dropdown) return;

      // Also filter Smart Bar cards
      handleDrinkSearch(query);

      const index = buildSearchIndex();
      if (!q) {
        // Quick suggestions
        let html = '<div style="padding: 6px 12px; font-size: 0.74rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase;">✨ Quick Picks & Popular Cocktails</div>';
        index.slice(0, 6).forEach(item => {
          html += renderSearchResultItem(item);
        });
        dropdown.innerHTML = html;
        dropdown.style.display = 'block';
        return;
      }

      const matches = index.filter(item => {
        return item.title.toLowerCase().includes(q) ||
               item.tag.toLowerCase().includes(q) ||
               item.desc.toLowerCase().includes(q) ||
               item.spirit.toLowerCase().includes(q) ||
               item.venueName.toLowerCase().includes(q) ||
               item.ingredients.toLowerCase().includes(q);
      });

      if (matches.length === 0) {
        dropdown.innerHTML = `
          <div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
            No cocktails found matching "<strong>${query}</strong>".<br>Try searching <em>rum, tequila, margarita, punch, mocktail, or cold brew</em>.
          </div>
        `;
        dropdown.style.display = 'block';
        return;
      }

      let html = `<div style="padding: 6px 12px; font-size: 0.74rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase;">Found ${matches.length} Drink${matches.length > 1 ? 's' : ''}</div>`;
      matches.forEach(item => {
        html += renderSearchResultItem(item);
      });
      dropdown.innerHTML = html;
      dropdown.style.display = 'block';
    }

    function clearUniversalSearch() {
      const input = document.getElementById('drinkSearchInput');
      const clearBtn = document.getElementById('searchClearBtn');
      if (input) {
        input.value = '';
        input.focus();
      }
      if (clearBtn) clearBtn.style.display = 'none';
      handleDrinkSearch('');
      hideUniversalSearch();
    }

    function renderSearchResultItem(item) {
      const inCart = customBarSelectedDrinks && customBarSelectedDrinks.has(item.key);
      const cleanTitle = item.title.split('(')[0].trim();
      return `
        <div class="search-result-item" onclick="selectSearchResult('${item.key}')">
          <div>
            <div class="search-result-title">
              <span>${cleanTitle}</span>
              ${inCart ? '<span style="color: #16a34a; font-size: 0.75rem; font-weight: 800;">✓ In Cart</span>' : ''}
            </div>
            <div class="search-result-sub">${item.venueName} • ${item.tag}</div>
          </div>
          <span class="deal-badge" style="font-size: 0.7rem; background: var(--primary-light); color: var(--primary); font-weight: 800;">
            ${item.spirit ? item.spirit.toUpperCase() : 'DRINK'}
          </span>
        </div>
      `;
    }

    function selectSearchResult(key) {
      hideUniversalSearch();
      navigateToRecipe(key, null, 'Universal Search');
    }

    function hideUniversalSearch() {
      const dropdown = document.getElementById('universalSearchResults');
      if (dropdown) dropdown.style.display = 'none';
    }

    document.addEventListener('click', (e) => {
      const searchWrap = document.querySelector('.universal-search-container');
      if (searchWrap && !searchWrap.contains(e.target)) {
        hideUniversalSearch();
      }
    });

    // ==========================================================================
    // SCROLLSPY, FLOATING QUICK-CART & SWIPE GESTURES
    // ==========================================================================
    function initScrollspyAndFloatingControls() {
      const sections = [
        document.getElementById('section-custombar'),
        document.getElementById('section-recipes')
      ].filter(Boolean);

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              document.querySelectorAll('.streamlined-nav-link').forEach(link => {
                const target = link.getAttribute('data-section') || link.getAttribute('href')?.replace('#', '');
                if (target === id) link.classList.add('active');
                else link.classList.remove('active');
              });
              document.querySelectorAll('.mobile-app-tab').forEach(tab => {
                const target = tab.getAttribute('data-section') || tab.getAttribute('href')?.replace('#', '');
                if (target === id) tab.classList.add('active');
                else tab.classList.remove('active');
              });
            }
          });
        }, {
          threshold: 0.2,
          rootMargin: '-80px 0px -40% 0px'
        });

        sections.forEach(sec => observer.observe(sec));
      }

      // Smooth tab click listener with instant feedback and header offset
      document.querySelectorAll('.mobile-app-tab, .streamlined-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
          const targetId = link.getAttribute('data-section') || link.getAttribute('href')?.replace('#', '');
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            e.preventDefault();
            if (targetId === 'section-custombar') expandSectionIfCollapsed('custombar');
            if (targetId === 'section-recipes') expandSectionIfCollapsed('recipes');
            document.querySelectorAll('.mobile-app-tab').forEach(t => {
              const tid = t.getAttribute('data-section') || t.getAttribute('href')?.replace('#', '');
              t.classList.toggle('active', tid === targetId);
            });
            document.querySelectorAll('.streamlined-nav-link').forEach(l => {
              const lid = l.getAttribute('data-section') || l.getAttribute('href')?.replace('#', '');
              l.classList.toggle('active', lid === targetId);
            });
            const rect = targetEl.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            window.scrollTo({
              top: Math.max(0, rect.top + scrollTop - 14),
              behavior: 'smooth'
            });
          }
        });
      });

      window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        // Back to top button
        const btt = document.getElementById('backToTopBtn');
        if (btt) {
          if (scrollY > 400) btt.classList.add('show');
          else btt.classList.remove('show');
        }

        // Floating quick cart pill
        const cartPill = document.getElementById('floatingQuickCartPill');
        const customBarSec = document.getElementById('section-custombar');
        if (cartPill && customBarSec) {
          const customBarRect = customBarSec.getBoundingClientRect();
          const hasDrinks = customBarSelectedDrinks && customBarSelectedDrinks.size > 0;
          if (hasDrinks && customBarRect.bottom < 80) {
            cartPill.style.display = 'inline-flex';
          } else {
            cartPill.style.display = 'none';
          }
        }
      }, { passive: true });
    }

    function jumpToBarCart() {
      if (typeof expandSectionIfCollapsed === 'function') {
        expandSectionIfCollapsed('custombar');
      }
      const bar = document.getElementById('section-custombar');
      if (bar) {
        const navBar = document.querySelector('.streamlined-nav-bar') || document.querySelector('.navbar');
        const isNavVisible = navBar && window.getComputedStyle(navBar).display !== 'none';
        const navHeight = isNavVisible ? navBar.offsetHeight + 18 : 20;
        const rect = bar.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({
          top: Math.max(0, rect.top + scrollTop - navHeight),
          behavior: 'smooth'
        });
      }
    }

    function updateFloatingCartPill() {
      const countEl = document.getElementById('quickCartCountText');
      const totalEl = document.getElementById('quickCartTotalText');
      if (!countEl || !totalEl) return;
      const cart = calculateCustomCart();
      countEl.textContent = `${cart.selectedCount} Drink${cart.selectedCount === 1 ? '' : 's'}`;
      totalEl.textContent = `~$${cart.grandTotal.toFixed(0)}`;
    }

    function attachSwipeListeners(elementId, venue) {
      const el = document.getElementById(elementId);
      if (!el) return;
      let startX = 0;
      let startY = 0;
      // Tag of the element where the touch originated — used to block swipe
      // when the user is interacting with sliders, buttons, or other controls.
      let touchOriginTag = '';
      let touchOriginType = '';

      el.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
          const originEl = e.target;
          touchOriginTag  = originEl ? originEl.tagName.toUpperCase() : '';
          touchOriginType = originEl ? (originEl.type || '').toLowerCase() : '';
        }
      }, { passive: true });

      el.addEventListener('touchend', (e) => {
        // Block swipe navigation when the touch started on an interactive control
        // (especially range sliders which move horizontally like a swipe).
        const blockedTags  = ['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON', 'A'];
        const isSlider     = touchOriginTag === 'INPUT' && touchOriginType === 'range';
        const isControl    = blockedTags.includes(touchOriginTag);
        if (isSlider || isControl) return;

        if (e.changedTouches.length === 1) {
          const deltaX = e.changedTouches[0].clientX - startX;
          const deltaY = e.changedTouches[0].clientY - startY;
          // Require 90 px minimum horizontal travel and a 2:1 horizontal-to-vertical
          // ratio so the gesture must be clearly intentional and directional.
          if (Math.abs(deltaX) > 90 && Math.abs(deltaX) > Math.abs(deltaY) * 2.0) {
            if (typeof stepUnifiedRecipe === 'function') {
              stepUnifiedRecipe(deltaX < 0 ? 1 : -1);
            } else if (venue && typeof stepRecipe === 'function') {
              stepRecipe(venue, deltaX < 0 ? 1 : -1);
            }
          }
        }
      }, { passive: true });
    }

    function initDeepLinkingAndHotkeys() {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#drink=')) {
        const dKey = hash.replace('#drink=', '');
        if (dKey) {
          setTimeout(() => navigateToRecipe(dKey, null, 'Shared Link', false), 300);
        }
      }

      window.addEventListener('popstate', (e) => {
        if (e.state && e.state.drink) {
          navigateToRecipe(e.state.drink, null, null, false);
        }
      });

      window.addEventListener('keydown', (e) => {
        const activeEl = document.activeElement;
        const isInput = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable);

        if (!isInput && (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'))) {
          e.preventDefault();
          const searchInput = document.getElementById('drinkSearchInput');
          if (searchInput) {
            searchInput.focus();
            searchInput.select();
            handleUniversalSearch(searchInput.value);
          }
        } else if (e.key === 'Escape') {
          const searchInput = document.getElementById('drinkSearchInput');
          if (searchInput && (searchInput.value || document.activeElement === searchInput)) {
            clearUniversalSearch();
            searchInput.blur();
          } else {
            hideUniversalSearch();
            closeRecipeQuickView();
            closeBartenderModal();
          }
        }
      });
    }


    // 1. FLAVOR & SPIRIT FILTER CHIPS
    let activeFilterCategory = 'all';

    function setDrinkFilter(cat) {
      activeFilterCategory = cat;
      document.querySelectorAll('#filterChipsBar .filter-chip').forEach(chip => {
        const onClickStr = chip.getAttribute('onclick') || '';
        if (onClickStr.includes(`'${cat}'`)) {
          chip.classList.add('active');
        } else {
          chip.classList.remove('active');
        }
      });

      let visibleCount = 0;
      document.querySelectorAll('.drink-card').forEach(card => {
        const dKey = card.getAttribute('onclick')?.match(/'([^']+)'/)?.[1] || '';
        const meta = drinkMetadata[dKey] || {};
        const drink = customBarDatabase.drinks[dKey];

        let match = false;
        if (cat === 'all') {
          match = true;
        } else if (cat === 'rum') {
          match = meta.spirit === 'rum';
        } else if (cat === 'tequila') {
          match = meta.spirit === 'tequila';
        } else if (cat === 'vodka') {
          match = meta.spirit === 'vodka';
        } else if (cat === 'whiskey') {
          match = meta.spirit === 'whiskey';
        } else if (cat === 'tropical') {
          match = meta.flavor === 'tropical';
        } else if (cat === 'tart') {
          match = meta.flavor === 'tart';
        } else if (cat === 'spicy') {
          match = meta.flavor === 'spicy';
        } else if (cat === 'dessert') {
          match = meta.flavor === 'dessert';
        } else if (cat === 'mocktail') {
          match = meta.flavor === 'mocktail' || (drink && drink.liquorOz === 0);
        }

        if (match) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      showToast(`🔍 Showing ${visibleCount} cocktails matching "${cat.toUpperCase()}"`);
    }

    // ==========================================================================
    // SECTION EXPAND / COLLAPSE SYSTEM
    // ==========================================================================
    const SECTION_COLLAPSE_MAP = {
      masterFilterHub: { bodyId: 'masterFilterHubBody', btnId: 'btnToggleFilterHub', defaultDisplay: 'block', name: 'Filter & Sort Gallery' },
      custombar: { bodyId: 'customBarBody', btnId: 'btnToggleCustomBar', defaultDisplay: 'block', name: 'Smart Bar Builder & Cart' },
      recipes: { bodyId: 'recipesBody', btnId: 'btnToggleRecipes', defaultDisplay: 'block', name: 'Selected Recipe Guide' },
      brandStrategy: { bodyId: 'brandStrategyBody', btnId: 'btnToggleBrandStrategy', defaultDisplay: 'block', name: '1.75L Handle Strategy' },
      customBarSelectors: { bodyId: 'customBarVenuesGrid', btnId: 'btnToggleSelectors', defaultDisplay: 'grid', name: 'Drink Selectors' },
      servingsBreakdown: { bodyId: 'servingsBreakdownBody', btnId: 'btnToggleServings', defaultDisplay: 'block', name: 'Servings Scale' },
      expenseSplitter: { bodyId: 'expenseSplitterBody', btnId: 'btnToggleExpenseSplitter', defaultDisplay: 'block', name: 'Expense Splitter' },
      customCart: { bodyId: 'customBarCartDisplayArea', btnId: 'btnToggleCart', defaultDisplay: 'block', name: 'Shopping List' }
    };

    function toggleSectionCollapse(secKey) {
      const cfg = SECTION_COLLAPSE_MAP[secKey];
      if (!cfg) return;
      const body = document.getElementById(cfg.bodyId);
      const btn = document.getElementById(cfg.btnId);
      if (!body) return;

      const isCollapsed = body.style.display === 'none';
      if (isCollapsed) {
        body.style.display = cfg.defaultDisplay || '';
        if (btn) btn.innerHTML = '<span>▼</span> Collapse' + (cfg.btnId === 'btnToggleSelectors' ? ' Selectors' : '');
      } else {
        body.style.display = 'none';
        if (btn) btn.innerHTML = '<span>▲</span> Expand' + (cfg.btnId === 'btnToggleSelectors' ? ' Selectors' : '');
      }
      updateMasterCollapseButtonState();
    }

    function expandSectionIfCollapsed(secKey) {
      const cfg = SECTION_COLLAPSE_MAP[secKey];
      if (!cfg) return;
      const body = document.getElementById(cfg.bodyId);
      const btn = document.getElementById(cfg.btnId);
      if (body && body.style.display === 'none') {
        body.style.display = cfg.defaultDisplay || '';
        if (btn) btn.innerHTML = '<span>▼</span> Collapse' + (cfg.btnId === 'btnToggleSelectors' ? ' Selectors' : '');
      }
      updateMasterCollapseButtonState();
    }

    function updateMasterCollapseButtonState() {
      const masterBtn = document.getElementById('toggleAllSectionsBtn');
      if (!masterBtn) return;
      const mainKeys = ['masterFilterHub', 'custombar', 'recipes'];
      const anyExpanded = mainKeys.some(k => {
        const body = document.getElementById(SECTION_COLLAPSE_MAP[k]?.bodyId);
        return body && body.style.display !== 'none';
      });
      masterBtn.innerHTML = anyExpanded ? '<span>⤡</span> Collapse All' : '<span>⤢</span> Expand All';
    }

    function toggleAllSections() {
      const mainKeys = ['masterFilterHub', 'custombar', 'recipes'];
      const anyExpanded = mainKeys.some(k => {
        const body = document.getElementById(SECTION_COLLAPSE_MAP[k]?.bodyId);
        return body && body.style.display !== 'none';
      });

      mainKeys.forEach(k => {
        const cfg = SECTION_COLLAPSE_MAP[k];
        const body = document.getElementById(cfg.bodyId);
        const btn = document.getElementById(cfg.btnId);
        if (!body) return;
        if (anyExpanded) {
          body.style.display = 'none';
          if (btn) btn.innerHTML = '<span>▲</span> Expand';
        } else {
          body.style.display = cfg.defaultDisplay || '';
          if (btn) btn.innerHTML = '<span>▼</span> Collapse';
        }
      });

      updateMasterCollapseButtonState();
      if (typeof showToast === 'function') {
        showToast(anyExpanded ? '⤡ All sections collapsed' : '⤢ All sections expanded');
      }
    }

    // 3. CABINET MODE ("WHAT CAN I MAKE?")
    let selectedCabinetItems = new Set([
      'vodka', 'tequila', 'rum_white', 'rum_dark', 'rum_coconut', 'triple_sec',
      'juice_pineapple', 'juice_orange', 'juice_cranberry', 'produce_limes', 'supplies_ice'
    ]);

    function switchBarMode(mode) {
      expandSectionIfCollapsed('custombar');
      const tabCart = document.getElementById('tabModeCart');
      const tabCab = document.getElementById('tabModeCabinet');
      const cabView = document.getElementById('cabinetModeView');
      const cartHeader = document.getElementById('cartModeHeader');
      const brandStrategy = document.querySelector('.brand-strategy-box');
      const venuesGrid = document.querySelector('.custom-bar-venues-grid');
      const presets = document.querySelector('.custom-bar-presets');
      const kpiGrid = document.querySelector('.custom-bar-kpi-grid');
      const breakdown = document.getElementById('servingsBreakdownBox');
      const splitter = document.getElementById('expenseSplitterBox');
      const cartWrap = document.getElementById('customCartItemsWrap');

      if (mode === 'cabinet') {
        if (tabCart) tabCart.classList.remove('active');
        if (tabCab) tabCab.classList.add('active');
        if (cabView) cabView.style.display = 'block';

        if (cartHeader) cartHeader.style.display = 'none';
        if (brandStrategy) brandStrategy.style.display = 'none';
        if (venuesGrid) venuesGrid.style.display = 'none';
        if (presets) presets.style.display = 'none';
        if (kpiGrid) kpiGrid.style.display = 'none';
        if (breakdown) breakdown.style.display = 'none';
        if (splitter) splitter.style.display = 'none';
        if (cartWrap) cartWrap.style.display = 'none';

        renderCabinetPantry();
        calculateCabinetMatches();
      } else {
        if (tabCart) tabCart.classList.add('active');
        if (tabCab) tabCab.classList.remove('active');
        if (cabView) cabView.style.display = 'none';

        if (cartHeader) cartHeader.style.display = 'block';
        if (brandStrategy) brandStrategy.style.display = 'block';
        if (venuesGrid) venuesGrid.style.display = 'grid';
        if (presets) presets.style.display = 'flex';
        if (kpiGrid) kpiGrid.style.display = 'grid';
        if (breakdown) breakdown.style.display = 'block';
        if (splitter) splitter.style.display = 'block';
        if (cartWrap) cartWrap.style.display = 'block';
      }
    }

    function renderCabinetPantry() {
      const container = document.getElementById('cabinetPantryChips');
      if (!container) return;

      const keys = Object.keys(customBarDatabase.items);
      let html = '';
      keys.forEach(k => {
        const item = customBarDatabase.items[k];
        const isChecked = selectedCabinetItems.has(k);
        html += `
          <div class="pantry-chip ${isChecked ? 'checked' : ''}" onclick="toggleCabinetPantryItem('${k}')">
            <span>${isChecked ? '✓' : '➕'}</span>
            <span>${item.name}</span>
          </div>
        `;
      });
      container.innerHTML = html;
    }

    function toggleCabinetPantryItem(k) {
      if (selectedCabinetItems.has(k)) {
        selectedCabinetItems.delete(k);
      } else {
        selectedCabinetItems.add(k);
      }
      renderCabinetPantry();
      calculateCabinetMatches();
    }

    function selectAllPantry(all) {
      if (all) {
        selectedCabinetItems = new Set(Object.keys(customBarDatabase.items));
      } else {
        selectedCabinetItems.clear();
      }
      renderCabinetPantry();
      calculateCabinetMatches();
    }

    function calculateCabinetMatches() {
      const readyGrid = document.getElementById('readyDrinksGrid');
      const missingGrid = document.getElementById('missingOneDrinksGrid');
      const readyCountEl = document.getElementById('readyDrinksCount');
      const missingCountEl = document.getElementById('missingOneDrinksCount');

      let readyList = [];
      let missingOneList = [];

      Object.keys(customBarDatabase.drinks).forEach(dKey => {
        const drink = customBarDatabase.drinks[dKey];
        const missing = drink.items.filter(id => !selectedCabinetItems.has(id));

        if (missing.length === 0) {
          readyList.push(drink);
        } else if (missing.length === 1) {
          const missingName = customBarDatabase.items[missing[0]]?.name || '1 item';
          missingOneList.push({ drink, missingName });
        }
      });

      if (readyCountEl) readyCountEl.textContent = readyList.length;
      if (missingCountEl) missingCountEl.textContent = missingOneList.length;

      if (readyGrid) {
        if (readyList.length === 0) {
          readyGrid.innerHTML = '<div style="color: var(--text-muted); font-size: 0.88rem; padding: 10px;">Select more bottles/mixers above to see cocktails you can make right now!</div>';
        } else {
          readyGrid.innerHTML = readyList.map(d => `
            <div class="cabinet-card ready">
              <div>
                <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-main);">${d.icon} ${d.name}</div>
                <div style="font-size: 0.76rem; color: #059669; font-weight: 600;">✓ All ingredients in condo!</div>
              </div>
              <div style="display: flex; gap: 6px;">
                <button class="qol-btn" onclick="navigateToRecipe('${d.key}')" style="font-size: 0.76rem; padding: 4px 10px; background: #10b981; color: #fff;">Recipe ➔</button>
              </div>
            </div>
          `).join('');
        }
      }

      if (missingGrid) {
        if (missingOneList.length === 0) {
          missingGrid.innerHTML = '<div style="color: var(--text-muted); font-size: 0.88rem; padding: 10px;">No near-matches.</div>';
        } else {
          missingGrid.innerHTML = missingOneList.map(item => `
            <div class="cabinet-card missing-one">
              <div>
                <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-main);">${item.drink.icon} ${item.drink.name}</div>
                <div style="font-size: 0.76rem; color: #b45309; font-weight: 600;">Need: ${item.missingName}</div>
              </div>
              <button class="qol-btn" onclick="navigateToRecipe('${item.drink.key}')" style="font-size: 0.76rem; padding: 4px 10px;">View ➔</button>
            </div>
          `).join('');
        }
      }
    }

    // 4. GROUP EXPENSE & VENMO SPLITTER
    let groupAdultCount = 7;

    function setAdultSplit(count) {
      groupAdultCount = Math.max(1, Math.min(12, count));
      if (typeof activePeopleCount !== 'undefined') {
        activePeopleCount = groupAdultCount;
      }

      const adultSplitSlider = document.getElementById('adultSplitSlider');
      if (adultSplitSlider) adultSplitSlider.value = groupAdultCount;
      const adultSplitSliderVal = document.getElementById('adultSplitSliderVal');
      if (adultSplitSliderVal) adultSplitSliderVal.textContent = `${groupAdultCount} ${groupAdultCount === 1 ? 'Adult' : 'Adults'}`;

      document.querySelectorAll('#adultBtnGroup .adult-btn').forEach(btn => {
        const onClickStr = btn.getAttribute('onclick') || '';
        if (onClickStr.includes(`(${groupAdultCount})`)) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // Sync all open recipe card people sliders & badges
      document.querySelectorAll('.people-slider').forEach(sl => sl.value = groupAdultCount);
      document.querySelectorAll('.scaler-highlight-pill[id^="peopleVal_"]').forEach(pill => {
        pill.textContent = `${groupAdultCount} ${groupAdultCount === 1 ? 'Person' : 'People'}`;
      });
      document.querySelectorAll('.vessel-scaler-container').forEach(scaler => {
        const containerId = scaler.id.replace('scaler_', '');
        const recipeKey = scaler.getAttribute('data-recipe-key');
        const card = document.getElementById(containerId);
        if (card && typeof updateScalerSummaryBox === 'function') {
          updateScalerSummaryBox(card, containerId, recipeKey);
        }
      });

      updateExpenseSplitterDisplay();
      renderCustomBarCart();
    }

    function updateExpenseSplitterDisplay() {
      const cart = calculateCustomCart();
      const perPerson = groupAdultCount > 0 ? (cart.grandTotal / groupAdultCount) : 0;
      const perDay = perPerson / 7;

      const ppEl = document.getElementById('splitPerPersonVal');
      const pdEl = document.getElementById('splitPerDayVal');
      const savEl = document.getElementById('splitSavingsVal');

      if (ppEl) ppEl.textContent = `~$${perPerson.toFixed(2)}`;
      if (pdEl) pdEl.textContent = `~$${perDay.toFixed(2)} / day`;
      if (savEl) savEl.textContent = `Save ~$${cart.estSavings.toLocaleString()}`;
    }

    function copyVenmoRequestText() {
      const cart = calculateCustomCart();
      const perPerson = groupAdultCount > 0 ? (cart.grandTotal / groupAdultCount) : 0;
      const selectedNames = [...customBarSelectedDrinks].map(k => customBarDatabase.drinks[k]?.name).slice(0, 5).join(', ');

      let text = `🍹 Vacation Bar Split (${groupAdultCount} Adults)
`;
      text += `Total Retail Spirits & grocery tab: $${cart.grandTotal.toFixed(2)}
`;
      text += `Selected drinks: ${selectedNames}...
`;
      text += `Your share for the entire 7-day week of unlimited beach drinks: $${perPerson.toFixed(2)}
`;
      text += `(That's only $${(perPerson / 7).toFixed(2)}/day vs $25+ per bucket at beach bars!)
`;
      text += `Venmo: [Your Venmo Handle]`;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast('📋 Venmo split text copied to clipboard!');
        });
      } else {
        fallbackCustomCopy(text);
      }
    }

    function shareBarCartNative() {
      const cart = calculateCustomCart();
      if (cart.selectedCount === 0) {
        showToast('⚠️ Please select at least 1 cocktail first!');
        return;
      }

      const items = [];
      const cats = ['spirits', 'mixers', 'citrus', 'supplies'];
      cats.forEach(k => {
        const catItems = cart.categorized[k];
        if (catItems && catItems.length > 0) {
          catItems.forEach(i => {
            const name = i.name || i.brand;
            if (name) items.push(name);
          });
        }
      });
      const listText = items.join('\n');

      if (navigator.share) {
        navigator.share({
          title: 'Bar Shopping List',
          text: listText
        }).catch(() => {});
      } else {
        copyCustomBarShoppingList();
      }
    }

    // 5. DYNAMIC VESSEL & BATCH SCALER
    function setVesselScale(multiplier, name, recipeKey, containerId) {
      if (typeof DRINK_SCALE_STEPS !== 'undefined') {
        const matchingIdx = DRINK_SCALE_STEPS.findIndex(s => Math.abs(s.multiplier - multiplier) < 0.05);
        if (matchingIdx !== -1) {
          setDrinkScaleStep(matchingIdx, recipeKey, containerId);
          return;
        }
      }
      activeVesselMultiplier = multiplier;
      activeVesselName = name;

      const card = document.getElementById(containerId);
      if (card) {
        card.querySelectorAll('.vessel-btn').forEach(btn => {
          btn.classList.toggle('active', btn.textContent.includes(name.split(' ')[0]));
        });

        // Re-render ingredient items
        let r = (typeof recipeData !== 'undefined' && recipeData[recipeKey]) ||
                (typeof mcguiresRecipeData !== 'undefined' && mcguiresRecipeData[recipeKey]) ||
                (typeof oldBayRecipeData !== 'undefined' && oldBayRecipeData[recipeKey]) ||
                (typeof classicRecipeData !== 'undefined' && classicRecipeData[recipeKey]);
        if (r && r.single) {
          const list = card.querySelector('.dynamic-scale-list');
          if (list) {
            list.innerHTML = r.single.map(i => `<li>${scaleIngredientText(i, multiplier)}</li>`).join('');
          }
        }
      }
      showToast(`📏 Scaled to: ${name}`);
    }

    // 6. FULL-SCREEN "BARTENDER MODE" WITH SHAKE TIMER
    let currentBtRecipe = null;
    let shakeTimerInterval = null;
    let shakeTimerSeconds = 20;

    function openBartenderMode(recipeKey) {
      const r = (typeof recipeData !== 'undefined' && recipeData[recipeKey]) ||
                (typeof mcguiresRecipeData !== 'undefined' && mcguiresRecipeData[recipeKey]) ||
                (typeof oldBayRecipeData !== 'undefined' && oldBayRecipeData[recipeKey]) ||
                (typeof classicRecipeData !== 'undefined' && classicRecipeData[recipeKey]);
      if (!r) return;
      currentBtRecipe = r;

      const modal = document.getElementById('bartenderModal');
      const titleEl = document.getElementById('btModalTitle');
      const vesselEl = document.getElementById('btModalVessel');
      const ingEl = document.getElementById('btModalIngredients');
      const stepsEl = document.getElementById('btModalSteps');

      if (titleEl) titleEl.textContent = r.title;
      if (vesselEl) {
        const yieldCalc = (typeof getBatchYieldCalculation === 'function')
          ? getBatchYieldCalculation(activeDrinkStepIndex, activePeopleCount)
          : null;
        const volumeNote = yieldCalc ? ` (${yieldCalc.totalVolumeText} • for ${activePeopleCount} ${activePeopleCount === 1 ? 'person' : 'people'})` : '';
        vesselEl.textContent = `Batching for: ${activeVesselName}${volumeNote}`;
      }

      if (ingEl) {
        ingEl.innerHTML = r.single.map((item, idx) => `
          <li style="display: flex; align-items: center; gap: 10px; font-size: 1.05rem; background: rgba(255,255,255,0.06); padding: 8px 12px; border-radius: 8px; cursor: pointer;" onclick="this.style.opacity = this.style.opacity === '0.4' ? '1' : '0.4';">
            <input type="checkbox" style="width: 20px; height: 20px; accent-color: #38bdf8;" />
            <span>${scaleIngredientText(item, activeVesselMultiplier)}</span>
          </li>
        `).join('');
      }

      if (stepsEl) {
        stepsEl.innerHTML = r.steps.map(s => `<li>${s}</li>`).join('');
      }

      resetShakeTimer();
      if (modal) modal.classList.add('show');
    }

    function closeBartenderModal(event) {
      const modal = document.getElementById('bartenderModal');
      if (modal) modal.classList.remove('show');
      resetShakeTimer();
    }

    function toggleShakeTimer() {
      const btn = document.getElementById('timerStartBtn');
      if (shakeTimerInterval) {
        clearInterval(shakeTimerInterval);
        shakeTimerInterval = null;
        if (btn) btn.textContent = '▶ Resume';
      } else {
        if (shakeTimerSeconds <= 0) shakeTimerSeconds = 20;
        if (btn) btn.textContent = '⏸ Pause';
        shakeTimerInterval = setInterval(() => {
          shakeTimerSeconds--;
          updateTimerDisplay();
          if (shakeTimerSeconds <= 0) {
            clearInterval(shakeTimerInterval);
            shakeTimerInterval = null;
            if (btn) btn.textContent = '🎉 Done!';
            showToast('🧊 Shake Complete! Ice cold and ready to pour!');
            if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
          }
        }, 1000);
      }
    }

    function resetShakeTimer() {
      if (shakeTimerInterval) clearInterval(shakeTimerInterval);
      shakeTimerInterval = null;
      shakeTimerSeconds = 20;
      updateTimerDisplay();
      const btn = document.getElementById('timerStartBtn');
      if (btn) btn.textContent = '▶ Start 20s';
    }

    function updateTimerDisplay() {
      const el = document.getElementById('timerDigits');
      if (!el) return;
      const sec = shakeTimerSeconds < 10 ? `0${shakeTimerSeconds}` : shakeTimerSeconds;
      el.textContent = `00:${sec}`;
    }

    // 7. SURPRISE ME RANDOMIZER
    let randomMoodFilter = 'all';

    function openSurpriseModal() {
      const modal = document.getElementById('surpriseModal');
      if (modal) modal.classList.add('show');
    }

    function closeSurpriseModal(event) {
      const modal = document.getElementById('surpriseModal');
      if (modal) modal.classList.remove('show');
    }

    function setRandomMood(mood) {
      randomMoodFilter = mood;
      document.querySelectorAll('#surpriseModal .filter-chip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('onclick')?.includes(`'${mood}'`));
      });
    }

    function spinDrinkWheel() {
      const allKeys = Object.keys(customBarDatabase.drinks);
      let eligible = allKeys;

      if (randomMoodFilter !== 'all') {
        eligible = allKeys.filter(k => {
          const meta = drinkMetadata[k] || {};
          if (randomMoodFilter === 'mocktail') return meta.flavor === 'mocktail';
          return meta.spirit === randomMoodFilter;
        });
      }
      if (eligible.length === 0) eligible = allKeys;

      const btn = document.getElementById('spinWheelBtn');
      const iconEl = document.getElementById('slotDrinkIcon');
      const nameEl = document.getElementById('slotDrinkName');
      const actionRow = document.getElementById('slotActionRow');
      if (btn) btn.disabled = true;
      if (actionRow) actionRow.style.display = 'none';

      let shuffleCount = 0;
      const maxShuffles = 18;
      const interval = setInterval(() => {
        const randKey = eligible[Math.floor(Math.random() * eligible.length)];
        const drink = customBarDatabase.drinks[randKey];
        if (iconEl) iconEl.textContent = drink.icon;
        if (nameEl) nameEl.textContent = drink.name;

        shuffleCount++;
        if (shuffleCount >= maxShuffles) {
          clearInterval(interval);
          if (btn) btn.disabled = false;

          const chosenKey = eligible[Math.floor(Math.random() * eligible.length)];
          const chosenDrink = customBarDatabase.drinks[chosenKey];
          if (iconEl) iconEl.textContent = chosenDrink.icon;
          if (nameEl) nameEl.innerHTML = `<span style="color: #10b981;">🎉 ${chosenDrink.name}!</span>`;

          const viewBtn = document.getElementById('slotViewRecipeBtn');
          const addBtn = document.getElementById('slotAddToCartBtn');
          if (viewBtn) {
            viewBtn.onclick = () => {
              closeSurpriseModal();
              navigateToRecipe(chosenKey);
            };
          }
          if (addBtn) {
            addBtn.onclick = () => {
              if (!customBarSelectedDrinks.has(chosenKey)) toggleCustomDrink(chosenKey);
              showToast(`🛒 Added "${chosenDrink.name}" to cart!`);
              closeSurpriseModal();
            };
          }
          if (actionRow) actionRow.style.display = 'flex';
          showToast(`🍹 Winner chosen: ${chosenDrink.name}!`);
        }
      }, 70);
    }

    // 8. URL HASH SYNC
    function syncUrlHash() {
      try {
        if (customBarSelectedDrinks && customBarSelectedDrinks.size > 0) {
          const arr = [...customBarSelectedDrinks].join(',');
          window.location.hash = `cart=${arr}`;
        }
      } catch(e) {}
    }

    function loadFromUrlHash() {
      try {
        const hash = window.location.hash;
        if (hash && hash.includes('cart=')) {
          const raw = hash.replace('#cart=', '');
          const items = raw.split(',').filter(k => customBarDatabase.drinks[k]);
          if (items.length > 0) {
            customBarSelectedDrinks = new Set(items);
            saveCustomBarState(); syncUrlHash(); updateExpenseSplitterDisplay();
          }
        }
      } catch(e) {}
    }

    // 1. THEME TOGGLE (DARK / LIGHT MODE)
    function initTheme() {
      const savedTheme = localStorage.getItem('destin_theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      updateThemeButton();
    }

    function toggleTheme() {
      const isDark = document.body.classList.toggle('dark-mode');
      localStorage.setItem('destin_theme', isDark ? 'dark' : 'light');
      updateThemeButton();
      showToast(isDark ? '🌙 Dark Mode Activated' : '☀️ Light Mode Activated');
    }

    function updateThemeButton() {
      const btn = document.getElementById('themeToggleBtn');
      if (!btn) return;
      const isDark = document.body.classList.contains('dark-mode');
      btn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
      btn.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }

    // 2. TOAST NOTIFICATION
    function showToast(message) {
      let toast = document.getElementById('toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
      }
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    }


// ==========================================================================
// THE BACK PORCH SPECIALTY COCKTAIL RECIPES DATA & RENDERER (14 RECIPES)
// ==========================================================================

    function initCustomBar() {
      loadFromUrlHash(); loadCustomBarState(); updateExpenseSplitterDisplay();
      renderCustomDrinkSelectors();
      renderCustomBarCart();
      updatePresetButtons();
    }

    function loadCustomBarState() {
      try {
        const savedDrinks = localStorage.getItem('destin_custom_bar_drinks');
        if (savedDrinks) {
          const parsed = JSON.parse(savedDrinks);
          if (Array.isArray(parsed) && parsed.length > 0) {
            customBarSelectedDrinks = new Set(parsed);
          }
        }
        const savedPacked = localStorage.getItem('destin_custom_bar_packed');
        if (savedPacked) {
          const parsed = JSON.parse(savedPacked);
          if (Array.isArray(parsed)) {
            customBarPackedItems = new Set(parsed);
          }
        }
      } catch (e) {
        console.warn('Error loading custom bar state:', e);
      }
      renderCustomDrinkSelectors();
      renderCustomBarCart();
      updatePresetButtons();
    }

    function toggleCustomDrink(drinkKey, event) {
      if (event && event.target && event.target.closest('.view-recipe-link')) {
        return;
      }
      if (customBarSelectedDrinks.has(drinkKey)) {
        customBarSelectedDrinks.delete(drinkKey);
      } else {
        customBarSelectedDrinks.add(drinkKey);
      }
      saveCustomBarState(); syncUrlHash(); updateExpenseSplitterDisplay();
      renderCustomDrinkSelectors();
      renderCustomBarCart();
      syncActiveRecipeButtons();
      updatePresetButtons(null);
    }

    function toggleCustomDrinkFromRecipe(customKey) {
      toggleCustomDrink(customKey);
      const drink = customBarDatabase.drinks[customKey];
      if (drink) {
        const inCart = customBarSelectedDrinks.has(customKey);
        showToast(inCart ? `🛒 Added "${drink.name}" to Combined Bar Cart!` : `Removed "${drink.name}" from Combined Bar Cart.`);
      }
    }

    function syncActiveRecipeButtons() {
      // Surgically update the cart buttons in any active recipe cards without re-rendering or triggering scroll
      document.querySelectorAll('[onclick*="toggleCustomDrinkFromRecipe"]').forEach(btn => {
        const match = btn.getAttribute('onclick')?.match(/toggleCustomDrinkFromRecipe\('([^']+)'\)/);
        if (!match) return;
        const key = match[1];
        const inCart = customBarSelectedDrinks.has(key);
        const span = btn.querySelector('span');
        if (span) {
          span.textContent = inCart ? '✓ In Combined Bar Cart' : '➕ Add to Combined Bar Cart';
        }
        if (btn.classList.contains('filter-cart-toggle-btn')) {
          btn.classList.toggle('in-cart', inCart);
        } else {
          let defaultBg = 'var(--coral)';
          if (key.startsWith('mc_')) defaultBg = '#16a34a';
          else if (key.startsWith('obs_')) defaultBg = '#c2410c';
          else if (key.startsWith('cl_')) defaultBg = '#0284c7';
          btn.style.background = inCart ? '#16a34a' : defaultBg;
        }
      });
    }

    function navigateToRecipe(dKey, event, sourceName, pushHistory = true) {
      if (event) event.stopPropagation();
      expandSectionIfCollapsed('recipes');
      recordNavigationOrigin(sourceName || 'Smart Bar Builder');

      const fullKey = (typeof normalizeDrinkKey === 'function') ? normalizeDrinkKey(dKey) : dKey;
      if (typeof showUnifiedRecipe === 'function') {
        showUnifiedRecipe(fullKey);
      }

      // Deep linking & history state
      if (pushHistory && window.history && window.history.pushState) {
        try {
          history.pushState({ drink: fullKey }, '', '#drink=' + fullKey);
        } catch(e) {}
      }

      const targetSection = document.getElementById('section-recipes');
      if (targetSection) {
        const navBar = document.querySelector('.streamlined-nav-bar') || document.querySelector('.navbar') || document.getElementById('navbar');
        const isNavVisible = navBar && window.getComputedStyle(navBar).display !== 'none';
        const navHeight = isNavVisible ? navBar.offsetHeight + 18 : 20;
        const rect = targetSection.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({
          top: Math.max(0, rect.top + scrollTop - navHeight),
          behavior: 'smooth'
        });

        // Briefly highlight the recipe display card with a glow
        const displayArea = document.getElementById('unifiedRecipeDisplayArea');
        if (displayArea) {
          const card = displayArea.querySelector('.recipe-display-card') || displayArea.querySelector('.recipe-card');
          if (card) {
            card.style.transition = 'box-shadow 0.4s ease, transform 0.4s ease';
            card.style.boxShadow = '0 0 0 3px var(--primary), 0 10px 25px rgba(2, 132, 199, 0.35)';
            setTimeout(() => {
              card.style.boxShadow = '';
            }, 1800);
          }
        }
      }
    }

    // ==========================================================================
    // QUICK-VIEW RECIPE MODAL & BOTTOM SHEET CONTROLLER
    // ==========================================================================
    function openRecipeQuickView(dKey, event) {
      if (event) {
        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();
      }
      const modal = document.getElementById('recipeQuickViewModal');
      const content = document.getElementById('recipeQuickViewContent');
      if (!modal || !content) return;

      const cleanId = 'rqvCard_' + dKey.replace(/[^a-zA-Z0-9_]/g, '');
      if (typeof renderUnifiedRecipeCardHtml === 'function') {
        content.innerHTML = renderUnifiedRecipeCardHtml(dKey, cleanId, true);
      }
      const card = modal.querySelector('.recipe-quickview-card');
      if (card) {
        card.style.transform = '';
        card.scrollTop = 0;
      }
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    function closeRecipeQuickView(event) {
      if (event && event.target && event.target.closest('.recipe-quickview-card') && !event.target.classList.contains('recipe-quickview-close-btn')) {
        return;
      }
      const modal = document.getElementById('recipeQuickViewModal');
      if (modal) {
        modal.classList.remove('show');
        const card = modal.querySelector('.recipe-quickview-card');
        if (card) card.style.transform = '';
      }
      document.body.style.overflow = '';
    }

    function initQuickViewTouchDismiss() {
      const modal = document.getElementById('recipeQuickViewModal');
      const card = modal?.querySelector('.recipe-quickview-card');
      const handle = modal?.querySelector('.recipe-quickview-drag-handle');
      if (!modal || !card) return;

      let startY = 0;
      let currentY = 0;
      let isDragging = false;

      card.addEventListener('touchstart', (e) => {
        if (card.scrollTop > 5 && e.target !== handle) return;
        startY = e.touches[0].clientY;
        isDragging = true;
        card.style.transition = 'none';
      }, { passive: true });

      card.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentY = e.touches[0].clientY;
        const diff = currentY - startY;
        if (diff > 0) {
          card.style.transform = `translateY(${diff}px)`;
        }
      }, { passive: true });

      card.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        card.style.transition = 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
        const diff = currentY - startY;
        if (diff > 80) {
          closeRecipeQuickView();
        } else {
          card.style.transform = '';
        }
        startY = 0;
        currentY = 0;
      }, { passive: true });
    }

    function toggleCustomDrinkFromQuickView(fullKey, containerId) {
      toggleCustomDrink(fullKey);
      const inCart = customBarSelectedDrinks.has(fullKey);
      const card = document.getElementById(containerId);
      if (card) {
        const btn = card.querySelector('.rqv-cart-toggle-btn');
        if (btn) {
          btn.innerHTML = inCart ? '<span>✓ In Combined Bar Cart</span>' : '<span>➕ Add to Combined Bar Cart</span>';
          btn.style.background = inCart ? '#16a34a' : 'var(--coral)';
        }
      }
    }

    function setCustomDrinkPreset(presetType) {
      if (presetType === 'favorites') {
        customBarSelectedDrinks = new Set([
          'bp_ultimate_porchpunch',
          'bp_porchmargarita',
          'bp_pattywacked',
          'mc_irish_wake',
          'mc_iced_irish_coffee',
          'mc_dublin_mule',
          'cl_classic_mojito',
          'cl_classic_pina_colada'
        ]);
      } else if (presetType === 'backporch') {
        customBarSelectedDrinks = new Set(
          Object.keys(customBarDatabase.drinks).filter(k => k.startsWith('bp_'))
        );
      } else if (presetType === 'mcguires') {
        customBarSelectedDrinks = new Set(
          Object.keys(customBarDatabase.drinks).filter(k => k.startsWith('mc_'))
        );
      } else if (presetType === 'oldbay') {
        customBarSelectedDrinks = new Set(
          Object.keys(customBarDatabase.drinks).filter(k => k.startsWith('obs_'))
        );
      } else if (presetType === 'classics') {
        customBarSelectedDrinks = new Set(
          Object.keys(customBarDatabase.drinks).filter(k => k.startsWith('cl_'))
        );
      } else if (presetType === 'all') {
        customBarSelectedDrinks = new Set(Object.keys(customBarDatabase.drinks));
      } else if (presetType === 'clear') {
        customBarSelectedDrinks.clear();
      }
      saveCustomBarState(); syncUrlHash(); updateExpenseSplitterDisplay();
      renderCustomDrinkSelectors();
      renderCustomBarCart();
      syncActiveRecipeButtons();
      updatePresetButtons(presetType);
    }

    function renderCustomDrinkSelectors() {
      const bpList = document.getElementById('custom-bar-bp-list');
      const mcList = document.getElementById('custom-bar-mc-list');
      const obsList = document.getElementById('custom-bar-obs-list');
      const clList = document.getElementById('custom-bar-cl-list');
      if (!bpList || !mcList) return;

      let bpHtml = '';
      let mcHtml = '';
      let obsHtml = '';
      let clHtml = '';

      Object.keys(customBarDatabase.drinks).forEach(dKey => {
        const drink = customBarDatabase.drinks[dKey];
        const isSelected = customBarSelectedDrinks.has(dKey);
        const cardHtml = `
          <div class="drink-card ${isSelected ? 'selected' : ''}" onclick="toggleCustomDrink('${dKey}')">
            <input type="checkbox" ${isSelected ? 'checked' : ''} style="accent-color: #4f46e5; width: 18px; height: 18px; pointer-events: none;" />
            <div class="drink-card-info">
              <div class="drink-card-title">
                <span>${drink.icon}</span> ${drink.name}
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
                <div class="drink-card-sub">${drink.tag}</div>
                <button type="button" class="view-recipe-link" onclick="openRecipeQuickView('${dKey}', event)" title="Quick-view full recipe &amp; batch scaler">📖 Recipe</button>
              </div>
            </div>
          </div>
        `;
        if (dKey.startsWith('bp_')) {
          bpHtml += cardHtml;
        } else if (dKey.startsWith('mc_')) {
          mcHtml += cardHtml;
        } else if (dKey.startsWith('obs_')) {
          obsHtml += cardHtml;
        } else {
          clHtml += cardHtml;
        }
      });

      bpList.innerHTML = bpHtml;
      mcList.innerHTML = mcHtml;
      if (obsList) obsList.innerHTML = obsHtml;
      if (clList) clList.innerHTML = clHtml;
    }

    function calculateCustomCart() {
      const neededItemIds = new Set();
      const itemToDrinks = {};

      customBarSelectedDrinks.forEach(dKey => {
        const drink = customBarDatabase.drinks[dKey];
        if (!drink) return;
        drink.items.forEach(itemId => {
          neededItemIds.add(itemId);
          if (!itemToDrinks[itemId]) itemToDrinks[itemId] = [];
          itemToDrinks[itemId].push({
            name: drink.name,
            isBp: dKey.startsWith('bp_'),
            isMc: dKey.startsWith('mc_'), isObs: dKey.startsWith('obs_')
          });
        });
      });

      let spiritsCost = 0;
      let mixersCost = 0;
      let citrusCost = 0;
      let suppliesCost = 0;
      let spiritsCount = 0;

      const categorized = { spirits: [], mixers: [], citrus: [], supplies: [] };

      neededItemIds.forEach(itemId => {
        const item = customBarDatabase.items[itemId];
        if (!item) return;
        const entry = {
          ...item,
          usedIn: itemToDrinks[itemId] || []
        };
        categorized[item.cat].push(entry);

        if (item.cat === 'spirits') {
          spiritsCost += item.price;
          spiritsCount++;
        } else if (item.cat === 'mixers') {
          mixersCost += item.price;
        } else if (item.cat === 'citrus') {
          citrusCost += item.price;
        } else {
          suppliesCost += item.price;
        }
      });

      const grandTotal = spiritsCost + mixersCost + citrusCost + suppliesCost;

      // Exact Spirit Ounces from Bottle Sizes (Handles = 59.17 oz, 1.0L = 33.81 oz, 750ml = 25.36 oz)
      let totalSpiritOz = 0;
      categorized.spirits.forEach(item => {
        totalSpiritOz += (item.bottleOz || 59.17);
      });

      const alcoholicKeys = [...customBarSelectedDrinks].filter(k => (customBarDatabase.drinks[k]?.liquorOz || 0) > 0);
      const avgLiquorOz = alcoholicKeys.length > 0
        ? alcoholicKeys.reduce((sum, k) => sum + (customBarDatabase.drinks[k]?.liquorOz || 4.5), 0) / alcoholicKeys.length
        : 4.5;

      // Authentic 32-oz Souvenir Buckets & Mason Jars Yield (~4.0–5.5 oz liquor pour per vessel)
      const bucketServings = spiritsCount > 0 && avgLiquorOz > 0 ? Math.round(totalSpiritOz / avgLiquorOz) : 0;
      // 1-Gallon Condo Pitcher Batches (each 1-gallon pitcher fills exactly 4 full 32-oz buckets/jars)
      const pitchersCount = Math.round(bucketServings / 4);

      // Group Pacing for party size over 7-day vacation stay
      const effectiveAdults = typeof groupAdultCount !== 'undefined' ? Math.max(1, groupAdultCount) : 7;
      const adultDays = effectiveAdults * 7;
      const bucketsPerAdultPerDay = (bucketServings / adultDays).toFixed(1);

      // Cost per Authentic 32-oz Vessel vs $24.00–$28.00 Restaurant Price
      const costPerBucket = bucketServings > 0 ? (grandTotal / bucketServings).toFixed(2) : "0.00";
      const estSavings = bucketServings > 0 ? Math.max(0, Math.round((bucketServings * 24.00) - grandTotal)) : 0;

      return {
        selectedCount: customBarSelectedDrinks.size,
        spiritsCount,
        totalItemsCount: neededItemIds.size,
        spiritsCost,
        mixersCost,
        citrusCost,
        suppliesCost,
        grandTotal,
        totalSpiritOz,
        bucketServings,
        pitchersCount,
        bucketsPerAdultPerDay,
        costPerBucket,
        estSavings,
        categorized
      };
    }

    function renderCustomBarCart() {
      const cart = calculateCustomCart();

      // Update KPI Cards
      const kpiDrinks = document.getElementById('kpi-cocktails-count');
      const kpiBottles = document.getElementById('kpi-bottles-count');
      const kpiServings = document.getElementById('kpi-total-servings');
      const kpiPace = document.getElementById('kpi-daily-pace');
      const kpiSpirits = document.getElementById('kpi-spirits-cost');
      const kpiGrand = document.getElementById('kpi-grand-total');

      if (kpiDrinks) kpiDrinks.textContent = cart.selectedCount;
      if (kpiBottles) kpiBottles.textContent = cart.spiritsCount;
      if (kpiServings) kpiServings.textContent = '~' + cart.bucketServings;
      if (kpiPace) kpiPace.textContent = cart.bucketsPerAdultPerDay + ' / day';
      if (kpiSpirits) kpiSpirits.textContent = '~$' + cart.spiritsCost.toFixed(2);
      if (kpiGrand) kpiGrand.textContent = '~$' + cart.grandTotal.toFixed(2);

      // Update Servings & Group Consumption Breakdown (32-oz Buckets & Mason Jars)
      const sCocktails = document.getElementById('servings-total-cocktails');
      const sPitchers = document.getElementById('servings-pitchers-text');
      const sPace = document.getElementById('servings-pace-val');
      const sCost = document.getElementById('servings-cost-per-drink');
      const sSavings = document.getElementById('servingsSavingsPill');

      if (sCocktails) sCocktails.textContent = '~' + cart.bucketServings + ' Authentic 32-oz Buckets & Mason Jars';
      if (sPitchers) sPitchers.textContent = 'Fills ~' + cart.bucketServings + ' souvenir buckets, mason jars, or 30–40oz Yeti mugs (or ~' + cart.pitchersCount + ' 1-gal condo pitchers)';
      if (sPace) sPace.textContent = '~' + cart.bucketsPerAdultPerDay + ' 32-oz Buckets / Adult / Day';
      const sPaceSub = document.getElementById('servings-pace-sub');
      if (sPaceSub) {
        const adults = typeof groupAdultCount !== 'undefined' ? Math.max(1, groupAdultCount) : 7;
        sPaceSub.textContent = `Paced for ${adults} ${adults === 1 ? 'adult' : 'adults'} (${adults * 7} adult-days) over 7 days with heavy ice`;
      }
      if (sCost) sCost.textContent = '~$' + cart.costPerBucket + ' per 32-oz Bucket / Mason Jar';
      if (sSavings) sSavings.textContent = 'Save ~$' + cart.estSavings.toLocaleString() + ' vs Restaurant Buckets';

      // Update Packed Badge
      const packedCount = [...customBarPackedItems].filter(id => {
        return cart.categorized.spirits.some(i => i.id === id) ||
               cart.categorized.mixers.some(i => i.id === id) ||
               cart.categorized.citrus.some(i => i.id === id) ||
               cart.categorized.supplies.some(i => i.id === id);
      }).length;

      const badge = document.getElementById('custom-cart-progress-badge');
      if (badge) {
        if (cart.totalItemsCount > 0 && packedCount === cart.totalItemsCount) {
          badge.classList.add('all-packed');
          badge.textContent = '🎉 All Cart Items Packed!';
        } else {
          badge.classList.remove('all-packed');
          badge.textContent = `${packedCount} of ${cart.totalItemsCount} packed`;
        }
      }

      // Update Mobile Bottom App Bar Cart Badge
      const navCartBadge = document.getElementById('mobileNavCartBadge');
      if (navCartBadge) {
        if (customBarSelectedDrinks && customBarSelectedDrinks.size > 0) {
          navCartBadge.textContent = customBarSelectedDrinks.size;
          navCartBadge.style.display = 'inline-flex';
        } else {
          navCartBadge.style.display = 'none';
        }
      }

      // Sync Selected in Bar recipe filter tab and badges
      updateRecipeSelectedTabCount();

      const displayArea = document.getElementById('customBarCartDisplayArea');
      if (!displayArea) return;

      if (cart.selectedCount === 0) {
        displayArea.innerHTML = `
          <div class="empty-cart-message">
            <div style="font-size: 2.4rem; margin-bottom: 8px;">🍸🍹</div>
            <h4 style="color: var(--text-main); font-size: 1.1rem; margin-bottom: 6px;">No Cocktails Selected Yet</h4>
            <p style="font-size: 0.88rem; max-width: 460px; margin: 0 auto; line-height: 1.5;">
              Click any of the cocktails above to build your custom bar shopping list and batch calculations!
            </p>
          </div>
        `;
        return;
      }

      let htmlContent = '';

      function renderCategory(catKey, catTitle, icon, storeLabel, subtotal) {
        const items = cart.categorized[catKey];
        if (!items || items.length === 0) return;

        const catShortName = catKey === 'spirits' ? 'Alcohol' : (catKey === 'mixers' ? 'Mixers' : (catKey === 'citrus' ? 'Produce' : 'Supplies'));

        htmlContent += `
          <div class="custom-cart-cat-title">
            <div class="custom-cart-cat-left">
              <span>${icon} ${catTitle}</span>
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">(${storeLabel})</span>
            </div>
            <div class="custom-cart-cat-right">
              <span class="cat-subtotal">Est. ~$${subtotal.toFixed(2)}</span>
              <button type="button" class="cat-copy-btn" onclick="copyCustomBarSection('${catKey}', event)" title="Copy ${catShortName} section to clipboard">
                <span>📋</span> Copy ${catShortName}
              </button>
            </div>
          </div>
        `;

        items.forEach(item => {
          const isPacked = customBarPackedItems.has(item.id);
          const displayTitle = item.brand || item.name;

          htmlContent += `
            <div class="custom-cart-item ${isPacked ? 'packed' : ''}" onclick="toggleCustomCartItem('${item.id}', event)">
              <input type="checkbox" ${isPacked ? 'checked' : ''} style="accent-color: #4f46e5; width: 18px; height: 18px; margin-top: 3px; pointer-events: none;" />
              <div class="custom-cart-item-content">
                <div class="custom-cart-item-name">
                  <span>${displayTitle} ${item.yield ? `<span class="yield-tag">${item.yield}</span>` : ''}</span>
                  <span class="cost-tag">~$${item.price.toFixed(2)}</span>
                </div>
                ${item.note ? `<div class="custom-cart-item-note">${item.note}</div>` : ''}
              </div>
            </div>
          `;
        });
      }

      renderCategory('spirits', 'Alcohol & Spirits', '🍾', 'Spirits Store', cart.spiritsCost);
      renderCategory('mixers', 'Mixers & Juices', '🥥', 'Grocery Store', cart.mixersCost);
      renderCategory('citrus', 'Produce & Fresh Citrus', '🍋', 'Produce / Grocery', cart.citrusCost);
      renderCategory('supplies', 'Bar Supplies & Ice', '🧊', 'Grocery / Resort', cart.suppliesCost);

      displayArea.innerHTML = htmlContent;
    }

    function toggleCustomCartItem(itemId, event) {
      if (customBarPackedItems.has(itemId)) {
        customBarPackedItems.delete(itemId);
      } else {
        customBarPackedItems.add(itemId);
      }
      saveCustomBarState(); syncUrlHash(); updateExpenseSplitterDisplay();
      renderCustomBarCart();
    }

    function updateRecipeSelectedTabCount() {
      const count = (typeof customBarSelectedDrinks !== 'undefined') ? customBarSelectedDrinks.size : 0;

      // Recipe Category Filter Chip badge
      const chipCountEl = document.getElementById('rcat_selected_count');
      if (chipCountEl) chipCountEl.textContent = count;

      // Master Filter Hub Pill badge
      const masterCountEl = document.getElementById('styleFilterSelectedCount');
      if (masterCountEl) masterCountEl.textContent = count;

      // Cart Header Button badge
      const cartBtnCountEl = document.getElementById('cart-selected-recipes-count');
      if (cartBtnCountEl) cartBtnCountEl.textContent = count;

      // If user currently has the 'selected' recipe category active, refresh dropdown
      if (typeof currentRecipeCategoryFilter !== 'undefined' && currentRecipeCategoryFilter === 'selected') {
        if (typeof filterRecipeCategory === 'function') {
          filterRecipeCategory('selected');
        }
      }
    }

    function viewSelectedRecipes() {
      const selectedSet = (typeof customBarSelectedDrinks !== 'undefined') ? customBarSelectedDrinks : new Set();
      if (selectedSet.size === 0) {
        showToast('⚠️ Please select at least 1 cocktail above in the Smart Bar Builder first!');
        return;
      }

      expandSectionIfCollapsed('recipes');

      if (typeof filterRecipeCategory === 'function') {
        filterRecipeCategory('selected');
      }

      const targetSection = document.getElementById('section-recipes');
      if (targetSection) {
        const navBar = document.querySelector('.streamlined-nav-bar') || document.querySelector('.navbar');
        const isNavVisible = navBar && window.getComputedStyle(navBar).display !== 'none';
        const navHeight = isNavVisible ? navBar.offsetHeight + 18 : 20;
        const rect = targetSection.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({
          top: Math.max(0, rect.top + scrollTop - navHeight),
          behavior: 'smooth'
        });
      }
    }

    function resetCustomCartChecks() {
      customBarPackedItems.clear();
      saveCustomBarState(); syncUrlHash(); updateExpenseSplitterDisplay();
      renderCustomBarCart();
      showToast('🔄 Custom bar checklist reset!');
    }

    function copyCustomBarSection(catKey, event) {
      if (event && event.stopPropagation) event.stopPropagation();
      const cart = calculateCustomCart();
      if (cart.selectedCount === 0) {
        showToast('⚠️ Please select at least 1 cocktail first!');
        return;
      }

      const items = cart.categorized[catKey];
      if (!items || items.length === 0) {
        showToast('ℹ️ No items in this section for your selected cocktails.');
        return;
      }

      const catShortName = catKey === 'spirits' ? 'Alcohol' : (catKey === 'mixers' ? 'Mixers' : (catKey === 'citrus' ? 'Produce' : 'Supplies'));
      const text = items.map(i => i.name || i.brand).join('\n');

      copyTextToClipboard(text, `📋 ${catShortName} list copied to clipboard!`);
    }

    function copyCustomBarShoppingList() {
      const cart = calculateCustomCart();
      if (cart.selectedCount === 0) {
        showToast('⚠️ Please select at least 1 cocktail first!');
        return;
      }

      const items = [];
      const cats = ['spirits', 'mixers', 'citrus', 'supplies'];
      cats.forEach(k => {
        const catItems = cart.categorized[k];
        if (catItems && catItems.length > 0) {
          catItems.forEach(i => {
            const name = i.name || i.brand;
            if (name) items.push(name);
          });
        }
      });

      const text = items.join('\n');
      copyTextToClipboard(text, '📋 Bar shopping list copied to clipboard!');
    }

    function copyTextToClipboard(text, successToastMsg) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(successToastMsg || '📋 Copied to clipboard!');
        }).catch(() => {
          fallbackCustomCopy(text, successToastMsg);
        });
      } else {
        fallbackCustomCopy(text, successToastMsg);
      }
    }

    function fallbackCustomCopy(text, successToastMsg) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      ta.style.fontSize = '12pt';
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, 99999);
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          showToast(successToastMsg || '📋 Copied to clipboard!');
        } else {
          showToast('⚠️ Could not copy list automatically.');
        }
      } catch (e) {
        showToast('⚠️ Could not copy list automatically.');
      }
      document.body.removeChild(ta);
    }

    /**
     * Share or text a dedicated shopping run breakdown
     * @param {'spirits'|'grocery'} storeType
     */
    function shareStoreRun(storeType) {
      const cart = calculateCustomCart();
      if (cart.selectedCount === 0) {
        showToast('⚠️ Please select at least 1 cocktail first!');
        return;
      }

      let title = '';
      let items = [];
      let totalEst = 0;

      if (storeType === 'spirits') {
        title = '🍾 Liquor Store Run (Smart Bar Mixology)';
        const spirits = cart.categorized.spirits || [];
        if (spirits.length === 0) {
          showToast('ℹ️ No liquor bottles needed for your selected cocktails.');
          return;
        }
        spirits.forEach(s => {
          items.push(`• ${s.name} (${s.size || '1.75L'}) - ~$${s.price.toFixed(0)}`);
          totalEst += s.price;
        });
      } else {
        title = '🛒 Grocery Store Run (Mixers, Produce & Supplies)';
        const cats = ['mixers', 'citrus', 'supplies'];
        cats.forEach(c => {
          const list = cart.categorized[c] || [];
          if (list.length > 0) {
            const heading = c === 'mixers' ? 'Mixers & Juices' : (c === 'citrus' ? 'Fresh Citrus & Produce' : 'Bar Supplies & Ice');
            items.push(`\n[${heading}]`);
            list.forEach(item => {
              const name = item.name || item.brand;
              items.push(`• ${name} - ~$${item.price.toFixed(0)}`);
              totalEst += item.price;
            });
          }
        });
        if (items.length === 0) {
          showToast('ℹ️ No grocery items needed for your selected cocktails.');
          return;
        }
      }

      const messageText = `${title}\nEstimated Cost: ~$${Math.round(totalEst)}\nDrinks Covered: ${cart.selectedCount} recipes\n\nItems Needed:\n${items.join('\n')}\n\nGenerated with Smart Bar Mixology`;

      if (navigator.share) {
        navigator.share({
          title: title,
          text: messageText
        }).then(() => {
          showToast('📤 Shopping run shared successfully!');
        }).catch((err) => {
          if (err && err.name !== 'AbortError') {
            copyTextToClipboard(messageText, '📋 Shopping run list copied to clipboard!');
          }
        });
      } else {
        copyTextToClipboard(messageText, '📋 Shopping run list copied to clipboard!');
      }
    }


    function handleDrinkSearch(query) {
      const q = query.trim().toLowerCase();
      
      // Filter Cocktail Cards in Custom Bar Builder
      document.querySelectorAll('.drink-card').forEach(card => {
        const name = (card.querySelector('.drink-card-title') || {}).textContent || '';
        const tag = (card.querySelector('.drink-card-tag') || {}).textContent || '';
        if (!q || name.toLowerCase().includes(q) || tag.toLowerCase().includes(q)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });

      if (q.length >= 3) {
        showToast('🔍 Filtering drinks for "' + query.trim() + '"');
      }
    }


    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      const bar = document.getElementById('readingProgressBar');
      if (bar) bar.style.width = scrolled + '%';
    });


    
    // ==========================================================================
    

    document.addEventListener('DOMContentLoaded', () => {
      initTheme();
      initCustomBar();
      renderRecipeCarousels();
      applyMasterFilters();
      showUnifiedRecipe('bp_ultimate_porchpunch');
      initScrollspyAndFloatingControls();
      attachSwipeListeners('unifiedRecipeDisplayArea');
      initDeepLinkingAndHotkeys();
      initQuickViewTouchDismiss();
      initPwaCapabilities();
      updateMasterCollapseButtonState();
      console.log('Smart Bar Mixology loaded successfully!');
    });

    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      initCustomBar();
    }

    // ==========================================================================
    // PROGRESSIVE WEB APP (PWA) CONTROLLER & OFFLINE SERVICE WORKER
    // ==========================================================================
    let deferredInstallPrompt = null;

    function initPwaCapabilities() {
      // 1. Register Service Worker for offline capability
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js?v=3.4', { updateViaCache: 'none' })
          .then(reg => {
            console.log('[PWA] Service Worker registered successfully, scope:', reg.scope);
            // Proactively check for service worker updates immediately
            if (reg.update) {
              reg.update();
            }
          })
          .catch(err => {
            console.warn('[PWA] Service Worker registration failed:', err);
          });

        let swRefreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (!swRefreshing) {
            swRefreshing = true;
            window.location.reload();
          }
        });
      }

      // 2. Listen for Chrome/Android install prompt
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredInstallPrompt = e;
        const btn = document.getElementById('pwaInstallBtn');
        if (btn) {
          btn.style.display = 'inline-flex';
          btn.classList.add('pulse');
        }
      });

      // 3. Listen for app installed event
      window.addEventListener('appinstalled', () => {
        deferredInstallPrompt = null;
        const btn = document.getElementById('pwaInstallBtn');
        if (btn) btn.style.display = 'none';
        showToast('🎉 Smart Bar Mixology App Installed Successfully!');
      });
    }

    function triggerPwaInstall() {
      // 1. If native prompt is ready (Chrome/Edge/Android), trigger it directly
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('[PWA] User accepted install prompt');
            showToast('🎉 Installing Smart Bar Mixology!');
          }
          deferredInstallPrompt = null;
        }).catch(err => {
          console.warn('[PWA] Prompt error:', err);
          openUniversalInstallModal();
        });
        return;
      }

      // 2. Check if already installed
      const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
      if (isStandalone) {
        showToast('✓ Smart Bar Mixology is already installed and running fullscreen!');
        return;
      }

      // 3. Open Universal Install Modal tailored to user's current device
      openUniversalInstallModal();
    }

    function openUniversalInstallModal() {
      const modal = document.getElementById('universalInstallModal');
      if (!modal) return;

      const ua = window.navigator.userAgent.toLowerCase();
      const isIos = /iphone|ipad|ipod/.test(ua);
      const isAndroid = /android/.test(ua);

      if (isIos) {
        switchInstallTab('ios');
      } else if (isAndroid) {
        switchInstallTab('android');
      } else {
        switchInstallTab('desktop');
      }

      const directBtn = document.getElementById('nativeInstallPromptBtn');
      if (directBtn) {
        directBtn.style.display = deferredInstallPrompt ? 'inline-flex' : 'none';
      }

      modal.classList.add('show');
    }

    function closeUniversalInstallModal(event) {
      if (event && event.target && event.target.id !== 'universalInstallModal' && event.target.tagName !== 'BUTTON') {
        return;
      }
      const modal = document.getElementById('universalInstallModal');
      if (modal) modal.classList.remove('show');
    }

    function switchInstallTab(tabKey) {
      const tabs = ['ios', 'android', 'desktop'];
      tabs.forEach(t => {
        const btn = document.getElementById('tab' + t.charAt(0).toUpperCase() + t.slice(1));
        const panel = document.getElementById('installGuide' + t.charAt(0).toUpperCase() + t.slice(1));
        if (btn) btn.classList.toggle('active', t === tabKey);
        if (panel) panel.style.display = (t === tabKey) ? 'block' : 'none';
      });
    }

    function tryDirectPrompt() {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            showToast('🎉 Installing Smart Bar Mixology!');
          }
          deferredInstallPrompt = null;
          closeUniversalInstallModal();
        });
      }
    }

    // ==========================================================================
    // SCREEN WAKE LOCK CONTROLLER (MIXOLOGIST HANDS-FREE SCREEN PRESERVATION)
    // ==========================================================================
    let screenWakeLock = null;

    async function toggleWakeLock() {
      if (!('wakeLock' in navigator)) {
        showToast('ℹ️ Screen Wake Lock is not supported by your current browser.');
        return;
      }

      const btn = document.getElementById('wakeLockToggleBtn');

      if (screenWakeLock !== null) {
        // Release existing lock
        try {
          await screenWakeLock.release();
          screenWakeLock = null;
          updateWakeLockButtonState(false);
          showToast('📱 Screen Wake Lock deactivated.');
        } catch (err) {
          console.warn('Wake lock release error:', err);
        }
      } else {
        // Request new lock
        try {
          screenWakeLock = await navigator.wakeLock.request('screen');
          updateWakeLockButtonState(true);
          showToast('💡 Screen will stay awake while mixing drinks!');

          screenWakeLock.addEventListener('release', () => {
            screenWakeLock = null;
            updateWakeLockButtonState(false);
          });
        } catch (err) {
          console.warn('Wake lock request error:', err);
          showToast('⚠️ Could not activate Screen Wake Lock (battery saver active?).');
          updateWakeLockButtonState(false);
        }
      }
    }

    function updateWakeLockButtonState(isActive) {
      const btn = document.getElementById('wakeLockToggleBtn');
      if (!btn) return;
      if (isActive) {
        btn.classList.add('active');
        btn.innerHTML = '<span>💡</span> Screen Awake (Active)';
        btn.setAttribute('title', 'Screen Wake Lock is active. Click to turn off.');
      } else {
        btn.classList.remove('active');
        btn.innerHTML = '<span>📱</span> Keep Screen On';
        btn.setAttribute('title', 'Keep screen awake while mixing drinks');
      }
    }

    // Re-acquire lock if tab was backgrounded and returns to foreground
    document.addEventListener('visibilitychange', async () => {
      const btn = document.getElementById('wakeLockToggleBtn');
      if (btn && btn.classList.contains('active') && screenWakeLock === null && document.visibilityState === 'visible') {
        try {
          screenWakeLock = await navigator.wakeLock.request('screen');
          screenWakeLock.addEventListener('release', () => {
            screenWakeLock = null;
            updateWakeLockButtonState(false);
          });
        } catch (err) {
          console.warn('Wake lock visibility re-acquire error:', err);
        }
      }
    });

