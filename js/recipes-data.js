// ==========================================================================
// SMART BAR MIXOLOGY - RECIPES & METADATA DATABASE
// 46 Authentic Cocktails, Portioned Recipes, Ingredients & Float Layers
// ==========================================================================




    // ==========================================================================
    // METADATA REGISTRY: SPIRIT, FLAVOR, POTENCY & LAYERING CONFIGURATIONS
    // ==========================================================================
    const drinkMetadata = {
      // The Back Porch
      bp_ultimate_porchpunch: { spirit: 'rum', flavor: 'tropical', potency: 'high', spiritsOz: 5.0, layers: ['#e11d48', '#f59e0b', '#fb7185', '#78350f'], layerNames: ['Sunken Grenadine', 'Pineapple & OJ', 'Cranberry Blush', 'Myers\'s Rum Float'] },
      bp_porchpunch: { spirit: 'rum', flavor: 'tropical', potency: 'high', spiritsOz: 5.0, layers: ['#fb923c', '#fb7185'], layerNames: ['Rum & Peach Citrus', 'Cranberry Float'] },
      bp_pattywacked: { spirit: 'rum', flavor: 'dessert', potency: 'high', spiritsOz: 5.0, layers: ['#451a03', '#78350f', '#fde68a'], layerNames: ['Chocolate Drizzle', 'Dark Rum & Kahlúa', 'Cream & Nutmeg'] },
      bp_beachbucket: { spirit: 'rum', flavor: 'tropical', potency: 'high', spiritsOz: 4.5, layers: ['#dc2626', '#fbbf24', '#e11d48', '#78350f'], layerNames: ['Grenadine Sunrise', '3-Rum Citrus Punch', 'Cranberry', 'Dark Rum Float'] },
      bp_porchmargarita: { spirit: 'tequila', flavor: 'tart', potency: 'high', spiritsOz: 5.0 },
      bp_strawberry_margarita: { spirit: 'tequila', flavor: 'tropical', potency: 'high', spiritsOz: 5.0 },
      bp_mango_margarita: { spirit: 'tequila', flavor: 'tropical', potency: 'high', spiritsOz: 5.0 },
      bp_spicy_margarita: { spirit: 'tequila', flavor: 'spicy', potency: 'high', spiritsOz: 5.0 },
      bp_dragonfruit_margarita: { spirit: 'tequila', flavor: 'tropical', potency: 'high', spiritsOz: 5.0 },
      bp_bloodymary: { spirit: 'vodka', flavor: 'spicy', potency: 'med', spiritsOz: 3.5 },
      bp_painkiller: { spirit: 'rum', flavor: 'tropical', potency: 'med', spiritsOz: 4.0, layers: ['#fed7aa', '#78350f'], layerNames: ['Creamy Coconut & Juices', 'Nutmeg & Dark Rum'] },
      bp_rumrunner: { spirit: 'rum', flavor: 'tropical', potency: 'high', spiritsOz: 5.5, layers: ['#78350f', '#e11d48'], layerNames: ['Dual Rums & Fruit Liqueur', 'Grenadine Float'] },
      bp_peachlemonade: { spirit: 'vodka', flavor: 'tart', potency: 'high', spiritsOz: 5.0, layers: ['#fef08a', '#fb7185'], layerNames: ['Vodka Peach Lemonade', 'Cranberry Blush'] },
      bp_sunset_punch_kid: { spirit: 'none', flavor: 'mocktail', potency: 'mocktail', spiritsOz: 0.0, layers: ['#e11d48', '#fbbf24', '#fb7185'], layerNames: ['Grenadine Sunrise', 'Pineapple OJ & Sprite', 'Cranberry Blush'] },

      // McGuire's Irish Pub
      mc_irish_wake: { spirit: 'rum', flavor: 'tropical', potency: 'high', spiritsOz: 5.0, layers: ['#15803d', '#10b981'], layerNames: ['Glowing Emerald Glow (Blue Curaçao + OJ)', 'Overproof 151 Rum Kick'] },
      mc_emory_chenoweth: { spirit: 'rum', flavor: 'tropical', potency: 'high', spiritsOz: 4.5, layers: ['#fbbf24', '#78350f'], layerNames: ['Rum & Tropical Juices', 'Myers\'s Dark Rum Float'] },
      mc_iced_irish_coffee: { spirit: 'whiskey', flavor: 'dessert', potency: 'high', spiritsOz: 5.0, layers: ['#292524', '#fef3c7'], layerNames: ['Bushmills & Cold Brew', 'Sweet Cream & Nutmeg'] },
      mc_bloody_irish: { spirit: 'whiskey', flavor: 'spicy', potency: 'med', spiritsOz: 3.5, layers: ['#b91c1c', '#1c1917'], layerNames: ['Bushmills Pub Mary', 'Guinness Extra Stout Float'] },
      mc_dublin_mule: { spirit: 'whiskey', flavor: 'tart', potency: 'med', spiritsOz: 3.5 },
      mc_blueberry_lemon_drop: { spirit: 'vodka', flavor: 'tart', potency: 'high', spiritsOz: 4.5, layers: ['#fef08a', '#fb7185'], layerNames: ['Vodka & Lemonade', 'Cranberry Blush'] },
      mc_strawberry_twist: { spirit: 'vodka', flavor: 'tropical', potency: 'high', spiritsOz: 4.5 },
      mc_chocolate_moose: { spirit: 'vodka', flavor: 'dessert', potency: 'high', spiritsOz: 6.5, layers: ['#3e2723', '#5d4037', '#ffffff'], layerNames: ['Chocolate Swirl', 'Vodka Kahlúa Irish Cream', 'Whipped Cream'] },
      mc_james_bond: { spirit: 'vodka', flavor: 'tart', potency: 'high', spiritsOz: 5.5 },
      mc_south_of_the_border: { spirit: 'tequila', flavor: 'spicy', potency: 'high', spiritsOz: 5.0 },
      mc_smoked_old_fashioned: { spirit: 'whiskey', flavor: 'tart', potency: 'med', spiritsOz: 3.5 },
      mc_root_beer_float_kid: { spirit: 'none', flavor: 'mocktail', potency: 'mocktail', spiritsOz: 0.0, layers: ['#451a03', '#fef9c3', '#ffffff'], layerNames: ['Craft Draft Root Beer', 'Vanilla Bean Ice Cream', 'Whipped Cream & Cherry'] },

      // Old Bay Steamer (8)
      obs_blt: { spirit: 'whiskey', flavor: 'tart', potency: 'med', spiritsOz: 4.0, layers: ['#b45309', '#fef08a'], layerNames: ['Southern Sweet Tea', 'Lemonade & Mint Float'] },
      obs_bahamamama: { spirit: 'rum', flavor: 'tropical', potency: 'high', spiritsOz: 5.5, layers: ['#dc2626', '#f59e0b', '#78350f'], layerNames: ['Grenadine Base', 'Triple Rum Banana Punch', 'Myers\'s Dark Rum Float'] },
      obs_cucumbercooler: { spirit: 'gin', flavor: 'tart', potency: 'med', spiritsOz: 4.0 },
      obs_strongisland: { spirit: 'vodka', flavor: 'tart', potency: 'high', spiritsOz: 6.0, layers: ['#fef08a', '#78350f'], layerNames: ['5-Spirits Sour Base', 'Coca-Cola Splash'] },
      obs_seafoodbloodymary: { spirit: 'vodka', flavor: 'spicy', potency: 'med', spiritsOz: 4.0 },
      obs_topshelfmargarita: { spirit: 'tequila', flavor: 'tropical', potency: 'high', spiritsOz: 5.5, layers: ['#bef264', '#d97706'], layerNames: ['100% Agave Margarita', 'Orange Liqueur Float'] },
      obs_bushwacker: { spirit: 'rum', flavor: 'dessert', potency: 'high', spiritsOz: 5.5, layers: ['#3e2723', '#78350f', '#ffffff'], layerNames: ['Chocolate Wall Swirl', 'Dark Rum Kahlúa Coconut', 'Whipped Cream & Nutmeg'] },
      obs_little_steamer_kid: { spirit: 'none', flavor: 'mocktail', potency: 'mocktail', spiritsOz: 0.0, layers: ['#b45309', '#fef08a'], layerNames: ['Sweet Tea Base', 'Simply Lemonade Head'] },

      // Vacation Classics
      cl_classic_mojito: { spirit: 'rum', flavor: 'tart', potency: 'med', spiritsOz: 4.0 },
      cl_classic_pina_colada: { spirit: 'rum', flavor: 'tropical', potency: 'high', spiritsOz: 4.5, layers: ['#fef3c7', '#78350f'], layerNames: ['Coco López Pineapple Rum', 'Myers\'s Dark Rum Float'] },
      cl_classic_mai_tai: { spirit: 'rum', flavor: 'tropical', potency: 'high', spiritsOz: 4.5, layers: ['#f59e0b', '#78350f'], layerNames: ['Orgeat Citrus Rum', 'Myers\'s Dark Rum Float'] },
      cl_classic_paloma: { spirit: 'tequila', flavor: 'tart', potency: 'med', spiritsOz: 4.0 },
      cl_classic_tequila_sunrise: { spirit: 'tequila', flavor: 'tropical', potency: 'med', spiritsOz: 4.0, layers: ['#dc2626', '#f59e0b'], layerNames: ['Sunken Grenadine Base', 'Espolòn Tequila & Florida OJ'] },
      cl_classic_moscow_mule: { spirit: 'vodka', flavor: 'tart', potency: 'med', spiritsOz: 4.0 },
      cl_classic_daiquiri: { spirit: 'rum', flavor: 'tart', potency: 'high', spiritsOz: 4.5 },
      cl_classic_espresso_martini: { spirit: 'vodka', flavor: 'dessert', potency: 'high', spiritsOz: 5.5, layers: ['#1c1917', '#d97706'], layerNames: ['Cold Brew Vodka Kahlúa', 'Frothy Crema & Coffee Beans'] },
      cl_classic_long_island: { spirit: 'vodka', flavor: 'tart', potency: 'high', spiritsOz: 5.0, layers: ['#fef08a', '#78350f'], layerNames: ['5-Spirits Sour Mix', 'Coca-Cola Splash'] },
      cl_classic_whiskey_sour: { spirit: 'whiskey', flavor: 'tart', potency: 'med', spiritsOz: 4.0 },
      cl_classic_dark_and_stormy: { spirit: 'rum', flavor: 'tart', potency: 'med', spiritsOz: 4.0, layers: ['#fed7aa', '#3e2723'], layerNames: ['Spicy Craft Ginger Beer', 'Myers\'s Rum Storm Cloud'] },
      cl_classic_coconut_limeade_kid: { spirit: 'none', flavor: 'mocktail', potency: 'mocktail', spiritsOz: 0.0, layers: ['#ecfdf5', '#86efac'], layerNames: ['Coco López & Lemonade', 'Fresh Lime & Sprite'] }
    };

    // NAVIGATION SUITE: CAROUSELS, STEPPERS, SEARCH, SCROLLSPY & GESTURES
    // ==========================================================================

    const venueDrinkKeys = {
      bp: ['ultimate_porchpunch', 'porchpunch', 'pattywacked', 'beachbucket', 'porchmargarita', 'strawberry_margarita', 'mango_margarita', 'spicy_margarita', 'dragonfruit_margarita', 'bloodymary', 'painkiller', 'rumrunner', 'peachlemonade', 'sunset_punch_kid'],
      mc: ['irish_wake', 'emory_chenoweth', 'iced_irish_coffee', 'bloody_irish', 'dublin_mule', 'blueberry_lemon_drop', 'strawberry_twist', 'chocolate_moose', 'james_bond', 'south_of_the_border', 'smoked_old_fashioned', 'root_beer_float_kid'],
      obs: ['obs_blt', 'obs_bahamamama', 'obs_cucumbercooler', 'obs_strongisland', 'obs_seafoodbloodymary', 'obs_topshelfmargarita', 'obs_bushwacker', 'obs_little_steamer_kid'],
      cl: ['classic_mojito', 'classic_pina_colada', 'classic_mai_tai', 'classic_paloma', 'classic_tequila_sunrise', 'classic_moscow_mule', 'classic_daiquiri', 'classic_espresso_martini', 'classic_long_island', 'classic_whiskey_sour', 'classic_dark_and_stormy', 'classic_coconut_limeade_kid']
    };


