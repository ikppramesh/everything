# Event Management Platform

> Plan and execute events — venues, vendors, guests, budget, and timelines.

**Category:** Hospitality | **Status:** Demo Ready | **Tier:** 2

---

## Overview

The Event Management Platform is a comprehensive solution designed for Event Management Companies, Wedding Planners, Corporate Event Teams. It addresses the core challenge of event managers juggle vendor calls, guest lists, and budgets across whatsapp and excel — losing track and overspending.

This solution provides a fully interactive HTML prototype demonstrating the complete workflow — from onboarding to reporting — without requiring any backend setup.

## Problem Statement

Event managers juggle vendor calls, guest lists, and budgets across WhatsApp and Excel — losing track and overspending. This results in operational inefficiencies, revenue loss, and poor user experience.

## Key Features

- **Events**: Fully functional events module with data management and reporting
- **Venues**: Fully functional venues module with data management and reporting
- **Vendors**: Fully functional vendors module with data management and reporting
- **Guests**: Fully functional guests module with data management and reporting
- **Budget**: Fully functional budget module with data management and reporting
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
hospitality/event-management/
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
