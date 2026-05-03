# Everything Platform

> **One place for all enterprise solutions** — pitch-ready, demo-first templates for every business sector.

[![Solutions](https://img.shields.io/badge/Solutions-30%2B-2563eb?style=flat-square)](./CATALOG.md)
[![Categories](https://img.shields.io/badge/Industries-11-7c3aed?style=flat-square)](./CATALOG.md)
[![License](https://img.shields.io/badge/License-MIT-16a34a?style=flat-square)](./LICENSE)
[![Demo](https://img.shields.io/badge/Live%20Demo-Open%20index.html-d97706?style=flat-square)](./index.html)

---

## What Is This?

**Everything** is an open-source catalog of enterprise-grade solution templates covering 11 industry sectors and 30+ business use cases. Each solution includes:

- **Interactive HTML Demo** — fully functional prototype, no backend required
- **Business Pitch Document** — executive summary, ROI, pricing model
- **Feature List** — prioritized P0/P1/P2 requirements
- **Development Roadmap** — 3-phase delivery plan
- **Technical Architecture** — stack recommendation with diagrams

Think of it as an **"App Store for Enterprise Solution Blueprints"** — browse, demo, and pitch to any client in minutes.

---

## Live Demo

Open `index.html` in any browser — no server, no install required.

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

## Project Structure

```
Everything/
├── index.html                          ← Master catalog portal (search + filter)
├── README.md                           ← This file
├── CATALOG.md                          ← Full solution index
├── build.js                            ← Solution file generator
│
├── _shared/                            ← Shared design system
│   ├── css/
│   │   └── design-system.css           ← Global CSS variables, components
│   └── js/
│       └── demo-utils.js               ← Shared JS utilities (tabs, modals, charts)
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
├── real-estate/                        ← 3 solutions
│   ├── property-management/
│   ├── construction-tracker/
│   └── rental-portal/
│
├── finance/                            ← 4 solutions
│   ├── invoice-billing/
│   ├── expense-tracker/
│   ├── payroll-management/
│   └── budget-planner/
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
├── README.md        ← Technical overview + setup
├── PITCH.md         ← Business pitch + ROI
├── FEATURES.md      ← Prioritized feature list (P0/P1/P2)
├── ROADMAP.md       ← 3-phase development roadmap
└── TECH-STACK.md    ← Architecture + stack recommendation
```

---

## Solution Catalog

### 🎓 Education (4 solutions)

| Solution | Demo | Pitch |
|---------|------|-------|
| [Library Management System](education/library-management/) | [Demo](education/library-management/index.html) | [Pitch](education/library-management/PITCH.md) |
| [Student Information System](education/student-information-system/) | [Demo](education/student-information-system/index.html) | [Pitch](education/student-information-system/PITCH.md) |
| [Online Exam Portal](education/online-exam-portal/) | [Demo](education/online-exam-portal/index.html) | [Pitch](education/online-exam-portal/PITCH.md) |
| [Learning Management System](education/learning-management-system/) | [Demo](education/learning-management-system/index.html) | [Pitch](education/learning-management-system/PITCH.md) |

### 🚗 Automotive (4 solutions)

| Solution | Demo | Pitch |
|---------|------|-------|
| [Car Dealer Service](automotive/car-dealer-service/) | [Demo](automotive/car-dealer-service/index.html) | [Pitch](automotive/car-dealer-service/PITCH.md) |
| [Fleet Management](automotive/fleet-management/) | [Demo](automotive/fleet-management/index.html) | [Pitch](automotive/fleet-management/PITCH.md) |
| [Auto Repair Workshop](automotive/auto-repair-workshop/) | [Demo](automotive/auto-repair-workshop/index.html) | [Pitch](automotive/auto-repair-workshop/PITCH.md) |
| [Vehicle Rental System](automotive/vehicle-rental/) | [Demo](automotive/vehicle-rental/index.html) | [Pitch](automotive/vehicle-rental/PITCH.md) |

### 🏥 Healthcare (4 solutions)

| Solution | Demo | Pitch |
|---------|------|-------|
| [Hospital Management](healthcare/hospital-management/) | [Demo](healthcare/hospital-management/index.html) | [Pitch](healthcare/hospital-management/PITCH.md) |
| [Clinic Appointment](healthcare/clinic-appointment/) | [Demo](healthcare/clinic-appointment/index.html) | [Pitch](healthcare/clinic-appointment/PITCH.md) |
| [Pharmacy Management](healthcare/pharmacy-management/) | [Demo](healthcare/pharmacy-management/index.html) | [Pitch](healthcare/pharmacy-management/PITCH.md) |
| [Lab Reports Portal](healthcare/lab-reports-portal/) | [Demo](healthcare/lab-reports-portal/index.html) | [Pitch](healthcare/lab-reports-portal/PITCH.md) |

### 🛒 Retail (4 solutions)

| Solution | Demo | Pitch |
|---------|------|-------|
| [Inventory & POS](retail/inventory-pos/) | [Demo](retail/inventory-pos/index.html) | [Pitch](retail/inventory-pos/PITCH.md) |
| [E-Commerce Dashboard](retail/ecommerce-dashboard/) | [Demo](retail/ecommerce-dashboard/index.html) | [Pitch](retail/ecommerce-dashboard/PITCH.md) |
| [Loyalty Program](retail/loyalty-program/) | [Demo](retail/loyalty-program/index.html) | [Pitch](retail/loyalty-program/PITCH.md) |
| [Supplier Portal](retail/supplier-portal/) | [Demo](retail/supplier-portal/index.html) | [Pitch](retail/supplier-portal/PITCH.md) |

### 🏠 Real Estate (3 solutions)

| Solution | Demo | Pitch |
|---------|------|-------|
| [Property Management](real-estate/property-management/) | [Demo](real-estate/property-management/index.html) | [Pitch](real-estate/property-management/PITCH.md) |
| [Construction Tracker](real-estate/construction-tracker/) | [Demo](real-estate/construction-tracker/index.html) | [Pitch](real-estate/construction-tracker/PITCH.md) |
| [Rental Portal](real-estate/rental-portal/) | [Demo](real-estate/rental-portal/index.html) | [Pitch](real-estate/rental-portal/PITCH.md) |

### 💰 Finance (4 solutions)

| Solution | Demo | Pitch |
|---------|------|-------|
| [Invoice & Billing](finance/invoice-billing/) | [Demo](finance/invoice-billing/index.html) | [Pitch](finance/invoice-billing/PITCH.md) |
| [Expense Tracker](finance/expense-tracker/) | [Demo](finance/expense-tracker/index.html) | [Pitch](finance/expense-tracker/PITCH.md) |
| [Payroll Management](finance/payroll-management/) | [Demo](finance/payroll-management/index.html) | [Pitch](finance/payroll-management/PITCH.md) |
| [Budget Planner](finance/budget-planner/) | [Demo](finance/budget-planner/index.html) | [Pitch](finance/budget-planner/PITCH.md) |

### 🏨 Hospitality (3 solutions)

| Solution | Demo | Pitch |
|---------|------|-------|
| [Hotel Management](hospitality/hotel-management/) | [Demo](hospitality/hotel-management/index.html) | [Pitch](hospitality/hotel-management/PITCH.md) |
| [Restaurant POS](hospitality/restaurant-pos/) | [Demo](hospitality/restaurant-pos/index.html) | [Pitch](hospitality/restaurant-pos/PITCH.md) |
| [Event Management](hospitality/event-management/) | [Demo](hospitality/event-management/index.html) | [Pitch](hospitality/event-management/PITCH.md) |

### 🚚 Logistics (3 solutions)

| Solution | Demo | Pitch |
|---------|------|-------|
| [Delivery Tracker](logistics/delivery-tracker/) | [Demo](logistics/delivery-tracker/index.html) | [Pitch](logistics/delivery-tracker/PITCH.md) |
| [Warehouse Management](logistics/warehouse-management/) | [Demo](logistics/warehouse-management/index.html) | [Pitch](logistics/warehouse-management/PITCH.md) |
| [Supply Chain Portal](logistics/supply-chain-portal/) | [Demo](logistics/supply-chain-portal/index.html) | [Pitch](logistics/supply-chain-portal/PITCH.md) |

### 👥 Human Resources (3 solutions)

| Solution | Demo | Pitch |
|---------|------|-------|
| [Recruitment ATS](hr/recruitment-ats/) | [Demo](hr/recruitment-ats/index.html) | [Pitch](hr/recruitment-ats/PITCH.md) |
| [Leave Management](hr/leave-management/) | [Demo](hr/leave-management/index.html) | [Pitch](hr/leave-management/PITCH.md) |
| [Performance Review](hr/performance-review/) | [Demo](hr/performance-review/index.html) | [Pitch](hr/performance-review/PITCH.md) |

### 🏛️ Government (3 solutions)

| Solution | Demo | Pitch |
|---------|------|-------|
| [Citizen Services Portal](government/citizen-services/) | [Demo](government/citizen-services/index.html) | [Pitch](government/citizen-services/PITCH.md) |
| [Document Management](government/document-management/) | [Demo](government/document-management/index.html) | [Pitch](government/document-management/PITCH.md) |
| [Municipal Grievance](government/municipal-grievance/) | [Demo](government/municipal-grievance/index.html) | [Pitch](government/municipal-grievance/PITCH.md) |

### 🌾 Agriculture (3 solutions)

| Solution | Demo | Pitch |
|---------|------|-------|
| [Farm Management](agriculture/farm-management/) | [Demo](agriculture/farm-management/index.html) | [Pitch](agriculture/farm-management/PITCH.md) |
| [Agri Market Portal](agriculture/agri-market-portal/) | [Demo](agriculture/agri-market-portal/index.html) | [Pitch](agriculture/agri-market-portal/PITCH.md) |
| [Crop Tracking](agriculture/crop-tracking/) | [Demo](agriculture/crop-tracking/index.html) | [Pitch](agriculture/crop-tracking/PITCH.md) |

---

## Design System

All demos share a common design system in `_shared/`:

### CSS Variables (`_shared/css/design-system.css`)
- Color palette (primary, semantic, neutrals)
- Typography scale
- Spacing system
- Component styles (cards, buttons, badges, tables, forms, modals, sidebar, tabs)
- Dark mode support via `[data-theme="dark"]`
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
   mkdir -p everything/<category>/<solution-name>
   ```

2. **Copy the template structure:**
   ```bash
   cp -r _template/* everything/<category>/<solution-name>/
   ```

3. **Update `build.js`** — add your solution to the `SOLUTIONS` array with:
   - `id`, `name`, `emoji`, `short`, `tagline`
   - `color`, `color2` (brand colors)
   - `category`, `target`, `problem`
   - `stats` (4 KPI cards)
   - `sections` (sidebar nav items)
   - `chartData` (labels + data for bar chart)

4. **Run the generator:**
   ```bash
   node build.js
   ```

5. **Customize** `index.html` with domain-specific UI for your solution.

6. **Update** `PITCH.md` with client-specific business case.

---

## Contributing

Contributions are welcome! You can:

- **Add a new solution** — follow the structure above
- **Improve an existing demo** — make it more realistic and interactive
- **Add a new category** — Manufacturing, Legal, NGO, EdTech, etc.
- **Fix bugs** — open an issue or submit a PR

### Contribution Guide

```bash
# Fork and clone
git clone https://github.com/ikppramesh/everything.git
cd everything

# Create a branch
git checkout -b add/manufacturing-erp

# Make changes, then push
git add .
git commit -m "Add: Manufacturing ERP solution"
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

- [ ] Add manufacturing category (ERP, Production Planning, Quality Control)
- [ ] Add legal category (Case Management, Contract Management)
- [ ] Add NGO/Social Impact category
- [ ] GitHub Pages deployment for live demos
- [ ] Add dark mode screenshots to each solution
- [ ] Add API specification (OpenAPI) per solution
- [ ] Add database schema (ERD) per solution
- [ ] CLI tool to scaffold new solutions

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

**Built with care · [github.com/ikppramesh/everything](https://github.com/ikppramesh/everything)**
