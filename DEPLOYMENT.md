# ALLYSHIP++ — Deployment & Live Demo Information

This document contains live URLs, repository configuration, Vercel hosting details, and workflow commands for the ALLYSHIP++ web application.

---

## 1. Live Production & Demo URLs

| Page | URL | Status |
|---|---|---|
| **Home Page** | [https://allyship-psi.vercel.app](https://allyship-psi.vercel.app) | `200 OK` |
| **About & Leadership** | [https://allyship-psi.vercel.app/about](https://allyship-psi.vercel.app/about) | `200 OK` |
| **Regional Chapters** | [https://allyship-psi.vercel.app/event](https://allyship-psi.vercel.app/event) | `200 OK` |
| **Impact & Press Records** | [https://allyship-psi.vercel.app/impact](https://allyship-psi.vercel.app/impact) | `200 OK` |
| **Discover SOA University** | [https://allyship-psi.vercel.app/discover-soa](https://allyship-psi.vercel.app/discover-soa) | `200 OK` |
| **Corporate Collaboration** | [https://allyship-psi.vercel.app/collaborate](https://allyship-psi.vercel.app/collaborate) | `200 OK` |
| **Strategic Initiatives** | [https://allyship-psi.vercel.app/initiatives](https://allyship-psi.vercel.app/initiatives) | `200 OK` |
| **Executive Resources** | [https://allyship-psi.vercel.app/resources](https://allyship-psi.vercel.app/resources) | `200 OK` |
| **Executive Dashboard** | [https://allyship-psi.vercel.app/dashboard](https://allyship-psi.vercel.app/dashboard) | `200 OK` |
| **Community Network** | [https://allyship-psi.vercel.app/community](https://allyship-psi.vercel.app/community) | `200 OK` |

---

## 2. GitHub Repository

- **Repository**: [https://github.com/ragelabs-ssssd/allyship](https://github.com/ragelabs-ssssd/allyship)
- **Default Branch**: `main`
- **Visibility**: Public
- **Git Remote (HTTPS)**: `https://github.com/ragelabs-ssssd/allyship.git`

---

## 3. Vercel Project & Infrastructure

- **Project Name**: `allyship`
- **Team**: `allyship1`
- **Vercel Dashboard**: [https://vercel.com/allyship1/allyship](https://vercel.com/allyship1/allyship)
- **Primary Domain**: `https://allyship-psi.vercel.app`
- **Framework**: Next.js 16 (Turbopack)
- **Node.js Version**: 20.x
- **Edge Network**: Global CDN with automatic SSL/TLS encryption
- **Continuous Integration (CI/CD)**: Enabled. Every push to the `main` branch on GitHub triggers an automatic production build and deployment.

---

## 4. Development & Deployment Workflow

### Running Locally
```bash
# Start Next.js development server
npm run dev

# Local dev URL: http://localhost:3000
```

### Quality & Build Verification
```bash
# TypeScript type check
npx tsc --noEmit

# Linting
npm run lint

# Production build check
npm run build
```

### Pushing Updates to Production
Because Vercel is connected directly to your GitHub repository, updating the live site requires only standard Git commands:

```bash
git add .
git commit -m "feat: description of changes"
git push origin main
```
*Vercel will detect the push, build the site, and update `https://allyship-psi.vercel.app` in ~45 seconds.*

---

## 5. Instant Local Tunnels (Alternative Quick Demo)

If you need to share work-in-progress before committing to GitHub, use the pre-installed Cloudflare tunnel:

```bash
# Ensure dev server is running on port 3000
npm run dev

# In a separate terminal, launch tunnel:
cloudflared tunnel --url http://localhost:3000
```
This generates a temporary `https://<random-id>.trycloudflare.com` URL instantly without any login or account requirement.
