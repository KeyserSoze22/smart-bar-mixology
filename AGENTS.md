# Global Token Optimization & Agent Architecture Standards

## 1. Universal Token Reduction Rules (Applies to All Projects & Sessions)
These rules are strictly enforced to minimize input/output token consumption in Antigravity and Gemini:

### A. Surgical File Reads (Hard Cap: Max 50–100 Lines)
- **NEVER** view or dump entire files (>150 lines) into conversation context.
- Always locate functions, variables, or bugs using grep_search (with MatchPerLine: true).
- Once located, read ONLY the precise line range (e.g., StartLine: 120, EndLine: 170) using iew_file.
- For directory exploration, use ind_by_name with specific glob patterns rather than unbounded directory listings.

### B. Terse Responses (Zero Code Duplication in Chat)
- When code has been created or modified in a file, **DO NOT** re-print the full code or large blocks in the chat response.
- Summarize changes concisely using bullet points and provide clickable file links with line ranges: [file.js:L40-L65](file:///...).
- Keep explanations crisp, actionable, and free of conversational fluff.

### C. Quiet Terminal Execution (Zero Log Bloat)
- Every line of command output remains permanently in conversation context for all subsequent turns.
- Suppress noisy outputs: use --quiet, --silent, -q, or pipe through concise summaries.
- Avoid polling loops or watching commands (gh run watch, repeated manage_task list).
- When running Python scripts for automation, ensure scripts print only status indicators (e.g. [✓] done) rather than dumping JSON or HTML.

### D. Local-First Development (No Unsolicited Pushes)
- All development, refactoring, and verifications must happen locally on the user's machine.
- Verify JavaScript with 
ode --check and test with headless tools without verbose outputs.
- **NEVER** push to GitHub, create remote PRs, or trigger remote CI runs unless the user explicitly commands it in that prompt.

### E. Single Source of Truth (No Mirror Files)
- Never create duplicate mirror files or redundant backups in the workspace.
- Modularize large files into single-responsibility components so agents only touch small files (<300 lines).

---

## 2. Smart Bar Mixology Module Map
When working on the Smart Bar Mixology app, respect the modular architecture:
- index.html: Clean HTML markup shell (~960 lines). Do NOT inline CSS or JS.
- css/styles.css: Complete styling, themes, and animations.
- js/recipes-data.js: Static database for all 46 cocktail recipes, portioning, and float layers (~1,970 lines).
- js/pricing-data.js: Bar menu pricing, retail bottle benchmarks, and tier helpers (~430 lines).
- js/app.js: Core interaction logic, filters, carousels, search, cart builder, and PWA controllers (~1,920 lines).
- manifest.webmanifest & sw.js: PWA configuration and offline caching.
