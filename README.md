# Prompt King

A complete Next.js App Router website for **promptkingai.com**. The website helps visitors discover and copy AI photo prompts and download the Prompt King Android app. It does not generate or edit images. There are no Like or Favorite controls.

## Run locally

Use Node.js 22 or 24 and npm. From the extracted project directory:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. Optional: copy `.env.example` to `.env.local`, then edit the site origin and support email. The default canonical origin is already `https://promptkingai.com`.

To run the production build:

```bash
npm run build
npm run start
```

Required scripts are exactly `next dev`, `next build`, and `next start`. This is a normal Node.js Next.js app, with no Cloudflare, Vercel or Sites runtime dependency. The image optimizer runs through Next.js on the Node server. All photos and fonts are local assets; the browser does not need a third-party image CDN or Google Fonts request.

## Project organization

| Folder/file                   | Purpose                                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------------------- |
| `app/`                        | App Router pages, shared layout, responsive stylesheet, loading/error/404 states, metadata routes |
| `components/`                 | Reusable interface components                                                                     |
| `data/prompts.js`             | Eight demo prompt records and practical editorial content                                         |
| `data/categories.js`          | Category slugs, names and introductions                                                           |
| `data/guides.js`              | Three complete prompt guides                                                                      |
| `lib/prompt-service.js`       | Data-access boundary for future backend integration                                               |
| `lib/site.js`                 | Canonical origin, shared metadata helper, app URL and contact configuration                       |
| `public/images/`              | Optimized WebP style-reference photos                                                             |
| `public/fonts/`               | Self-hosted Outfit variable font and license                                                      |
| `app/icon.svg`                | Original crown favicon                                                                            |
| `tests/site.spec.js`          | Browser tests for responsive layout, navigation, copy, search, routes and metadata                |
| `docs/production-checks.json` | Actual production HTTP verification results                                                       |
| `ASSET-CREDITS.json`          | Photo sources and credits                                                                         |
| `.env.example`                | Documented environment configuration; no credentials                                              |

## Routes

| Routes                                                                                   | Content                                                                                          |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `/`                                                                                      | Full homepage with hero, search, categories, trending/latest grids, features, app CTA and guides |
| `/explore` and `/explore?q=couple`                                                       | Live frontend mock search and empty state                                                        |
| `/categories`                                                                            | Category directory                                                                               |
| `/category/trending`, `/category/portrait`, `/category/boys`, `/category/girls`          | Filtered prompt catalogs                                                                         |
| `/category/couple`, `/category/cinematic`, `/category/traditional`, `/category/festival` | Filtered prompt catalogs                                                                         |
| `/latest`                                                                                | Catalog ordered by demo creation date                                                            |
| `/prompt/[slug]`                                                                         | Eight full detail pages, including `/prompt/cinematic-black-outfit-portrait`                     |
| `/blog`                                                                                  | Guide index                                                                                      |
| `/blog/how-to-use-ai-photo-prompts`                                                      | Getting started guide                                                                            |
| `/blog/cinematic-portrait-prompt-ideas`                                                  | Cinematic styling guide                                                                          |
| `/blog/improve-an-ai-photo-prompt`                                                       | Prompt refinement guide                                                                          |
| `/about`, `/contact`, `/faq`                                                             | Product information and support                                                                  |
| `/privacy-policy`, `/terms`, `/disclaimer`                                               | Website policy pages                                                                             |
| `/cookie-policy`, `/editorial-policy`, `/dmca`                                           | Additional policy and copyright information                                                      |
| `/sitemap.xml`, `/robots.txt`                                                            | SEO discovery endpoints                                                                          |
| Unknown routes                                                                           | Custom “Prompt not found” page                                                                   |

Every content route has one H1, a unique title/description, canonical metadata and Open Graph text. Prompt and guide pages use their primary reference image for social previews. Search-query pages are noindex to avoid indexing an arbitrary number of search variants.

## Reusable components

`Header`, `Brand`, `Footer`, `PromptCard`, `PromptGrid`, `SearchBar`, `PromptExplorer`, `CategoryChips`, `CopyPrompt`, `FAQ`, `AppDownloadCTA`, `PlayButton`, `RelatedPrompts`, `BlogPreview` and `PolicyPage`.

The mobile menu supports expansion state, route-change closing and Escape-to-close with focus returned to the toggle. Search updates its result count through an accessible status region. Copy uses `navigator.clipboard.writeText` and provides success or a manual-copy fallback message. FAQ accordions use native `details` and `summary`.

Prompt grids use exactly **4 columns at 1024px and wider, 2 columns from 640–1023px, and 1 column below 640px**. The detail page uses a two-thirds/one-third layout at desktop sizes and one column below 1024px. Its sidebar is not sticky. The small illustrative feed mockup is a separate visual, not the website's prompt grid.

## Deploy on Hostinger Web App

The source is ready for GitHub or ZIP deployment. It has not been uploaded to a Hostinger account or connected to the domain.

