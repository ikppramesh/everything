# Everything Platform — Project Context

Auto-read by Claude Code at the start of every session.

---

## Project Summary

| Field | Value |
|-------|-------|
| **Live URL** | https://ikppramesh.github.io/everything/ |
| **GitHub repo** | https://github.com/ikppramesh/everything |
| **Solutions** | 62 across 15 categories |
| **Tech stack** | Vanilla HTML/CSS/JS, Node.js build system |
| **Hosting** | GitHub Pages (main branch, `.nojekyll` present) |

---

## Build System

### Entry points

| File | Purpose |
|------|---------|
| `build.js` | Source of truth — contains the `SOLUTIONS` array and all generators |
| `patch-build.js` | Safe field-injection: adds/updates fields in SOLUTIONS without rewriting build.js manually |

### Running the build

```bash
node build.js          # regenerates all solution files
node patch-build.js    # injects new fields into existing SOLUTIONS entries
```

### What build.js generates (per solution)

For each entry in `SOLUTIONS`, build.js writes 7 files into `<category>/<solution-slug>/`:
- `index.html` — working interactive demo
- `template.html` — Vercel-style detail page (hero iframe, features, stack, architecture)
- `README.md`
- `PITCH.md`
- `FEATURES.md`
- `ROADMAP.md`
- `TECH-STACK.md`

---

## SOLUTIONS Schema

Every object in the `SOLUTIONS` array in `build.js` must include **all** of the following fields:

```js
{
  id:           'category/solution-slug',   // maps to output directory
  name:         'Full Solution Name',
  emoji:        '🏥',                       // single emoji (NOT icon)
  short:        'Short Name',               // used in cards and nav
  tagline:      'One-line value prop',
  color:        '#2563eb',                  // primary brand color (hex)
  color2:       '#1d4ed8',                  // secondary/dark color (hex)
  category:     'Healthcare',               // title-case industry name
  target:       'Target users description',
  problem:      'Problem being solved',
  stats:        [                           // exactly 4 stat cards
    { label: 'Label', value: 'Value', icon: '📊' },
    // ...
  ],
  sections:     [...],                      // dashboard section definitions
  chartData:    { ... },                    // chart config for demo
  useCase:      'Short Use Case Label',
  difficulty:   'intermediate',             // 'beginner' | 'intermediate' | 'advanced'
  tableColumns: ['Col1','Col2',...],        // exactly 6 column headers
  mockRows:     [                           // exactly 8 rows of Indian-context data
    ['val1','val2',...],
    // ...
  ],
  features:     [                           // exactly 6 feature cards
    { icon:'🔒', title:'Feature Name', desc:'2-3 sentence description.' },
    // ...
  ],
  stack:        [                           // exactly 6 tech stack items
    { icon:'⚛️', name:'Technology', purpose:'What it does in this solution' },
    // ...
  ],
  integrations: [                           // exactly 4 integration cards
    { icon:'📧', name:'Integration', desc:'What it integrates with' },
    // ...
  ],
}
```

**Validation rules:**
- `features[]` must have exactly 6 items
- `stack[]` must have exactly 6 items
- `integrations[]` must have exactly 4 items
- `mockRows[]` must have exactly 8 rows
- `tableColumns[]` must have exactly 6 columns
- Field is `emoji`, never `icon` at top level
- No field should render as `undefined` in output HTML

---

## Categories (15 total, 62 solutions)

| # | Directory | Solutions | Count |
|---|-----------|-----------|-------|
| 1 | `agriculture/` | farm-management, agri-market-portal, crop-tracking-system | 3 |
| 2 | `automotive/` | car-dealer-service, fleet-management, auto-repair-workshop, vehicle-rental | 4 |
| 3 | `education/` | library-management, student-info-system, online-exam-portal, lms | 4 |
| 4 | `finance/` | invoice-billing, expense-tracker, payroll-management, budget-planner | 4 |
| 5 | `fincrime/` | blockchain-explorer, vasp-compliance, kyc-onboarding, transaction-monitor, fraud-investigator, fiu-reporter, fatf-quiz, aml-case-trainer, regulatory-explorer, ethics-simulator | 10 |
| 6 | `games/` | tambola, chess, tictactoe, snake, monopoly | 5 |
| 7 | `government/` | citizen-services, document-management, municipal-grievance | 3 |
| 8 | `healthcare/` | hospital-management, clinic-appointment, pharmacy-management, lab-reports | 4 |
| 9 | `hospitality/` | hotel-management, restaurant-pos, event-management | 3 |
| 10 | `hr/` | recruitment-ats, leave-management, performance-review | 3 |
| 11 | `kids/` | simply-draw | 1 |
| 12 | `logistics/` | delivery-tracker, warehouse-management, supply-chain-portal | 3 |
| 13 | `real-estate/` | property-management, construction-tracker, rental-portal | 3 |
| 14 | `retail/` | inventory-pos, ecommerce-dashboard, loyalty-program, supplier-portal | 4 |
| 15 | `software/` | project-management, bug-tracker, devops-dashboard, code-review-portal, api-developer-portal, qa-test-management, software-license-manager, tech-docs-wiki | 8 |

