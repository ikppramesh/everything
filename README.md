# Everything Platform

> **One place for all enterprise solutions** — pitch-ready, demo-first templates for every business sector.

[![Solutions](https://img.shields.io/badge/Solutions-46%2B-2563eb?style=flat-square)](./CATALOG.md)
[![Categories](https://img.shields.io/badge/Industries-12-7c3aed?style=flat-square)](./CATALOG.md)
[![License](https://img.shields.io/badge/License-MIT-16a34a?style=flat-square)](./LICENSE)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-d97706?style=flat-square)](https://ikppramesh.github.io/everything)

---

## What Is This?

**Everything** is an open-source catalog of enterprise-grade solution templates covering **12 industry sectors** and **46+ business use cases**. Each solution includes:

- **Interactive HTML Demo** — fully functional prototype, no backend required
- **Template Detail Page** — Vercel-style showcase with live preview, features, and pitch info
- **Business Pitch Document** — executive summary, ROI, pricing model
- **Feature List** — prioritized P0/P1/P2 requirements
- **Development Roadmap** — 3-phase delivery plan
- **Technical Architecture** — stack recommendation with diagrams

Think of it as an **"App Store for Enterprise Solution Blueprints"** — browse, demo, and pitch to any client in minutes.

---

## Live Demo

**GitHub Pages:** [ikppramesh.github.io/everything](https://ikppramesh.github.io/everything)

Or run locally — no install required:

```bash
# Option 1: Direct open
open index.html

# Option 2: Local server (recommended)
python3 -m http.server 3000
# Visit: http://localhost:3000

# Option 3: VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

---

## What's New

### May 2026
- **Software & DevTools category** — 8 new solutions added (Project Management, Bug Tracker, DevOps Dashboard, Code Review Portal, API Developer Portal, QA Test Management, Software License Manager, Tech Docs Wiki)
- **Vercel-style `template.html` pages** — every solution now has a standalone detail/showcase page with live preview, feature highlights, and pitch data
- **Awwwards-level UI/UX redesign** — dark editorial aesthetic, bold typography, orange accent (`#FA5D29`), animated dot-field footer that morphs through category emoji shapes
- **Responsive improvements** — fluid type scale, header home link, better mobile layout
- **GitHub Pages** — `.nojekyll` added so `_shared/` assets resolve correctly on live site

---

## Project Structure

```
Everything/
├── index.html                          ← Master catalog portal (search + filter)
├── README.md                           ← This file
├── CATALOG.md                          ← Full solution index
├── build.js                            ← Solution file generator
├── patch-build.js                      ← Patch utility for bulk template updates
│
├── _shared/                            ← Shared design system
│   ├── assets/                         ← Icons, images
│   ├── css/
│   │   └── design-system.css           ← Global CSS variables, components
│   └── js/
│       └── demo-utils.js               ← Shared JS utilities (tabs, modals, charts)
│
├── software/                           ← 8 solutions  ← NEW
│   ├── project-management/
│   ├── bug-tracker/
│   ├── devops-dashboard/
│   ├── code-review-portal/
│   ├── api-developer-portal/
│   ├── qa-test-management/
│   ├── software-license-manager/
│   └── tech-docs-wiki/
│
├── education/                          ← 4 solutions
│   ├── library-management/
│   ├── student-information-system/
│   ├── online-exam-portal/
│   └── learning-management-system/
│
├── automotive/                         ← 4 solutions
│   ├── car-dealer-service/
│   ├── fleet-management/
│   ├── auto-repair-workshop/
│   └── vehicle-rental/
│
├── healthcare/                         ← 4 solutions
│   ├── hospital-management/
│   ├── clinic-appointment/
│   ├── pharmacy-management/
│   └── lab-reports-portal/
│
├── retail/                             ← 4 solutions
│   ├── inventory-pos/
│   ├── ecommerce-dashboard/
│   ├── loyalty-program/
│   └── supplier-portal/
│
├── finance/                            ← 4 solutions
│   ├── invoice-billing/
│   ├── expense-tracker/
│   ├── payroll-management/
│   └── budget-planner/
│
├── real-estate/                        ← 3 solutions
│   ├── property-management/
│   ├── construction-tracker/
│   └── rental-portal/
│
├── hospitality/                        ← 3 solutions
│   ├── hotel-management/
│   ├── restaurant-pos/
│   └── event-management/
│
├── logistics/                          ← 3 solutions
│   ├── delivery-tracker/
│   ├── warehouse-management/
│   └── supply-chain-portal/
│
├── hr/                                 ← 3 solutions
│   ├── recruitment-ats/
│   ├── leave-management/
│   └── performance-review/
│
├── government/                         ← 3 solutions
│   ├── citizen-services/
│   ├── document-management/
│   └── municipal-grievance/
│
└── agriculture/                        ← 3 solutions
    ├── farm-management/
    ├── agri-market-portal/
    └── crop-tracking/
```

Each `<category>/<solution>/` folder contains:

```
solution-name/
├── index.html       ← Interactive demo (open in browser)
├── template.html    ← Vercel-style detail/showcase page  ← NEW
├── README.md        ← Technical overview + setup
├── PITCH.md         ← Business pitch + ROI
├── FEATURES.md      ← Prioritized feature list (P0/P1/P2)
├── ROADMAP.md       ← 3-phase development roadmap
└── TECH-STACK.md    ← Architecture + stack recommendation
```

---

## Solution Catalog

### 💻 Software & DevTools (8 solutions) — NEW

| Solution | Demo | Template | Pitch |
|---------|------|----------|-------|
| [Project Management](software/project-management/) | [Demo](software/project-management/index.html) | [Detail](software/project-management/template.html) | [Pitch](software/project-management/PITCH.md) |
| [Bug Tracker](software/bug-tracker/) | [Demo](software/bug-tracker/index.html) | [Detail](software/bug-tracker/template.html) | [Pitch](software/bug-tracker/PITCH.md) |
| [DevOps Dashboard](software/devops-dashboard/) | [Demo](software/devops-dashboard/index.html) | [Detail](software/devops-dashboard/template.html) | [Pitch](software/devops-dashboard/PITCH.md) |
| [Code Review Portal](software/code-review-portal/) | [Demo](software/code-review-portal/index.html) | [Detail](software/code-review-portal/template.html) | [Pitch](software/code-review-portal/PITCH.md) |
| [API Developer Portal](software/api-developer-portal/) | [Demo](software/api-developer-portal/index.html) | [Detail](software/api-developer-portal/template.html) | [Pitch](software/api-developer-portal/PITCH.md) |
| [QA Test Management](software/qa-test-management/) | [Demo](software/qa-test-management/index.html) | [Detail](software/qa-test-management/template.html) | [Pitch](software/qa-test-management/PITCH.md) |
| [Software License Manager](software/software-license-manager/) | [Demo](software/software-license-manager/index.html) | [Detail](software/software-license-manager/template.html) | [Pitch](software/software-license-manager/PITCH.md) |
| [Tech Docs Wiki](software/tech-docs-wiki/) | [Demo](software/tech-docs-wiki/index.html) | [Detail](software/tech-docs-wiki/template.html) | [Pitch](software/tech-docs-wiki/PITCH.md) |

### 🎓 Education (4 solutions)

| Solution | Demo | Template | Pitch |
|---------|------|----------|-------|
| [Library Management System](education/library-management/) | [Demo](education/library-management/index.html) | [Detail](education/library-management/template.html) | [Pitch](education/library-management/PITCH.md) |
| [Student Information System](education/student-information-system/) | [Demo](education/student-information-system/index.html) | [Detail](education/student-information-system/template.html) | [Pitch](education/student-information-system/PITCH.md) |
| [Online Exam Portal](education/online-exam-portal/) | [Demo](education/online-exam-portal/index.html) | [Detail](education/online-exam-portal/template.html) | [Pitch](education/online-exam-portal/PITCH.md) |
| [Learning Management System](education/learning-management-system/) | [Demo](education/learning-management-system/index.html) | [Detail](education/learning-management-system/template.html) | [Pitch](education/learning-management-system/PITCH.md) |

### 🚗 Automotive (4 solutions)

| Solution | Demo | Template | Pitch |
|---------|------|----------|-------|
| [Car Dealer Service](automotive/car-dealer-service/) | [Demo](automotive/car-dealer-service/index.html) | [Detail](automotive/car-dealer-service/template.html) | [Pitch](automotive/car-dealer-service/PITCH.md) |
| [Fleet Management](automotive/fleet-management/) | [Demo](automotive/fleet-management/index.html) | [Detail](automotive/fleet-management/template.html) | [Pitch](automotive/fleet-management/PITCH.md) |
| [Auto Repair Workshop](automotive/auto-repair-workshop/) | [Demo](automotive/auto-repair-workshop/index.html) | [Detail](automotive/auto-repair-workshop/template.html) | [Pitch](automotive/auto-repair-workshop/PITCH.md) |
| [Vehicle Rental System](automotive/vehicle-rental/) | [Demo](automotive/vehicle-rental/index.html) | [Detail](automotive/vehicle-rental/template.html) | [Pitch](automotive/vehicle-rental/PITCH.md) |

### 🏥 Healthcare (4 solutions)

| Solution | Demo | Template | Pitch |
|---------|------|----------|-------|
| [Hospital Management](healthcare/hospital-management/) | [Demo](healthcare/hospital-management/index.html) | [Detail](healthcare/hospital-management/template.html) | [Pitch](healthcare/hospital-management/PITCH.md) |
| [Clinic Appointment](healthcare/clinic-appointment/) | [Demo](healthcare/clinic-appointment/index.html) | [Detail](healthcare/clinic-appointment/template.html) | [Pitch](healthcare/clinic-appointment/PITCH.md) |
| [Pharmacy Management](healthcare/pharmacy-management/) | [Demo](healthcare/pharmacy-management/index.html) | [Detail](healthcare/pharmacy-management/template.html) | [Pitch](healthcare/pharmacy-management/PITCH.md) |
| [Lab Reports Portal](healthcare/lab-reports-portal/) | [Demo](healthcare/lab-reports-portal/index.html) | [Detail](healthcare/lab-reports-portal/template.html) | [Pitch](healthcare/lab-reports-portal/PITCH.md) |

### 🛒 Retail (4 solutions)

| Solution | Demo | Template | Pitch |
|---------|------|----------|-------|
| [Inventory & POS](retail/inventory-pos/) | [Demo](retail/inventory-pos/index.html) | [Detail](retail/inventory-pos/template.html) | [Pitch](retail/inventory-pos/PITCH.md) |
| [E-Commerce Dashboard](retail/ecommerce-dashboard/) | [Demo](retail/ecommerce-dashboard/index.html) | [Detail](retail/ecommerce-dashboard/template.html) | [Pitch](retail/ecommerce-dashboard/PITCH.md) |
| [Loyalty Program](retail/loyalty-program/) | [Demo](retail/loyalty-program/index.html) | [Detail](retail/loyalty-program/template.html) | [Pitch](retail/loyalty-program/PITCH.md) |
| [Supplier Portal](retail/supplier-portal/) | [Demo](retail/supplier-portal/index.html) | [Detail](retail/supplier-portal/template.html) | [Pitch](retail/supplier-portal/PITCH.md) |

### 💰 Finance (4 solutions)

| Solution | Demo | Template | Pitch |
|---------|------|----------|-------|
| [Invoice & Billing](finance/invoice-billing/) | [Demo](finance/invoice-billing/index.html) | [Detail](finance/invoice-billing/template.html) | [Pitch](finance/invoice-billing/PITCH.md) |
| [Expense Tracker](finance/expense-tracker/) | [Demo](finance/expense-tracker/index.html) | [Detail](finance/expense-tracker/template.html) | [Pitch](finance/expense-tracker/PITCH.md) |
| [Payroll Management](finance/payroll-management/) | [Demo](finance/payroll-management/index.html) | [Detail](finance/payroll-management/template.html) | [Pitch](finance/payroll-management/PITCH.md) |
| [Budget Planner](finance/budget-planner/) | [Demo](finance/budget-planner/index.html) | [Detail](finance/budget-planner/template.html) | [Pitch](finance/budget-planner/PITCH.md) |

### 🏠 Real Estate (3 solutions)

| Solution | Demo | Template | Pitch |
|---------|------|----------|-------|
| [Property Management](real-estate/property-management/) | [Demo](real-estate/property-management/index.html) | [Detail](real-estate/property-management/template.html) | [Pitch](real-estate/property-management/PITCH.md) |
| [Construction Tracker](real-estate/construction-tracker/) | [Demo](real-estate/construction-tracker/index.html) | [Detail](real-estate/construction-tracker/template.html) | [Pitch](real-estate/construction-tracker/PITCH.md) |
| [Rental Portal](real-estate/rental-portal/) | [Demo](real-estate/rental-portal/index.html) | [Detail](real-estate/rental-portal/template.html) | [Pitch](real-estate/rental-portal/PITCH.md) |

### 🏨 Hospitality (3 solutions)

| Solution | Demo | Template | Pitch |
|---------|------|----------|-------|
| [Hotel Management](hospitality/hotel-management/) | [Demo](hospitality/hotel-management/index.html) | [Detail](hospitality/hotel-management/template.html) | [Pitch](hospitality/hotel-management/PITCH.md) |
| [Restaurant POS](hospitality/restaurant-pos/) | [Demo](hospitality/restaurant-pos/index.html) | [Detail](hospitality/restaurant-pos/template.html) | [Pitch](hospitality/restaurant-pos/PITCH.md) |
| [Event Management](hospitality/event-management/) | [Demo](hospitality/event-management/index.html) | [Detail](hospitality/event-management/template.html) | [Pitch](hospitality/event-management/PITCH.md) |

### 🚚 Logistics (3 solutions)

| Solution | Demo | Template | Pitch |
|---------|------|----------|-------|
| [Delivery Tracker](logistics/delivery-tracker/) | [Demo](logistics/delivery-tracker/index.html) | [Detail](logistics/delivery-tracker/template.html) | [Pitch](logistics/delivery-tracker/PITCH.md) |
| [Warehouse Management](logistics/warehouse-management/) | [Demo](logistics/warehouse-management/index.html) | [Detail](logistics/warehouse-management/template.html) | [Pitch](logistics/warehouse-management/PITCH.md) |
| [Supply Chain Portal](logistics/supply-chain-portal/) | [Demo](logistics/supply-chain-portal/index.html) | [Detail](logistics/supply-chain-portal/template.html) | [Pitch](logistics/supply-chain-portal/PITCH.md) |

### 👥 Human Resources (3 solutions)

| Solution | Demo | Template | Pitch |
|---------|------|----------|-------|
| [Recruitment ATS](hr/recruitment-ats/) | [Demo](hr/recruitment-ats/index.html) | [Detail](hr/recruitment-ats/template.html) | [Pitch](hr/recruitment-ats/PITCH.md) |
| [Leave Management](hr/leave-management/) | [Demo](hr/leave-management/index.html) | [Detail](hr/leave-management/template.html) | [Pitch](hr/leave-management/PITCH.md) |
| [Performance Review](hr/performance-review/) | [Demo](hr/performance-review/index.html) | [Detail](hr/performance-review/template.html) | [Pitch](hr/performance-review/PITCH.md) |

### 🏛️ Government (3 solutions)

| Solution | Demo | Template | Pitch |
|---------|------|----------|-------|
| [Citizen Services Portal](government/citizen-services/) | [Demo](government/citizen-services/index.html) | [Detail](government/citizen-services/template.html) | [Pitch](government/citizen-services/PITCH.md) |
| [Document Management](government/document-management/) | [Demo](government/document-management/index.html) | [Detail](government/document-management/template.html) | [Pitch](government/document-management/PITCH.md) |
| [Municipal Grievance](government/municipal-grievance/) | [Demo](government/municipal-grievance/index.html) | [Detail](government/municipal-grievance/template.html) | [Pitch](government/municipal-grievance/PITCH.md) |

### 🌾 Agriculture (3 solutions)

| Solution | Demo | Template | Pitch |
|---------|------|----------|-------|
| [Farm Management](agriculture/farm-management/) | [Demo](agriculture/farm-management/index.html) | [Detail](agriculture/farm-management/template.html) | [Pitch](agriculture/farm-management/PITCH.md) |
| [Agri Market Portal](agriculture/agri-market-portal/) | [Demo](agriculture/agri-market-portal/index.html) | [Detail](agriculture/agri-market-portal/template.html) | [Pitch](agriculture/agri-market-portal/PITCH.md) |
| [Crop Tracking](agriculture/crop-tracking/) | [Demo](agriculture/crop-tracking/index.html) | [Detail](agriculture/crop-tracking/template.html) | [Pitch](agriculture/crop-tracking/PITCH.md) |

---

## Design System

All demos share a common design system in `_shared/`:

### UI Aesthetic
- **Dark editorial theme** — `#0A0A0A` base, `#F5F5F0` text, `#FA5D29` accent
- **Fluid typography** — `clamp()`-based type scale from `label` to `display`
- **Animated dot-field** — footer that morphs through category emoji shapes (3s each)
- **Component animations** — `ev-fade-up`, `ev-fade-in`, ticker scrollers

### CSS Variables (`_shared/css/design-system.css`)
- Color palette (primary, semantic, neutrals)
- Typography scale
- Spacing system
- Component styles (cards, buttons, badges, tables, forms, modals, sidebar, tabs)
- Responsive breakpoints

### JS Utilities (`_shared/js/demo-utils.js`)
- `EV.init()` — initialize all features
- `EV.toast(msg, type)` — toast notifications
- `EV.openModal(id)` / `EV.closeModal(id)` — modal management
- `EV.initTabs()` — tab switching
- `EV.initTheme()` — dark/light mode toggle
- `EV.barChart(canvasId, labels, data, color)` — dependency-free bar charts
- `EV.currency(n)` — format as ₹
- `EV.daysAgo(n)` / `EV.daysFrom(n)` — date helpers

---

## Adding a New Solution

1. **Create the directory:**
   ```bash
   mkdir -p <category>/<solution-name>
   ```

2. **Add your solution to `build.js`** — append to the `SOLUTIONS` array with:
   - `id`, `name`, `emoji`, `short`, `tagline`
   - `color`, `color2` (brand colors)
   - `category`, `target`, `problem`
   - `stats` (4 KPI cards)
   - `sections` (sidebar nav items)
   - `chartData` (labels + data for bar chart)

3. **Run the generator:**
   ```bash
   node build.js
   ```

4. **Generate template pages** (Vercel-style detail pages):
   ```bash
   node patch-build.js
   ```

5. **Customize** `index.html` with domain-specific UI for your solution.

6. **Update** `PITCH.md` with client-specific business case.

---

## Contributing

Contributions are welcome. You can:

- **Add a new solution** — follow the structure above
- **Improve an existing demo** — make it more realistic and interactive
- **Add a new category** — Manufacturing, Legal, NGO, EdTech, etc.
- **Fix bugs** — open an issue or submit a PR

```bash
# Fork and clone
git clone https://github.com/ikppramesh/everything.git
cd everything

# Create a branch
git checkout -b add/manufacturing-erp

# Make changes, then push
git add .
git commit -m "feat: add Manufacturing ERP solution"
git push origin add/manufacturing-erp

# Open a Pull Request on GitHub
```

---

## Tech Philosophy

This project is intentionally **zero-dependency** for demos:
- No npm, no build tools, no bundler required
- Every HTML file works by opening it in a browser
- Shared CSS/JS via relative paths only
- Production recommendations are in `TECH-STACK.md` per solution

---

## Roadmap

- [x] 11 industry categories, 38+ solutions
- [x] Vercel-style `template.html` detail pages for all solutions
- [x] Dark editorial UI redesign with animated dot-field footer
- [x] Software & DevTools category (8 solutions)
- [x] GitHub Pages deployment
- [ ] Manufacturing category (ERP, Production Planning, Quality Control)
- [ ] Legal category (Case Management, Contract Management)
- [ ] NGO / Social Impact category
- [ ] Dark mode screenshots per solution
- [ ] OpenAPI specification per solution
- [ ] ERD / database schema per solution
- [ ] CLI scaffold tool for new solutions

---

## License

MIT License — Free to use for commercial and personal projects.

```
Copyright (c) 2024 ikppramesh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the software.
```

---

**Built with care · [ikppramesh.github.io/everything](https://ikppramesh.github.io/everything)**