const recipeData = {
      ultimate_porchpunch: {
        title: "🍹 The Ultimate Back Porch Punch",
        tag: "The #1 32-oz Souvenir Bucket Legend • On The Rocks",
        desc: "The heavy-hitting, top-shelf upgrade to the classic porch punch! Served at The Back Porch in their famous 32-oz souvenir beach buckets. Features a trifecta of Caribbean rums (Coconut, Gold & Dark Rum float), sweet Peach Schnapps, triple tropical juices (Pineapple, Florida OJ, and Mango nectar), freshly squeezed limes, and a dramatic sunk-grenadine / floated-cranberry sunset gradient.",
        single: [
          "1.5 oz Malibu Caribbean Coconut Rum",
          "1.5 oz Bacardi Superior White or Gold Rum",
          "1 oz Myers's Original Dark Rum (floated across the top)",
          "1 oz DeKuyper Peachtree Schnapps (5 oz total spirits)",
          "4 oz Dole 100% Pineapple Juice",
          "4 oz Fresh Florida Orange Juice",
          "2 oz Mango Nectar (or Passionfruit juice)",
          "Squeeze of 1 whole fresh lime",
          "2 oz Ocean Spray Cranberry Juice (floated for sunset blush)",
          "1/2 oz Rose's Grenadine (sunk to bottom for sunrise glow)",
          "Packed to the brim with fresh ice cubes (fills full 32-oz Souvenir Bucket or Yeti tumbler)",
          "Garnish: Orange wheel, lime wheel & Maraschino cherries with wide straw"
        ],
        pitcher: [
          "6 oz Malibu Coconut Rum",
          "6 oz Bacardi Superior White Rum",
          "4 oz Myers's Dark Rum",
          "4 oz DeKuyper Peachtree Schnapps (20 oz total spirits)",
          "16 oz Dole Pineapple Juice",
          "16 oz Fresh Florida Orange Juice",
          "8 oz Mango Nectar",
          "Juice of 4 fresh limes",
          "8 oz Cranberry Juice (float after pouring)",
          "2 oz Grenadine (drizzle into individual buckets)",
          "Serves: 4 Full 32-oz Souvenir Beach Buckets / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Condo Pitcher Prep: In a 1-gallon drink jug or pitcher, combine coconut rum, white rum, peach schnapps, pineapple juice, orange juice, mango nectar, and fresh lime juice. Stir vigorously. Keep chilled in the condo fridge until beach time.",
          "Building 32-oz Buckets: Fill four 32-oz souvenir beach buckets (or 30–40oz Yeti mugs) completely to the top with fresh ice cubes.",
          "Sunrise Base: Drizzle 1/2 oz Rose's Grenadine directly down the inside wall of each bucket; it will settle heavily to the bottom creating a bright crimson sunrise base.",
          "The Pour: Pour the chilled punch from the pitcher over the ice until about 1.5 inches from the brim.",
          "Sunset Floaters: Gently float 2 oz Cranberry Juice, then float 1 oz Myers's Dark Rum across the surface to crown the cocktail.",
          "Garnish: Spear an orange wheel, lime wheel, and cherries on a garnish pick, pop in extra-wide straws, and carry down to the beach!"
        ]
      },
      porchpunch: {
        title: "🍹 The Signature Back Porch Punch",
        tag: "Classic Peach & Rum Gulf Coast Cooler • 32-oz Bucket",
        desc: "The timeless Gulf Coast refresher made famous on the open-air deck at The Back Porch! Combines sweet Caribbean coconut rum, crisp white rum, peach schnapps, and a sunny blend of tropical citrus on the rocks.",
        single: [
          "2 oz Malibu Caribbean Coconut Rum",
          "1.5 oz Bacardi Superior White Rum",
          "1.5 oz DeKuyper Peachtree Schnapps (5 oz total spirits)",
          "4 oz Dole 100% Pineapple Juice",
          "4 oz Fresh Florida Orange Juice",
          "2 oz Ocean Spray Cranberry Juice float",
          "Juice of 1 fresh lime wedge",
          "Packed with fresh ice cubes (fills full 32-oz Bucket or Yeti)",
          "Garnish: Orange wheel, lime wheel & Maraschino cherry"
        ],
        pitcher: [
          "8 oz Malibu Coconut Rum",
          "6 oz Bacardi Superior White Rum",
          "6 oz DeKuyper Peachtree Schnapps (20 oz spirits)",
          "16 oz Dole Pineapple Juice",
          "16 oz Florida Orange Juice",
          "8 oz Cranberry Juice (for floating)",
          "Juice of 3 fresh limes",
          "Serves: 4 Full 32-oz Souvenir Beach Buckets / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Combine coconut rum, white rum, peach schnapps, pineapple juice, and orange juice in a 1-gallon condo pitcher. Chill thoroughly.",
          "Pack 32-oz beach buckets or Yeti tumblers with fresh ice.",
          "Pour punch mixture over ice, leaving 1 inch at top.",
          "Float 2 oz cranberry juice over each pour for the trademark Back Porch blush.",
          "Garnish with sliced fruit wheels and enjoy poolside at your vacation rental!"
        ]
      },
      pattywacked: {
        title: "🍫 The Legendary \"Patty'Wacked\" (On The Rocks)",
        tag: "Rich Dark Rum, Coffee & Chocolate Mudslide • 32-oz Bucket",
        desc: "The Back Porch's most decadent cocktail creation! A boozy, velvety dessert mudslide made with rich Myers's Jamaican dark rum, Kahlúa coffee liqueur, and dark crème de cacao over crushed ice. Never blended into watery slush—served on the rocks so it stays rich in the summer beach heat!",
        single: [
          "2 oz Myers's Original Dark Rum",
          "1.5 oz Kahlúa Coffee Liqueur",
          "1.5 oz DeKuyper Dark Crème de Cacao (5 oz total spirits)",
          "6 oz Half-and-Half or Heavy Whipping Cream (or vanilla creamer)",
          "Generous Hershey's Chocolate Syrup drizzle swirling the inside walls",
          "Packed with ice cubes (fills full 32-oz Bucket or Yeti mug)",
          "Garnish: Heavy dusting of ground nutmeg & Maraschino cherries"
        ],
        pitcher: [
          "8 oz Myers's Original Dark Rum",
          "6 oz Kahlúa Coffee Liqueur",
          "6 oz DeKuyper Dark Crème de Cacao (20 oz spirits)",
          "24 oz Half-and-Half or Heavy Cream",
          "Hershey's Chocolate Syrup for cup swirls",
          "Serves: 4 Full 32-oz Souvenir Beach Buckets / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Swirl Hershey's chocolate syrup vigorously around the interior walls of your 32-oz buckets or Yeti mugs.",
          "In a pitcher or shaker, shake dark rum, Kahlúa, crème de cacao, and half-and-half together until frothy.",
          "Pack your chocolate-swirled 32-oz vessels with fresh ice.",
          "Pour creamy mixture over ice, dust generously with ground nutmeg, and top with cherries!"
        ]
      },
      beachbucket: {
        title: "🪣 The 32-oz Back Porch Beach Bucket (Rum Bucket)",
        tag: "4-Rum Tropical Party Bucket • 32-oz Legend",
        desc: "The official beach party bucket! Loaded with 4 Caribbean rums (Coconut, Light, Spiced, and a Dark Rum floater) mixed with pineapple, orange, and cranberry juices. Served in souvenir buckets with extra-long party straws!",
        single: [
          "1.5 oz Malibu Caribbean Coconut Rum",
          "1 oz Bacardi Superior White Rum",
          "1 oz Captain Morgan Original Spiced Rum",
          "1 oz Myers's Original Dark Rum (floater on top)",
          "4 oz Dole Pineapple Juice",
          "4 oz Fresh Florida Orange Juice",
          "2 oz Ocean Spray Cranberry Juice",
          "1/2 oz Rose's Grenadine",
          "Packed with fresh ice in 32-oz Souvenir Bucket or Yeti Tumbler",
          "Garnish: Lime wheels, orange slices, cherries & dual wide straws"
        ],
        pitcher: [
          "6 oz Malibu Coconut Rum",
          "4 oz Bacardi Superior White Rum",
          "4 oz Captain Morgan Spiced Rum",
          "4 oz Myers's Dark Rum (for floaters)",
          "16 oz Dole Pineapple Juice",
          "16 oz Florida Orange Juice",
          "8 oz Cranberry Juice",
          "2 oz Grenadine",
          "Serves: 4 Full 32-oz Souvenir Beach Buckets / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Stir coconut rum, light rum, spiced rum, pineapple juice, orange juice, and grenadine in a pitcher with ice.",
          "Pack 32-oz souvenir buckets or Yeti tumblers to the brim with ice.",
          "Strain or pour into buckets until 1.5 inches from the top.",
          "Float 1 oz Myers's dark rum and 2 oz cranberry juice across the surface.",
          "Drop in citrus wheels and party straws!"
        ]
      },
      porchmargarita: {
        title: "🧂 Margarita #1: Grand Porch Sunset Margarita",
        tag: "Top-Shelf 100% Blue Agave & Triple Sec • 32-oz Bucket",
        desc: "The Back Porch's premier sunset margarita! Made with 100% Blue Agave Espolòn tequila, DeKuyper Triple Sec, freshly squeezed tart Florida limes, agave nectar, and a splash of fresh orange juice on the rocks.",
        single: [
          "3.5 oz Espolòn 100% Blue Agave Tequila (Blanco or Reposado)",
          "1.5 oz DeKuyper Triple Sec 48° (or Grand Marnier)",
          "4 oz Fresh Squeezed Lime Juice",
          "2 oz Pure Agave Nectar",
          "2 oz Fresh Florida Orange Juice",
          "Coarse Margarita Salt or Tajín rim around the bucket edge",
          "Packed with fresh ice (fills full 32-oz Bucket or Yeti mug)",
          "Garnish: 2 lime wheels & orange wedge"
        ],
        pitcher: [
          "14 oz Espolòn 100% Agave Tequila",
          "6 oz DeKuyper Triple Sec",
          "16 oz Fresh Lime Juice",
          "8 oz Pure Agave Nectar",
          "8 oz Fresh Orange Juice",
          "Serves: 4 Full 32-oz Souvenir Beach Buckets / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Rub a juicy lime wedge around the rim of your 32-oz buckets and press into coarse salt or Tajín.",
          "Combine tequila, triple sec, lime juice, agave nectar, and orange juice in a pitcher and whisk vigorously to dissolve agave.",
          "Fill buckets to the brim with fresh ice.",
          "Pour margarita mix over ice, stir gently, and garnish with fresh citrus wheels."
        ]
      },
      strawberry_margarita: {
        title: "🍓 Margarita #2: Back Porch Strawberry Coral Margarita",
        tag: "Fresh Strawberry Purée & Agave • 32-oz Bucket",
        desc: "Bursting with sweet Florida strawberry flavor! Fresh strawberry purée shaken with 100% agave tequila, triple sec, and freshly squeezed lime juice. Crisp, sweet, tart, and deeply refreshing under the hot sun.",
        single: [
          "3.5 oz Espolòn 100% Blue Agave Tequila",
          "1.5 oz DeKuyper Triple Sec",
          "4 oz Fresh Strawberry Purée (or blended ripe strawberries)",
          "3 oz Fresh Lime Juice",
          "2 oz Pure Agave Nectar",
          "Sugar or Tajín rim",
          "Packed with ice in 32-oz Bucket or Yeti",
          "Garnish: Fresh strawberry slice & lime wheel"
        ],
        pitcher: [
          "14 oz Espolòn Tequila",
          "6 oz Triple Sec",
          "16 oz Strawberry Purée",
          "12 oz Fresh Lime Juice",
          "8 oz Pure Agave Nectar",
          "Serves: 4 Full 32-oz Souvenir Beach Buckets / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Rim 32-oz buckets with sugar or Tajín.",
          "Blend fresh strawberries with a splash of water and agave until smooth.",
          "Combine tequila, triple sec, strawberry purée, lime juice, and agave in a pitcher.",
          "Pour over packed ice in 32-oz buckets and garnish with whole berries."
        ]
      },
      mango_margarita: {
        title: "🥭 Margarita #3: Back Porch Mango Sunset Margarita",
        tag: "Sweet Mango Nectar & Tajín Chili-Lime • 32-oz Bucket",
        desc: "A tropical gulf coast favorite! Luscious sweet mango nectar balanced with 100% agave tequila, tart lime juice, and a signature Tajín chili-lime rim that creates the ultimate sweet-and-spicy contrast.",
        single: [
          "3.5 oz Espolòn 100% Blue Agave Tequila",
          "1.5 oz DeKuyper Triple Sec",
          "4 oz Mango Nectar / Purée",
          "3 oz Fresh Lime Juice",
          "1.5 oz Pure Agave Nectar",
          "Generous Tajín Clásico Chili-Lime rim",
          "Packed with fresh ice in 32-oz Bucket or Yeti",
          "Garnish: Mango slice & lime wheel"
        ],
        pitcher: [
          "14 oz Espolòn Tequila",
          "6 oz Triple Sec",
          "16 oz Mango Nectar",
          "12 oz Fresh Lime Juice",
          "6 oz Pure Agave Nectar",
          "Serves: 4 Full 32-oz Souvenir Beach Buckets / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Coat 32-oz bucket rims generously in Tajín seasoning.",
          "Whisk tequila, triple sec, mango nectar, lime juice, and agave in a 1-gallon pitcher.",
          "Pour over packed ice cubes, stir, and garnish with mango spears and lime wheels."
        ]
      },
      spicy_margarita: {
        title: "🌶️ Margarita #4: Back Porch Spicy Jalapeño \"Hot Porch\" Margarita",
        tag: "Fresh Muddled Jalapeño & Tajín Rim • 32-oz Bucket",
        desc: "The ultimate kick for spice lovers! Fresh Florida jalapeño pepper coins muddled with pure agave nectar, shaken with 100% agave tequila and tart lime, then poured over ice with a fiery Tajín chili-salt rim.",
        single: [
          "3.5 oz Espolòn 100% Blue Agave Tequila",
          "1.5 oz DeKuyper Triple Sec",
          "4–5 slices Fresh Jalapeño Pepper (muddled)",
          "4 oz Fresh Lime Juice",
          "2 oz Pure Agave Nectar",
          "Splash of Florida Orange Juice (1 oz)",
          "Tajín Clásico & Coarse Sea Salt 50/50 rim",
          "Packed with fresh ice in 32-oz Bucket or Yeti",
          "Garnish: 3 floating jalapeño wheels & lime wedge"
        ],
        pitcher: [
          "14 oz Espolòn Tequila",
          "6 oz Triple Sec",
          "16–18 slices Fresh Jalapeño (muddled)",
          "16 oz Fresh Lime Juice",
          "8 oz Pure Agave Nectar",
          "4 oz Florida Orange Juice",
          "Serves: 4 Full 32-oz Souvenir Beach Buckets / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Muddle fresh jalapeño slices with agave nectar in the bottom of a pitcher to release capsaicin and aromatic oils.",
          "Add tequila, triple sec, lime juice, and orange juice; stir vigorously.",
          "Rim 32-oz buckets with 50/50 Tajín and coarse sea salt.",
          "Fill buckets with ice and pour spicy margarita mix over the rocks. Garnish with jalapeño coins!"
        ]
      },
      dragonfruit_margarita: {
        title: "🌺 Margarita #5: Back Porch Electric Dragon Fruit Margarita",
        tag: "Vibrant Pitaya & Agave • 32-oz Bucket",
        desc: "The most eye-catching, vibrant magenta cocktail on the coast! Deep pink Pitaya (dragon fruit) purée shaken with 100% blue agave tequila, orange liqueur, and tart lime juice on the rocks.",
        single: [
          "3.5 oz Espolòn 100% Blue Agave Tequila",
          "1.5 oz DeKuyper Triple Sec",
          "4 oz Red Dragon Fruit (Pitaya) Purée",
          "3 oz Fresh Lime Juice",
          "2 oz Pure Agave Nectar",
          "Optional: 2–3 jalapeño wheels for Spicy Dragon Fruit variation",
          "Tajín or Black Lava Salt rim",
          "Packed with fresh ice in 32-oz Bucket or Yeti",
          "Garnish: Fresh dragon fruit wedge & lime wheel"
        ],
        pitcher: [
          "14 oz Espolòn Tequila",
          "6 oz Triple Sec",
          "16 oz Red Dragon Fruit Purée",
          "12 oz Fresh Lime Juice",
          "8 oz Pure Agave Nectar",
          "Serves: 4 Full 32-oz Souvenir Beach Buckets / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Combine dragon fruit purée, tequila, triple sec, lime juice, and agave nectar in a 1-gallon pitcher.",
          "Whisk until the mixture turns an electric neon magenta.",
          "Rim 32-oz buckets with Tajín or salt.",
          "Pack buckets with fresh ice, pour over the rocks, and garnish with fresh dragon fruit wedges."
        ]
      },
      bloodymary: {
        title: "🌶️ Back Porch Spicy Gulf Coast Bloody Mary",
        tag: "Tito's Vodka, Zing Zang & Pickled Okra • 32-oz Bucket",
        desc: "The famous Back Porch morning cure! Loaded with Tito's Handmade Vodka, spicy Zing Zang mix, Worcestershire, hot sauce, and a full skewer of pickled green beans, okra, and queen olives with an Old Bay rim.",
        single: [
          "3.5 oz Tito's Handmade Vodka",
          "9 oz Zing Zang Bloody Mary Mix",
          "4 dashes Worcestershire Sauce + 3 dashes Tabasco / Crystal Hot Sauce",
          "Juice of 1/2 fresh lemon & 1/2 fresh lime",
          "Pinch of black pepper & celery salt",
          "Old Bay Seasoning rim on bucket",
          "Packed with fresh ice in 32-oz Bucket or Yeti",
          "Garnish Skewer: Spicy pickled okra, pickled green bean, queen olives & lemon wheel"
        ],
        pitcher: [
          "14 oz Tito's Handmade Vodka",
          "36 oz Zing Zang Bloody Mary Mix",
          "16 dashes Worcestershire Sauce + 12 dashes hot sauce",
          "Juice of 2 lemons & 2 limes",
          "Serves: 4 Full 32-oz Souvenir Beach Buckets / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Rim 32-oz buckets with Old Bay seasoning.",
          "Mix vodka, Zing Zang, seasonings, and citrus juices in a pitcher.",
          "Pack buckets with fresh ice, pour bloody mary mix over ice, and load with pickled okra skewers."
        ]
      },
      painkiller: {
        title: "🥥 Coastal Vacation Painkiller (On the Rocks)",
        tag: "Creamy Pineapple-Coconut Dark Rum Legend • 32-oz Bucket",
        desc: "A Florida panhandle staple! Rich Myers's Jamaican dark rum shaken with Dole pineapple juice, fresh Florida orange juice, and luscious Coco López cream of coconut, crowned with fresh grated nutmeg.",
        single: [
          "4 oz Myers's Original Dark Rum",
          "6 oz Dole 100% Pineapple Juice",
          "2.5 oz Fresh Florida Orange Juice",
          "2 oz Coco López Real Cream of Coconut",
          "Heavy dusting of ground nutmeg on top",
          "Packed with ice in 32-oz Souvenir Bucket or Yeti",
          "Garnish: Orange wheel & Maraschino cherries"
        ],
        pitcher: [
          "16 oz Myers's Original Dark Rum",
          "24 oz Dole Pineapple Juice",
          "10 oz Fresh Florida Orange Juice",
          "8 oz Coco López Cream of Coconut",
          "Ground nutmeg dusting",
          "Serves: 4 Full 32-oz Souvenir Beach Buckets / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Whisk cream of coconut with pineapple and orange juice until completely dissolved and silky smooth.",
          "Add dark rum and stir thoroughly.",
          "Pack 32-oz buckets with ice, pour creamy mixture over ice, and dust heavily with ground nutmeg!"
        ]
      },
      rumrunner: {
        title: "🌴 Gulf Coast Rum Runner (On the Rocks)",
        tag: "Light & Dark Rums with Blackberry/Banana • 32-oz Bucket",
        desc: "The classic Florida Keys tiki punch brought to the vacation shores! Dual rums blended with blackberry and banana liqueurs, pineapple, orange juice, and a sweet grenadine float.",
        single: [
          "2 oz Bacardi Superior White Rum",
          "1.5 oz Myers's Original Dark Rum",
          "1 oz DeKuyper Blackberry Liqueur",
          "1 oz DeKuyper Banana Liqueur (5.5 oz total spirits)",
          "4 oz Dole Pineapple Juice",
          "4 oz Fresh Florida Orange Juice",
          "1/2 oz Rose's Grenadine",
          "Packed with ice in 32-oz Bucket or Yeti",
          "Garnish: Orange wheel & Maraschino cherry"
        ],
        pitcher: [
          "8 oz Bacardi White Rum",
          "6 oz Myers's Dark Rum",
          "4 oz Blackberry Liqueur",
          "4 oz Banana Liqueur",
          "16 oz Dole Pineapple Juice",
          "16 oz Florida Orange Juice",
          "2 oz Grenadine",
          "Serves: 4 Full 32-oz Souvenir Beach Buckets / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Combine rums, fruit liqueurs, pineapple juice, and orange juice in a pitcher.",
          "Pack 32-oz buckets with ice.",
          "Pour tiki punch over ice, drizzle grenadine over the surface, and garnish with fruit skewers."
        ]
      },
      peachlemonade: {
        title: "🍋 Vacation Sunset Peach Lemonade (Vodka Cooler)",
        tag: "Tito's Vodka, Peach Schnapps & Lemonade • 32-oz Bucket",
        desc: "Ultra-crisp and ridiculously refreshing! Tito's Handmade Vodka and sweet peach schnapps shaken with tart Simply Lemonade and finished with a pink cranberry sunset float over ice.",
        single: [
          "3.5 oz Tito's Handmade Vodka",
          "1.5 oz DeKuyper Peachtree Schnapps (5 oz total spirits)",
          "8 oz Chilled Simply Lemonade",
          "2 oz Ocean Spray Cranberry Juice float",
          "Fresh lemon wheels and slapped fresh mint sprig",
          "Packed with ice in 32-oz Bucket or Yeti",
          "Garnish: Lemon wheels & fresh mint"
        ],
        pitcher: [
          "14 oz Tito's Handmade Vodka",
          "6 oz DeKuyper Peachtree Schnapps",
          "32 oz Simply Lemonade",
          "8 oz Cranberry Juice (for floating)",
          "Fresh mint & lemons",
          "Serves: 4 Full 32-oz Souvenir Beach Buckets / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Mix vodka, peach schnapps, and lemonade in a pitcher with ice.",
          "Pack 32-oz buckets with fresh ice.",
          "Pour lemonade mix over ice, leaving 1 inch at top.",
          "Float 2 oz cranberry juice on top for the sunset pink ombre effect, garnish with mint and lemon wheels."
        ]
      },
      sunset_punch_kid: {
        title: "🧒 The \"Little Porch Sunset Punch\" Mocktail",
        tag: "Fizzy Non-Alcoholic Tropical Cooler • 32-oz Bucket for Kids!",
        desc: "The ultimate kid-friendly beach bucket! Pineapple, orange juice, and fizzy Sprite layered over ice with a sweet sunken grenadine sunrise and floated cranberry blush—100% alcohol-free!",
        single: [
          "5 oz Dole Pineapple Juice",
          "5 oz Fresh Florida Orange Juice",
          "5 oz Sprite / Lemon-Lime Soda (or ginger ale)",
          "1.5 oz Ocean Spray Cranberry Juice float",
          "1/2 oz Rose's Grenadine (sunk to bottom)",
          "Packed to the top with ice in 32-oz Souvenir Bucket",
          "Garnish: Maraschino cherries, orange slice, cocktail umbrella & colorful straws"
        ],
        pitcher: [
          "20 oz Dole Pineapple Juice",
          "20 oz Florida Orange Juice",
          "20 oz Sprite / Lemon-Lime Soda",
          "6 oz Cranberry Juice",
          "2 oz Grenadine",
          "Serves: 4 Full 32-oz Souvenir Beach Buckets (100% Alcohol-Free • 1-Gallon Batch)"
        ],
        steps: [
          "Drizzle grenadine into the bottom of 32-oz buckets.",
          "Fill buckets to the top with ice.",
          "Combine pineapple juice and orange juice, pour over ice.",
          "Top with fizzy Sprite, float cranberry juice on top, and load with cherries and colorful straws!"
        ]
      }
    };

        function showRecipe(key) {
      const r = recipeData[key] || recipeData[Object.keys(recipeData)[0]];
      const fullKey = 'bp_' + key;
      const meta = drinkMetadata[fullKey] || {};

      const singleItems = r.single.map(i => `<li>${scaleIngredientText(i, activeVesselMultiplier)}</li>`).join('');
      const pitcherItems = r.pitcher.map(i => `<li>${i}</li>`).join('');
      const stepsHtml = r.steps.map(s => `<li>${s}</li>`).join('');

      const displayArea = document.getElementById('recipeDisplayArea');
      if (!displayArea) return;

      const inCart = (typeof customBarSelectedDrinks !== 'undefined' && customBarSelectedDrinks.has(fullKey));
      const cartBtnHtml = `
        <button type="button" class="qol-btn" onclick="toggleCustomDrinkFromRecipe('${fullKey}')" style="background: ${inCart ? '#16a34a' : 'var(--coral)'}; color: #fff; font-size: 0.82rem; padding: 6px 14px; font-weight: 700; border-radius: var(--radius-full); display: inline-flex; align-items: center; gap: 6px; cursor: pointer; border: none; box-shadow: 0 2px 6px rgba(0,0,0,0.15); transition: var(--transition);">
          <span>${inCart ? '✓ In Combined Bar Cart' : '➕ Add to Combined Bar Cart'}</span>
        </button>
      `;

      // Potency badge
      let potencyHtml = '';
      if (meta.potency === 'mocktail') {
        potencyHtml = '<span class="potency-badge potency-mocktail">🧒 0.0% ABV • Kid & Driver Mocktail</span>';
      } else if (meta.potency === 'high') {
        potencyHtml = `<span class="potency-badge potency-high">⚡ High-Octane (~16% ABV • ${meta.spiritsOz} oz Spirits • Limit 3!)</span>`;
      } else {
        potencyHtml = `<span class="potency-badge potency-med">🍹 Standard Beach Pour (~11% ABV • ${meta.spiritsOz} oz Spirits)</span>`;
      }

      // Layer preview bar if layers exist
      let layerHtml = '';
      if (meta.layers && meta.layers.length > 1) {
        const gradStops = meta.layers.map((col, idx) => `${col} ${(idx / (meta.layers.length - 1)) * 100}%`).join(', ');
        const legendItems = meta.layers.map((col, idx) => `
          <span><span class="layer-legend-dot" style="background: ${col};"></span> ${meta.layerNames?.[idx] || 'Layer ' + (idx+1)}</span>
        `).join('');
        layerHtml = `
          <div style="margin: 14px 0 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">
              <span>🎨 Authentic Visual Layering &amp; Float Guide:</span>
              <span style="font-size: 0.72rem;">Bottom ➔ Surface Float</span>
            </div>
            <div class="layer-preview-bar" style="background: linear-gradient(to right, ${gradStops});"></div>
            <div class="layer-legend">${legendItems}</div>
          </div>
        `;
      }

      updateCarouselActivePill('bp', key);
      const sel = document.getElementById('drinkRecipeSelect'); if (sel) sel.value = key;
      displayArea.innerHTML = `
        ${getReturnBreadcrumbHtml()}
        ${getStepperHtml('bp', key, recipeData)}
        ${renderPriceComparisonCard(fullKey)}
        <div class="recipe-display-card" id="recipeCard_${key}" style="border-left: 4px solid var(--coral);">
          <div class="recipe-title-bar">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 4px;">
                <h3 style="font-size: 1.25rem; color: var(--text-main); margin: 0;">${r.title}</h3>
                ${potencyHtml}
              </div>
              <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 2px;">${r.desc}</p>
            </div>
            <div class="recipe-badge-row">
              <span class="deal-badge" style="background: var(--primary-light); color: var(--coral); font-weight: 700;">${r.tag}</span>
              ${cartBtnHtml}
              <button type="button" class="qol-btn" onclick="openBartenderMode('${key}')" style="background: #0f172a; color: #38bdf8; border: 1px solid #38bdf8; font-size: 0.82rem; padding: 6px 14px; font-weight: 700;">
                <span>👨‍🍳</span> Bartender Mode
              </button>
            </div>
          </div>

          ${layerHtml}

          <!-- INTERACTIVE VESSEL & BATCH SCALER -->
          <div class="vessel-scaler-container">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
              <span style="font-size: 0.82rem; font-weight: 800; color: var(--text-main);">📏 Select Serving Vessel or Beach Cooler Size:</span>
              <span style="font-size: 0.76rem; color: var(--text-muted); font-weight: 600;">Ounces automatically recalculate in real-time</span>
            </div>
            <div class="vessel-btn-row">
              <span style="font-size: 0.74rem; font-weight: 700; color: var(--text-muted); align-self: center; margin-right: 4px;">Single:</span>
              <button type="button" class="vessel-btn" onclick="setVesselScale(0.5, '16-oz Solo Cup', '${key}', 'recipeCard_${key}')">16-oz Solo</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(0.94, '30-oz Yeti Tumbler', '${key}', 'recipeCard_${key}')">30-oz Yeti</button>
              <button type="button" class="vessel-btn active" onclick="setVesselScale(1.0, '32-oz Bucket (1×)', '${key}', 'recipeCard_${key}')">32-oz Bucket (1×)</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(1.25, '40-oz Stanley Mug', '${key}', 'recipeCard_${key}')">40-oz Stanley</button>
              <span style="font-size: 0.74rem; font-weight: 700; color: var(--text-muted); align-self: center; margin: 0 4px 0 8px;">Batches:</span>
              <button type="button" class="vessel-btn" onclick="setVesselScale(2.0, 'Half-Gallon Pitcher (2×)', '${key}', 'recipeCard_${key}')">Half-Gal (2×)</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(4.0, '1-Gallon Condo Pitcher (4×)', '${key}', 'recipeCard_${key}')">1-Gal Pitcher (4×)</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(8.0, '2-Gallon Beach Jug (8×)', '${key}', 'recipeCard_${key}')">2-Gal Beach Jug (8×)</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(20.0, '5-Gallon Party Cooler (20×)', '${key}', 'recipeCard_${key}')">5-Gal Cooler (20×)</button>
            </div>
          </div>

          <div class="recipe-grid">
            <div class="ingredient-box" style="border-color: var(--coral);">
              <h4 style="color: var(--coral);"><span>🪣</span> Dynamic Vessel Measurements:</h4>
              <ul class="ingredient-list dynamic-scale-list">${singleItems}</ul>
            </div>
            <div class="ingredient-box" style="border-color: var(--primary);">
              <h4 style="color: var(--primary);"><span>🍹</span> Standard 1-Gallon Condo Batch (Pours 4× 32-oz Vessels):</h4>
              <ul class="ingredient-list">${pitcherItems}</ul>
            </div>
          </div>

          <div class="recipe-steps-box" style="border-left: 3px solid var(--coral);">
            <h4 style="color: var(--coral);"><span>📋</span> Mixing &amp; Pouring Instructions (On The Rocks):</h4>
            <ol class="recipe-steps-list">${stepsHtml}</ol>
          </div>

          <div class="insider-tip" style="margin-top: 12px; border-left-color: var(--coral);">
            💡 <strong>Beach Pro-Tip:</strong> ${r.beachTip || ''}
            <div style="font-size: 0.8rem; margin-top: 6px; color: #0284c7; font-weight: 700;">
              ☀️ <strong>Florida Heat Safety:</strong> In summer beach humidity, pace with 1 full glass of ice water per 32-oz vessel!
            </div>
          </div>
        </div>
      `;
    }

