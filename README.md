# Abid Hasan Rafi — Personal SEO Portfolio

A colorful, responsive, SEO-focused personal portfolio built with React + Vite. Ready to push to GitHub and deploy on Vercel.

## Included
- Responsive design for desktop, tablet, and mobile
- Animated hero graphic, floating cards, and scroll reveal effects
- About, SEO expertise, service focus, professional journey, principles, and social links
- SEO title, meta description, keywords, Open Graph tags, canonical URL placeholder
- Schema.org `Person` structured data
- Custom favicon
- Reduced-motion accessibility support

## Run locally
Install Node.js (LTS), then run:

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Before publishing — important checklist
1. **LinkedIn:** The LinkedIn URL you supplied was actually a Facebook URL. Replace the `https://www.linkedin.com/` placeholder in `src/main.jsx` with your real LinkedIn profile URL.
2. **Canonical URL / social preview:** Replace `https://YOUR-DOMAIN.vercel.app/` in `index.html` with the real deployed domain. Also update `og:image` to a real public image URL once you add an `og-image.jpg`.
3. **Verify claims:** Review all professional descriptions and remove or edit any details that don't accurately reflect your real responsibilities or experience.
4. **Add real evidence:** To build trust, add genuine projects, case studies, certifications, and measurable results only when you can substantiate them.
5. **Search indexing:** After deploying, add the domain to Google Search Console, verify ownership, submit the sitemap, and inspect the homepage URL.

## Deploy to Vercel
### Option A: GitHub
1. Create a GitHub repository.
2. Upload or push all files in this ZIP.
3. Sign in to Vercel and import the repository.
4. Vercel should detect Vite automatically.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy.

### Option B: Vercel CLI
```bash
npm install
npm run build
npx vercel
```

## Search ranking notes
The primary keyword is **Abid Hasan Rafi**. This site uses the name in the title, main heading, description, and Person schema. These are helpful foundations, not a guarantee of a first-page result. Ranking depends on Google's crawling and indexing, competition, reputation, useful original content, and relevant trusted mentions. Do not repeat keywords unnaturally.

## Suggested next improvements
- Add a real professional portrait and a custom social preview image.
- Add a `public/robots.txt` and `public/sitemap.xml` after choosing the final domain.
- Add a projects/case-studies section with authentic examples and outcomes.
- Use the real LinkedIn profile URL and any other professional profiles you want indexed.
