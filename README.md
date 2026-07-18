# eDigital Interactive — Marketing Site

A production-ready marketing website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **PostgreSQL**, and **Prisma**.

## What's included

- **Homepage** with hero, services grid, industry playbooks, process, and lead capture
- **`/services`** index + **`/services/[slug]`** dynamic pages for all 15 services (with sub-services, deliverables, process, and FAQ schema markup for SEO)
- **`/industries`** index + **`/industries/[slug]`** dynamic pages (Law Firms, Salon, Healthcare)
- **`/blogs`** + **`/blogs/[slug]`** — Prisma-backed blog with categories & tags
- **`/casestudy`** + **`/casestudy/[slug]`** — Prisma-backed case studies with filterable categories (SEO, Performance Marketing, Social Media, Website)
- **`/contact`** and **`/about`** pages
- **Lead capture form** (Name, Email, WhatsApp phone, Service type, Budget slider, Message) → stored in Postgres via `/api/leads`, with a stubbed WhatsApp Cloud API notification hook
- **Chatbot widget** with a lightweight retrieval layer (`/api/chat`) — grounded in your services/industries content today, with a clearly marked swap-point to plug in a real LLM + vector DB for full RAG
- `sitemap.xml` and `robots.txt` generated dynamically
- FAQ `JSON-LD` schema on every service page

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router, Server Components) |
| Styling | Tailwind CSS + custom design tokens |
| Database | PostgreSQL |
| ORM | Prisma |
| Forms/validation | Zod |
| Icons | lucide-react |

## 1. Install dependencies

```bash
npm install
```

## 2. Set up your database

Get a free Postgres instance from [Neon](https://neon.tech), [Supabase](https://supabase.com), or [Railway](https://railway.app) — or use a local Postgres install.

Copy the env file and fill in your connection string:

```bash
cp .env.example .env
```

```
DATABASE_URL="postgresql://user:password@host:5432/dbname?sslmode=require"
```

## 3. Push the schema & seed sample content

```bash
npm run db:push     # creates tables from prisma/schema.prisma
npm run db:seed     # loads sample blog posts & case studies
```

(Use `npm run db:migrate` instead of `db:push` if you want tracked migration files for production.)

## 4. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 5. Deploy

**Recommended: Vercel**

1. Push this repo to GitHub.
2. Import it into [Vercel](https://vercel.com/new).
3. Add the `DATABASE_URL` environment variable (and any WhatsApp/LLM keys you use) in Vercel's project settings.
4. Deploy. Vercel runs `prisma generate` automatically via the `postinstall` script.
5. Run `npx prisma migrate deploy` (or `db push`) against your production database once, and `npm run db:seed` if you want the sample content live.

Any Node-compatible host (Render, Railway, a VPS) works the same way — just make sure `DATABASE_URL` is set before build.

## Content model — where to edit things

- **Services & industries copy** live in `src/lib/data/services.ts` and `src/lib/data/industries.ts` — plain TypeScript arrays, no database needed. Edit these directly; add a new object to add a new service/industry page automatically (routes are generated from the slug).
- **Blog posts & case studies** live in Postgres via Prisma. Manage them with:
  ```bash
  npm run db:studio
  ```
  which opens Prisma Studio, a visual database editor — no admin panel needed for a first launch. If you want a real CMS UI later, this schema is compatible with a lightweight custom admin route or a headless CMS layered on top.
- **Leads** land in the `Lead` table. Open Prisma Studio or connect a BI tool directly to Postgres to view them, or wire up the stubbed WhatsApp notifier in `src/app/api/leads/route.ts`.

## Making the chatbot a real RAG pipeline

`src/lib/retrieval.ts` currently does simple keyword-overlap matching against your services/industries content — it works out of the box with zero paid dependencies, but it isn't semantic search.

To upgrade to full RAG:

1. Chunk your services, industries, blog posts, and case studies content.
2. Generate embeddings for each chunk (OpenAI `text-embedding-3-small`, Voyage AI, etc.).
3. Store vectors in Postgres via the `pgvector` extension (simplest — same database, no new infra) or a dedicated vector store (Pinecone, Qdrant).
4. In `src/app/api/chat/route.ts`, replace the keyword retriever with a similarity search, and pass the top-k chunks as context to an LLM call (the commented-out block in that file shows the shape of an Anthropic Messages API call).

## WhatsApp automation

`src/app/api/leads/route.ts` includes a `notifyWhatsApp()` stub using the WhatsApp Cloud API. Add `WHATSAPP_TOKEN` and `WHATSAPP_PHONE_ID` to your `.env` to activate it — it's a safe no-op until those are set.

## Design system

Colors, type, and layout tokens are defined in `tailwind.config.ts` and `src/app/globals.css`:

- **Paper** `#F7F8FA` background, **Ink** `#0B1220` text/dark sections
- **Signal teal** `#0E7C7B` primary accent, **Amber** `#F5A623` and **Coral** `#EF6461` secondary accents
- Display type: Space Grotesk · Body: Inter · Data/mono: JetBrains Mono

## Project structure

```
src/
  app/                  # routes (App Router)
    api/leads/          # lead capture endpoint
    api/chat/           # chatbot endpoint
    services/[slug]/
    industries/[slug]/
    blogs/[slug]/
    casestudy/[slug]/
  components/           # Header, Footer, LeadForm, Chatbot, ui/*
  lib/
    data/               # static services + industries content
    prisma.ts           # Prisma client singleton
    retrieval.ts        # chatbot retrieval logic
prisma/
  schema.prisma
  seed.ts
```