// ==========================================================================
// MCGUIRE'S IRISH PUB SPECIALTY COCKTAILS DATA & RENDERER (12 RECIPES)
// ==========================================================================
const mcguiresRecipeData = {
      irish_wake: {
        title: "🍀 The Famous \"Irish Wake\"",
        tag: "McGuire's #1 32-oz Mason Jar Legend • Strict Limit of 3",
        desc: "The legendary, emerald-green powerhouse served at McGuire's Irish Pub! Bacardi Superior and high-octane 151 overproof rum shaken with Blue Curaçao, triple sec, and fresh Florida orange juice. Turns a vibrant shamrock green and packs an unforgettable pub punch!",
        single: [
          "2 oz Bacardi Superior White or Gold Rum",
          "1.5 oz Diamond Reserve 151 or Don Q 151 Overproof Rum",
          "1 oz DeKuyper Blue Curaçao (creates emerald glow)",
          "1/2 oz DeKuyper Triple Sec 48° (5 oz total spirits)",
          "8 oz Fresh Florida Orange Juice",
          "Squeeze of 1 fresh lime wedge",
          "Packed to the brim with ice in authentic 32-oz McGuire's Mason Jar or Yeti mug",
          "Garnish: Orange wheel & Maraschino cherry with extra-wide straw"
        ],
        pitcher: [
          "8 oz Bacardi Superior Rum",
          "6 oz 151 Overproof Rum",
          "4 oz DeKuyper Blue Curaçao",
          "2 oz DeKuyper Triple Sec (20 oz spirits)",
          "32 oz Fresh Florida Orange Juice",
          "Juice of 4 fresh limes",
          "Serves: 4 Full 32-oz Souvenir Mason Jars / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Combine Bacardi rum, 151 rum, Blue Curaçao, triple sec, orange juice, and fresh lime juice in a 1-gallon pitcher. Watch the mixture turn its trademark glowing emerald green!",
          "Pack 32-oz mason jar mugs (or 30–40oz Yeti tumblers) completely full of fresh ice.",
          "Pour green pub punch over the rocks.",
          "Garnish with orange wheels, cherries, and observe McGuire's house rule: 'Limit 3 per wake'!"
        ]
      },
      emory_chenoweth: {
        title: "✈️ The \"Emory Chenoweth\" (Aviation Rum Punch)",
        tag: "Legendary Pub Aviation Tradition • 32-oz Mason Jar",
        desc: "Named in honor of McGuire's legendary naval aviation patron! Bacardi white rum, Myers's dark rum floater, peach schnapps, and tropical juices on the rocks in a 32-oz mason jar.",
        single: [
          "2 oz Bacardi Superior White Rum",
          "1.5 oz Myers's Original Dark Rum (floated on top)",
          "1 oz DeKuyper Peachtree Schnapps (4.5 oz spirits)",
          "4 oz Dole Pineapple Juice",
          "4 oz Fresh Florida Orange Juice",
          "1/2 oz Rose's Grenadine Syrup",
          "Juice of 1/2 fresh lemon & 1/2 fresh lime",
          "Packed with ice in 32-oz Mason Jar or Yeti",
          "Garnish: Orange slice, cherry & mint sprig"
        ],
        pitcher: [
          "8 oz Bacardi Superior Rum",
          "6 oz Myers's Dark Rum (for floaters)",
          "4 oz DeKuyper Peachtree Schnapps",
          "16 oz Dole Pineapple Juice",
          "16 oz Florida Orange Juice",
          "2 oz Grenadine Syrup",
          "Juice of 2 lemons & 2 limes",
          "Serves: 4 Full 32-oz Souvenir Mason Jars / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "In a pitcher, stir white rum, peach schnapps, pineapple juice, orange juice, and grenadine with ice.",
          "Pack 32-oz mason jars with fresh ice.",
          "Pour punch over ice, leaving 1.5 inches at the top.",
          "Gently float 1.5 oz Myers's dark rum across the surface.",
          "Garnish with orange wheels and cherries."
        ]
      },
      iced_irish_coffee: {
        title: "☕ McGuire's Ultimate Iced Irish Coffee (On The Rocks)",
        tag: "Cold Brew & Bushmills Whiskey • 32-oz Mason Jar",
        desc: "The ultimate beach & boat upgrade to the pub classic! Smooth Bushmills Original Irish Whiskey and rich Carolans Irish Cream shaken with unsweetened cold brew coffee and brown sugar syrup, finished with sweet cream and nutmeg over crushed ice.",
        single: [
          "3.5 oz Bushmills Original Irish Whiskey (from Retail Spirits)",
          "1.5 oz Carolans Irish Cream Liqueur (5 oz total spirits)",
          "8 oz Chilled Cold Brew Coffee (unsweetened Stok or Starbucks)",
          "1 oz Brown Sugar Simple Syrup",
          "2 oz Heavy Whipping Cream or Half-and-Half float",
          "Heavy dusting of ground nutmeg",
          "Packed with fresh ice in 32-oz Mason Jar or Yeti mug"
        ],
        pitcher: [
          "14 oz Bushmills Irish Whiskey",
          "6 oz Carolans Irish Cream",
          "32 oz Chilled Cold Brew Coffee",
          "4 oz Brown Sugar Syrup",
          "8 oz Heavy Cream (to float)",
          "Ground nutmeg dusting",
          "Serves: 4 Full 32-oz Souvenir Mason Jars / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Combine Bushmills Irish whiskey, Carolans Irish cream, cold brew coffee, and brown sugar syrup in a pitcher with ice.",
          "Pack 32-oz mason jar mugs with fresh ice.",
          "Pour iced coffee mixture into jars until 1.5 inches from the top.",
          "Lightly shake heavy cream in a shaker until slightly thickened, then float 2 oz over the top.",
          "Dust generously with ground nutmeg."
        ]
      },
      bloody_irish: {
        title: "🌶️ \"The Bloody Irish\" (McGuire's Pub Bloody Mary)",
        tag: "Bushmills, Guinness Pub Float & Old Bay • 32-oz Mason Jar",
        desc: "McGuire's legendary Sunday morning pub cure! Bushmills Irish Whiskey, spicy Zing Zang mix, prepared horseradish, Worcestershire, and a signature dark Guinness float crowned with a loaded pickled okra and green bean skewer.",
        single: [
          "3 oz Bushmills Original Irish Whiskey (or Tito's Vodka)",
          "2 oz Guinness Extra Stout (pub float on top)",
          "8 oz Zing Zang Bloody Mary Mix",
          "1/2 tsp Prepared Horseradish",
          "4 dashes Worcestershire Sauce + 3 dashes Tabasco / Crystal Hot Sauce",
          "Juice of 1/2 fresh lime & 1/2 fresh lemon",
          "Rim: Old Bay seasoning mixed with coarse celery salt",
          "Packed with ice in 32-oz Mason Jar or Yeti",
          "Garnish: Spicy pickled okra, pickled green bean, queen olive & lime wedge"
        ],
        pitcher: [
          "12 oz Bushmills Irish Whiskey",
          "8 oz Guinness Extra Stout (for floaters)",
          "32 oz Zing Zang Bloody Mary Mix",
          "2 tsp Prepared Horseradish + 16 dashes Worcestershire",
          "Juice of 2 limes & 2 lemons",
          "Serves: 4 Full 32-oz Souvenir Mason Jars / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Rim 32-oz mason jar mugs with Old Bay seasoning and celery salt.",
          "Mix Bushmills whiskey, Zing Zang, horseradish, Worcestershire, hot sauce, and citrus in a pitcher.",
          "Pack mason jars with ice, pour mix over ice leaving 1.5 inches at top.",
          "Gently pour 2 oz Guinness Extra Stout over the back of a spoon to create a rich dark pub float.",
          "Garnish with loaded pickled okra and green bean skewers."
        ]
      },
      dublin_mule: {
        title: "🍺 The Dublin Mule (Irish Whiskey Mule)",
        tag: "Bushmills & Spicy Ginger Beer • 32-oz Mason Jar",
        desc: "The Irish pub twist on the Moscow mule! Triple-distilled Bushmills Irish whiskey, spicy craft ginger beer, fresh tart lime juice, and a touch of agave nectar served over crushed ice with fresh slapped mint in a 32-oz mason jar.",
        single: [
          "3.5 oz Bushmills Original Irish Whiskey",
          "8 oz Spicy Craft Ginger Beer (Fever-Tree or Q)",
          "1.5 oz Fresh Squeezed Lime Juice (approx. 1 whole lime)",
          "1/2 oz Pure Agave Nectar or simple syrup",
          "Packed with crushed ice in 32-oz Mason Jar or Yeti mug",
          "Garnish: Fresh lime wheel & slapped mint sprig"
        ],
        pitcher: [
          "14 oz Bushmills Irish Whiskey",
          "32 oz Spicy Ginger Beer (two 4-packs)",
          "6 oz Fresh Squeezed Lime Juice",
          "2 oz Pure Agave Nectar",
          "Serves: 4 Full 32-oz Souvenir Mason Jars / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Whisk Bushmills whiskey, lime juice, and agave in a pitcher.",
          "Pack 32-oz mason jars with crushed ice.",
          "Pour whiskey-lime mixture over ice, then top each jar with 8 oz spicy craft ginger beer.",
          "Slap fresh mint sprigs between your palms to release aromatic oils and tuck into the ice with a lime wheel."
        ]
      },
      blueberry_lemon_drop: {
        title: "🫐 McGuire's Blueberry Lemon Drop (Double Shot)",
        tag: "Tito's Vodka, Lemonade & Blueberries • 32-oz Mason Jar",
        desc: "A sweet, tart, and refreshing double-shot pub refresher! Tito's Handmade Vodka, triple sec, chilled Simply Lemonade, and a splash of cranberry for blush served in a sugar-rimmed 32-oz mason jar.",
        single: [
          "3.5 oz Tito's Handmade Vodka",
          "1 oz DeKuyper Triple Sec",
          "7 oz Chilled Simply Lemonade",
          "1 oz Ocean Spray Cranberry Juice float",
          "Granulated sugar rim around jar",
          "Packed with ice in 32-oz Mason Jar or Yeti",
          "Garnish: Fresh lemon wheels & blueberries on cocktail pick"
        ],
        pitcher: [
          "14 oz Tito's Handmade Vodka",
          "4 oz DeKuyper Triple Sec",
          "28 oz Simply Lemonade",
          "4 oz Cranberry Juice",
          "Serves: 4 Full 32-oz Souvenir Mason Jars / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Rim 32-oz mason jars with granulated sugar.",
          "Mix vodka, triple sec, and lemonade in a pitcher with ice.",
          "Pour into sugar-rimmed jars over ice, top with cranberry float, and garnish with blueberries and lemon wheels."
        ]
      },
      strawberry_twist: {
        title: "🍓 McGuire's Strawberry Twist (Double Shot)",
        tag: "Tito's Vodka, Peach & Strawberry Purée • 32-oz Mason Jar",
        desc: "A lush, fruity pub cooler! Tito's Vodka and DeKuyper Peachtree schnapps shaken with sweet strawberry purée, chilled lemonade, and lemon juice over ice in a 32-oz mason jar.",
        single: [
          "3 oz Tito's Handmade Vodka",
          "1.5 oz DeKuyper Peachtree Schnapps (4.5 oz spirits)",
          "3 oz Fresh Strawberry Purée",
          "6 oz Simply Lemonade",
          "Squeeze of fresh lemon wedge",
          "Packed with ice in 32-oz Mason Jar or Yeti",
          "Garnish: Fresh strawberry slice & lemon wheel"
        ],
        pitcher: [
          "12 oz Tito's Vodka",
          "6 oz DeKuyper Peachtree Schnapps",
          "12 oz Strawberry Purée",
          "24 oz Simply Lemonade",
          "Juice of 2 fresh lemons",
          "Serves: 4 Full 32-oz Souvenir Mason Jars / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Whisk vodka, peach schnapps, strawberry purée, and lemonade in a pitcher.",
          "Pack 32-oz mason jars with ice.",
          "Pour over ice, stir gently, and garnish with fresh sliced strawberries and lemon wheels."
        ]
      },
      chocolate_moose: {
        title: "🍫 McGuire's \"Chocolate Moose\" Martini (On The Rocks)",
        tag: "Vodka, Kahlúa & Irish Cream Dessert Mug • 32-oz Mason Jar",
        desc: "McGuire's legendary dessert cocktail! Tito's Vodka, Kahlúa, Carolans Irish Cream, and dark crème de cacao shaken with heavy cream in a chocolate-swirled 32-oz mason jar over ice.",
        single: [
          "2.5 oz Tito's Handmade Vodka",
          "1.5 oz Kahlúa Coffee Liqueur",
          "1.5 oz Carolans Irish Cream Liqueur",
          "1 oz DeKuyper Dark Crème de Cacao (6.5 oz total spirits)",
          "6 oz Heavy Whipping Cream or Half-and-Half",
          "Hershey's Chocolate Syrup swirling inside jar walls",
          "Packed with ice in 32-oz Mason Jar or Yeti",
          "Garnish: Whipped cream swirl & cherry"
        ],
        pitcher: [
          "10 oz Tito's Vodka",
          "6 oz Kahlúa Coffee Liqueur",
          "6 oz Carolans Irish Cream",
          "4 oz Dark Crème de Cacao (26 oz spirits)",
          "24 oz Heavy Cream or Half-and-Half",
          "Serves: 4 Full 32-oz Souvenir Mason Jars / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Swirl chocolate syrup along the inside walls of 32-oz mason jar mugs.",
          "In a pitcher, shake vodka, Kahlúa, Irish cream, crème de cacao, and cream together with ice.",
          "Pour into chocolate-swirled jars over ice, top with whipped cream and a cherry!"
        ]
      },
      james_bond: {
        title: "🍸 The \"James Bond\" Double Shot Martini (On The Rocks)",
        tag: "Gin & Vodka Double Pour • 32-oz Pub Vessel",
        desc: "Ian Fleming's classic Vesper martini scaled for an afternoon on the balcony! London dry gin and Tito's vodka shaken extra hard over crushed ice with dry vermouth and Spanish queen olives.",
        single: [
          "3.5 oz Beefeater Gin (or Tito's Vodka)",
          "1.5 oz Tito's Handmade Vodka",
          "1/2 oz Dry Vermouth or Lillet Blanc (5.5 oz total spirits)",
          "1/2 oz Spanish Olive Brine (dirty style)",
          "Packed with crushed ice in 32-oz Mug or Yeti",
          "Garnish: 3 Queen Spanish pimento olives on a pick & wide lemon peel twist"
        ],
        pitcher: [
          "14 oz Gin",
          "6 oz Tito's Vodka",
          "2 oz Dry Vermouth",
          "2 oz Olive Brine",
          "Serves: 4 Large 32-oz Pub Vessels over crushed ice"
        ],
        steps: [
          "Fill cocktail shaker with ice, add gin, vodka, vermouth, and olive brine. Shake hard for 30 seconds until frost forms on metal.",
          "Strain into 32-oz mug packed with crushed ice.",
          "Garnish with olive skewers and express lemon peel oils over the surface."
        ]
      },
      south_of_the_border: {
        title: "🌶️ McGuire's \"South of the Border\" Pub Margarita",
        tag: "100% Agave Tequila & Jalapeño • 32-oz Mason Jar",
        desc: "McGuire's famous Monday pub margarita! Espolòn 100% agave tequila, triple sec, fresh lime juice, orange juice, pure agave nectar, and fresh jalapeño pepper coins with a sea salt & Tajín rim.",
        single: [
          "3.5 oz Espolòn 100% Blue Agave Tequila",
          "1.5 oz DeKuyper Triple Sec 48°",
          "3 oz Fresh Squeezed Lime Juice",
          "2 oz Fresh Florida Orange Juice",
          "1 oz Pure Agave Nectar",
          "4 slices Fresh Jalapeño Pepper (muddled)",
          "Coarse sea salt & Tajín rim",
          "Packed with ice in 32-oz Mason Jar or Yeti",
          "Garnish: Jalapeño wheels & juicy lime wedge"
        ],
        pitcher: [
          "14 oz Espolòn Tequila",
          "6 oz Triple Sec",
          "12 oz Fresh Lime Juice",
          "8 oz Florida Orange Juice",
          "4 oz Pure Agave Nectar",
          "16 slices Fresh Jalapeño",
          "Serves: 4 Full 32-oz Souvenir Mason Jars / Yeti Tumblers (1-Gallon Batch)"
        ],
        steps: [
          "Muddle jalapeño slices with agave nectar in a pitcher.",
          "Add tequila, triple sec, lime juice, and orange juice.",
          "Rim 32-oz mason jars with salt and Tajín.",
          "Fill with ice, pour margarita mix over the rocks, and garnish with lime wheels and jalapeños."
        ]
      },
      smoked_old_fashioned: {
        title: "🥃 McGuire's Tavern Old Fashioned (Bushmills Single Malt)",
        tag: "Irish Whiskey & Bitters • 32-oz Pub Pour",
        desc: "Triple-distilled Bushmills Original Irish Whiskey muddled with Angostura aromatic bitters, brown sugar syrup, fresh orange wheels, and gourmet cherries, topped with ice and a splash of club soda.",
        single: [
          "3.5 oz Bushmills Original Irish Whiskey",
          "5 dashes Angostura Aromatic Bitters",
          "3/4 oz Brown Sugar Simple Syrup",
          "1 thick slice fresh Florida orange (muddled)",
          "2 Maraschino cherries with stem",
          "Splash of club soda (2 oz) over ice",
          "Packed with large ice cubes in 32-oz Mug or Yeti"
        ],
        pitcher: [
          "14 oz Bushmills Irish Whiskey",
          "20 dashes Angostura Bitters",
          "3 oz Brown Sugar Syrup",
          "4 orange slices & 8 cherries muddled",
          "8 oz Club Soda",
          "Serves: 4 Large 32-oz Pub Mugs / Yeti Tumblers"
        ],
        steps: [
          "Muddle orange slices, cherries, brown sugar syrup, and bitters in the base of a pitcher.",
          "Add Bushmills Irish whiskey and stir with large ice cubes.",
          "Pour into 32-oz mugs over ice, splash with club soda, and garnish with orange peel and cherry."
        ]
      },
      root_beer_float_kid: {
        title: "🧒 McGuire's House Draft Root Beer Float (Mocktail for 2 Kids)",
        tag: "Craft Draft Root Beer & Ice Cream • 32-oz Mason Jar for Kids!",
        desc: "A McGuire's pub tradition for the kids! Authentic craft root beer poured over generous scoops of vanilla bean ice cream in an authentic 32-oz souvenir mason jar with whipped cream and cherries—100% alcohol-free!",
        single: [
          "1 whole bottle or can (12 oz) craft Root Beer (Barq's, A&W, or Stewart's)",
          "3 generous scoops Vanilla Bean Ice Cream",
          "Swirl of whipped cream",
          "1 Maraschino cherry with stem",
          "Fills authentic 32-oz McGuire's Mason Jar Mug with wide straw"
        ],
        pitcher: [
          "4 bottles/cans craft Root Beer",
          "1 tub Vanilla Bean Ice Cream",
          "Whipped cream & cherries",
          "Serves: 4 Full 32-oz Mason Jars (100% Alcohol-Free Kids' Pub Treat)"
        ],
        steps: [
          "Place 3 scoops of rich vanilla bean ice cream into an authentic 32-oz mason jar mug.",
          "Slowly pour craft root beer down the side of the jar to create a thick, frothy vanilla foam head.",
          "Crown with a swirl of whipped cream, drop a cherry on top, and hand to the kids with an extra-wide straw!"
        ]
      }
    };

        function showMcguiresRecipe(key) {
      const r = mcguiresRecipeData[key] || mcguiresRecipeData[Object.keys(mcguiresRecipeData)[0]];
      const fullKey = 'mc_' + key;
      const meta = drinkMetadata[fullKey] || {};

      const singleItems = r.single.map(i => `<li>${scaleIngredientText(i, activeVesselMultiplier)}</li>`).join('');
      const pitcherItems = r.pitcher.map(i => `<li>${i}</li>`).join('');
      const stepsHtml = r.steps.map(s => `<li>${s}</li>`).join('');

      const displayArea = document.getElementById('mcguiresRecipeDisplayArea');
      if (!displayArea) return;

      const inCart = (typeof customBarSelectedDrinks !== 'undefined' && customBarSelectedDrinks.has(fullKey));
      const cartBtnHtml = `
        <button type="button" class="qol-btn" onclick="toggleCustomDrinkFromRecipe('${fullKey}')" style="background: ${inCart ? '#16a34a' : '#16a34a'}; color: #fff; font-size: 0.82rem; padding: 6px 14px; font-weight: 700; border-radius: var(--radius-full); display: inline-flex; align-items: center; gap: 6px; cursor: pointer; border: none; box-shadow: 0 2px 6px rgba(0,0,0,0.15); transition: var(--transition);">
          <span>${inCart ? '✓ In Combined Bar Cart' : '➕ Add to Combined Bar Cart'}</span>
        </button>
      `;

      // Potency badge
      let potencyHtml = '';
      if (meta.potency === 'mocktail') {
        potencyHtml = '<span class="potency-badge potency-mocktail">🧒 0.0% ABV • Kid & Driver Mocktail</span>';
      } else if (meta.potency === 'high') {
        potencyHtml = `<span class="potency-badge potency-high">⚡ High-Octane (~16% ABV • ${meta.spiritsOz} oz Spirits • Limit 3!)</span>`;
      } else {
        potencyHtml = `<span class="potency-badge potency-med">🍹 Standard Beach Pour (~11% ABV • ${meta.spiritsOz} oz Spirits)</span>`;
      }

      // Layer preview bar if layers exist
      let layerHtml = '';
      if (meta.layers && meta.layers.length > 1) {
        const gradStops = meta.layers.map((col, idx) => `${col} ${(idx / (meta.layers.length - 1)) * 100}%`).join(', ');
        const legendItems = meta.layers.map((col, idx) => `
          <span><span class="layer-legend-dot" style="background: ${col};"></span> ${meta.layerNames?.[idx] || 'Layer ' + (idx+1)}</span>
        `).join('');
        layerHtml = `
          <div style="margin: 14px 0 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">
              <span>🎨 Authentic Visual Layering &amp; Float Guide:</span>
              <span style="font-size: 0.72rem;">Bottom ➔ Surface Float</span>
            </div>
            <div class="layer-preview-bar" style="background: linear-gradient(to right, ${gradStops});"></div>
            <div class="layer-legend">${legendItems}</div>
          </div>
        `;
      }

      updateCarouselActivePill('mc', key);
      const sel = document.getElementById('mcguiresDrinkRecipeSelect'); if (sel) sel.value = key;
      displayArea.innerHTML = `
        ${getReturnBreadcrumbHtml()}
        ${getStepperHtml('mc', key, mcguiresRecipeData)}
        ${renderPriceComparisonCard(fullKey)}
        <div class="recipe-display-card" id="recipeCard_${key}" style="border-left: 4px solid #16a34a;">
          <div class="recipe-title-bar">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 4px;">
                <h3 style="font-size: 1.25rem; color: var(--text-main); margin: 0;">${r.title}</h3>
                ${potencyHtml}
              </div>
              <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 2px;">${r.desc}</p>
            </div>
            <div class="recipe-badge-row">
              <span class="deal-badge" style="background: var(--primary-light); color: #16a34a; font-weight: 700;">${r.tag}</span>
              ${cartBtnHtml}
              <button type="button" class="qol-btn" onclick="openBartenderMode('${key}')" style="background: #0f172a; color: #38bdf8; border: 1px solid #38bdf8; font-size: 0.82rem; padding: 6px 14px; font-weight: 700;">
                <span>👨‍🍳</span> Bartender Mode
              </button>
            </div>
          </div>

          ${layerHtml}

          <!-- INTERACTIVE VESSEL & BATCH SCALER -->
          <div class="vessel-scaler-container">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
              <span style="font-size: 0.82rem; font-weight: 800; color: var(--text-main);">📏 Select Serving Vessel or Beach Cooler Size:</span>
              <span style="font-size: 0.76rem; color: var(--text-muted); font-weight: 600;">Ounces automatically recalculate in real-time</span>
            </div>
            <div class="vessel-btn-row">
              <span style="font-size: 0.74rem; font-weight: 700; color: var(--text-muted); align-self: center; margin-right: 4px;">Single:</span>
              <button type="button" class="vessel-btn" onclick="setVesselScale(0.5, '16-oz Solo Cup', '${key}', 'recipeCard_${key}')">16-oz Solo</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(0.94, '30-oz Yeti Tumbler', '${key}', 'recipeCard_${key}')">30-oz Yeti</button>
              <button type="button" class="vessel-btn active" onclick="setVesselScale(1.0, '32-oz Bucket (1×)', '${key}', 'recipeCard_${key}')">32-oz Bucket (1×)</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(1.25, '40-oz Stanley Mug', '${key}', 'recipeCard_${key}')">40-oz Stanley</button>
              <span style="font-size: 0.74rem; font-weight: 700; color: var(--text-muted); align-self: center; margin: 0 4px 0 8px;">Batches:</span>
              <button type="button" class="vessel-btn" onclick="setVesselScale(2.0, 'Half-Gallon Pitcher (2×)', '${key}', 'recipeCard_${key}')">Half-Gal (2×)</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(4.0, '1-Gallon Condo Pitcher (4×)', '${key}', 'recipeCard_${key}')">1-Gal Pitcher (4×)</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(8.0, '2-Gallon Beach Jug (8×)', '${key}', 'recipeCard_${key}')">2-Gal Beach Jug (8×)</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(20.0, '5-Gallon Party Cooler (20×)', '${key}', 'recipeCard_${key}')">5-Gal Cooler (20×)</button>
            </div>
          </div>

          <div class="recipe-grid">
            <div class="ingredient-box" style="border-color: #16a34a;">
              <h4 style="color: #16a34a;"><span>🪣</span> Dynamic Vessel Measurements:</h4>
              <ul class="ingredient-list dynamic-scale-list">${singleItems}</ul>
            </div>
            <div class="ingredient-box" style="border-color: var(--primary);">
              <h4 style="color: var(--primary);"><span>🍹</span> Standard 1-Gallon Condo Batch (Pours 4× 32-oz Vessels):</h4>
              <ul class="ingredient-list">${pitcherItems}</ul>
            </div>
          </div>

          <div class="recipe-steps-box" style="border-left: 3px solid #16a34a;">
            <h4 style="color: #16a34a;"><span>📋</span> Mixing &amp; Pouring Instructions (On The Rocks):</h4>
            <ol class="recipe-steps-list">${stepsHtml}</ol>
          </div>

          <div class="insider-tip" style="margin-top: 12px; border-left-color: #16a34a;">
            💡 <strong>Beach Pro-Tip:</strong> ${r.beachTip || ''}
            <div style="font-size: 0.8rem; margin-top: 6px; color: #0284c7; font-weight: 700;">
              ☀️ <strong>Florida Heat Safety:</strong> In summer beach humidity, pace with 1 full glass of ice water per 32-oz vessel!
            </div>
          </div>
        </div>
      `;
    }



