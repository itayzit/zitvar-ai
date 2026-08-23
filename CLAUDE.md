# zitvar-ai

Personal one-page site for Itay Zitvar (www.zitvar.ai). Next.js App Router + Tailwind v4 + framer-motion, deployed on Vercel from `main`.

## Rules

- **Keep `public/llms.txt` in sync.** Every content change to the site (adding/removing/reordering projects, changing descriptions, links, social handles, contact methods, or the tagline) must also be reflected in `public/llms.txt` in the same commit.
- Keep the JSON-LD `Person` block in `src/app/page.tsx` in sync with social links and identity facts.
- The design system lives in `src/app/globals.css` (`@theme` tokens). Use tokens, not hard-coded colors.
