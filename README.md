# The Soul Layer — Website

A custom-built replacement for the Shopify store. Free to host, no monthly
platform fee. Orders route to Instagram DM, same as your current flow.

## What's here

- **Next.js 16 + Tailwind v4** — modern, fast, fully responsive.
- **Design**: obsidian/brass/ember palette, Fraunces display + Inter body +
  JetBrains Mono for labels. Product images "print" into view on load/hover
  (a layer-line sweep), referencing your actual manufacturing process.
- Pages: Home, Catalog (with category filters), Product detail, About
  (founders story), Contact.
- Every "Order" button opens an Instagram DM pre-filled with the product name.

## Editing content yourself (no coding needed for the basics)

Two files control everything:

- **`src/data/products.ts`** — every product: name, price, sale price,
  category, description, specs, image, and an optional tag (`Sale`, `New`,
  `Bestseller`). Copy an existing entry, change the fields, done. Add or
  remove entries freely — the catalog and homepage update automatically.
- **`src/data/site.ts`** — your Instagram handle, socials, and founders
  story text.

To change these without installing anything locally, you can edit them
directly on GitHub (see deploy steps below) — GitHub lets you edit a file
and commit right in the browser, and Vercel auto-redeploys within ~1 minute.

**Note on the admin dashboard:** you asked for something easier than editing
code. The cleanest no-code option is adding **Sanity.io** (free tier) as a
headless CMS, which gives you a real login-and-click dashboard for products.
I kept this version code-based first so you can see and approve the design
before we wire that up — happy to add it as a next step once you're happy
with the site itself. It's a bounded follow-up, not a rebuild.

## Images & video

- Product photos go in `public/images/`, referenced by path in
  `products.ts` (e.g. `/images/flexi-cat.jpg`). Current images are
  placeholders — swap in real product photos at roughly 1000×1250px.
- Homepage hero video goes at `public/videos/hero.mp4`. Until you add one,
  it falls back to a dark gradient background — the layout still looks
  intentional, it just won't autoplay footage.

## Run it locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploy for free (Vercel + GitHub)

1. Create a free account at github.com and vercel.com if you haven't.
2. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/soul-layer.git
   git push -u origin main
   ```
3. In Vercel: **Add New → Project**, import that GitHub repo, keep default
   settings (Vercel auto-detects Next.js), click **Deploy**.
4. Once deployed, go to **Project → Settings → Domains**, add
   `thesoullayer.in`, and update your domain's DNS records as Vercel
   instructs (usually one A record + one CNAME, done at wherever you
   bought the domain).
5. From now on, any change pushed to GitHub (including edits made directly
   in GitHub's web editor) redeploys automatically — no manual steps.

## Before going live

- Set the real Instagram handle in `src/data/site.ts`
  (`instagramHandle`).
- Replace placeholder product images and the hero video.
- Update product prices/descriptions to match what you're actually selling.