// ==========================================================================
// OLD BAY STEAMER SPECIALTY COCKTAILS DATA (8 RECIPES)
// ==========================================================================
const oldBayRecipeData = {
  obs_blt: {
    title: "🥃 The Steamer \"BLT\" (Bourbon, Lemonade & Sweet Tea)",
    tag: "Old Bay Steamer's #1 House Cocktail • 32-oz Vessel",
    desc: "Old Bay Steamer's signature cocktail legend! Smooth whiskey shaken with chilled Southern sweet tea and tart fresh lemonade over crushed ice with fresh slapped mint and lemon wheels. The quintessential seafood feast companion!",
    single: [
      "4 oz Bushmills Irish Whiskey (or Bourbon)",
      "8 oz Chilled Southern Sweet Tea (Publix Deli)",
      "6 oz Simply Lemonade (or fresh lemon sour)",
      "Juice of 1/2 fresh lemon",
      "Fresh slapped mint sprig & lemon wheels",
      "Packed with crushed ice in 32-oz Mug or Yeti",
      "Garnish: Lemon wheel & slapped mint bouquet"
    ],
    pitcher: [
      "16 oz Bushmills Irish Whiskey (or Bourbon)",
      "32 oz Southern Sweet Tea",
      "24 oz Simply Lemonade",
      "Juice of 2 fresh lemons",
      "Fresh mint sprigs",
      "Serves: 4 Full 32-oz Vessels (1-Gallon Batch)"
    ],
    steps: [
      "Combine whiskey, sweet tea, lemonade, and fresh lemon juice in a 1-gallon pitcher with ice.",
      "Stir vigorously until condensation forms on the outside of the pitcher.",
      "Pack 32-oz vessels with crushed ice.",
      "Pour over ice, slap fresh mint sprigs between palms, and crown with thick lemon wheels."
    ],
    beachTip: "The sweet tannins from Southern black tea cut through the rich garlic butter of steamed King Crab and Royal Red shrimp like a dream."
  },
  obs_bahamamama: {
    title: "🌴 The Steamer Bahama Mama",
    tag: "Triple Rum, Banana, Tropical Juices & Dark Rum Float • 32-oz Bucket",
    desc: "Old Bay Steamer's famous coastal island tiki classic! Crisp white rum and tropical coconut rum shaken with sweet crème de banana, Dole pineapple juice, and Florida OJ, topped with a rich Myers's Jamaican dark rum float.",
    single: [
      "2 oz Bacardi Superior White Rum",
      "1.5 oz Malibu Caribbean Coconut Rum",
      "1 oz DeKuyper Crème de Banana (4.5 oz spirits)",
      "1 oz Myers's Original Dark Rum (heavy surface float)",
      "4 oz Dole 100% Pineapple Juice",
      "4 oz Fresh Florida Orange Juice",
      "1/2 oz Rose's Grenadine",
      "Packed with ice in 32-oz Souvenir Bucket or Yeti",
      "Garnish: Orange wheel, pineapple wedge & Maraschino cherry"
    ],
    pitcher: [
      "8 oz Bacardi White Rum",
      "6 oz Malibu Coconut Rum",
      "4 oz Banana Liqueur",
      "4 oz Myers's Dark Rum (for surface floaters)",
      "16 oz Dole Pineapple Juice",
      "16 oz Florida Orange Juice",
      "2 oz Grenadine",
      "Serves: 4 Full 32-oz Buckets (1-Gallon Batch)"
    ],
    steps: [
      "Whisk white rum, coconut rum, banana liqueur, pineapple juice, orange juice, and grenadine in a pitcher with ice.",
      "Pack 32-oz beach buckets with fresh ice.",
      "Pour tropical punch over ice, leaving 1.5 inches at the brim.",
      "Float 1 oz Myers's dark rum across the top of each bucket.",
      "Garnish with fruit wheels and festive straws!"
    ],
    beachTip: "The crème de banana gives this classic Bahama Mama an authentic Caribbean tiki depth that standard fruit punches lack."
  },
  obs_cucumbercooler: {
    title: "🥒 The Coastal Cucumber Cooler",
    tag: "Beefeater Gin, Muddled Cucumber, Lime & Tonic • 32-oz Vessel",
    desc: "The crispest, most refreshing cocktail on coastal island! Fresh English cucumber ribbons muddled with pure cane sugar and fresh lime juice, shaken with Beefeater London Dry Gin and topped with crisp tonic water or club soda.",
    single: [
      "4 oz Beefeater London Dry Gin (Retail Spirits 1.75L)",
      "5–6 thick slices English Seedless Cucumber (muddled)",
      "2 oz Fresh Squeezed Lime Juice",
      "1.5 oz Pure Simple Syrup or Agave",
      "8 oz Chilled Tonic Water (or Club Soda)",
      "Packed with crushed ice in 32-oz Vessel or Yeti",
      "Garnish: Long cucumber ribbon spiraled against glass & lime wheel"
    ],
    pitcher: [
      "16 oz Beefeater Gin",
      "1 whole English cucumber sliced & muddled",
      "8 oz Fresh Lime Juice",
      "6 oz Simple Syrup",
      "32 oz Chilled Tonic Water",
      "Serves: 4 Full 32-oz Vessels (1-Gallon Batch)"
    ],
    steps: [
      "Muddle fresh cucumber slices with lime juice and simple syrup in a pitcher to release crisp cucumber juices.",
      "Add Beefeater gin and stir with ice.",
      "Pack 32-oz vessels with crushed ice.",
      "Pour gin-cucumber mixture over ice, then top each vessel with chilled tonic water.",
      "Garnish with fresh cucumber ribbons and lime wheels."
    ],
    beachTip: "Cucumber acts as a natural palate cleanser between bites of buttery crab legs and spicy steamed oysters!"
  },
  obs_strongisland: {
    title: "⚡ The \"Strong Island\" (House Legend • Strict Limit of 1)",
    tag: "5-Spirits Powerhouse with Lemon & Cola • 32-oz Vessel",
    desc: "Old Bay Steamer's notorious house legend! Tito's vodka, Bacardi rum, Espolòn tequila, Beefeater gin, and triple sec balanced with fresh lemon juice and a splash of cola. Backed by Old Bay Steamer's house rule: 'Strict Limit of 1 per visit'!",
    single: [
      "1.25 oz Tito's Handmade Vodka",
      "1.25 oz Bacardi Superior White Rum",
      "1.25 oz Espolòn 100% Blue Agave Tequila",
      "1.25 oz Beefeater London Dry Gin",
      "1 oz DeKuyper Triple Sec 48° (6 oz total spirits)",
      "4 oz Fresh Squeezed Lemon Juice",
      "2 oz Pure Simple Syrup",
      "4 oz Chilled Coca-Cola splash",
      "Packed with ice in 32-oz Souvenir Bucket or Yeti",
      "Garnish: 2 lemon wheels & wide straw"
    ],
    pitcher: [
      "5 oz Vodka, 5 oz Rum, 5 oz Tequila, 5 oz Gin, 4 oz Triple Sec (24 oz spirits)",
      "16 oz Fresh Lemon Juice",
      "8 oz Simple Syrup",
      "16 oz Coca-Cola",
      "Serves: 4 Full 32-oz Vessels (1-Gallon Batch)"
    ],
    steps: [
      "Combine all 5 spirits, fresh lemon juice, and simple syrup in a pitcher with ice.",
      "Pack 32-oz vessels to the brim with fresh ice.",
      "Pour over ice, leaving 2 inches at the top.",
      "Crown with chilled Coca-Cola to create the signature iced tea hue and garnish with lemon wheels."
    ],
    beachTip: "Real fresh lemon juice is what makes 6 oz of high-octane spirits taste as innocent and smooth as sweet tea. Obey the house rule: strictly limit to 1!"
  },
  obs_seafoodbloodymary: {
    title: "🦀 The Old Bay Steamer Seafood Bloody Mary",
    tag: "Tito's Vodka, Zing Zang, Old Bay Rim & Loaded Skewer • 32-oz Vessel",
    desc: "The ultimate savory coastal Bloody Mary! Shaken with Tito's Handmade Vodka, spicy Zing Zang mix, prepared horseradish, Worcestershire, and fresh citrus, served in an authentic Old Bay seasoning-rimmed vessel with a loaded skewer!",
    single: [
      "4 oz Tito's Handmade Vodka",
      "9 oz Zing Zang Bloody Mary Mix",
      "1/2 tsp Prepared Horseradish",
      "4 dashes Worcestershire Sauce + 3 dashes hot sauce",
      "Juice of 1/2 fresh lime & 1/2 fresh lemon",
      "Rim: Authentic McCormick Old Bay Seasoning",
      "Packed with ice in 32-oz Vessel or Yeti",
      "Garnish Skewer: Chilled cocktail shrimp, pickled okra, celery stalk & queen olive"
    ],
    pitcher: [
      "16 oz Tito's Vodka",
      "36 oz Zing Zang Bloody Mary Mix",
      "2 tsp Horseradish + 16 dashes Worcestershire",
      "Juice of 2 lemons & 2 limes",
      "Old Bay for bucket rims",
      "Serves: 4 Full 32-oz Vessels (1-Gallon Batch)"
    ],
    steps: [
      "Moisten rim of 32-oz vessels with a juicy lemon wedge and press heavily into McCormick Old Bay seasoning.",
      "Combine vodka, Zing Zang, horseradish, Worcestershire, hot sauce, and citrus in a pitcher.",
      "Pack vessels with ice, pour savory mix over ice, and spear a chilled cocktail shrimp and pickled okra on top!"
    ],
    beachTip: "The celery salt, paprika, and crushed red pepper in Old Bay seasoning provide the ultimate savory rim for morning condo recovery."
  },
  obs_topshelfmargarita: {
    title: "🧂 The Steamer Grand Sunset Margarita",
    tag: "Espolòn 100% Agave, Triple Sec & Grand Float • 32-oz Vessel",
    desc: "Old Bay Steamer's premier top-shelf margarita! 100% Blue Agave Espolòn tequila, orange liqueur, fresh key lime juice, and agave nectar, finished with a golden Grand Marnier / Triple Sec float and an Old Bay & salt rim.",
    single: [
      "4 oz Espolòn 100% Blue Agave Tequila",
      "1.5 oz DeKuyper Triple Sec 48°",
      "1 oz Grand Marnier or Triple Sec float",
      "4 oz Fresh Squeezed Lime Juice",
      "2 oz Pure Agave Nectar",
      "2 oz Florida Orange Juice",
      "Rim: 50/50 Coarse Sea Salt & Old Bay Seasoning",
      "Packed with ice in 32-oz Bucket or Yeti",
      "Garnish: Lime wheels & orange wedge"
    ],
    pitcher: [
      "16 oz Espolòn Tequila",
      "6 oz Triple Sec + 4 oz for individual floaters",
      "16 oz Fresh Lime Juice",
      "8 oz Pure Agave Nectar",
      "8 oz Florida Orange Juice",
      "Serves: 4 Full 32-oz Vessels (1-Gallon Batch)"
    ],
    steps: [
      "Coat rims in 50/50 coarse sea salt and Old Bay seasoning.",
      "Whisk tequila, triple sec, lime juice, agave nectar, and orange juice in a pitcher with ice.",
      "Fill 32-oz buckets with ice, pour margarita base over ice, and float orange liqueur over the surface."
    ],
    beachTip: "Old Bay on a margarita rim adds a warm, aromatic spice note that elevates the agave without being overwhelmingly spicy."
  },
  obs_bushwacker: {
    title: "🍫 The Classic Coastal Bushwacker (On The Rocks)",
    tag: "Dark Rum, Kahlúa, Crème de Cacao & Coconut • 32-oz Mug",
    desc: "The Gulf Coast's most legendary dessert cocktail! Myers's Jamaican dark rum, Kahlúa, dark crème de cacao, and rich Coco López cream of coconut shaken with half-and-half over crushed ice in a chocolate-swirled 32-oz mug.",
    single: [
      "2.5 oz Myers's Original Dark Rum",
      "1.5 oz Kahlúa Coffee Liqueur",
      "1.5 oz DeKuyper Dark Crème de Cacao (5.5 oz total spirits)",
      "2 oz Coco López Real Cream of Coconut",
      "6 oz Half-and-Half or Heavy Cream",
      "Hershey's Chocolate Syrup swirling inside glass walls",
      "Heavy ground nutmeg dusting",
      "Packed with crushed ice in 32-oz Mug or Yeti",
      "Garnish: Whipped cream swirl, nutmeg & cherry"
    ],
    pitcher: [
      "10 oz Myers's Dark Rum",
      "6 oz Kahlúa Coffee Liqueur",
      "6 oz Dark Crème de Cacao",
      "8 oz Coco López Cream of Coconut",
      "24 oz Half-and-Half or Heavy Cream",
      "Chocolate syrup & nutmeg",
      "Serves: 4 Full 32-oz Vessels (1-Gallon Batch)"
    ],
    steps: [
      "Drizzle chocolate syrup in thick spirals along the inside walls of 32-oz mugs.",
      "In a shaker or pitcher, whisk dark rum, Kahlúa, crème de cacao, cream of coconut, and cream with ice until frothy.",
      "Pour creamy mixture over crushed ice, dust heavily with ground nutmeg, and crown with a cherry!"
    ],
    beachTip: "Originating at the Flora-Bama in 1975, the Bushwacker is the unofficial drink of the Panhandle. Serving it on the rocks keeps it rich, cold, and velvety without turning into watery melted ice cream."
  },
  obs_little_steamer_kid: {
    title: "🧒 The \"Little Steamer\" Lemon Sweet Tea (Mocktail)",
    tag: "Southern Sweet Tea & Tart Lemonade • 32-oz Bucket for Kids!",
    desc: "A southern classic for the kids and drivers! Authentic Southern sweet tea blended 50/50 with tart Simply Lemonade over crushed ice with fresh lemon wheels and mint—100% alcohol-free!",
    single: [
      "8 oz Chilled Southern Sweet Tea (Publix Deli)",
      "8 oz Chilled Simply Lemonade",
      "Juice of 1/2 fresh lemon",
      "Packed with crushed ice in 32-oz Souvenir Bucket",
      "Garnish: Lemon wheels, slapped mint sprig & colorful wide straw"
    ],
    pitcher: [
      "32 oz Southern Sweet Tea",
      "32 oz Simply Lemonade",
      "Juice of 2 fresh lemons",
      "Serves: 4 Full 32-oz Vessels (100% Non-Alcoholic • 1-Gallon Batch)"
    ],
    steps: [
      "Combine sweet tea and lemonade in a pitcher.",
      "Pack 32-oz buckets with crushed ice.",
      "Pour over ice, stir once, and garnish with lemon wheels and colorful straws!"
    ],
    beachTip: "Known across the South as an Arnold Palmer, this sweet and tart cooler is the ultimate thirst quencher after a long hot afternoon on the water."
  }
};

