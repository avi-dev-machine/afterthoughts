# AFTERTHOUGHTS.

*A collection of thoughts on AI, technology and everything that comes next.*

**AFTERTHOUGHTS.** is an independent digital technology publication exploring artificial intelligence, human cognition, computing systems, and the questions surrounding technological progress.

## Published Chapters

- **Chapter 01 (`PUBLISHED`)**: [AI Should Be Our Calculator, Not Our Replacement](./CHAPTER_01.md) — Route: `/afterthoughts/chapter1`
- **Chapters 02 – 24 (`UPCOMING`)**: Listed chronologically in `/chapters` and `/afterthoughts`.

## Routing & Extensible Architecture

- `/` — Editorial Homepage featuring the latest published chapter and the 24-chapter archive.
- `/afterthoughts/chapter1` (and `/afterthoughts/chapter{N}`) — Dedicated editorial reading experience for each chapter.
- `/chapters` & `/afterthoughts` — Complete 24-chapter chronological archive.
- `/about` — About the publication.
- `/api/afterthoughts` & `/api/afterthoughts/chapter1` — JSON API endpoints for publication and chapter metadata.

### Adding New Chapters (Chapter 02+)

To publish a new chapter at `/afterthoughts/chapter2`:
1. Add `src/content/chapters/chapter2.md` (automatically parsed) **or** create a structured `src/content/chapters/chapter2.ts` and register it in `STATIC_CHAPTERS` inside `src/lib/chapters.ts`.
2. Next.js automatically updates the status in the 24-chapter archive from `upcoming` to `published` and generates `/afterthoughts/chapter2`.

## Development & Deployment

```bash
npm install
npm run dev
```

Production build (Vercel-ready):

```bash
npm run build
npm start
```
