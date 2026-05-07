# Shonda Martin — Personal Brand Site (v23)

Static site ready for Netlify deploy. Drag and drop the contents of this folder into Netlify's deploy area.

## v23 critical-fixes pass — what changed

This release addresses the four critical items from the audit. Polish only — no structural changes to the site organization or homepage flow.

### 1. Houston tour CTA wired
- `/events.html` Houston "Register Now →" button now links to https://join.smartcredit.com/shondamartin/
- Opens in new tab with `rel="noopener sponsored"` (proper FTC affiliate disclosure)
- Note text updated to "Free seat. Limited venue capacity. Registration via SmartCredit."

### 2. OG images on all main pages
Generated 5 branded social share images (1200x630, ~50-68KB each):
- `/assets/og-home.jpg`
- `/assets/og-shop.jpg`
- `/assets/og-resources.jpg`
- `/assets/og-blog.jpg`
- `/assets/og-bootcamp.jpg`

(events.html already had its own image: shonda-brunch-tour.jpg)

All 6 main pages now render proper preview cards when shared on Instagram, iMessage, Facebook, Twitter, etc.

### 3. Em-dash voice cleanup site-wide
Per Shonda's voice rule: avoid em-dashes in casual content. Cleaned 10 HTML files (index, blog, resources, shop, events, bootcamp, all 3 blog posts, library/index, library/how-to-pay-credit-card). The 4 remaining em-dashes are inside HTML comments and one input placeholder (invisible to users).

### 4. Article visuals — every article now has 3 visual elements
The biggest fix. Articles previously had zero in-content visuals. Now every article has:
- **Hero graphic banner** (gradient with eyebrow tag, title, byline)
- **Stats grid** (3 key stat blocks following the intro)
- **Pull-quote callout** (mid-article, dark gradient with serif quote mark)
- **Numbered takeaways card** (key actions, before the CTA box)

Applied to all 12 articles (3 blog + 9 library guides). Custom content per article — eyebrows, pull quotes, stat figures, and takeaways are unique to each piece.

## Site structure

```
shondamartin-site-netlify-ready/
├── index.html              # Homepage
├── blog.html               # Blog landing
├── shop.html               # Shop / store
├── resources.html          # Resource Hub
├── events.html             # Tour page
├── bootcamp.html           # Free 5-week bootcamp
├── style.css               # All styles (~9,300 lines)
├── netlify.toml            # Netlify config
├── _redirects              # URL redirects
├── robots.txt              # Crawler instructions
├── sitemap.xml             # Site map for SEO
│
├── blog/                   # Blog posts (3 articles)
├── resources/library/      # Resource Library (9 critical guides + index)
├── p/cc-2026/              # Hidden Playbook URL
├── downloads/              # 7 PDFs (banking protocol, FICO 10T, 5 bootcamp weeks)
└── assets/                 # Photos, logos, OG images, icons
```

## Homepage section order (unchanged from v22)
1. Hero
2. About (Let me introduce myself)
3. Start Here (Choose your next step)
4. Bootcamp Banner (skinny widget)
5. Learning Resources (shop preview)
6. Watch Latest Videos
7. Read Latest Posts
8. Become a Credit Cousin (free + VIP cards)
9. Social Media Banner

## Brand details preserved
- Colors: #5EC806 green, #FFBB00 yellow, #00A5E2 blue, #FF5C00 orange, #F10085 pink, #00106F navy, #350263 deep purple
- Fonts: Big Noodle Tilting + Avenir LT Std (web fallbacks: Oswald + Inter)
- Voice: kinship register ("Cousin"), short sentences, plain language, no F.R.E.E. branding public-facing, no personal life refs

## Outstanding items (not in v23 scope, see audit)
- Stan Store individual product URLs (currently all paid product cards point to generic `stan.store/ShondaMartin`)
- 5 placeholder bootcamp PDFs in `/downloads/` need real documents
- Letters 6-17 canonical content for the Playbook
- Letter screenshots for Playbook templates
- Hero copy refresh (option not selected during v23)
- Section title standardization (deferred)
- Mobile responsiveness audit (deferred)
- Footer rebuild + 404 page (deferred)

## Netlify deploy
Manual ZIP upload (no Git connection).
- AI agents disabled
- AI inference enforcement set to 1 credit (locked down after credit leak diagnosed and fixed in earlier session)
- Pro plan, 5,000 credits/month (was on free tier with 300 credit limit, hit by Cowork/Codex agent triggering Claude Opus 4.7 sessions through Netlify Agent Runner)