// ==========================================================================
// ALL-TIME VACATION & BEACH CLASSIC COCKTAIL RECIPES (12 RECIPES)
// ==========================================================================
const classicRecipeData = {
  classic_mojito: {
    title: "🌿 The Classic Mojito (Coastal Balcony Cooler)",
    tag: "Crisp Rum, Fresh Muddled Mint & Tart Lime • 32-oz Vessel",
    desc: "The ultimate hot-weather Caribbean refresher! Fresh Florida spearmint gently muddled with pure cane sugar and fresh lime juice, topped with crisp Bacardi Superior white rum and topped with effervescent club soda over crushed ice.",
    single: [
      "4 oz Bacardi Superior White Rum (Retail Spirits 1.75L)",
      "2.5 oz Fresh Squeezed Lime Juice (approx. 2 fresh limes)",
      "2 oz Pure Simple Syrup (or Agave Nectar)",
      "12–15 Fresh Mint Leaves (slapped & gently bruised)",
      "10 oz Chilled Club Soda / Sparkling Water",
      "Packed with crushed ice to the brim (fills 32-oz bucket or 30–40oz Yeti mug)",
      "Garnish: Slapped mint bouquet, lime wheels & wide straw"
    ],
    pitcher: [
      "16 oz Bacardi Superior White Rum",
      "10 oz Fresh Squeezed Lime Juice",
      "8 oz Pure Simple Syrup",
      "1 large bunch Fresh Mint Leaves",
      "40 oz Chilled Club Soda (add just before serving)",
      "Serves: 4 Full 32-oz Vessels / Yeti Tumblers (1-Gallon Batch)"
    ],
    steps: [
      "In the base of your pitcher or shaker, gently muddle fresh mint leaves with lime juice and simple syrup. Press gently to express menthol oils without shredding the leaves.",
      "Add Bacardi Superior white rum and stir with fresh ice until chilled.",
      "Pack 32-oz vessels completely full of crushed ice.",
      "Pour rum-mint mixture over ice until 2 inches from top.",
      "Top with chilled club soda, stir once gently, and crown with a fragrant slapped mint bouquet and lime wheels!"
    ],
    beachTip: "Never pulverize or shred mint leaves in a blender! Shredded mint turns bitter and will instantly clog your straws. A firm palm slap between your hands and a gentle 5-second press in the pitcher releases pure aromatic sweetness."
  },
  classic_pina_colada: {
    title: "🥥 Classic Piña Colada (Shaken On The Rocks)",
    tag: "Bacardi Rum, Coco López & Pineapple • 32-oz Bucket",
    desc: "Puerto Rico's national treasure perfected for Florida beach days! Real Coco López cream of coconut shaken vigorously with Dole pineapple juice and Bacardi rum, poured over ice and crowned with a dark rum floater. Shaken on the rocks so it never melts into runny sugary water like blender slushies!",
    single: [
      "3 oz Bacardi Superior White Rum",
      "1.5 oz Myers's Original Dark Rum (floater on top)",
      "3 oz Coco López Real Cream of Coconut",
      "6 oz Dole 100% Pineapple Juice",
      "1 oz Fresh Squeezed Lime Juice",
      "Packed with ice in 32-oz Bucket or Yeti mug",
      "Garnish: Pineapple wedge, Maraschino cherry & cocktail umbrella"
    ],
    pitcher: [
      "12 oz Bacardi Superior White Rum",
      "6 oz Myers's Original Dark Rum (for surface floaters)",
      "12 oz Coco López Cream of Coconut",
      "24 oz Dole Pineapple Juice",
      "4 oz Fresh Lime Juice",
      "Serves: 4 Full 32-oz Souvenir Beach Buckets / Yeti Tumblers (1-Gallon Batch)"
    ],
    steps: [
      "Whisk Coco López cream of coconut with pineapple juice and lime juice in a pitcher until silky smooth and integrated.",
      "Add Bacardi white rum and stir vigorously with ice.",
      "Pack 32-oz buckets or Yeti mugs with fresh ice.",
      "Pour creamy pineapple mixture over ice, leaving 1.5 inches at the brim.",
      "Gently float 1.5 oz Myers's dark rum across the top to create an authentic tiki two-tone contrast.",
      "Garnish with pineapple slices and cherries!"
    ],
    beachTip: "In 90° Vacation sunshine, frozen blender drinks turn into warm syrupy soup in under 5 minutes. Serving Piña Coladas heavily iced on the rocks keeps the coconut rich, frosty, and ice-cold to the very last sip."
  },
  classic_mai_tai: {
    title: "🌺 The 1944 Mai Tai (Authentic Polynesian Tiki)",
    tag: "Dual Rums, Triple Sec, Orgeat & Lime • 32-oz Vessel",
    desc: "The authentic, unadulterated 1944 recipe that launched the tiki craze—not the neon red fruit punch masquerading under its name! Crisp white rum, dark Jamaican rum float, DeKuyper Triple Sec, sweet almond orgeat/syrup, and tart fresh lime juice.",
    single: [
      "2.5 oz Bacardi Superior White Rum",
      "2 oz Myers's Original Dark Rum (heavy surface float)",
      "1.5 oz DeKuyper Triple Sec 48°",
      "1.5 oz Orgeat / Almond Syrup (or simple syrup with almond drop)",
      "2 oz Fresh Squeezed Lime Juice",
      "2 oz Florida Orange Juice splash",
      "Packed with crushed ice in 32-oz Vessel or Yeti",
      "Garnish: Spent half-lime shell & fresh mint sprig"
    ],
    pitcher: [
      "10 oz Bacardi Superior White Rum",
      "8 oz Myers's Dark Rum (for floating)",
      "6 oz DeKuyper Triple Sec",
      "6 oz Orgeat / Almond Syrup",
      "8 oz Fresh Lime Juice",
      "8 oz Fresh Orange Juice",
      "Serves: 4 Full 32-oz Vessels (1-Gallon Batch)"
    ],
    steps: [
      "Combine white rum, triple sec, orgeat, lime juice, and orange juice in a pitcher with ice. Stir vigorously.",
      "Pack 32-oz vessels with crushed ice.",
      "Pour cocktail base over ice, leaving 1.5 inches at top.",
      "Float 2 oz Myers's dark rum over the surface.",
      "Invert a spent half-lime shell on top of the ice and insert a mint sprig for the iconic 1944 tiki island-and-palm-tree presentation!"
    ],
    beachTip: "The dark rum floater is key! Drinking through a straw lets you taste the bright citrus-almond base first, followed by the aromatic molasses warmth of Jamaican dark rum as the ice chills down."
  },
  classic_paloma: {
    title: "🍈 The Coastal Vacation Paloma (Tequila & Grapefruit Cooler)",
    tag: "Espolòn 100% Agave, Grapefruit & Tajín • 32-oz Bucket",
    desc: "Mexico's most beloved everyday highball and the ultimate thirst-quencher under the Vacation sun! Crisp 100% Blue Agave Espolòn tequila, fresh lime juice, a pinch of sea salt, and fizzy pink grapefruit soda with a spicy Tajín rim.",
    single: [
      "4 oz Espolòn 100% Blue Agave Tequila (Blanco or Reposado)",
      "2 oz Fresh Squeezed Lime Juice",
      "1/2 oz Pure Agave Nectar",
      "Pinch of Coarse Sea Salt (enhances grapefruit sweetness)",
      "10 oz Chilled Grapefruit Soda (Squirt, Jarritos Grapefruit, or Fever-Tree)",
      "Tajín Clásico & salt rim on bucket",
      "Packed with fresh ice in 32-oz Vessel or Yeti",
      "Garnish: Fresh pink grapefruit wedge & lime wheel"
    ],
    pitcher: [
      "16 oz Espolòn Tequila",
      "8 oz Fresh Lime Juice",
      "2 oz Pure Agave Nectar",
      "1/2 tsp Sea Salt",
      "40 oz Chilled Grapefruit Soda (add just before serving)",
      "Serves: 4 Full 32-oz Vessels (1-Gallon Batch)"
    ],
    steps: [
      "Moisten rim of 32-oz buckets with a lime wedge and press into 50/50 Tajín and coarse sea salt.",
      "Whisk tequila, lime juice, agave nectar, and sea salt in a pitcher until salt is dissolved.",
      "Fill buckets to the brim with fresh ice.",
      "Pour tequila-lime mix over ice, then top each bucket with 10 oz chilled grapefruit soda.",
      "Garnish with grapefruit wedges and lime wheels!"
    ],
    beachTip: "A tiny pinch of sea salt in a Paloma isn't optional—it cuts the bitterness of the grapefruit and makes the natural sweet agave flavors pop in the Gulf humidity."
  },
  classic_tequila_sunrise: {
    title: "🌅 Classic Tequila Sunrise (Gulf Coast Ombre Sunset)",
    tag: "Espolòn Tequila, Fresh Citrus OJ & Sunken Grenadine • 32-oz Bucket",
    desc: "The 1970s Sausalito classic made world-famous by the Rolling Stones! Smooth Espolòn 100% Blue Agave Tequila and chilled Florida orange juice layered over ice with a slow-drizzled crimson grenadine sunrise that sinks to the bottom.",
    single: [
      "4 oz Espolòn 100% Blue Agave Tequila",
      "8 oz Fresh Florida Orange Juice",
      "1 oz Rose's Grenadine Syrup (drizzled slowly down the side)",
      "Squeeze of 1 fresh lime wedge",
      "Packed with ice in 32-oz Souvenir Bucket or Yeti",
      "Garnish: Orange wheel, lime wheel & Maraschino cherries"
    ],
    pitcher: [
      "16 oz Espolòn Tequila",
      "32 oz Fresh Florida Orange Juice",
      "4 oz Grenadine (drizzled individually into buckets)",
      "Juice of 2 fresh limes",
      "Serves: 4 Full 32-oz Buckets (1-Gallon Batch)"
    ],
    steps: [
      "Mix tequila, fresh orange juice, and lime juice in a pitcher with ice.",
      "Pack 32-oz buckets full of fresh ice.",
      "Pour tequila-orange mixture over the ice until 1.5 inches from top.",
      "Slowly drizzle 1 oz Rose's Grenadine down the inside wall of each bucket. It will sink to the bottom creating a brilliant sunrise gradient!",
      "Do not stir before serving; let guests enjoy watching the colors blend as the ice melts."
    ],
    beachTip: "Dense pomegranate grenadine sinks rapidly through lighter citrus juices. To get the cleanest gradient, pour it slowly over the back of a spoon pressed against the inside rim of the cup."
  },
  classic_moscow_mule: {
    title: "🧊 Classic Moscow Mule (Tito's Copper Cooler)",
    tag: "Tito's Vodka, Fiery Ginger Beer & Slapped Mint • 32-oz Mug/Yeti",
    desc: "The crisp, spicy 1941 cocktail that made vodka famous in America! 6x-distilled Tito's Handmade Vodka, spicy craft ginger beer, fresh tart lime juice, and aromatic mint over cracked ice in your 30–40oz Yeti tumbler.",
    single: [
      "4 oz Tito's Handmade Vodka (Retail Spirits 1.75L)",
      "2 oz Fresh Squeezed Lime Juice (approx. 1.5 fresh limes)",
      "1/2 oz Simple Syrup or Agave Nectar",
      "10 oz Chilled Craft Ginger Beer (Q or Fever-Tree)",
      "Packed with crushed ice in 32-oz Mug or Yeti",
      "Garnish: Lime wheels & slapped fresh mint sprigs"
    ],
    pitcher: [
      "16 oz Tito's Handmade Vodka",
      "8 oz Fresh Lime Juice",
      "2 oz Agave Nectar",
      "40 oz Craft Ginger Beer (two 4-packs)",
      "Serves: 4 Full 32-oz Vessels (1-Gallon Batch)"
    ],
    steps: [
      "Whisk Tito's vodka, lime juice, and simple syrup in a pitcher with ice.",
      "Pack 32-oz mugs or Yeti tumblers with crushed ice.",
      "Pour vodka-lime mix over ice, then top with spicy ginger beer.",
      "Slap fresh mint sprigs between your hands to release aromatic oils and tuck into the ice with a lime wheel."
    ],
    beachTip: "Always choose a spicy, high-carbonation craft ginger beer (like Q Mixers or Fever-Tree) rather than sweet ginger ale. The spicy ginger bite balances the vodka and keeps you energized."
  },
  classic_daiquiri: {
    title: "🌴 The Classic Cuban Daiquiri (Hemingway Beach Style)",
    tag: "Crisp Bacardi Rum, Tart Florida Limes & Cane Sugar • 32-oz Vessel",
    desc: "The real 1898 Cuban Daiquiri—crisp, tart, elegant, and nothing like frozen supermarket slush! Crisp Bacardi Superior white rum, freshly squeezed tart lime juice, and pure cane sugar syrup shaken hard over ice.",
    single: [
      "4.5 oz Bacardi Superior White Rum",
      "3 oz Fresh Squeezed Lime Juice",
      "2 oz Pure Cane Sugar Simple Syrup",
      "Splash of Ocean Spray Cranberry (optional Hemingway pink blush)",
      "Packed with cracked ice in 32-oz Vessel or Yeti",
      "Garnish: Dehydrated or fresh lime wheels"
    ],
    pitcher: [
      "18 oz Bacardi White Rum",
      "12 oz Fresh Lime Juice",
      "8 oz Pure Cane Simple Syrup",
      "Serves: 4 Full 32-oz Vessels (1-Gallon Batch)"
    ],
    steps: [
      "Combine rum, fresh lime juice, and simple syrup in a pitcher with plenty of ice.",
      "Stir or shake vigorously for 30 seconds until condensation frosts on the pitcher.",
      "Pour over fresh ice in 32-oz vessels and garnish with lime wheels."
    ],
    beachTip: "The classic Daiquiri is the ultimate bartender test of balance: 2 parts spirit, 1 part sour, 1 part sweet. Adjust lime and cane sugar to taste depending on how tart your Florida limes are!"
  },
  classic_espresso_martini: {
    title: "☕ The Beach Espresso Martini (Cold Brew Edition)",
    tag: "Tito's Vodka, Kahlúa & Rich Cold Brew • 32-oz Vessel",
    desc: "The reigning champion of evening cocktails, adapted for condo living! No espresso machine required: ultra-concentrated chilled cold brew coffee shaken with Tito's Handmade Vodka, Kahlúa, and simple syrup for a rich, creamy crema head over ice.",
    single: [
      "3.5 oz Tito's Handmade Vodka",
      "2 oz Kahlúa Original Coffee Liqueur",
      "6 oz Concentrated Chilled Cold Brew Coffee (Stok Unsweetened)",
      "1 oz Vanilla Simple Syrup or Agave Nectar",
      "Optional: 1 oz Carolans Irish Cream float (creamy flat white style)",
      "Packed with ice in 32-oz Vessel or Yeti",
      "Garnish: 3 espresso coffee beans floating on crema & cocoa dusting"
    ],
    pitcher: [
      "14 oz Tito's Vodka",
      "8 oz Kahlúa Coffee Liqueur",
      "24 oz Chilled Cold Brew Coffee",
      "4 oz Vanilla Syrup",
      "Serves: 4 Full 32-oz Vessels (1-Gallon Batch)"
    ],
    steps: [
      "In a cocktail shaker or mason jar, shake vodka, Kahlúa, cold brew, and syrup vigorously with ice for 25 seconds until a thick, frothy crema forms.",
      "Strain into 32-oz vessels packed with fresh ice.",
      "Top with 3 coffee beans (representing health, wealth, and happiness!)."
    ],
    beachTip: "Using unsweetened dark cold brew (like Stok Extra Bold) gives you all the punch and crema of authentic espresso without heating up an appliance in your beach condo."
  },
  classic_long_island: {
    title: "⚡ The Long Island Iced Tea (Vacation Pour)",
    tag: "5-Spirits Powerhouse with Cola Splash • 32-oz Legend",
    desc: "The undisputed heavyweight champion of high-volume party cocktails! An equal-parts blend of Tito's vodka, Bacardi rum, Espolòn tequila, Beefeater gin, and triple sec, balanced with fresh lemon sour and finished with a splash of Coca-Cola.",
    single: [
      "1 oz Tito's Handmade Vodka",
      "1 oz Bacardi Superior White Rum",
      "1 oz Espolòn 100% Blue Agave Tequila",
      "1 oz Beefeater London Dry Gin",
      "1 oz DeKuyper Triple Sec 48° (5 oz total spirits)",
      "3 oz Fresh Squeezed Lemon Juice",
      "1.5 oz Simple Syrup",
      "4 oz Chilled Coca-Cola (for signature iced tea color)",
      "Packed with ice in 32-oz Souvenir Bucket or Yeti",
      "Garnish: Lemon wheel & Maraschino cherry"
    ],
    pitcher: [
      "4 oz Vodka, 4 oz Rum, 4 oz Tequila, 4 oz Gin, 4 oz Triple Sec (20 oz spirits)",
      "12 oz Fresh Lemon Juice",
      "6 oz Simple Syrup",
      "16 oz Coca-Cola",
      "Serves: 4 Full 32-oz Souvenir Buckets (1-Gallon Batch)"
    ],
    steps: [
      "Combine all five spirits, lemon juice, and simple syrup in a pitcher with ice.",
      "Fill 32-oz vessels with fresh ice.",
      "Pour spirit mix over ice, leaving 2 inches at the top.",
      "Top with chilled Coca-Cola to create the trademark golden iced-tea amber hue!",
      "Garnish with fresh lemon wheels."
    ],
    beachTip: "The secret to a great Long Island is real fresh lemon juice and simple syrup instead of chemical sour mix from a plastic gun. Fresh citrus makes 5 ounces of spirits taste as crisp as sweet sun tea!"
  },
  classic_whiskey_sour: {
    title: "🥃 Classic Whiskey Sour (Balcony Sunset Cooler)",
    tag: "Bushmills Irish Whiskey, Fresh Lemon & Bitters • 32-oz Vessel",
    desc: "The 1870s American classic! Smooth triple-distilled Bushmills Irish whiskey (or bourbon) shaken with freshly squeezed tart lemon juice and pure simple syrup, accented with dashes of aromatic bitters over rocks.",
    single: [
      "4 oz Bushmills Original Irish Whiskey",
      "3 oz Fresh Squeezed Lemon Juice",
      "2 oz Pure Simple Syrup",
      "4 dashes Angostura Aromatic Bitters",
      "2 oz Splash of Club Soda (for balcony highball effervescence)",
      "Packed with ice in 32-oz Vessel or Yeti",
      "Garnish: Orange wheel, Maraschino cherry & lemon wheel"
    ],
    pitcher: [
      "16 oz Bushmills Irish Whiskey",
      "12 oz Fresh Lemon Juice",
      "8 oz Simple Syrup",
      "16 dashes Angostura Bitters",
      "8 oz Club Soda",
      "Serves: 4 Full 32-oz Vessels (1-Gallon Batch)"
    ],
    steps: [
      "Combine whiskey, fresh lemon juice, simple syrup, and bitters in a pitcher with ice.",
      "Stir until thoroughly chilled.",
      "Pour over ice in 32-oz vessels, splash with club soda, and garnish with citrus wheels and cherries."
    ],
    beachTip: "A splash of club soda over the ice turns a heavy whiskey sour into a refreshing highball cooler that drinks wonderfully in warm Gulf breezes."
  },
  classic_dark_and_stormy: {
    title: "⛈️ The Classic Dark 'n Stormy (Bermuda Rum Punch)",
    tag: "Myers's Jamaican Dark Rum & Fiery Ginger Beer • 32-oz Vessel",
    desc: "The legendary Bermuda maritime highball! Fiery craft ginger beer and fresh lime juice poured over ice, crowned with a dense, ominous cloud of rich Myers's Jamaican dark rum floating across the surface.",
    single: [
      "4 oz Myers's Original Dark Rum (heavy cloud float)",
      "10 oz Spicy Craft Ginger Beer (Q or Fever-Tree)",
      "1.5 oz Fresh Squeezed Lime Juice",
      "1/2 oz Simple Syrup",
      "Packed with fresh ice in 32-oz Vessel or Yeti",
      "Garnish: Lime wheel & Maraschino cherry"
    ],
    pitcher: [
      "16 oz Myers's Dark Rum (for floaters)",
      "40 oz Spicy Ginger Beer",
      "6 oz Fresh Lime Juice",
      "2 oz Simple Syrup",
      "Serves: 4 Full 32-oz Vessels (1-Gallon Batch)"
    ],
    steps: [
      "In each 32-oz vessel, add lime juice, simple syrup, and fill completely with fresh ice.",
      "Pour ginger beer over ice until 2 inches from the brim.",
      "Gently pour 4 oz Myers's dark rum over the back of a spoon to create a thick dark floating cloud layer!"
    ],
    beachTip: "Do not stir before serving. The drink gets its name from looking like 'a cloud only a fool or a dead man would sail under.' Sip it through the straw to experience the spicy ginger beer rising into the rich rum!"
  },
  classic_coconut_limeade_kid: {
    title: "🧒 Tropical Coconut Limeade (0.0% ABV Beach Cooler)",
    tag: "Coco López, Fresh Lime, Lemonade & Soda • 32-oz Bucket for Kids!",
    desc: "A Brazilian-style creamy coconut limeade for the kids and designated drivers! Silky Coco López cream of coconut whisked with fresh tart lime juice, chilled Simply Lemonade, and fizzy Sprite or club soda over ice—100% alcohol free!",
    single: [
      "3 oz Coco López Real Cream of Coconut",
      "3 oz Fresh Squeezed Lime Juice",
      "4 oz Chilled Simply Lemonade",
      "6 oz Sprite / Club Soda",
      "Packed with ice in 32-oz Bucket",
      "Garnish: Lime wheels, Maraschino cherries & festive straws"
    ],
    pitcher: [
      "12 oz Coco López Cream of Coconut",
      "12 oz Fresh Lime Juice",
      "16 oz Simply Lemonade",
      "24 oz Sprite or Club Soda",
      "Serves: 4 Full 32-oz Buckets (100% Non-Alcoholic)"
    ],
    steps: [
      "Whisk cream of coconut with lime juice and lemonade in a pitcher until frothy and smooth.",
      "Fill 32-oz buckets with ice.",
      "Pour coconut-lime blend over ice and top with fizzy soda.",
      "Garnish with cherries and colorful straws!"
    ],
    beachTip: "This creamy, frosty mocktail tastes just like Key Lime Pie in a cup! The kids will feel like they have their own VIP beach bucket."
  }
};

    function showClassicRecipe(key) {
      const r = classicRecipeData[key] || classicRecipeData[Object.keys(classicRecipeData)[0]];
      const fullKey = 'cl_' + key;
      const meta = drinkMetadata[fullKey] || {};

      const singleItems = r.single.map(i => `<li>${scaleIngredientText(i, activeVesselMultiplier)}</li>`).join('');
      const pitcherItems = r.pitcher.map(i => `<li>${i}</li>`).join('');
      const stepsHtml = r.steps.map(s => `<li>${s}</li>`).join('');

      const displayArea = document.getElementById('classicRecipeDisplayArea');
      if (!displayArea) return;

      const inCart = (typeof customBarSelectedDrinks !== 'undefined' && customBarSelectedDrinks.has(fullKey));
      const cartBtnHtml = `
        <button type="button" class="qol-btn" onclick="toggleCustomDrinkFromRecipe('${fullKey}')" style="background: ${inCart ? '#16a34a' : '#0284c7'}; color: #fff; font-size: 0.82rem; padding: 6px 14px; font-weight: 700; border-radius: var(--radius-full); display: inline-flex; align-items: center; gap: 6px; cursor: pointer; border: none; box-shadow: 0 2px 6px rgba(0,0,0,0.15); transition: var(--transition);">
          <span>${inCart ? '✓ In Combined Bar Cart' : '➕ Add to Combined Bar Cart'}</span>
        </button>
      `;

      // Potency badge
      let potencyHtml = '';
      if (meta.potency === 'mocktail') {
        potencyHtml = '<span class="potency-badge potency-mocktail">🧒 0.0% ABV • Kid & Driver Mocktail</span>';
      } else if (meta.potency === 'high') {
        potencyHtml = `<span class="potency-badge potency-high">⚡ High-Octane (~16% ABV • ${meta.spiritsOz} oz Spirits • Limit 3!)</span>`;
      } else {
        potencyHtml = `<span class="potency-badge potency-med">🍹 Standard Beach Pour (~11% ABV • ${meta.spiritsOz} oz Spirits)</span>`;
      }

      // Layer preview bar if layers exist
      let layerHtml = '';
      if (meta.layers && meta.layers.length > 1) {
        const gradStops = meta.layers.map((col, idx) => `${col} ${(idx / (meta.layers.length - 1)) * 100}%`).join(', ');
        const legendItems = meta.layers.map((col, idx) => `
          <span><span class="layer-legend-dot" style="background: ${col};"></span> ${meta.layerNames?.[idx] || 'Layer ' + (idx+1)}</span>
        `).join('');
        layerHtml = `
          <div style="margin: 14px 0 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">
              <span>🎨 Authentic Visual Layering &amp; Float Guide:</span>
              <span style="font-size: 0.72rem;">Bottom ➔ Surface Float</span>
            </div>
            <div class="layer-preview-bar" style="background: linear-gradient(to right, ${gradStops});"></div>
            <div class="layer-legend">${legendItems}</div>
          </div>
        `;
      }

      updateCarouselActivePill('cl', key);
      const sel = document.getElementById('mcguiresDrinkRecipeSelect'); if (sel) sel.value = key;
      displayArea.innerHTML = `
        ${getReturnBreadcrumbHtml()}
        ${getStepperHtml('cl', key, classicRecipeData)}
        ${renderPriceComparisonCard(fullKey)}
        <div class="recipe-display-card" id="recipeCard_${key}" style="border-left: 4px solid #0284c7;">
          <div class="recipe-title-bar">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 4px;">
                <h3 style="font-size: 1.25rem; color: var(--text-main); margin: 0;">${r.title}</h3>
                ${potencyHtml}
              </div>
              <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 2px;">${r.desc}</p>
            </div>
            <div class="recipe-badge-row">
              <span class="deal-badge" style="background: var(--primary-light); color: #0284c7; font-weight: 700;">${r.tag}</span>
              ${cartBtnHtml}
              <button type="button" class="qol-btn" onclick="openBartenderMode('${key}')" style="background: #0f172a; color: #38bdf8; border: 1px solid #38bdf8; font-size: 0.82rem; padding: 6px 14px; font-weight: 700;">
                <span>👨‍🍳</span> Bartender Mode
              </button>
            </div>
          </div>

          ${layerHtml}

          <!-- INTERACTIVE VESSEL & BATCH SCALER -->
          <div class="vessel-scaler-container">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
              <span style="font-size: 0.82rem; font-weight: 800; color: var(--text-main);">📏 Select Serving Vessel or Beach Cooler Size:</span>
              <span style="font-size: 0.76rem; color: var(--text-muted); font-weight: 600;">Ounces automatically recalculate in real-time</span>
            </div>
            <div class="vessel-btn-row">
              <span style="font-size: 0.74rem; font-weight: 700; color: var(--text-muted); align-self: center; margin-right: 4px;">Single:</span>
              <button type="button" class="vessel-btn" onclick="setVesselScale(0.5, '16-oz Solo Cup', '${key}', 'recipeCard_${key}')">16-oz Solo</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(0.94, '30-oz Yeti Tumbler', '${key}', 'recipeCard_${key}')">30-oz Yeti</button>
              <button type="button" class="vessel-btn active" onclick="setVesselScale(1.0, '32-oz Bucket (1×)', '${key}', 'recipeCard_${key}')">32-oz Bucket (1×)</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(1.25, '40-oz Stanley Mug', '${key}', 'recipeCard_${key}')">40-oz Stanley</button>
              <span style="font-size: 0.74rem; font-weight: 700; color: var(--text-muted); align-self: center; margin: 0 4px 0 8px;">Batches:</span>
              <button type="button" class="vessel-btn" onclick="setVesselScale(2.0, 'Half-Gallon Pitcher (2×)', '${key}', 'recipeCard_${key}')">Half-Gal (2×)</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(4.0, '1-Gallon Condo Pitcher (4×)', '${key}', 'recipeCard_${key}')">1-Gal Pitcher (4×)</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(8.0, '2-Gallon Beach Jug (8×)', '${key}', 'recipeCard_${key}')">2-Gal Beach Jug (8×)</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(20.0, '5-Gallon Party Cooler (20×)', '${key}', 'recipeCard_${key}')">5-Gal Cooler (20×)</button>
            </div>
          </div>

          <div class="recipe-grid">
            <div class="ingredient-box" style="border-color: #0284c7;">
              <h4 style="color: #0284c7;"><span>🪣</span> Dynamic Vessel Measurements:</h4>
              <ul class="ingredient-list dynamic-scale-list">${singleItems}</ul>
            </div>
            <div class="ingredient-box" style="border-color: var(--primary);">
              <h4 style="color: var(--primary);"><span>🍹</span> Standard 1-Gallon Condo Batch (Pours 4× 32-oz Vessels):</h4>
              <ul class="ingredient-list">${pitcherItems}</ul>
            </div>
          </div>

          <div class="recipe-steps-box" style="border-left: 3px solid #0284c7;">
            <h4 style="color: #0284c7;"><span>📋</span> Mixing &amp; Pouring Instructions (On The Rocks):</h4>
            <ol class="recipe-steps-list">${stepsHtml}</ol>
          </div>

          <div class="insider-tip" style="margin-top: 12px; border-left-color: #0284c7;">
            💡 <strong>Beach Pro-Tip:</strong> ${r.beachTip || ''}
            <div style="font-size: 0.8rem; margin-top: 6px; color: #0284c7; font-weight: 700;">
              ☀️ <strong>Florida Heat Safety:</strong> In summer beach humidity, pace with 1 full glass of ice water per 32-oz vessel!
            </div>
          </div>
        </div>
      `;
    }

