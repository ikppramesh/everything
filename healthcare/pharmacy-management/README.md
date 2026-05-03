# Pharmacy Management System

> Drug inventory, expiry tracking, prescription management, and GST billing.

**Category:** Healthcare | **Status:** Demo Ready | **Tier:** 2

---

## Overview

The Pharmacy Management System is a comprehensive solution designed for Standalone Pharmacies, Hospital Pharmacies, Medical Stores. It addresses the core challenge of pharmacies lose revenue to expired stock, stock-outs, and billing errors without proper tracking.

This solution provides a fully interactive HTML prototype demonstrating the complete workflow — from onboarding to reporting — without requiring any backend setup.

## Problem Statement

Pharmacies lose revenue to expired stock, stock-outs, and billing errors without proper tracking. This results in operational inefficiencies, revenue loss, and poor user experience.

## Key Features

- **Medicines**: Fully functional medicines module with data management and reporting
- **Sales Counter**: Fully functional sales counter module with data management and reporting
- **Prescriptions**: Fully functional prescriptions module with data management and reporting
- **Expiry Tracker**: Fully functional expiry tracker module with data management and reporting
- **Dashboard**: Real-time KPI overview with charts and quick actions
- **Search & Filter**: Instant search across all data tables
- **Export**: One-click data export to CSV/PDF
- **Notifications**: In-app toast notifications and email/SMS alerts
- **Dark Mode**: Built-in dark/light theme toggle
- **Responsive**: Works on desktop, tablet, and mobile

## Demo

Open `index.html` in any modern browser. No server required.

```bash
# Simply open the file
open index.html
# or
python3 -m http.server 3000  # then visit http://localhost:3000
```

## Tech Stack (Production Recommendation)

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + TypeScript + Tailwind CSS |
| Backend | Node.js + Express.js |
| Database | PostgreSQL |
| Cache | Redis |
| Auth | JWT + OAuth2 |
| Hosting | AWS / GCP / Azure |

## Folder Structure

```
healthcare/pharmacy-management/
├── index.html          # Interactive demo
├── README.md           # This file
├── PITCH.md            # Business pitch document
├── FEATURES.md         # Feature list with priorities
├── ROADMAP.md          # Development roadmap
├── TECH-STACK.md       # Architecture guide
└── docs/               # Additional documentation
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push and create a Pull Request

## License

MIT License — Free to use for commercial and personal projects.

---

*Part of the [Everything Platform](../../index.html) — Enterprise Solution Catalog*
