// ==========================================================================
// SMART BAR MIXOLOGY - PRICING & INVENTORY DATABASE
// Live Retail Bottle Benchmarks, 1.75L Handles & Restaurant Menu Pricing
// ==========================================================================

    const drinkPricingDatabase = {
      // The Back Porch Beach Bar (14) - Gulf Coast Beachfront Resort Pricing
      bp_ultimate_porchpunch: { type: 'punch_bucket', spirit: 'rum', barPrice: 28.00, diyCost: 3.60, barName: 'Beach Club / Resort Bar', styleLabel: '32-oz Souvenir Beach Bucket' },
      bp_porchpunch: { type: 'punch_bucket', spirit: 'rum', barPrice: 18.00, diyCost: 2.50, barName: 'Beach Club / Resort Bar', styleLabel: 'Beach Bucket & Punch' },
      bp_pattywacked: { type: 'creamy_dessert', spirit: 'rum', barPrice: 18.50, diyCost: 3.20, barName: 'Beach Club / Resort Bar', styleLabel: 'Dessert & Mudslide' },
      bp_beachbucket: { type: 'punch_bucket', spirit: 'rum', barPrice: 29.00, diyCost: 3.90, barName: 'Beach Club / Resort Bar', styleLabel: '32-oz Souvenir Beach Bucket' },
      bp_porchmargarita: { type: 'margarita', spirit: 'tequila', barPrice: 17.50, diyCost: 2.60, barName: 'Beach Club / Resort Bar', styleLabel: 'Craft Margarita' },
      bp_strawberry_margarita: { type: 'margarita', spirit: 'tequila', barPrice: 18.00, diyCost: 2.70, barName: 'Beach Club / Resort Bar', styleLabel: 'Fruity Margarita' },
      bp_mango_margarita: { type: 'margarita', spirit: 'tequila', barPrice: 18.00, diyCost: 2.70, barName: 'Beach Club / Resort Bar', styleLabel: 'Tropical Margarita' },
      bp_spicy_margarita: { type: 'margarita', spirit: 'tequila', barPrice: 18.50, diyCost: 2.80, barName: 'Beach Club / Resort Bar', styleLabel: 'Spicy Craft Margarita' },
      bp_dragonfruit_margarita: { type: 'margarita', spirit: 'tequila', barPrice: 19.00, diyCost: 2.90, barName: 'Beach Club / Resort Bar', styleLabel: 'Signature Margarita' },
      bp_bloodymary: { type: 'bloody_mary', spirit: 'vodka', barPrice: 17.00, diyCost: 2.40, barName: 'Beach Club / Resort Bar', styleLabel: 'Savory Bloody Mary' },
      bp_painkiller: { type: 'tiki_tropical', spirit: 'rum', barPrice: 18.50, diyCost: 3.10, barName: 'Beach Club / Resort Bar', styleLabel: 'Tiki & Tropical Cooler' },
      bp_rumrunner: { type: 'tiki_tropical', spirit: 'rum', barPrice: 18.00, diyCost: 2.90, barName: 'Beach Club / Resort Bar', styleLabel: 'Tiki & Tropical Cooler' },
      bp_peachlemonade: { type: 'mule_highball', spirit: 'vodka', barPrice: 16.50, diyCost: 2.30, barName: 'Beach Club / Resort Bar', styleLabel: 'Mule & Highball Cooler' },
      bp_sunset_punch_kid: { type: 'mocktail', spirit: 'none', barPrice: 8.50, diyCost: 1.10, barName: 'Beach Club / Resort Bar', styleLabel: '0.0% ABV Mocktail' },

      // Coastal Irish Pub Classics (12) - Tourist Destination & Souvenir Vessels
      mc_irish_wake: { type: 'punch_bucket', spirit: 'rum', barPrice: 21.00, diyCost: 2.90, barName: 'Tourist Irish Tavern', styleLabel: '32-oz Mason Jar Legend (5 oz Spirits)' },
      mc_emory_chenoweth: { type: 'tiki_tropical', spirit: 'rum', barPrice: 18.50, diyCost: 3.10, barName: 'Tourist Irish Tavern', styleLabel: 'Tropical Rum Punch' },
      mc_iced_irish_coffee: { type: 'whiskey', spirit: 'whiskey', barPrice: 17.50, diyCost: 2.60, barName: 'Tourist Irish Tavern', styleLabel: 'Whiskey Coffee Cocktail' },
      mc_bloody_irish: { type: 'bloody_mary', spirit: 'whiskey', barPrice: 18.00, diyCost: 2.70, barName: 'Tourist Irish Tavern', styleLabel: 'Pub Bloody Mary' },
      mc_dublin_mule: { type: 'mule_highball', spirit: 'whiskey', barPrice: 17.00, diyCost: 2.50, barName: 'Tourist Irish Tavern', styleLabel: 'Irish Whiskey Mule' },
      mc_blueberry_lemon_drop: { type: 'martini', spirit: 'vodka', barPrice: 18.00, diyCost: 2.60, barName: 'Tourist Irish Tavern', styleLabel: 'Craft Chilled Martini' },
      mc_strawberry_twist: { type: 'martini', spirit: 'vodka', barPrice: 18.00, diyCost: 2.60, barName: 'Tourist Irish Tavern', styleLabel: 'Craft Chilled Martini' },
      mc_chocolate_moose: { type: 'creamy_dessert', spirit: 'vodka', barPrice: 18.50, diyCost: 3.00, barName: 'Tourist Irish Tavern', styleLabel: 'Dessert Martini' },
      mc_james_bond: { type: 'martini', spirit: 'vodka', barPrice: 22.00, diyCost: 3.20, barName: 'Tourist Irish Tavern', styleLabel: 'Double Shot Martini (5 oz Spirits)' },
      mc_south_of_the_border: { type: 'margarita', spirit: 'tequila', barPrice: 17.50, diyCost: 2.60, barName: 'Tourist Irish Tavern', styleLabel: 'Pub Margarita' },
      mc_smoked_old_fashioned: { type: 'whiskey', spirit: 'whiskey', barPrice: 19.50, diyCost: 2.80, barName: 'Tourist Irish Tavern', styleLabel: 'Tavern Whiskey Classic' },
      mc_root_beer_float_kid: { type: 'mocktail', spirit: 'none', barPrice: 8.00, diyCost: 1.10, barName: 'Tourist Irish Tavern', styleLabel: 'Draft Root Beer Mocktail' },

      // Coastal Seafood House & Steamer (9) - Destination Seafood Bar
      obs_blt: { type: 'whiskey', spirit: 'whiskey', barPrice: 17.50, diyCost: 2.70, barName: 'Coastal Seafood House', styleLabel: 'Whiskey Sweet Tea Cooler' },
      obs_darkandstormy: { type: 'mule_highball', spirit: 'rum', barPrice: 18.00, diyCost: 2.50, barName: 'Coastal Seafood House', styleLabel: 'Dark Rum Highball' },
      obs_bahamamama: { type: 'tiki_tropical', spirit: 'rum', barPrice: 18.00, diyCost: 2.80, barName: 'Coastal Seafood House', styleLabel: 'Tiki & Tropical Cooler' },
      obs_cucumbercooler: { type: 'mule_highball', spirit: 'gin', barPrice: 17.50, diyCost: 2.60, barName: 'Coastal Seafood House', styleLabel: 'Gin Highball Cooler' },
      obs_strongisland: { type: 'punch_bucket', spirit: 'vodka', barPrice: 25.00, diyCost: 3.80, barName: 'Coastal Seafood House', styleLabel: '5-Spirits Powerhouse (Limit 1)' },
      obs_seafoodbloodymary: { type: 'bloody_mary', spirit: 'vodka', barPrice: 26.00, diyCost: 3.50, barName: 'Coastal Seafood House', styleLabel: 'Loaded Seafood Bloody Mary' },
      obs_topshelfmargarita: { type: 'margarita', spirit: 'tequila', barPrice: 22.00, diyCost: 3.40, barName: 'Coastal Seafood House', styleLabel: 'Top Shelf Tequila Margarita' },
      obs_bushwacker: { type: 'creamy_dessert', spirit: 'rum', barPrice: 19.00, diyCost: 3.10, barName: 'Coastal Seafood House', styleLabel: 'Creamy Coastal Bushwacker' },
      obs_little_steamer_kid: { type: 'mocktail', spirit: 'none', barPrice: 7.50, diyCost: 0.90, barName: 'Coastal Seafood House', styleLabel: 'Sweet Tea Lemonade Mocktail' },

      // Vacation Classics (12) - Resort Beach Bar & Cocktail Lounge
      cl_classic_mojito: { type: 'mule_highball', spirit: 'rum', barPrice: 17.50, diyCost: 2.40, barName: 'Resort Beach Bar', styleLabel: 'Classic Rum Highball' },
      cl_classic_pina_colada: { type: 'tiki_tropical', spirit: 'rum', barPrice: 18.50, diyCost: 2.80, barName: 'Resort Beach Bar', styleLabel: 'Tiki & Tropical Classic' },
      cl_classic_mai_tai: { type: 'tiki_tropical', spirit: 'rum', barPrice: 20.00, diyCost: 3.20, barName: 'Tiki Lounge / Resort Bar', styleLabel: 'Authentic 1944 Tiki' },
      cl_classic_paloma: { type: 'mule_highball', spirit: 'tequila', barPrice: 17.50, diyCost: 2.40, barName: 'Resort Beach Bar', styleLabel: 'Tequila Highball Cooler' },
      cl_classic_tequila_sunrise: { type: 'tiki_tropical', spirit: 'tequila', barPrice: 16.50, diyCost: 2.20, barName: 'Resort Beach Bar', styleLabel: 'Tequila Sunset Classic' },
      cl_classic_moscow_mule: { type: 'mule_highball', spirit: 'vodka', barPrice: 17.00, diyCost: 2.40, barName: 'Cocktail Lounge', styleLabel: 'Copper Mug Mule' },
      cl_classic_daiquiri: { type: 'martini', spirit: 'rum', barPrice: 16.50, diyCost: 2.20, barName: 'Cocktail Lounge', styleLabel: 'Classic Cuban Sour' },
      cl_classic_espresso_martini: { type: 'martini', spirit: 'vodka', barPrice: 20.00, diyCost: 3.00, barName: 'Nightclub / Lounge', styleLabel: 'Cold Brew Martini' },
      cl_classic_long_island: { type: 'punch_bucket', spirit: 'vodka', barPrice: 22.00, diyCost: 3.20, barName: 'Resort Beach Bar', styleLabel: '5-Spirits Powerhouse' },
      cl_classic_whiskey_sour: { type: 'whiskey', spirit: 'whiskey', barPrice: 17.50, diyCost: 2.50, barName: 'Cocktail Lounge', styleLabel: 'Classic Whiskey Sour' },
      cl_classic_dark_and_stormy: { type: 'mule_highball', spirit: 'rum', barPrice: 18.00, diyCost: 2.50, barName: 'Resort Beach Bar', styleLabel: 'Dark Rum Highball' },
      cl_classic_coconut_limeade_kid: { type: 'mocktail', spirit: 'none', barPrice: 9.00, diyCost: 1.10, barName: 'Resort Beach Bar', styleLabel: 'Tropical Cream Mocktail' }
    };

    let currentPricingTier = 'resort_peak';

    function getEffectiveBarPrice(fullKey) {
      const p = drinkPricingDatabase[fullKey] || { barPrice: 18.00 };
      let mult = 1.0;
      if (currentPricingTier === 'resort_tax_tip') mult = 1.28; // +10% Resort Tax + 20% Tip
      else if (currentPricingTier === 'casual_pub') mult = 0.78; // Off-beach / Casual Tavern
      return p.barPrice * mult;
    }

    function getPricingTierLabel() {
      if (currentPricingTier === 'resort_tax_tip') return 'Out-of-Pocket Tab (w/ Tip & Tax)';
      if (currentPricingTier === 'casual_pub') return 'Casual Tavern / Off-Peak Menu';
      return 'Resort & Beachfront Bar Menu';
    }

    function renderPriceComparisonCard(fullKey) {
      const p = drinkPricingDatabase[fullKey] || { barPrice: 18.00, diyCost: 3.00, barName: 'Beach Bar / Resort', styleLabel: 'Vacation Cocktail' };
      const effectiveBarPrice = getEffectiveBarPrice(fullKey);
      const savings = Math.max(0, effectiveBarPrice - p.diyCost);
      const savingsPct = Math.round((savings / effectiveBarPrice) * 100);
      const tierLabel = getPricingTierLabel();
      const taxTipNote = currentPricingTier === 'resort_tax_tip' ? 'Includes 10% tax + 20% gratuity' : `Typical price at ${p.barName}`;

      // Collect live bottle pricing tags from customBarDatabase.drinks
      const drinkData = (typeof customBarDatabase !== 'undefined' && customBarDatabase.drinks) ? customBarDatabase.drinks[fullKey] : null;
      let bottleTagsHtml = '';
      if (drinkData && Array.isArray(drinkData.items) && typeof customBarDatabase.items !== 'undefined') {
        const tags = [];
        drinkData.items.forEach(itemId => {
          const item = customBarDatabase.items[itemId];
          if (item && item.price && (item.cat === 'spirits' || item.cat === 'liqueur' || item.cat === 'mixer')) {
            const shortName = item.name.split('(')[0].trim();
            const size = item.name.match(/\(([^)]+)\)/)?.[1] || '';
            tags.push(`<span class="ingredient-price-tag"><span>🍾</span> ${shortName} ${size ? '(' + size + ')' : ''}: <span class="tag-price">$${item.price.toFixed(2)}</span></span>`);
          }
        });
        if (tags.length > 0) {
          bottleTagsHtml = `
            <div class="ingredient-price-tags-box">
              <div class="ingredient-price-tags-title">
                <span>🏷️</span> Live Retail Bottle &amp; Ingredient Pricing Benchmark:
              </div>
              <div class="ingredient-price-tags-grid">
                ${tags.join('')}
              </div>
            </div>
          `;
        }
      }

      return `
        <div class="bar-pricing-card">
          <div class="pricing-col bar-col">
            <div class="pricing-label">🏪 ${tierLabel}</div>
            <div class="pricing-value">$${effectiveBarPrice.toFixed(2)}</div>
            <div class="pricing-sub">${taxTipNote}</div>
          </div>
          <div class="pricing-col diy-col">
            <div class="pricing-label">🍹 DIY Vacation Batch Cost</div>
            <div class="pricing-value">~$${p.diyCost.toFixed(2)}</div>
            <div class="pricing-sub">Per 32-oz Souvenir Vessel / Pour</div>
          </div>
          <div class="pricing-col savings-col">
            <div class="pricing-label">💰 Your Group Savings</div>
            <div class="pricing-value">Save $${savings.toFixed(2)}</div>
            <div class="pricing-sub">${savingsPct}% savings • $${(savings * 8).toFixed(0)} saved per 8 drinks!</div>
          </div>
        </div>
        ${bottleTagsHtml}
      `;
    }


