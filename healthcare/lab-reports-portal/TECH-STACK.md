# Lab Reports Portal — Technical Architecture

---

## Architecture Overview

```
┌─────────────────────────────────────────────┐
│                  CLIENTS                    │
│   Browser (React)  │  Mobile (React Native) │
└────────────┬────────────────────┬───────────┘
             │ HTTPS/WSS          │
┌────────────▼────────────────────▼───────────┐
│              API GATEWAY (Kong/Nginx)        │
│         Rate Limiting │ Auth │ Routing       │
└────────────┬──────────────────────┬──────────┘
             │                      │
┌────────────▼──────────┐  ┌────────▼──────────┐
│   Core API Service    │  │  Background Jobs   │
│   (Node.js/Express)   │  │  (Bull + Redis)    │
└────────────┬──────────┘  └────────┬──────────┘
             │                      │
┌────────────▼──────────────────────▼──────────┐
│                  DATA LAYER                  │
│  PostgreSQL (Primary)  │  Redis (Cache/Queue) │
│  S3 (File Storage)     │  Elasticsearch (Search)│
└─────────────────────────────────────────────┘
             │
┌────────────▼──────────────────────────────────┐
│              EXTERNAL SERVICES                │
│  Twilio (SMS) │ SendGrid (Email) │ Razorpay    │
└───────────────────────────────────────────────┘
```

---

## Frontend Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.x | UI framework |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Styling |
| React Query | 5.x | Data fetching + caching |
| React Hook Form | 7.x | Form management |
| Recharts | 2.x | Data visualization |
| React Router | 6.x | Client-side routing |
| Vite | 5.x | Build tool |

---

## Backend Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | 20.x LTS | Runtime |
| Express.js | 4.x | HTTP framework |
| TypeScript | 5.x | Type safety |
| Prisma | 5.x | ORM |
| Passport.js | — | Authentication |
| Bull | 4.x | Job queues |
| Winston | — | Logging |
| Zod | — | Validation |

---

## Database

| Database | Use Case |
|---------|---------|
| **PostgreSQL 15** | Primary data store — transactional data |
| **Redis 7** | Session cache, job queues, rate limiting |
| **AWS S3** | File and document storage |
| **Elasticsearch** | Full-text search |

---

## Infrastructure

| Component | Tool | Provider |
|-----------|------|---------|
| Cloud | EC2 / Cloud Run | AWS / GCP |
| Container | Docker + Compose | — |
| Orchestration | Kubernetes (EKS) | AWS |
| CI/CD | GitHub Actions | GitHub |
| Monitoring | Prometheus + Grafana | Self-hosted |
| APM | Datadog / New Relic | SaaS |
| CDN | CloudFront | AWS |
| DNS | Route 53 | AWS |

---

## Security

- **Authentication**: JWT (15-min expiry) + Refresh Tokens (7 days)
- **Authorization**: RBAC with row-level security in PostgreSQL
- **Encryption**: AES-256 at rest, TLS 1.3 in transit
- **API Security**: Rate limiting, CORS, Helmet.js, input sanitization
- **Secrets Management**: AWS Secrets Manager / HashiCorp Vault
- **Vulnerability Scanning**: Snyk, OWASP ZAP in CI pipeline
- **Compliance**: DPDP Act (India), GDPR-ready

---

## Performance Targets

| Metric | Target |
|--------|--------|
| API Response Time (p95) | < 200ms |
| Page Load Time | < 1.5s |
| Database Query Time (p95) | < 50ms |
| Uptime SLA | 99.9% |
| Max Concurrent Users | 1,000+ |

---

*Part of the [Everything Platform](../../index.html)*