---

## Mock Data Convention — Indian Context

All mock data in `mockRows` and demo content **must** use Indian context:

- **Names**: Rahul Mehta, Priya Sharma, Arjun Nair, Meera Patel, Kavya Reddy, Vikram Singh, Ananya Iyer, Suresh Kumar, Deepa Menon, Rohit Gupta
- **Cities**: Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Jaipur, Kochi
- **Currency**: ₹ (Indian Rupee) — always `₹` symbol, never `$` or `USD`
- **IDs**: Use Indian-style IDs like `EMP-2024-001`, `INV-2025-042`, `MUM-REF-0091`
- **Dates**: DD Mon YYYY format (e.g., `15 Jan 2026`)
- **Phone numbers**: +91 98XX XXXXXX format
- **States**: Maharashtra, Karnataka, Tamil Nadu, Rajasthan, Gujarat, Delhi NCR, West Bengal, Telangana

---

## Shared Assets

```
_shared/
  css/
    design-system.css   ← Global CSS custom properties and base styles
  js/
    demo-utils.js       ← Shared JS utilities for all demos
  assets/               ← Static images and icons
```

**Design system CSS variables** (all in `:root`):
- `--color-primary: #2563eb` / `--color-primary-dark: #1d4ed8`
- `--color-accent: #7c3aed`
- `--color-success: #16a34a`, `--color-warning: #d97706`, `--color-danger: #dc2626`

---

## Git Commit Format

All commits must follow this format exactly:

```
<type>: <short description>

<optional body bullets>

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

Types: `feat` (new feature), `fix` (bug fix), `docs` (documentation), `chore` (maintenance), `enhance` (improvement to existing feature)

**Staging rules:**
- Always stage specific files by name — never `git add -A` or `git add .`
- List the directory/files being committed in the message body
- Never `--force` push to main

---

## Agent Delegation Rules

When a user request involves multiple steps, the **Orchestrator** agent coordinates by spawning specialized agents via the Task tool. The Orchestrator is the **only** agent with access to the Task tool.

### Canonical workflow — "Add a new category"

```
Orchestrator →
  Explore Agent     → confirm category dir doesn't exist, check build.js solution count
  Content Agent     → add SOLUTIONS entries to build.js (read 2 existing first)
  Builder Agent     → node build.js
  Audit Agent       → validate new solutions, must return 0 issues
  Content Agent     → update CATALOG.md
  Deploy Agent      → git add <specific files> && git push
```

### Canonical workflow — "Client pitch"

```
Orchestrator →
  Explore Agent     → read existing PITCH.md for the relevant solution
  Pitch Agent       → WebSearch client, customize pitch, write _pitches/<client>/,
                       upload to Google Drive, notify #sales on Slack
```

### Canonical workflow — "Full QA audit"

```
Orchestrator →
  Audit Agent       → scan all solutions, return JSON report
  [if failures]
  Explore Agent     → diagnose root cause
  Design Agent      → fix _shared/css or _shared/js
  Audit Agent       → re-run, confirm 0 issues
  Deploy Agent      → commit fix
```

---

## Key Constraints (for all agents)

1. **Never run `git add -A` or `git add .`** — always stage specific paths
2. **Never use `git push --force`** — blocked by deny rules
3. **Never use `git reset --hard`** — blocked by deny rules
4. **Always check for `undefined`** in generated HTML before committing
5. **CATALOG.md must stay in sync** with `build.js` — currently shows 46 (stale), actual is 62
6. **Indian mock data** in all new solutions — never use generic "Record 1", "Category 1" etc.
7. **Audit must pass** (0 issues) before any Deploy Agent run
8. **Content Agent** must read 2 existing SOLUTIONS entries before writing new ones

---

## Output Directories

| Directory | Purpose | Git status |
|-----------|---------|-----------|
| `_pitches/` | Client pitch documents | Committed |
| `_reports/` | Audit JSON reports | **Gitignored** |

Audit reports are ephemeral — they live in `_reports/` locally but are not committed.