const customBarDatabase = {
      items: {
        // Spirits (Retail Spirits Store - Local Retail Store | (850) 654-6161)
        vodka: { id: "vodka", name: "Vodka (1.75L Handle)", brand: "Tito's Handmade Vodka (1.75L Handle)", cat: "spirits", store: "Retail Spirits Store", price: 29.99, bottleOz: 59.17, yield: "~17 32-oz Buckets (3.5 oz pour)", note: "1.75L Handle — 6x-distilled corn vodka workhorse for 32-oz buckets & Yeti tumblers (saves $0.36/oz vs 750ml)" },
        tequila: { id: "tequila", name: "100% Blue Agave Tequila (1.75L Handle)", brand: "Espolòn Blanco or Reposado (1.75L Handle)", cat: "spirits", store: "Retail Spirits Store", price: 48.99, bottleOz: 59.17, yield: "~15–17 32-oz Margaritas (3.5–4 oz pour)", note: "1.75L Handle — 100% Blue Weber Agave workhorse, saves $50+ vs Casamigos handle ($99+) with pure agave taste" },
        rum_white: { id: "rum_white", name: "Light / White Rum (1.75L Handle)", brand: "Bacardi Superior White Rum (1.75L Handle)", cat: "spirits", store: "Retail Spirits Store", price: 21.99, bottleOz: 59.17, yield: "~30–40 32-oz Buckets (1.5–2 oz base)", note: "1.75L Handle — clean, crisp rum standard for punches, buckets & 32-oz mason jars" },
        rum_dark: { id: "rum_dark", name: "Dark / Black Rum (1.75L Handle)", brand: "Myers's Original Dark Rum (1.75L Handle)", cat: "spirits", store: "Retail Spirits Store", price: 39.99, bottleOz: 59.17, yield: "~30–40 32-oz Floaters / Buckets", note: "1.75L Handle — rich Jamaican dark rum for mudslides, painkillers & floaters" },
        rum_coconut: { id: "rum_coconut", name: "Coconut Rum (1.75L Handle)", brand: "Malibu Caribbean Coconut Rum (1.75L Handle)", cat: "spirits", store: "Retail Spirits Store", price: 24.99, bottleOz: 59.17, yield: "~30–40 32-oz Buckets (1.5–2 oz base)", note: "1.75L Handle — the essential coconut base for Porch punches, buckets & beach mixes" },
        rum_spiced: { id: "rum_spiced", name: "Spiced Rum (1.75L Handle)", brand: "Captain Morgan Original Spiced (1.75L Handle)", cat: "spirits", store: "Retail Spirits Store", price: 25.99, bottleOz: 59.17, yield: "~40–50 32-oz Beach Buckets (1 oz pour)", note: "1.75L Handle — for 32-oz Beach Buckets & spiced highballs" },
        rum_151: { id: "rum_151", name: "151 Overproof Rum (750ml)", brand: "Diamond Reserve 151 or Don Q 151 (750ml)", cat: "spirits", store: "Retail Spirits Store", price: 23.99, bottleOz: 25.36, yield: "~17 32-oz Irish Wakes (1.5 oz pour)", note: "750ml — high-octane punch kicker for McGuire's Irish Wake (rarely bottled in handles; 750ml covers 17 large wakes)" },
        whiskey_irish: { id: "whiskey_irish", name: "Irish Whiskey (1.75L Handle)", brand: "Bushmills Original Irish Whiskey (1.75L Handle)", cat: "spirits", store: "Retail Spirits Store", price: 54.39, bottleOz: 59.17, yield: "~17 32-oz Mason Jars (3.5 oz pour)", note: "1.75L Handle — McGuire's house pour (or Jameson 1.75L handle @ $44.99) for iced coffees & Dublin mules" },
        triple_sec: { id: "triple_sec", name: "Triple Sec / Orange Liqueur (1.0L Bottle)", brand: "DeKuyper Triple Sec 48° (1.0 Liter)", cat: "spirits", store: "Retail Spirits Store", price: 10.99, bottleOz: 33.81, yield: "~22–34 32-oz Margaritas (1–1.5 oz)", note: "1.0L Bottle — saves $27–$30 vs Grand Marnier/Cointreau with great orange sweetness for mixed drinks" },
        kahlua: { id: "kahlua", name: "Coffee Liqueur (1.75L Handle)", brand: "Kahlúa Original (1.75L Handle)", cat: "spirits", store: "Retail Spirits Store", price: 52.99, bottleOz: 59.17, yield: "~40 32-oz Mudslides (1.5 oz pour)", note: "1.75L Handle — rich coffee bean base for Patty'Wacked & Chocolate Moose" },
        irish_cream: { id: "irish_cream", name: "Irish Cream Liqueur (1.75L Handle)", brand: "Carolans Irish Cream (1.75L Handle)", cat: "spirits", store: "Retail Spirits Store", price: 26.99, bottleOz: 59.17, yield: "~40 32-oz Iced Coffees (1.5 oz pour)", note: "1.75L Handle — real Irish spirits, rich cream & honey (saves $20 vs Baileys 1.75L)" },
        blue_curacao: { id: "blue_curacao", name: "Blue Curaçao Liqueur (750ml)", brand: "DeKuyper Blue Curaçao (750ml)", cat: "spirits", store: "Retail Spirits Store", price: 11.99, bottleOz: 25.36, yield: "~25 32-oz Irish Wakes (1 oz pour)", note: "750ml — gives McGuire's Irish Wake its trademark emerald green glow" },
        creme_de_cacao: { id: "creme_de_cacao", name: "Dark Crème de Cacao (750ml)", brand: "DeKuyper Dark Crème de Cacao (750ml)", cat: "spirits", store: "Retail Spirits Store", price: 11.99, bottleOz: 25.36, yield: "~20–25 32-oz Mudslides (1–1.5 oz)", note: "750ml — rich cocoa liqueur for Patty'Wacked & Chocolate Moose" },
        peach_schnapps: { id: "peach_schnapps", name: "Peach Schnapps (1.0L Bottle)", brand: "DeKuyper Peachtree Schnapps (1.0 Liter)", cat: "spirits", store: "Retail Spirits Store", price: 13.99, bottleOz: 33.81, yield: "~22–34 32-oz Buckets (1–1.5 oz)", note: "1.0L Bottle — for Back Porch Punch, Peach Lemonade & Strawberry Twist" },
        fruit_liqueurs: { id: "fruit_liqueurs", name: "Blackberry & Banana Liqueurs (750ml pair)", brand: "DeKuyper Blackberry & Banana (750ml pair)", cat: "spirits", store: "Retail Spirits Store", price: 25.98, bottleOz: 50.72, yield: "~25 32-oz Rum Runners (1 oz each)", note: "750ml pair — only needed for Gulf Coast Rum Runners" },
        bitters_angostura: { id: "bitters_angostura", name: "Aromatic Bitters (4 oz)", brand: "Angostura Aromatic Bitters (4 oz)", cat: "spirits", store: "Retail Spirits Store", price: 9.99, bottleOz: 4.0, yield: "~100+ dashes (Old Fashioneds)", note: "4 oz — for McGuire's Tavern Old Fashioned" },

        // Mixers (Publix / Retail Spirits)
        juice_pineapple: { id: "juice_pineapple", name: "Dole Pineapple Juice (52 oz)", brand: "Dole 100% Pineapple Juice", cat: "mixers", store: "Publix", price: 4.25, yield: "~17 servings (3 oz)" },
        juice_orange: { id: "juice_orange", name: "Florida Orange Juice (52 oz)", brand: "Florida's Natural / Publix Deli OJ", cat: "mixers", store: "Publix", price: 4.99, yield: "~13–17 servings (3–4 oz)" },
        juice_cranberry: { id: "juice_cranberry", name: "Ocean Spray Cranberry Juice (64 oz)", brand: "Ocean Spray Cranberry", cat: "mixers", store: "Publix", price: 4.50, yield: "~42 splashes (1.5 oz)" },
        juice_lime_bottled: { id: "juice_lime_bottled", name: "Lime Juice (15 oz)", brand: "ReaLime or Fresh Squeezed", cat: "mixers", store: "Publix", price: 2.99, yield: "~30 pours (0.5 oz)" },
        syrup_grenadine: { id: "syrup_grenadine", name: "Rose's Grenadine (12 oz)", brand: "Rose's Grenadine", cat: "mixers", store: "Retail Spirits / Publix", price: 3.99, yield: "~24 dashes (0.5 oz)" },
        syrup_agave: { id: "syrup_agave", name: "Agave Nectar (11.75 oz)", brand: "Wholesome or Publix Agave Nectar", cat: "mixers", store: "Publix", price: 4.99, yield: "~24 pours (0.5 oz)" },
        puree_strawberry: { id: "puree_strawberry", name: "Strawberry Purée / Berries", brand: "Publix Strawberries or Purée", cat: "mixers", store: "Publix", price: 4.99, yield: "~8–10 margaritas (1.5 oz)" },
        puree_mango: { id: "puree_mango", name: "Mango Nectar / Purée (33.8 oz)", brand: "Looza or Jumex Mango Nectar", cat: "mixers", store: "Publix", price: 3.49, yield: "~16 margaritas/punches (2 oz)" },
        puree_dragonfruit: { id: "puree_dragonfruit", name: "Dragon Fruit / Pitaya Juice", brand: "Pitaya Plus or Dragonfruit juice", cat: "mixers", store: "Publix", price: 4.99, yield: "~8–10 margaritas (1.5 oz)" },
        cream_coconut: { id: "cream_coconut", name: "Coco Lopez Cream of Coconut (15 oz)", brand: "Coco Lopez Real Cream of Coconut", cat: "mixers", store: "Publix", price: 3.99, yield: "~7–8 painkillers (2 oz)" },
        mix_bloodymary: { id: "mix_bloodymary", name: "Zing Zang Bloody Mary Mix (32 oz)", brand: "Zing Zang", cat: "mixers", store: "Retail Spirits / Publix", price: 5.99, yield: "~8 Bloody Marys (4 oz)" },
        soda_lemonlime: { id: "soda_lemonlime", name: "Sprite / Lemon-Lime Soda (2-Liter)", brand: "Sprite 2-Liter", cat: "mixers", store: "Publix", price: 2.49, yield: "~16 tall splashes (4 oz)" },
        soda_gingerbeer: { id: "soda_gingerbeer", name: "Ginger Beer (4-Pack)", brand: "Q Mixers or Fever-Tree Ginger Beer", cat: "mixers", store: "Publix", price: 5.99, yield: "~8 mules (3–4 oz)" },
        soda_rootbeer: { id: "soda_rootbeer", name: "Root Beer (2-Liter)", brand: "Barq's or A&W Root Beer", cat: "mixers", store: "Publix", price: 2.49, yield: "~8–10 kid floats (8 oz)" },
        coffee_coldbrew: { id: "coffee_coldbrew", name: "Chilled Cold Brew Coffee (48 oz)", brand: "Stok Unsweetened or Publix Deli", cat: "mixers", store: "Publix", price: 5.99, yield: "~12 iced coffees (4 oz)" },
        dairy_cream: { id: "dairy_cream", name: "Half-and-Half or Heavy Cream (pint)", brand: "Publix Dairy", cat: "mixers", store: "Publix", price: 3.49, yield: "~16 splashes (1 oz)" },
        syrup_chocolate: { id: "syrup_chocolate", name: "Hershey's Chocolate Syrup (24 oz)", brand: "Hershey's Squeeze Bottle", cat: "mixers", store: "Publix", price: 3.49, yield: "~24 glass swirls" },
        beer_guinness: { id: "beer_guinness", name: "Guinness Extra Stout (Single/4-pack)", brand: "Guinness Extra Stout", cat: "mixers", store: "Retail Spirits / Publix", price: 4.99, yield: "~6 pub floats (2 oz)" },
        lemonade: { id: "lemonade", name: "Simply Lemonade (52 oz)", brand: "Simply Lemonade", cat: "mixers", store: "Publix", price: 3.99, yield: "~13 coolers (4 oz)" },
        icecream_vanilla: { id: "icecream_vanilla", name: "Vanilla Bean Ice Cream (tub)", brand: "Breyers or Publix Vanilla", cat: "mixers", store: "Publix", price: 5.49, yield: "~8–10 scoops (kid floats)" },

        // Fresh Produce & Citrus (Publix)
        produce_limes: { id: "produce_limes", name: "Fresh Limes (2-lb bag, ~12–15 limes)", brand: "Publix Fresh Produce", cat: "citrus", store: "Publix", price: 4.99, yield: "~70–80 wedges (~12–15 limes)" },
        produce_lemons: { id: "produce_lemons", name: "Fresh Lemons (2-lb bag, ~8–10 lemons)", brand: "Publix Fresh Produce", cat: "citrus", store: "Publix", price: 4.99, yield: "~40–50 wedges (~8–10 lemons)" },
        produce_oranges: { id: "produce_oranges", name: "Fresh Oranges (3-lb bag, ~6–8 oranges)", brand: "Publix Fresh Produce", cat: "citrus", store: "Publix", price: 5.99, yield: "~35–40 wheels (~6–8 oranges)" },
        produce_jalapenos: { id: "produce_jalapenos", name: "Fresh Jalapeño Peppers (3–4 peppers)", brand: "Publix Fresh Produce", cat: "citrus", store: "Publix", price: 1.49, yield: "~40–50 slices (margaritas)" },
        produce_mint: { id: "produce_mint", name: "Fresh Mint Sprigs (clamshell)", brand: "Publix Fresh Herbs", cat: "citrus", store: "Publix", price: 2.99, yield: "~15–20 sprigs (mules & coolers)" },
        produce_cherries: { id: "produce_cherries", name: "Maraschino Cherries with stems (16 oz)", brand: "Publix Grocery", cat: "citrus", store: "Publix", price: 3.99, yield: "~45–50 cherries" },
        produce_celery_olives: { id: "produce_celery_olives", name: "Celery Stalk & Queen Spanish Olives", brand: "Publix Produce & Pickles", cat: "citrus", store: "Publix", price: 5.99, yield: "~12–15 skewers (Bloody Marys)" },
        rim_salt_tajin: { id: "rim_salt_tajin", name: "Margarita Salt & Tajín Clásico Seasoning", brand: "Master of Mixes Salt & Tajín", cat: "citrus", store: "Publix", price: 4.99, yield: "~50+ glass rims" },
        spice_nutmeg: { id: "spice_nutmeg", name: "Ground Nutmeg", brand: "McCormick Spice", cat: "citrus", store: "Publix", price: 3.99, yield: "~100+ dustings" },

        // Barware & Supplies (Scaled for 6–8 Adults with 30–40oz Yeti Tumblers)
        supplies_ice: { id: "supplies_ice", name: "3× 16-lb Ice Bags (48 lbs total)", brand: "Reddy Ice / Publix (keep in condo freezer)", cat: "supplies", store: "Publix / Resort", price: 11.97, yield: "48 lbs ice (~45–60 Yeti mugs packed with ice)" },
        supplies_cups: { id: "supplies_cups", name: "50-pack 16-oz Plastic Party Tumblers + BYO 30–40oz Yeti Mugs", brand: "Solo / Hefty Clear Cups (NO GLASS on beach/boats)", cat: "supplies", store: "Publix", price: 6.99, yield: "50 cups + BYO Yeti tumblers" },
                // Classic Spirits & Mixers additions (Retail Spirits & Publix)
                // Old Bay Steamer Additions (Publix)
        tea_sweettea: { id: "tea_sweettea", name: "Southern Sweet Tea (Publix Deli 1-Gallon)", brand: "Publix Deli Southern Sweet Tea", cat: "mixers", store: "Publix", price: 3.99, yield: "~16 pours (8 oz)" },
        produce_cucumber: { id: "produce_cucumber", name: "English Seedless Cucumber (1 cucumber)", brand: "Publix Fresh Produce", cat: "citrus", store: "Publix", price: 1.99, yield: "~30–40 slices" },
        rim_oldbay: { id: "rim_oldbay", name: "Old Bay Seasoning (6 oz can)", brand: "McCormick Old Bay", cat: "citrus", store: "Publix", price: 4.49, yield: "~50+ rims & seafood steaming" },
        gin: { id: "gin", name: "London Dry Gin (1.75L Handle)", brand: "Beefeater London Dry Gin (1.75L Handle)", cat: "spirits", store: "Retail Spirits Store", price: 34.99, bottleOz: 59.17, yield: "~15–20 32-oz Cocktails (3–4 oz pour)", note: "1.75L Handle — classic juniper-forward London dry gin for Martinis, Long Islands & G&Ts" },
        soda_grapefruit: { id: "soda_grapefruit", name: "Grapefruit Soda (2-Liter / 4-pack)", brand: "Squirt, Jarritos or Fever-Tree", cat: "mixers", store: "Publix", price: 3.49, yield: "~8–10 Palomas (4–5 oz)" },
        soda_clubsoda: { id: "soda_clubsoda", name: "Club Soda / Sparkling Water (2-Liter)", brand: "Schweppes or Canada Dry", cat: "mixers", store: "Publix", price: 2.49, yield: "~12–16 highballs (4 oz)" },
        soda_cola: { id: "soda_cola", name: "Coca-Cola Classic (2-Liter)", brand: "Coca-Cola", cat: "mixers", store: "Publix", price: 2.99, yield: "~16 highball splashes (4 oz)" },
        syrup_orgeat: { id: "syrup_orgeat", name: "Orgeat / Almond Syrup (12 oz)", brand: "Torani or Monin Almond/Orgeat", cat: "mixers", store: "Publix / Retail Spirits", price: 5.99, yield: "~12–16 Mai Tais (1 oz)" },
        supplies_shaker: { id: "supplies_shaker", name: "16-oz Plastic/Metal Cocktail Shaker", brand: "Barware Shaker with strainer", cat: "supplies", store: "Retail Spirits / Publix", price: 9.99, yield: "Reusable all week" }
      },

      drinks: {
        // The Back Porch (14) - Portioned for 32-oz Souvenir Beach Buckets / Yeti Tumblers
        bp_ultimate_porchpunch: {
          key: "bp_ultimate_porchpunch", name: "The Ultimate Back Porch Punch", venue: "The Back Porch", icon: "🍹", tag: "32-oz Souvenir Bucket • 4 Rums & Tropical Juices", liquorOz: 5.0,
          items: ["rum_coconut", "rum_white", "rum_dark", "peach_schnapps", "juice_pineapple", "juice_orange", "puree_mango", "juice_cranberry", "syrup_grenadine", "produce_limes", "produce_oranges", "produce_cherries", "supplies_ice", "supplies_cups"]
        },
        bp_porchpunch: {
          key: "bp_porchpunch", name: "The Signature Back Porch Punch", venue: "The Back Porch", icon: "🍹", tag: "32-oz Bucket • Peach & Coconut Rum Cooler", liquorOz: 5.0,
          items: ["rum_coconut", "rum_white", "peach_schnapps", "juice_pineapple", "juice_orange", "juice_cranberry", "produce_limes", "produce_oranges", "produce_cherries", "supplies_ice", "supplies_cups"]
        },
        bp_pattywacked: {
          key: "bp_pattywacked", name: "The Legendary \"Patty'Wacked\"", venue: "The Back Porch", icon: "🍫", tag: "32-oz Bucket • Dark Rum, Kahlúa & Crème de Cacao Mudslide", liquorOz: 5.0,
          items: ["rum_dark", "kahlua", "creme_de_cacao", "dairy_cream", "syrup_chocolate", "produce_cherries", "supplies_ice", "supplies_cups"]
        },
        bp_beachbucket: {
          key: "bp_beachbucket", name: "The 32-oz Beach Bucket", venue: "The Back Porch", icon: "🪣", tag: "32-oz Souvenir Bucket • 4-Rum Party Bucket", liquorOz: 4.5,
          items: ["rum_coconut", "rum_white", "rum_spiced", "rum_dark", "juice_pineapple", "juice_orange", "juice_cranberry", "syrup_grenadine", "produce_limes", "produce_oranges", "produce_cherries", "supplies_ice", "supplies_cups"]
        },
        bp_porchmargarita: {
          key: "bp_porchmargarita", name: "Grand Porch Sunset Margarita", venue: "The Back Porch", icon: "🧂", tag: "32-oz Bucket • Espolòn 100% Agave & Triple Sec", liquorOz: 5.0,
          items: ["tequila", "triple_sec", "juice_lime_bottled", "syrup_agave", "juice_orange", "produce_limes", "rim_salt_tajin", "supplies_ice", "supplies_cups", "supplies_shaker"]
        },
        bp_strawberry_margarita: {
          key: "bp_strawberry_margarita", name: "Strawberry Coral Margarita", venue: "The Back Porch", icon: "🍓", tag: "32-oz Bucket • Fresh Strawberry Purée & Tequila", liquorOz: 5.0,
          items: ["tequila", "triple_sec", "puree_strawberry", "juice_lime_bottled", "syrup_agave", "produce_limes", "rim_salt_tajin", "supplies_ice", "supplies_cups", "supplies_shaker"]
        },
        bp_mango_margarita: {
          key: "bp_mango_margarita", name: "Mango Sunset Margarita", venue: "The Back Porch", icon: "🥭", tag: "32-oz Bucket • Sweet Mango Nectar & Tajín", liquorOz: 5.0,
          items: ["tequila", "triple_sec", "puree_mango", "juice_lime_bottled", "syrup_agave", "produce_limes", "rim_salt_tajin", "supplies_ice", "supplies_cups", "supplies_shaker"]
        },
        bp_spicy_margarita: {
          key: "bp_spicy_margarita", name: "Spicy Jalapeño \"Hot Porch\" Margarita", venue: "The Back Porch", icon: "🌶️", tag: "32-oz Bucket • Fresh Jalapeño & Tajín", liquorOz: 5.0,
          items: ["tequila", "triple_sec", "juice_lime_bottled", "syrup_agave", "produce_jalapenos", "produce_limes", "rim_salt_tajin", "supplies_ice", "supplies_cups", "supplies_shaker"]
        },
        bp_dragonfruit_margarita: {
          key: "bp_dragonfruit_margarita", name: "Electric Dragon Fruit Margarita", venue: "The Back Porch", icon: "🌺", tag: "32-oz Bucket • Vibrant Pitaya & Lime", liquorOz: 5.0,
          items: ["tequila", "triple_sec", "puree_dragonfruit", "juice_lime_bottled", "syrup_agave", "produce_limes", "rim_salt_tajin", "supplies_ice", "supplies_cups", "supplies_shaker"]
        },
        bp_bloodymary: {
          key: "bp_bloodymary", name: "Spicy Gulf Coast Bloody Mary", venue: "The Back Porch", icon: "🌶️", tag: "32-oz Bucket • Tito's Vodka, Zing Zang & Pickled Okra", liquorOz: 3.5,
          items: ["vodka", "mix_bloodymary", "produce_lemons", "produce_limes", "produce_celery_olives", "rim_salt_tajin", "supplies_ice", "supplies_cups"]
        },
        bp_painkiller: {
          key: "bp_painkiller", name: "Coastal Vacation Painkiller", venue: "The Back Porch", icon: "🥥", tag: "32-oz Bucket • Myers's Dark Rum, Coconut & Nutmeg", liquorOz: 4.0,
          items: ["rum_dark", "juice_pineapple", "juice_orange", "cream_coconut", "spice_nutmeg", "produce_oranges", "produce_cherries", "supplies_ice", "supplies_cups"]
        },
        bp_rumrunner: {
          key: "bp_rumrunner", name: "Gulf Coast Rum Runner", venue: "The Back Porch", icon: "🌴", tag: "32-oz Bucket • Dual Rums & Fruit Liqueurs", liquorOz: 5.5,
          items: ["rum_white", "rum_dark", "fruit_liqueurs", "juice_pineapple", "juice_orange", "syrup_grenadine", "produce_limes", "produce_oranges", "supplies_ice", "supplies_cups"]
        },
        bp_peachlemonade: {
          key: "bp_peachlemonade", name: "Vacation Sunset Peach Lemonade", venue: "The Back Porch", icon: "🍋", tag: "32-oz Bucket • Tito's Vodka, Peach & Lemonade", liquorOz: 5.0,
          items: ["vodka", "peach_schnapps", "lemonade", "juice_cranberry", "produce_lemons", "produce_mint", "supplies_ice", "supplies_cups"]
        },
        bp_sunset_punch_kid: {
          key: "bp_sunset_punch_kid", name: "Little Porch Sunset Punch (Mocktail)", venue: "The Back Porch", icon: "🧒", tag: "32-oz Souvenir Bucket • 0.0% ABV for Kids", liquorOz: 0.0,
          items: ["juice_pineapple", "juice_orange", "soda_lemonlime", "syrup_grenadine", "produce_oranges", "produce_cherries", "supplies_ice", "supplies_cups"]
        },

        // McGuire's Irish Pub (12) - Portioned for 32-oz Souvenir Mason Jars / Yeti Tumblers
        mc_irish_wake: {
          key: "mc_irish_wake", name: "The Famous \"Irish Wake\"", venue: "McGuire's Irish Pub", icon: "🍀", tag: "32-oz Mason Jar • 151 Rum, Gold Rum & Emerald Glow", liquorOz: 5.0,
          items: ["rum_white", "rum_151", "blue_curacao", "triple_sec", "juice_orange", "produce_limes", "produce_oranges", "produce_cherries", "supplies_ice", "supplies_cups"]
        },
        mc_emory_chenoweth: {
          key: "mc_emory_chenoweth", name: "The \"Emory Chenoweth\" Aviation Punch", venue: "McGuire's Irish Pub", icon: "✈️", tag: "32-oz Mason Jar • Light & Dark Rums, Juices & Lime", liquorOz: 4.5,
          items: ["rum_white", "rum_dark", "peach_schnapps", "juice_orange", "juice_pineapple", "syrup_grenadine", "produce_limes", "produce_oranges", "produce_cherries", "supplies_ice", "supplies_cups"]
        },
        mc_iced_irish_coffee: {
          key: "mc_iced_irish_coffee", name: "McGuire's Ultimate Iced Irish Coffee", venue: "McGuire's Irish Pub", icon: "☕", tag: "32-oz Mason Jar • Bushmills Whiskey, Irish Cream & Cold Brew", liquorOz: 5.0,
          items: ["whiskey_irish", "irish_cream", "coffee_coldbrew", "dairy_cream", "spice_nutmeg", "supplies_ice", "supplies_cups"]
        },
        mc_bloody_irish: {
          key: "mc_bloody_irish", name: "\"The Bloody Irish\" Pub Mary", venue: "McGuire's Irish Pub", icon: "🌶️", tag: "32-oz Mason Jar • Bushmills Whiskey & Guinness Float", liquorOz: 3.5,
          items: ["whiskey_irish", "beer_guinness", "mix_bloodymary", "produce_lemons", "produce_limes", "produce_celery_olives", "rim_salt_tajin", "supplies_ice", "supplies_cups"]
        },
        mc_dublin_mule: {
          key: "mc_dublin_mule", name: "The Dublin Mule", venue: "McGuire's Irish Pub", icon: "🍺", tag: "32-oz Mason Jar • Bushmills Whiskey & Ginger Beer", liquorOz: 3.5,
          items: ["whiskey_irish", "soda_gingerbeer", "juice_lime_bottled", "produce_limes", "produce_mint", "supplies_ice", "supplies_cups"]
        },
        mc_blueberry_lemon_drop: {
          key: "mc_blueberry_lemon_drop", name: "Blueberry Lemon Drop", venue: "McGuire's Irish Pub", icon: "🫐", tag: "32-oz Mason Jar • Tito's Vodka, Triple Sec & Lemonade", liquorOz: 4.5,
          items: ["vodka", "triple_sec", "lemonade", "juice_cranberry", "produce_lemons", "rim_salt_tajin", "supplies_ice", "supplies_cups"]
        },
        mc_strawberry_twist: {
          key: "mc_strawberry_twist", name: "McGuire's Strawberry Twist", venue: "McGuire's Irish Pub", icon: "🍓", tag: "32-oz Mason Jar • Tito's Vodka, Peach & Strawberry Purée", liquorOz: 4.5,
          items: ["vodka", "peach_schnapps", "puree_strawberry", "lemonade", "produce_lemons", "supplies_ice", "supplies_cups"]
        },
        mc_chocolate_moose: {
          key: "mc_chocolate_moose", name: "McGuire's \"Chocolate Moose\"", venue: "McGuire's Irish Pub", icon: "🍫", tag: "32-oz Mason Jar • Tito's Vodka, Kahlúa & Irish Cream", liquorOz: 6.5,
          items: ["vodka", "kahlua", "irish_cream", "creme_de_cacao", "dairy_cream", "syrup_chocolate", "produce_cherries", "supplies_ice", "supplies_cups"]
        },
        mc_james_bond: {
          key: "mc_james_bond", name: "The \"James Bond\" Martini", venue: "McGuire's Irish Pub", icon: "🍸", tag: "32-oz Mug/Yeti • Gin, Tito's Vodka & Queen Olives", liquorOz: 5.5,
          items: ["vodka", "produce_celery_olives", "produce_lemons", "supplies_ice", "supplies_cups", "supplies_shaker"]
        },
        mc_south_of_the_border: {
          key: "mc_south_of_the_border", name: "South of the Border Pub Margarita", venue: "McGuire's Irish Pub", icon: "🌶️", tag: "32-oz Mason Jar • Espolòn 100% Agave & Jalapeño", liquorOz: 5.0,
          items: ["tequila", "triple_sec", "juice_lime_bottled", "syrup_agave", "juice_orange", "produce_jalapenos", "produce_limes", "rim_salt_tajin", "supplies_ice", "supplies_cups", "supplies_shaker"]
        },
        mc_smoked_old_fashioned: {
          key: "mc_smoked_old_fashioned", name: "McGuire's Tavern Old Fashioned", venue: "McGuire's Irish Pub", icon: "🥃", tag: "32-oz Pub Pour • Bushmills Irish Whiskey & Bitters", liquorOz: 3.5,
          items: ["whiskey_irish", "bitters_angostura", "produce_oranges", "produce_cherries", "supplies_ice", "supplies_cups"]
        },
        mc_root_beer_float_kid: {
          key: "mc_root_beer_float_kid", name: "McGuire's Root Beer Float (Mocktail)", venue: "McGuire's Irish Pub", icon: "🧒", tag: "32-oz Mason Jar • Craft Root Beer & Ice Cream (0.0% ABV)", liquorOz: 0.0,
          items: ["soda_rootbeer", "icecream_vanilla", "produce_cherries", "supplies_cups"]
        },
        // Old Bay Steamer (9) - Portioned for 32-oz Vessels / Yeti Tumblers
        obs_blt: {
          key: "obs_blt", name: "The Steamer \"BLT\"", venue: "Old Bay Steamer", icon: "🥃", tag: "32-oz Vessel • Bourbon/Whiskey, Lemonade & Sweet Tea", liquorOz: 4.0,
          items: ["whiskey_irish", "tea_sweettea", "lemonade", "produce_lemons", "produce_mint", "supplies_ice", "supplies_cups"]
        },
        obs_darkandstormy: {
          key: "obs_darkandstormy", name: "The Steamer Dark 'n Stormy", venue: "Old Bay Steamer", icon: "⛈️", tag: "32-oz Vessel • Myers's Dark Rum Floating Cloud & Ginger Beer", liquorOz: 4.0,
          items: ["rum_dark", "soda_gingerbeer", "juice_lime_bottled", "syrup_agave", "produce_limes", "supplies_ice", "supplies_cups"]
        },
        obs_bahamamama: {
          key: "obs_bahamamama", name: "The Steamer Bahama Mama", venue: "Old Bay Steamer", icon: "🌴", tag: "32-oz Bucket • Triple Rum, Banana & Dark Rum Float", liquorOz: 5.5,
          items: ["rum_white", "rum_coconut", "rum_dark", "fruit_liqueurs", "juice_pineapple", "juice_orange", "syrup_grenadine", "produce_oranges", "produce_cherries", "supplies_ice", "supplies_cups"]
        },
        obs_cucumbercooler: {
          key: "obs_cucumbercooler", name: "The Coastal Cucumber Cooler", venue: "Old Bay Steamer", icon: "🥒", tag: "32-oz Vessel • Beefeater Gin, Cucumber & Lime", liquorOz: 4.0,
          items: ["gin", "produce_cucumber", "juice_lime_bottled", "syrup_agave", "soda_clubsoda", "produce_limes", "supplies_ice", "supplies_cups"]
        },
        obs_strongisland: {
          key: "obs_strongisland", name: "The \"Strong Island\"", venue: "Old Bay Steamer", icon: "⚡", tag: "32-oz Vessel • 5 Spirits Heavyweight (Limit 1)", liquorOz: 6.0,
          items: ["vodka", "rum_white", "tequila", "gin", "triple_sec", "produce_lemons", "syrup_agave", "soda_cola", "supplies_ice", "supplies_cups"]
        },
        obs_seafoodbloodymary: {
          key: "obs_seafoodbloodymary", name: "Steamer Seafood Bloody Mary", venue: "Old Bay Steamer", icon: "🦀", tag: "32-oz Vessel • Tito's, Old Bay Rim & Loaded Skewer", liquorOz: 4.0,
          items: ["vodka", "mix_bloodymary", "rim_oldbay", "produce_lemons", "produce_limes", "produce_celery_olives", "supplies_ice", "supplies_cups"]
        },
        obs_topshelfmargarita: {
          key: "obs_topshelfmargarita", name: "Steamer Grand Sunset Margarita", venue: "Old Bay Steamer", icon: "🧂", tag: "32-oz Bucket • 100% Agave, Grand Float & Old Bay Rim", liquorOz: 5.5,
          items: ["tequila", "triple_sec", "juice_lime_bottled", "syrup_agave", "juice_orange", "rim_oldbay", "produce_limes", "supplies_ice", "supplies_cups", "supplies_shaker"]
        },
        obs_bushwacker: {
          key: "obs_bushwacker", name: "Coastal Vacation Bushwacker", venue: "Old Bay Steamer", icon: "🍫", tag: "32-oz Mug • Dark Rum, Kahlúa, Cacao & Coconut", liquorOz: 5.5,
          items: ["rum_dark", "kahlua", "creme_de_cacao", "cream_coconut", "dairy_cream", "syrup_chocolate", "spice_nutmeg", "supplies_ice", "supplies_cups"]
        },
        obs_little_steamer_kid: {
          key: "obs_little_steamer_kid", name: "Little Steamer Lemon Sweet Tea", venue: "Old Bay Steamer", icon: "🧒", tag: "32-oz Bucket • Southern Sweet Tea & Lemonade (0.0% ABV)", liquorOz: 0.0,
          items: ["tea_sweettea", "lemonade", "produce_lemons", "supplies_ice", "supplies_cups"]
        },
        // Vacation & Beach Classics (12) - Portioned for 32-oz Vessels / Yeti Tumblers
        cl_classic_mojito: {
          key: "cl_classic_mojito", name: "The Classic Mojito", venue: "Vacation Classics", icon: "🌿", tag: "32-oz Vessel • Bacardi Rum, Mint, Fresh Lime & Club Soda", liquorOz: 4.0,
          items: ["rum_white", "juice_lime_bottled", "soda_clubsoda", "syrup_agave", "produce_limes", "produce_mint", "supplies_ice", "supplies_cups"]
        },
        cl_classic_pina_colada: {
          key: "cl_classic_pina_colada", name: "Classic Piña Colada", venue: "Vacation Classics", icon: "🥥", tag: "32-oz Bucket • Bacardi, Myers's Float & Coco López", liquorOz: 4.5,
          items: ["rum_white", "rum_dark", "cream_coconut", "juice_pineapple", "produce_limes", "produce_cherries", "supplies_ice", "supplies_cups"]
        },
        cl_classic_mai_tai: {
          key: "cl_classic_mai_tai", name: "The 1944 Mai Tai", venue: "Vacation Classics", icon: "🌺", tag: "32-oz Vessel • Dual Rums, Triple Sec, Orgeat & Fresh Lime", liquorOz: 4.5,
          items: ["rum_white", "rum_dark", "triple_sec", "syrup_orgeat", "juice_lime_bottled", "juice_orange", "produce_limes", "produce_mint", "supplies_ice", "supplies_cups"]
        },
        cl_classic_paloma: {
          key: "cl_classic_paloma", name: "Coastal Vacation Paloma", venue: "Vacation Classics", icon: "🍈", tag: "32-oz Bucket • Espolòn 100% Agave, Grapefruit Soda & Tajín", liquorOz: 4.0,
          items: ["tequila", "juice_lime_bottled", "soda_grapefruit", "syrup_agave", "produce_limes", "rim_salt_tajin", "supplies_ice", "supplies_cups"]
        },
        cl_classic_tequila_sunrise: {
          key: "cl_classic_tequila_sunrise", name: "Classic Tequila Sunrise", venue: "Vacation Classics", icon: "🌅", tag: "32-oz Bucket • Espolòn Tequila, Fresh Citrus OJ & Grenadine", liquorOz: 4.0,
          items: ["tequila", "juice_orange", "syrup_grenadine", "produce_limes", "produce_oranges", "produce_cherries", "supplies_ice", "supplies_cups"]
        },
        cl_classic_moscow_mule: {
          key: "cl_classic_moscow_mule", name: "Classic Moscow Mule", venue: "Vacation Classics", icon: "🧊", tag: "32-oz Mug/Yeti • Tito's Vodka, Fiery Ginger Beer & Mint", liquorOz: 4.0,
          items: ["vodka", "soda_gingerbeer", "juice_lime_bottled", "syrup_agave", "produce_limes", "produce_mint", "supplies_ice", "supplies_cups"]
        },
        cl_classic_daiquiri: {
          key: "cl_classic_daiquiri", name: "Classic Cuban Daiquiri", venue: "Vacation Classics", icon: "🌴", tag: "32-oz Vessel • Bacardi Rum, Fresh Lime & Pure Cane Sugar", liquorOz: 4.5,
          items: ["rum_white", "juice_lime_bottled", "syrup_agave", "produce_limes", "supplies_ice", "supplies_cups", "supplies_shaker"]
        },
        cl_classic_espresso_martini: {
          key: "cl_classic_espresso_martini", name: "Beach Espresso Martini", venue: "Vacation Classics", icon: "☕", tag: "32-oz Vessel • Tito's Vodka, Kahlúa & Chilled Cold Brew", liquorOz: 5.5,
          items: ["vodka", "kahlua", "coffee_coldbrew", "syrup_agave", "supplies_ice", "supplies_cups", "supplies_shaker"]
        },
        cl_classic_long_island: {
          key: "cl_classic_long_island", name: "The Long Island Iced Tea", venue: "Vacation Classics", icon: "⚡", tag: "32-oz Bucket • 5 Spirits, Fresh Lemon & Cola Splash", liquorOz: 5.0,
          items: ["vodka", "rum_white", "tequila", "gin", "triple_sec", "produce_lemons", "syrup_agave", "soda_cola", "supplies_ice", "supplies_cups"]
        },
        cl_classic_whiskey_sour: {
          key: "cl_classic_whiskey_sour", name: "Classic Whiskey Sour", venue: "Vacation Classics", icon: "🥃", tag: "32-oz Vessel • Bushmills Irish Whiskey, Lemon & Bitters", liquorOz: 4.0,
          items: ["whiskey_irish", "produce_lemons", "syrup_agave", "bitters_angostura", "soda_clubsoda", "produce_oranges", "produce_cherries", "supplies_ice", "supplies_cups"]
        },
        cl_classic_dark_and_stormy: {
          key: "cl_classic_dark_and_stormy", name: "The Classic Dark 'n Stormy", venue: "Vacation Classics", icon: "⛈️", tag: "32-oz Vessel • Myers's Dark Rum Floating Cloud & Ginger Beer", liquorOz: 4.0,
          items: ["rum_dark", "soda_gingerbeer", "juice_lime_bottled", "syrup_agave", "produce_limes", "supplies_ice", "supplies_cups"]
        },
        cl_classic_coconut_limeade_kid: {
          key: "cl_classic_coconut_limeade_kid", name: "Tropical Coconut Limeade (Mocktail)", venue: "Vacation Classics", icon: "🧒", tag: "32-oz Bucket • Coco López, Lime, Lemonade & Soda (0.0% ABV)", liquorOz: 0.0,
          items: ["cream_coconut", "juice_lime_bottled", "lemonade", "soda_lemonlime", "produce_limes", "produce_cherries", "supplies_ice", "supplies_cups"]
        }
      }
    };

    let customBarSelectedDrinks = new Set([
      'bp_ultimate_porchpunch',
      'bp_porchmargarita',
      'bp_pattywacked',
      'mc_irish_wake',
      'mc_iced_irish_coffee',
      'mc_dublin_mule'
    ]);
    let customBarPackedItems = new Set();

    function saveCustomBarState() {
      try {
        localStorage.setItem('destin_custom_bar_drinks', JSON.stringify([...customBarSelectedDrinks]));
        localStorage.setItem('destin_custom_bar_packed', JSON.stringify([...customBarPackedItems]));
      } catch (e) {
        console.warn('localStorage not available:', e);
      }
    }

    function updatePresetButtons(activeType) {
      const isFav = customBarSelectedDrinks && customBarSelectedDrinks.size === 6 &&
        customBarSelectedDrinks.has('bp_ultimate_porchpunch') &&
        customBarSelectedDrinks.has('bp_porchmargarita') &&
        customBarSelectedDrinks.has('bp_pattywacked') &&
        customBarSelectedDrinks.has('mc_irish_wake') &&
        customBarSelectedDrinks.has('mc_iced_irish_coffee') &&
        customBarSelectedDrinks.has('mc_dublin_mule');

      document.querySelectorAll('.preset-btn').forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick') || '';
        if (activeType && onclickAttr.includes(`'${activeType}'`)) {
          btn.classList.add('active');
        } else if (!activeType && isFav && onclickAttr.includes("'favorites'")) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