1. Extract this archive. Keep `package.json`, `package-lock.json`, `app`, `components`, `data`, `lib` and `public` together at your repository root.
2. Push the source to your GitHub repository, or upload the source ZIP through Hostinger.
3. In Hostinger, select **Websites → Add Website → Deploy Web App**. Choose GitHub import or file upload.
4. Select **Next.js** and **Node.js 22 or 24**. Use the auto-detected Next.js build settings. Build command: `npm run build`; start command: `npm run start`. If asked for the build output, use `.next`. Do not select a static-only export or upload `.next` into a PHP public_html directory.
5. Set `NEXT_PUBLIC_SITE_URL=https://promptkingai.com`. Optionally set `NEXT_PUBLIC_CONTACT_EMAIL` to your verified public support address. These public values are compiled into the build, so rebuild after changes.
6. Deploy, then use Hostinger's domain connection controls for `promptkingai.com`. Use the DNS records Hostinger actually supplies, and confirm HTTPS is active.
7. Check `/`, `/prompt/cinematic-black-outfit-portrait`, search, the mobile menu and Copy Prompt on the HTTPS domain.

Hostinger's current guide supports GitHub import and ZIP upload for Node.js apps: https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/
Next.js installation reference: https://nextjs.org/docs/app/getting-started/installation

The exact dashboard wording can change. No hosting credentials, paid resources, domain records or external repository were changed during this build.

## Connect your existing backend later

Start in **`lib/prompt-service.js`**. It is the only module that imports `data/prompts.js`. The page components already use the service boundary.

Keep these contracts:

```js
listPrompts({ query, category, sort, limit, offset });
// => Promise<{ items: Prompt[], total: number }>
getPrompt(slug);
// => Promise<Prompt | null>
getRelatedPrompts(prompt, limit);
// => Promise<Prompt[]>
getPromptSlugs();
// => Promise<string[]>
```

The core record fields are `id`, `slug`, `title`, `description`, `image`, `prompt`, `category`, `tags`, and `createdAt`. Detail pages additionally consume `imageAlt`, `about`, `bestFor`, `framing`, and `customization`; add these as website editorial fields or map equivalent backend fields. `featured` currently drives the editorial Trending collection. Validate/map incoming records at the service boundary rather than adding backend field assumptions throughout the UI.

Use `PROMPT_API_URL` and `PROMPT_API_TOKEN` as server-only settings. Do not put a secret in `NEXT_PUBLIC_*` or client components. Fetch from your existing API through the server, check HTTP failures and response shapes, and choose a deliberate cache/revalidation policy. Add a loading/error response appropriate for your real backend.

The initial `/explore` page gets data through the service, then `PromptExplorer` filters the small demo collection in the browser. For a larger backend catalog, replace this local filtering with server search or an `/api/prompts` route handler calling `listPrompts`. Debounce input, cancel outdated requests, use `{items,total}` for pagination, and retain the same `PromptGrid`/`PromptCard` components. The existing load-more control activates when more than eight matching records exist; the current fixture needs no additional page.

Dynamic prompt/category/blog routes currently use `generateStaticParams` with `dynamicParams = false`, giving unmapped demo slugs a real HTTP 404. When connecting live prompts, explicitly decide how newly published slugs become available: rebuild after publishing, or enable dynamic params with suitable caching and missing-record handling. Update sitemap generation to enumerate the API's published records. Do not silently leave new records outside the deployment's route list.

If your backend image URLs use a CDN, add its exact trusted hostname and path to `images.remotePatterns` in `next.config.mjs`. Avoid an unrestricted hostname wildcard. Keep responsive `sizes`, dimensions and descriptive alt text.

## Content and launch configuration

- This is an original design with an original crown wordmark concept, not a copy of another prompt website. Replace `Brand` and the favicon with your approved brand assets if desired.
- The eight records are demonstration content. Trending means an editorial selection; there are no fabricated usage numbers, ratings or testimonials.
- Catalog photos are explicitly illustrative style references, not verified outputs of their prompts. Credits are included. Replace these with your own approved backend images when integrating your real catalog; respect applicable image licenses and third-party personality rights.
- The app visual is labeled an illustrative feed preview. It is not represented as a screenshot of the actual Android app.
- Every app CTA uses `https://play.google.com/store/apps/details?id=com.promtking.app`. “Open Prompt King App” opens that listing; a direct app deep link is not invented.
- No analytics, ads, tracking cookies, photo uploads or fake contact form were added. Contact uses a configured public email or the real app listing's support route.
- Review policy text against the actual operator, hosting configuration and any later analytics/ads before launch. These pages describe the supplied demo implementation and cannot establish AdSense approval or legal compliance.

## Verification

`npm run build` passes. Production HTTP checks cover all sitemap content routes, unique titles, one H1 per page, canonical/Open Graph metadata, local image delivery, correct app links, prompt FAQs, search response and unknown-prompt 404. See `docs/production-checks.json` for actual results.

Browser execution and screenshots were unavailable in the build environment: the supervised preview passes Vite flags that Next.js does not accept, and a standalone browser download timed out. Browser tests are supplied but are **not claimed as passed**. No measured Core Web Vitals or Lighthouse score is claimed.

Run the included browser checks locally:

```bash
npx playwright install chromium
npm run build
npm test
```

The suite checks 1440px/820px/390px/320px grids, overflow, mobile navigation, all image loads, search/empty results, clipboard, five FAQs, metadata and 404. It also saves desktop/mobile screenshots under `docs/`. Confirm the typography, image crops, keyboard experience and real-device copy behavior before publishing.
