# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** Indian textile manufacturers and exporters who sell to European brands and buyers. Under EU ESPR 2024 (Regulation (EU) 2024/1781), their EU customers will require Digital Product Passport data for textile products. They come to StableDPP to become DPP-ready so they keep and win EU export business.

**Secondary (served by existing pages, not the first audience to win):** fashion brands selling into the EU, retailers verifying supplier data, and consumers who scan a product's QR code and land on a passport.

## Product Purpose

StableDPP issues EU ESPR 2024 compliant Digital Product Passports: tamper-evident, GS1 Digital Link-aligned records of a product's materials, origin, certifications and sustainability data, accessed via QR code. Success means an exporter can issue passports their EU buyers accept, without technical setup, and every claim in them can be independently verified rather than merely asserted.

## Positioning

The core differentiator is proof, not assertion: every passport is anchored to a blockchain record, so claims are tamper-evident and independently verifiable ("Trust as Infrastructure"). It is reinforced by three confirmed differentiators:

- Free, no-setup start: issue a first DPP self-serve.
- Component-level tracking: fabric, dye, hardware and lining each carry their own record.
- Supplier confidentiality: verified public data is shared while supplier identities, pricing and sourcing stay private (GDPR, Private Data Collections, role-based access).

Competitor research (Sept 2026) found that no major DPP platform (TrusTrace, Retraced, Green Story, atma.io, TextileGenesis, EON, Renoon, Fairly Made, Carbonfact) leads with blockchain verification, and none shows real passport UI or data on its marketing site. ESPR does not mandate blockchain; blockchain is StableDPP's chosen means to tamper-evidence, and copy already states this.

## Operating Context

- Buyers evaluate StableDPP against EU buyer requirements and ESPR rollout dates for textiles (the 2027 textile deadline is a recurring query).
- Passports are reached by scanning a GS1 Digital Link QR code on the physical product.
- The site is a React Router marketing site plus a working flow: `/create-dpp` → `/create/:productType` → `/passport/:productType` (t-shirt and jeans, with 3D models), backed by a blockchain API (`src/app/utils/blockchainApi.ts`).
- The site has India-specific and textile-specific landing pages (`/digital-product-passport-india`, `/dpp-for-textiles`), solution segments for brands, manufacturers and retailers, a blog of long-form guides, and Book a Demo / Get Started conversion paths.

## Capabilities and Constraints

- **Content is frozen. Style only.** All existing copy, headings, page structure for SEO, meta tags, schema, alt text, FAQ content, internal links and URLs are SEO-optimised (see `seo_designs.md`, `public/llms.txt`, `src/app/utils/seo.ts`) and must not be changed. Design work changes how things look, never what they say. Any copy change needs explicit approval first.
- The goal of visual work is to stop the site reading as generic AI-generated SaaS and give it a credible, specific character. See the design audit (`~/Downloads/StableDPP_Design_Audit.pdf`) for known weaknesses.
- Pricing (Free / €199 Growth / Custom Enterprise in `PricingPage.tsx`) is **not published**. The page is not routed. Do not surface pricing.
- **Undecided:** the status of the "Trusted Brands" names in `src/app/constants/index.ts` (Madura Fashion, Arvind Limited, Raymond Group, etc.). Until the user confirms, do not add logos, quotes, "passports issued" counts or case-study links for them, and do not make them more prominent.
- **Undecided:** whether blockchain anchoring and the create flow are production-live or demo, and which network is used. Do not invent real-looking hashes, block numbers or explorer links as proof.
- Terminology: Digital Product Passport (DPP), EU ESPR 2024, GS1 Digital Link, component-level DPP, Private Data Collections.

## Brand Commitments

- Name: StableDPP. Logo assets are in `public/logo-transparent.png`, `public/icon.png` and `src/imports/`.
- The existing voice (in the SEO copy) is binding: authoritative, regulation-literate, and specific about ESPR.
- Founders are named publicly: Sudhanva Bhandolkar and Priya Hebbal (`CompanyPage.tsx`).

## Evidence on Hand

- Competitor research: `~/Downloads/StableDPP_DPP_Research_Findings.pdf`.
- Design audit: `~/Downloads/StableDPP_Design_Audit.pdf`.
- Working passport flow with 3D product models: `public/t-shirt.glb`, `public/jeans.glb`.
- SEO content guide: `seo_designs.md`. LLM summary: `public/llms.txt`.
- Absences that must not be fabricated: customer logos, testimonials, case studies, adoption metrics, real environmental figures attributed to a real product, and on-chain proof values.

## Product Principles

1. **Show proof, don't claim it.** Verifiability is the product; design should make evidence visible instead of decorating assertions.
2. **Speak to the exporter's deadline.** The primary visitor needs confidence that EU buyers will accept their passports; ESPR readiness is the job to be done.
3. **Content is sacred; form is open.** SEO copy and structure are settled assets; design earns its keep through hierarchy, rhythm and character, not rewrites.
4. **Specific over generic.** Textile supply-chain reality (fibres, facilities, certifications, components) beats generic SaaS patterns.
5. **Never fake trust.** No invented customers, numbers or proof; an honest gap is better than a fabricated signal.