function copyClassicsBarList() {
  setCustomDrinkPreset('classics');
  const cartElem = document.getElementById('section-custombar');
  if (cartElem) {
    cartElem.scrollIntoView({ behavior: 'smooth' });
  }
  setTimeout(() => {
    copyCustomBarShoppingList();
  }, 400);
}

function copyBarShoppingList() {
  setCustomDrinkPreset('backporch');
  const cartElem = document.getElementById('section-custombar');
  if (cartElem) {
    cartElem.scrollIntoView({ behavior: 'smooth' });
  }
  setTimeout(() => {
    copyCustomBarShoppingList();
  }, 400);
}

    function showOldBayRecipe(key) {
      const r = oldBayRecipeData[key] || oldBayRecipeData.obs_blt;
      const fullKey = key.startsWith('obs_') ? key : 'obs_' + key;
      const strippedKey = key.replace('obs_', '');
      const meta = drinkMetadata[fullKey] || {};

      const singleItems = r.single.map(i => `<li>${scaleIngredientText(i, activeVesselMultiplier)}</li>`).join('');
      const pitcherItems = r.pitcher.map(i => `<li>${i}</li>`).join('');
      const stepsHtml = r.steps.map(s => `<li>${s}</li>`).join('');

      const displayArea = document.getElementById('oldBayRecipeDisplayArea');
      if (!displayArea) return;

      const inCart = (typeof customBarSelectedDrinks !== 'undefined' && customBarSelectedDrinks.has(fullKey));
      const cartBtnHtml = `
        <button type="button" class="qol-btn" onclick="toggleCustomDrinkFromRecipe('${fullKey}')" style="background: ${inCart ? '#16a34a' : '#c2410c'}; color: #fff; font-size: 0.82rem; padding: 6px 14px; font-weight: 700; border-radius: var(--radius-full); display: inline-flex; align-items: center; gap: 6px; cursor: pointer; border: none; box-shadow: 0 2px 6px rgba(0,0,0,0.15); transition: var(--transition);">
          <span>${inCart ? '✓ In Combined Bar Cart' : '➕ Add to Combined Bar Cart'}</span>
        </button>
      `;

      let potencyHtml = '';
      if (meta.potency === 'mocktail') {
        potencyHtml = '<span class="potency-badge potency-mocktail">🧒 0.0% ABV • Kid & Driver Mocktail</span>';
      } else if (meta.potency === 'high') {
        potencyHtml = `<span class="potency-badge potency-high">⚡ High-Octane (~16% ABV • ${meta.spiritsOz} oz Spirits • Limit 3!)</span>`;
      } else {
        potencyHtml = `<span class="potency-badge potency-med">🍹 Standard Beach Pour (~11% ABV • ${meta.spiritsOz} oz Spirits)</span>`;
      }

      let layerHtml = '';
      if (meta.layers && meta.layers.length > 1) {
        const gradStops = meta.layers.map((col, idx) => `${col} ${(idx / (meta.layers.length - 1)) * 100}%`).join(', ');
        const legendItems = meta.layers.map((col, idx) => `
          <span><span class="layer-legend-dot" style="background: ${col};"></span> ${meta.layerNames?.[idx] || 'Layer ' + (idx+1)}</span>
        `).join('');
        layerHtml = `
          <div style="margin: 14px 0 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">
              <span>🎨 Authentic Visual Layering &amp; Float Guide:</span>
              <span style="font-size: 0.72rem;">Bottom ➔ Surface Float</span>
            </div>
            <div class="layer-preview-bar" style="background: linear-gradient(to right, ${gradStops});"></div>
            <div class="layer-legend">${legendItems}</div>
          </div>
        `;
      }

      updateCarouselActivePill('obs', key);
      const sel = document.getElementById('mcguiresDrinkRecipeSelect'); if (sel) sel.value = key;
      displayArea.innerHTML = `
        ${getReturnBreadcrumbHtml()}
        ${getStepperHtml('obs', key, oldBayRecipeData)}
        ${renderPriceComparisonCard(fullKey)}
        <div class="recipe-display-card" id="recipeCard_${strippedKey}" style="border-left: 4px solid #c2410c;">
          <div class="recipe-title-bar">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 4px;">
                <h3 style="font-size: 1.25rem; color: var(--text-main); margin: 0;">${r.title}</h3>
                ${potencyHtml}
              </div>
              <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 2px;">${r.desc}</p>
            </div>
            <div class="recipe-badge-row">
              <span class="deal-badge" style="background: #ffedd5; color: #c2410c; font-weight: 700;">${r.tag}</span>
              ${cartBtnHtml}
              <button type="button" class="qol-btn" onclick="openBartenderMode('${strippedKey}')" style="background: #0f172a; color: #38bdf8; border: 1px solid #38bdf8; font-size: 0.82rem; padding: 6px 14px; font-weight: 700;">
                <span>👨‍🍳</span> Bartender Mode
              </button>
            </div>
          </div>

          ${layerHtml}

          <!-- INTERACTIVE VESSEL & BATCH SCALER -->
          <div class="vessel-scaler-container">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
              <span style="font-size: 0.82rem; font-weight: 800; color: var(--text-main);">📏 Select Serving Vessel or Beach Cooler Size:</span>
              <span style="font-size: 0.76rem; color: var(--text-muted); font-weight: 600;">Ounces automatically recalculate in real-time</span>
            </div>
            <div class="vessel-btn-row">
              <span style="font-size: 0.74rem; font-weight: 700; color: var(--text-muted); align-self: center; margin-right: 4px;">Single:</span>
              <button type="button" class="vessel-btn" onclick="setVesselScale(0.5, '16-oz Solo Cup', '${strippedKey}', 'recipeCard_${strippedKey}')">16-oz Solo</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(0.94, '30-oz Yeti Tumbler', '${strippedKey}', 'recipeCard_${strippedKey}')">30-oz Yeti</button>
              <button type="button" class="vessel-btn active" onclick="setVesselScale(1.0, '32-oz Bucket (1×)', '${strippedKey}', 'recipeCard_${strippedKey}')">32-oz Bucket (1×)</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(1.25, '40-oz Stanley Mug', '${strippedKey}', 'recipeCard_${strippedKey}')">40-oz Stanley</button>
              <span style="font-size: 0.74rem; font-weight: 700; color: var(--text-muted); align-self: center; margin: 0 4px 0 8px;">Batches:</span>
              <button type="button" class="vessel-btn" onclick="setVesselScale(2.0, 'Half-Gallon Pitcher (2×)', '${strippedKey}', 'recipeCard_${strippedKey}')">Half-Gal (2×)</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(4.0, '1-Gallon Condo Pitcher (4×)', '${strippedKey}', 'recipeCard_${strippedKey}')">1-Gal Pitcher (4×)</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(8.0, '2-Gallon Beach Jug (8×)', '${strippedKey}', 'recipeCard_${strippedKey}')">2-Gal Beach Jug (8×)</button>
              <button type="button" class="vessel-btn" onclick="setVesselScale(20.0, '5-Gallon Party Cooler (20×)', '${strippedKey}', 'recipeCard_${strippedKey}')">5-Gal Cooler (20×)</button>
            </div>
          </div>

          <div class="recipe-grid">
            <div class="ingredient-box" style="border-color: #c2410c;">
              <h4 style="color: #c2410c;"><span>🪣</span> Dynamic Vessel Measurements:</h4>
              <ul class="ingredient-list dynamic-scale-list">${singleItems}</ul>
            </div>
            <div class="ingredient-box" style="border-color: var(--primary);">
              <h4 style="color: var(--primary);"><span>🍹</span> Standard 1-Gallon Condo Batch (Pours 4× 32-oz Vessels):</h4>
              <ul class="ingredient-list">${pitcherItems}</ul>
            </div>
          </div>

          <div class="recipe-steps-box" style="border-left: 3px solid #c2410c;">
            <h4 style="color: #c2410c;"><span>📋</span> Mixing &amp; Pouring Instructions (On The Rocks):</h4>
            <ol class="recipe-steps-list">${stepsHtml}</ol>
          </div>

          <div class="insider-tip" style="margin-top: 12px; border-left-color: #c2410c;">
            💡 <strong>Steamer Pro-Tip:</strong> ${r.beachTip || ''}
            <div style="font-size: 0.8rem; margin-top: 6px; color: #c2410c; font-weight: 700;">
              🦀 <strong>Seafood Pairing:</strong> Outstanding palate cleanser with steamed King Crab, Snow Crab &amp; Royal Red Shrimp!
            </div>
          </div>
        </div>
      `;
    }

    function copyOldBayBarList() {
      setCustomDrinkPreset('oldbay');
      const cartElem = document.getElementById('section-custombar');
      if (cartElem) {
        cartElem.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        copyCustomBarShoppingList();
      }, 400);
    }

function copyMcguiresBarList() {
  setCustomDrinkPreset('mcguires');
  const cartElem = document.getElementById('section-custombar');
  if (cartElem) {
    cartElem.scrollIntoView({ behavior: 'smooth' });
  }
  setTimeout(() => {
    copyCustomBarShoppingList();
  }, 400);
}

// ==========================================================================
// SMART CONSOLIDATED VACATION BAR BUILDER & CART CONTROLLER
// ==========================================================================
