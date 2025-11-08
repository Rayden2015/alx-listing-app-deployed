### Project Overview
ALX Listing App scaffolds an Airbnb-style frontend with browsing, property detail, and booking pages. It’s a Next.js 15 project with React 19, TailwindCSS, and TypeScript for type-safe UI work. The UI is built from reusable components (components/) and sample data in constants/.


### Tech Stack
Runtime: Next.js 15 (pages router), Node.js
Lang: TypeScript/TSX across components and API routes
Styling: TailwindCSS with global styles in styles/globals.css
Linting: ESLint via eslint.config.mjs
Build tooling: PostCSS, Tailwind, TypeScript configs in repo root


### What Happens When You Run npm run start
Script kickoff: npm run start triggers the start script in package.json, which executes next start. This command expects that npm run build has already produced the .next production bundle.
Next.js server bootstrap: next start spins up the Next.js production server. It loads next.config.ts (enabling reactStrictMode and allowing remote images from picsum.photos) and reads runtime env files if present.
Route manifest load: The server reads the compiled routes from .next/ (derived from files in pages/ and pages/api/). It does not execute your application code yet; it just readies the handlers.
Request handling sequence (example: visiting /):
Next resolves the / route to pages/index.tsx.
Before rendering the page component, Next wraps it with the custom App component from pages/_app.tsx, which injects the site-wide layout.


### Request handling sequence (example: visiting /):
Next resolves the / route to pages/index.tsx.
Before rendering the page component, Next wraps it with the custom App component from pages/_app.tsx, which injects the site-wide layout.