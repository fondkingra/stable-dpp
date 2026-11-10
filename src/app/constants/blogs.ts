export const BLOG_AUTHOR = {
  name: "Sudhanva Bhandolkar",
  jobTitle: "Co-founder, Stable DPP",
} as const;

export type BlogSlug =
  | "what-is-a-digital-product-passport"
  | "espr-regulation-2024-1781-explained"
  | "how-to-create-a-digital-product-passport"
  | "digital-product-passport-cost"
  | "digital-product-passport-for-textile-manufacturers"
  | "gs1-digital-link-digital-product-passport"
  | "eu-dpp-standards-en-1821x-explained"
  | "battery-passport-digital-product-passport-rehearsal"
  | "eu-dpp-registry-explained";

export type BlogPostMeta = {
  slug: BlogSlug;
  title: string;
  crumbLabel: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  image: string;
  ogImage: string;
  imageAlt: string;
  readingMinutes: number;
  faqs: readonly { q: string; a: string }[];
  howToSteps?: readonly { name: string; text: string }[];
};

const BASE = import.meta.env.BASE_URL;

export const BLOG_POSTS: readonly BlogPostMeta[] = [
  {
    slug: "eu-dpp-standards-en-1821x-explained",
    title:
      "The EU Just Published the Rulebook for Digital Product Passports — Here's What It Changes for Textile Exporters",
    crumbLabel: "EN 1821x DPP Standards",
    metaTitle:
      "EU DPP Standards Explained: What EN 18216–18223 Mean for Exporters | StableDPP",
    metaDescription:
      "The EU has published eight harmonised standards defining how every Digital Product Passport must be identified, carried, exchanged, stored and secured. Here's what EN 18216–18223 mean for textile exporters.",
    excerpt:
      "Six EN 1821x standards are now cited as harmonised in the Official Journal, carrying a presumption of conformity with ESPR Articles 10 and 11. That's the difference between a DPP build that's defensible and one that's a rebuild waiting to happen.",
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
    image: `${BASE}blog/blog-7-featured.png`,
    ogImage: "https://stabledpp.com/blog/blog-7-featured.png",
    imageAlt:
      "The eight EN 1821x standards governing Digital Product Passport identifiers, carriers, exchange, storage, APIs and security.",
    readingMinutes: 9,
    faqs: [
      {
        q: "What do the EN 1821x standards actually cover?",
        a: "Eight European standards define how any Digital Product Passport is identified (EN 18219), carried (EN 18220), exchanged (EN 18216), stored (EN 18221), exposed through APIs (EN 18222), made interoperable (EN 18223), and secured (EN 18239, EN 18246) — product-agnostic rules for how a passport works, not what a T-shirt must disclose.",
      },
      {
        q: "Is a standard being published the same as it being mandatory?",
        a: "No. Six of the eight standards were cited as harmonised in the Official Journal on 15 July 2026 (Implementing Decision (EU) 2026/1736). Conformity with a harmonised standard carries a presumption of conformity with ESPR Articles 10 and 11, to the extent the cited standards cover those requirements — a meaningfully stronger position than a standard that is merely available.",
      },
      {
        q: "Can an exporter build DPP infrastructure before the textile delegated act arrives?",
        a: "Yes, for the parts the EN 1821x standards already define: identifier scheme, data-carrier choice, storage and custody, and access tiers. What's still missing is the textile-specific field list, which depends on the delegated act, not on these standards.",
      },
      {
        q: "Does conforming to these standards require blockchain?",
        a: "No. The standards require tamper-evidence, interoperability and secure access management as outcomes — they don't name a technology. Blockchain-anchored architecture is one way to satisfy that requirement, not a mandate the standards impose.",
      },
    ],
  },
  {
    slug: "battery-passport-digital-product-passport-rehearsal",
    title:
      "February 2027: The First Mandatory Digital Product Passport Isn't Yours — and That's Exactly Why It Matters",
    crumbLabel: "The Battery Passport Rehearsal",
    metaTitle:
      "Battery Passport 2027: What It Teaches Textile Exporters Early | StableDPP",
    metaDescription:
      "On 18 February 2027 the battery passport becomes the EU's first mandatory sector-specific Digital Product Passport. Here's what it will prove — eighteen months before textiles have to find out the same way.",
    excerpt:
      "Textile exporters are anchored on a delegated-act date that doesn't exist yet. The date that is fixed is 18 February 2027, when battery passports go live on the same registry infrastructure textiles will later use.",
    datePublished: "2026-09-28",
    dateModified: "2026-09-28",
    image: `${BASE}blog/blog-8-featured.png`,
    ogImage: "https://stabledpp.com/blog/blog-8-featured.png",
    imageAlt:
      "Timeline from the February 2027 battery passport mandate to the indicative textile Digital Product Passport rollout.",
    readingMinutes: 8,
    faqs: [
      {
        q: "When do Digital Product Passports become mandatory for textiles?",
        a: "There is no confirmed date yet. The textile delegated act is indicatively expected around 2027, with roughly an 18-month transition after adoption — realistically placing full textile obligations in late 2028 to early 2029. Treat any more specific date as unconfirmed.",
      },
      {
        q: "What becomes mandatory on 18 February 2027?",
        a: "The battery passport — the EU's first mandatory sector-specific Digital Product Passport, under the Battery Regulation. It is a fixed date, unlike the indicative textile timeline.",
      },
      {
        q: "Does the battery passport mandate apply to textile exporters?",
        a: "No. Battery rules don't extend to textiles. What transfers is the underlying DPP infrastructure — the registry, identifier scheme, data carriers and access-rights model — which batteries will run in production first, on the same EU architecture textiles will later use.",
      },
      {
        q: "Why should a textile exporter care about a battery deadline?",
        a: "Because it's a live-fire test of the exact infrastructure textiles depend on, roughly eighteen months before textile obligations land. Supplier-data delays, registry behaviour under volume, and access-tier failures will surface in batteries first — free lessons for anyone paying attention.",
      },
    ],
  },
  {
    slug: "eu-dpp-registry-explained",
    title:
      "The EU's Digital Product Passport Registry Went Live This Summer — What Changes for Suppliers Outside Europe",
    crumbLabel: "EU DPP Registry Explained",
    metaTitle:
      "EU DPP Registry Explained: What It Means for Non-EU Suppliers | StableDPP",
    metaDescription:
      "The EU Digital Product Passport Registry went live in July 2026. It's a lookup layer, not a data warehouse — and the registration obligation usually sits with your EU buyer, not you. Here's how to read it.",
    excerpt:
      "The EU DPP Registry is a lookup layer holding identifiers and pointers, not your product data. The obligation to register sits with whoever places the product on the EU market — which is why buyer data requests have sharpened since July.",
    datePublished: "2026-08-10",
    dateModified: "2026-08-10",
    image: `${BASE}blog/blog-9-featured.png`,
    ogImage: "https://stabledpp.com/blog/blog-9-featured.png",
    imageAlt:
      "How the EU Digital Product Passport Registry connects identifiers to supplier and brand passport data.",
    readingMinutes: 8,
    faqs: [
      {
        q: "What does the EU Digital Product Passport Registry actually store?",
        a: "Identifiers and pointers — not product data. It resolves a passport identifier to where the underlying record lives; your material composition, supplier and certification data stays with whoever hosts the actual passport.",
      },
      {
        q: "Does an Indian or other non-EU exporter have a direct legal obligation to register?",
        a: "No. The obligation attaches to the economic operator placing the product on the EU market, which for most non-EU exporters shipping FOB is the EU buyer, not the exporter. That obligation flows down contractually, which is why buyer data requests have sharpened since the registry went live.",
      },
      {
        q: "When did the registry go live, and what else changed in July 2026?",
        a: "The registry went live on 19–20 July 2026 (confirm the exact date against the Commission source before citing it). In the same window, Implementing Regulation (EU) 2026/1778 took effect on 6 August 2026, and the Article 25 destruction ban began applying to large fashion undertakings from 19 July 2026 — the second change is what most suppliers actually felt first.",
      },
      {
        q: "How should a supplier respond to a new buyer data-request clause?",
        a: "Read it as three categories: fields that are genuinely regulatory, fields that are the buyer's own ESG programme, and fields that are a broader fishing expedition into your sourcing. Treat it as questions to ask the buyer, not as a clause to accept or reject unilaterally.",
      },
    ],
  },
  {
    slug: "gs1-digital-link-digital-product-passport",
    title:
      "What Is GS1 Digital Link and How Does It Work With Digital Product Passports?",
    crumbLabel: "GS1 Digital Link",
    metaTitle:
      "What Is GS1 Digital Link? How It Powers Digital Product Passports | StableDPP",
    metaDescription:
      "GS1 Digital Link is the QR standard connecting products to their Digital Product Passport data. Learn how it works, why ESPR favors it, and what brands need to use it.",
    excerpt:
      "GS1 Digital Link turns a product's barcode or QR code into a structured web link so a single scan can connect to a Digital Product Passport and other product information.",
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    image: `${BASE}blog/blog-6-gs1-digital-link.png`,
    ogImage: "https://stabledpp.com/blog/blog-6-gs1-digital-link.png",
    imageAlt:
      "GS1 Digital Link resolver flow to Digital Product Passport.",
    readingMinutes: 8,
    faqs: [
      {
        q: "Is GS1 Digital Link the same thing as a QR code?",
        a: "No. The QR code is the physical carrier; GS1 Digital Link is the structured URL format encoded inside it.",
      },
      {
        q: "Do I need a GS1 company prefix to issue a Digital Product Passport?",
        a: "For GS1 Digital Link-compliant identifiers, yes — the prefix is what makes your GTINs globally unique. It is issued by your national GS1 member organisation.",
      },
      {
        q: "Can one QR code serve consumers, retailers and recyclers?",
        a: "Yes. Because the link is structured, a resolver can route the same physical code to different destinations depending on who is requesting it.",
      },
      {
        q: "Does StableDPP generate GS1 Digital Link-compliant codes?",
        a: "Yes. StableDPP generates the compliant Digital Link URL and QR code at the point each passport is created, and handles resolution to that specific product's passport page.",
      },
    ],
  },
  {
    slug: "digital-product-passport-for-textile-manufacturers",
    title:
      "Digital Product Passport for Textile Manufacturers — The Complete Guide",
    crumbLabel: "Textile Manufacturers",
    metaTitle:
      "Digital Product Passport for Textile Manufacturers: Complete Guide | StableDPP",
    metaDescription:
      "A practical guide for textile manufacturers and exporters: what a Digital Product Passport requires, how to prepare supply-chain data, and how to stay ahead of EU ESPR.",
    excerpt:
      "For textile manufacturers, a Digital Product Passport documents materials, origin, and supply-chain journey — passport-ready data before ESPR textile rules phase in from around 2027.",
    datePublished: "2026-07-28",
    dateModified: "2026-07-28",
    image: `${BASE}blog/blog-5-textile-manufacturers.png`,
    ogImage: "https://stabledpp.com/blog/blog-5-textile-manufacturers.png",
    imageAlt:
      "Textile supply chain tiers for Digital Product Passport data collection.",
    readingMinutes: 8,
    faqs: [
      {
        q: "When does ESPR become mandatory for textiles?",
        a: "A category-specific delegated act for textiles is currently expected from around 2027 — but EU buyers may request passport data well before formal enforcement begins.",
      },
      {
        q: "What certifications should textile DPP data reference?",
        a: "Commonly referenced fields include GOTS, OEKO-TEX, and fibre composition — exact requirements depend on the product category's eventual delegated act.",
      },
      {
        q: "Does ESPR require blockchain and interoperability for a Digital Product Passport?",
        a: "Interoperability is a hard requirement. Under Article 10, DPP data must be based on open standards and use interoperable formats, and Article 11 requires passports to be interoperable technically, semantically and organisationally — a passport that only works inside one vendor's system does not meet the regulation. ESPR also requires the data to be secure, authentic and reliable, and it places that data in a decentralised architecture: the EU holds only the registry of identifiers, not the product data itself. The regulation sets that outcome rather than naming one technology, but tamper-evidence is the hardest part of it to satisfy with a conventional database, which is why the EU's own reference infrastructure (EBSI) is built on distributed ledger technology. StableDPP is blockchain-native and GS1 Digital Link aligned, so passports meet the interoperability requirement and carry proof a buyer or regulator can verify independently.",
      },
      {
        q: "Can a manufacturer start with only finished-garment data?",
        a: "Yes. Many manufacturers begin with Tier 1 (cut-and-sew) data and add upstream tiers — fabric mills, raw materials — as those suppliers are onboarded.",
      },
    ],
  },
  {
    slug: "digital-product-passport-cost",
    title: "How Much Does a Digital Product Passport Cost?",
    crumbLabel: "DPP Cost Guide",
    metaTitle:
      "How Much Does a Digital Product Passport Cost? (2026 Guide) | StableDPP",
    metaDescription:
      "Digital Product Passport costs range from free self-serve tiers to enterprise contracts. See what actually drives the price, and how to budget for ESPR compliance in 2026.",
    excerpt:
      "A Digital Product Passport can cost anywhere from a free self-serve starter tier to an enterprise contract — what you pay depends on product volume, data depth, and build-vs-buy.",
    datePublished: "2026-07-25",
    dateModified: "2026-07-25",
    image: `${BASE}blog/blog-4-dpp-cost.png`,
    ogImage: "https://stabledpp.com/blog/blog-4-dpp-cost.png",
    imageAlt:
      "Digital Product Passport pricing tiers compared, free to enterprise.",
    readingMinutes: 9,
    faqs: [
      {
        q: "Is there a free Digital Product Passport platform?",
        a: "Yes. StableDPP offers a free self-serve tier so a brand can issue a real, verifiable passport and see the format before committing any budget.",
      },
      {
        q: "What is the biggest hidden cost in a DPP project?",
        a: "Supply-chain data collection. The software subscription is usually the smaller line item — gathering and verifying material and tier data from suppliers is where most of the internal effort goes.",
      },
      {
        q: "Does blockchain verification cost more than a plain database record?",
        a: "It can carry a higher platform cost, but it removes the dispute risk of a record that can be edited after the fact — which is the cost that surfaces during a buyer or regulator audit.",
      },
      {
        q: "When should a brand move off a free tier?",
        a: "When passport volume, custom domains, API access, or analytics become operational needs rather than nice-to-haves — usually at the point a pilot becomes a rollout.",
      },
    ],
  },
  {
    slug: "how-to-create-a-digital-product-passport",
    title: "How to Create a Digital Product Passport (Step by Step)",
    crumbLabel: "How to Create a DPP",
    metaTitle:
      "How to Create a Digital Product Passport (Step by Step) | StableDPP",
    metaDescription:
      "Learn how to create a Digital Product Passport in 5 simple steps — from gathering product data to generating a blockchain-verified, ESPR-compliant QR code.",
    excerpt:
      "Creating a Digital Product Passport takes five steps: identify products, gather data, structure it, verify and publish, then attach a GS1 Digital Link QR code.",
    datePublished: "2026-07-09",
    dateModified: "2026-07-09",
    image: `${BASE}blog/blog-3-how-to-create-dpp.png`,
    ogImage: "https://stabledpp.com/blog/blog-3-how-to-create-dpp.png",
    imageAlt:
      "Five steps to create a Digital Product Passport with a verified QR code.",
    readingMinutes: 7,
    faqs: [
      {
        q: "How long does it take to create a Digital Product Passport?",
        a: "Once the product data is ready, a first passport can be live in minutes on a self-serve platform. Collecting and verifying supplier data is the step that takes real time.",
      },
      {
        q: "Do I need technical skills to create a DPP?",
        a: "No. A purpose-built platform guides you field by field and generates the compliant QR code automatically — no blockchain knowledge or development work is required.",
      },
      {
        q: "Can I create a Digital Product Passport for free?",
        a: "Yes. StableDPP offers a free self-serve tier so you can issue a real, verifiable passport for one product line before committing budget.",
      },
      {
        q: "What data do I need before I start?",
        a: "Material composition, origin and manufacturing details, certifications with their supporting evidence, and any sustainability metrics you intend to publish.",
      },
    ],
    howToSteps: [
      {
        name: "Identify Which Products Need a Passport",
        text: "Prioritise products with the greatest EU exposure — best-selling EU lines, products buyers are already asking about, and new collections heading to European retailers.",
      },
      {
        name: "Gather the Product Data",
        text: "Collect material composition by percentage, origin and manufacturing details, certifications with evidence, and sustainability metrics from your systems and suppliers.",
      },
      {
        name: "Structure the Data Against the DPP Fields",
        text: "Map raw data onto required fields — composition, origin, certification, care, end-of-life — and identify gaps before publishing.",
      },
      {
        name: "Verify and Publish the Passport",
        text: "Publish on a blockchain-anchored platform so later changes are visible and attributable, with public and restricted fields separated.",
      },
      {
        name: "Attach the Passport to the Product",
        text: "Add a GS1 Digital Link QR code on a care label, hang tag, or packaging that resolves to that product's passport page.",
      },
    ],
  },
  {
    slug: "espr-regulation-2024-1781-explained",
    title:
      "EU ESPR 2024 — The Complete Guide for Fashion & Textile Brands",
    crumbLabel: "EU ESPR 2024 Guide",
    metaTitle:
      "EU ESPR 2024 Explained: What Regulation 2024/1781 Requires From Fashion Brands | StableDPP",
    metaDescription:
      "EU ESPR 2024 (Regulation EU 2024/1781) makes Digital Product Passports mandatory for products sold in the EU. Here is what it requires, when it applies to textiles, and how to prepare.",
    excerpt:
      "EU ESPR 2024 is the Ecodesign for Sustainable Products Regulation. It introduces the Digital Product Passport as the mechanism for carrying sustainability and product information.",
    datePublished: "2026-07-06",
    dateModified: "2026-07-06",
    image: `${BASE}blog/blog-2-espr-2024.png`,
    ogImage: "https://stabledpp.com/blog/blog-2-espr-2024.png",
    imageAlt:
      "EU ESPR 2024 Digital Product Passport compliance timeline for fashion and textile brands.",
    readingMinutes: 8,
    faqs: [
      {
        q: "What is EU ESPR 2024 in simple terms?",
        a: "It is the EU's Ecodesign for Sustainable Products Regulation (Regulation EU 2024/1781), in force since July 2024. It requires products sold in the EU to be more sustainable and to carry verifiable Digital Product Passports.",
      },
      {
        q: "When is the ESPR deadline for textiles?",
        a: "ESPR has applied since July 2024, with Digital Product Passport requirements phasing in from 2027. Textiles come into scope as their delegated act is finalised, within the rollout running through 2030.",
      },
      {
        q: "Does ESPR apply to manufacturers outside the EU?",
        a: "Yes. The obligation attaches to placing a product on the EU market, not to where the manufacturer is based — so exporters shipping into the EU are in scope.",
      },
      {
        q: "Does ESPR require a specific technology for the passport?",
        a: "No. ESPR requires open standards, interoperable formats, and data that is secure, authentic and reliable. It sets the outcome rather than naming one technology — but tamper-evidence is difficult to demonstrate with a record that can be edited after publication.",
      },
    ],
  },
  {
    slug: "what-is-a-digital-product-passport",
    title: "What Is a Digital Product Passport? The Complete Guide",
    crumbLabel: "What Is a DPP?",
    metaTitle:
      "What Is a Digital Product Passport? The Complete Guide | StableDPP",
    metaDescription:
      "A Digital Product Passport (DPP) is a digital record of a product's materials, origin, and sustainability data, accessed via QR code. Learn how DPPs work, why the EU requires them, and how to create one.",
    excerpt:
      "A Digital Product Passport is a structured digital record that travels with a physical product — materials, origin, manufacturing, sustainability, and end-of-life — accessed by scanning a QR code.",
    datePublished: "2026-07-03",
    dateModified: "2026-07-03",
    image: `${BASE}blog/blog-1-what-is-dpp.png`,
    ogImage: "https://stabledpp.com/blog/blog-1-what-is-dpp.png",
    imageAlt:
      "Digital Product Passport QR code on a garment label showing verified product data.",
    readingMinutes: 8,
    faqs: [
      {
        q: "What is a Digital Product Passport in simple terms?",
        a: "It is a digital record attached to a product via QR code that shows verified information about its materials, origin, manufacturing, sustainability, and recycling options.",
      },
      {
        q: "Is a Digital Product Passport mandatory?",
        a: "Yes, for products sold in the EU. Under ESPR (Regulation EU 2024/1781), DPP requirements phase in by product category from 2027, with textiles among the priority categories.",
      },
      {
        q: "How do customers access a Digital Product Passport?",
        a: "By scanning a QR code on the product's label, hang tag, or packaging — typically built on the GS1 Digital Link standard — which opens the product's passport page.",
      },
      {
        q: "What makes a DPP trustworthy?",
        a: "Verification. Blockchain-anchored DPPs are tamper-evident: once published, records cannot be silently changed, turning sustainability claims into checkable evidence.",
      },
    ],
  },
] as const;

export function getBlogBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function isBlogSlug(slug: string): slug is BlogSlug {
  return BLOG_POSTS.some((post) => post.slug === slug);
}

export function formatBlogDate(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getRelatedPosts(slug: BlogSlug, limit = 2): BlogPostMeta[] {
  return BLOG_POSTS.filter((post) => post.slug !== slug).slice(0, limit);
}
