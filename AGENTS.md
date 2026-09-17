# Agent Guidelines & Token Optimization Standards for Smart Bar Mixology

## Architecture & File Map
This project is structured into modular, single-responsibility files to maintain minimal token footprint:
- index.html: Clean HTML markup shell (~960 lines). DO NOT re-inline CSS or JS.
- css/styles.css: Complete application styling and animations (~4,700 lines).
- js/recipes-data.js: Static database for all 46 cocktail recipes and metadata (~1,970 lines).
- js/pricing-data.js: Bar menu pricing, retail bottle benchmarks, and tier helpers (~430 lines).
- js/app.js: Core application logic, event handlers, cart builder, filters, and PWA controllers (~1,920 lines).
- manifest.webmanifest & sw.js: PWA configuration and offline caching.

## Token Efficiency Rules (Strictly Enforced)
1. **Surgical File Reads**:
   - Always read specific targeted line ranges (max 50–100 lines) using grep or slice tools.
   - Never load entire files into the conversation context when locating functions or making minor edits.
2. **Targeted Modular Editing**:
   - When updating pricing, edit ONLY js/pricing-data.js.
   - When modifying recipes or ingredients, edit ONLY js/recipes-data.js.
   - When adjusting styles, edit ONLY css/styles.css.
   - When changing UI logic, edit ONLY js/app.js.
   - Never duplicate code across multiple mirror files.
3. **Local-First Verification (No Unsolicited Pushes)**:
   - Perform all updates and test verifications locally.
   - Verify JS with 
ode --check and test with headless tools without verbose outputs.
   - DO NOT push to GitHub or create remote PRs unless the user explicitly requests it.
4. **Terse Command Outputs**:
   - Limit console output and suppress verbose compiler/runner logs to avoid bloating context history.
