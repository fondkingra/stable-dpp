// SEO Utility for StableDPP - Following seo_designs.md guidelines

export interface PageSEO {
  title: string;
  description: string;
  /** @deprecated Meta keywords are obsolete and must not be emitted. */
  keywords?: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export const SEO_CONFIG: Record<string, PageSEO> = {
  home: {
    title: "StableDPP | Digital Product Passports for Fashion | EU ESPR 2024",
    description:
      "Create blockchain-verified Digital Product Passports that prove sustainability claims. EU ESPR 2024 compliant DPP platform for fashion. Free to start.",
    canonical: "https://stabledpp.com/",
    ogTitle: "StableDPP — Digital Product Passports for Fashion Brands",
    ogDescription:
      "Give every fashion product a verifiable digital identity. StableDPP's blockchain-secured passports prove sustainability claims and build consumer trust. Free to start. EU ESPR 2024 compliant.",
    ogImage: "https://stabledpp.com/og-home.png",
  },
  product: {
    title: "Digital Product Passport Software for Fashion | StableDPP",
    description:
      "Issue blockchain-verified, EU ESPR-compliant Digital Product Passports in minutes. Component-level traceability, GS1 Digital Link QR codes, and an auto-validating compliance engine. Free to start.",
    canonical: "https://stabledpp.com/product",
    ogTitle: "Digital Product Passport Software for Fashion | StableDPP",
    ogDescription:
      "Issue blockchain-verified, EU ESPR-compliant Digital Product Passports in minutes. Component-level traceability, GS1 Digital Link QR codes, and an auto-validating compliance engine. Free to start.",
    ogImage: "https://stabledpp.com/og-product.png",
  },
  solutions: {
    title:
      "DPP Solutions for Fashion Brands, Manufacturers & Retailers | StableDPP",
    description:
      "ESPR compliance workflows for every role in the fashion supply chain — brands proving sustainability claims, manufacturers sharing component data, retailers verifying stock. One passport, every stakeholder.",
    canonical: "https://stabledpp.com/solutions",
    ogTitle:
      "DPP Solutions for Fashion Brands, Manufacturers & Retailers | StableDPP",
    ogDescription:
      "ESPR compliance workflows for every role in the fashion supply chain — brands proving sustainability claims, manufacturers sharing component data, retailers verifying stock. One passport, every stakeholder.",
  },
  solutionsFashionBrands: {
    title: "Digital Product Passports for Fashion Brands | StableDPP",
    description:
      "Prove every sustainability claim on-chain. Issue EU ESPR-compliant Digital Product Passports for fashion brands — component tracking, consumer QR codes, and verifiable transparency.",
    canonical: "https://stabledpp.com/solutions/fashion-brands",
    ogTitle: "Digital Product Passports for Fashion Brands | StableDPP",
    ogDescription:
      "Prove every sustainability claim on-chain. Issue EU ESPR-compliant Digital Product Passports for fashion brands — component tracking, consumer QR codes, and verifiable transparency.",
  },
  solutionsManufacturers: {
    title:
      "Digital Product Passports for Manufacturers & Textile Exporters | StableDPP",
    description:
      "Component DPPs your EU buyers can verify. Fibre origin tracking, supplier verification, and multi-brand data sharing for manufacturers and textile exporters.",
    canonical: "https://stabledpp.com/solutions/manufacturers",
    ogTitle:
      "Digital Product Passports for Manufacturers & Textile Exporters | StableDPP",
    ogDescription:
      "Component DPPs your EU buyers can verify. Fibre origin tracking, supplier verification, and multi-brand data sharing for manufacturers and textile exporters.",
  },
  solutionsRetailers: {
    title: "Digital Product Passports for Retailers | StableDPP",
    description:
      "Verify compliance before stock hits the shelf. DPP verification portal, Green Claims compliance, and multi-brand dashboards for fashion retailers.",
    canonical: "https://stabledpp.com/solutions/retailers",
    ogTitle: "Digital Product Passports for Retailers | StableDPP",
    ogDescription:
      "Verify compliance before stock hits the shelf. DPP verification portal, Green Claims compliance, and multi-brand dashboards for fashion retailers.",
  },
  resources: {
    title:
      "Resources | EU Digital Product Passport & ESPR 2024 Glossary | StableDPP",
    description:
      "Learn what the EU Digital Product Passport and ESPR 2024 mean for fashion. Clear explainers and a DPP & blockchain glossary with answers to the questions brands ask.",
    canonical: "https://stabledpp.com/resources",
    ogTitle:
      "Resources | EU Digital Product Passport & ESPR 2024 Glossary | StableDPP",
    ogDescription:
      "Learn what the EU Digital Product Passport and ESPR 2024 mean for fashion. Clear explainers and a DPP & blockchain glossary with answers to the questions brands ask.",
  },
  company: {
    title: "About StableDPP | The Blockchain Digital Product Passport Company",
    description:
      "StableDPP (Stable DPP) builds blockchain-native Digital Product Passport infrastructure for fashion and textiles — tamper-evident verification that turns sustainability claims into on-chain proof.",
    canonical: "https://stabledpp.com/company",
    ogTitle: "About StableDPP | The Blockchain Digital Product Passport Company",
    ogDescription:
      "StableDPP (Stable DPP) builds blockchain-native Digital Product Passport infrastructure for fashion and textiles — tamper-evident verification that turns sustainability claims into on-chain proof.",
  },
  blog: {
    title: "Blog | Digital Product Passport Guides & ESPR Insights | StableDPP",
    description:
      "Guides on Digital Product Passports, EU ESPR 2024, and how fashion brands create verified product data — from what a DPP is to step-by-step setup.",
    canonical: "https://stabledpp.com/blog",
    ogTitle: "Blog | Digital Product Passport Guides & ESPR Insights | StableDPP",
    ogDescription:
      "Guides on Digital Product Passports, EU ESPR 2024, and how fashion brands create verified product data — from what a DPP is to step-by-step setup.",
    ogImage: "https://stabledpp.com/blog/blog-1-what-is-dpp.png",
  },
  blogWhatIsDpp: {
    title:
      "What Is a Digital Product Passport? The Complete Guide | StableDPP",
    description:
      "A Digital Product Passport (DPP) is a digital record of a product's materials, origin, and sustainability data, accessed via QR code. Learn how DPPs work, why the EU requires them, and how to create one.",
    canonical:
      "https://stabledpp.com/blog/what-is-a-digital-product-passport",
    ogTitle:
      "What Is a Digital Product Passport? The Complete Guide | StableDPP",
    ogDescription:
      "A Digital Product Passport (DPP) is a digital record of a product's materials, origin, and sustainability data, accessed via QR code. Learn how DPPs work, why the EU requires them, and how to create one.",
    ogImage: "https://stabledpp.com/blog/blog-1-what-is-dpp.png",
  },
  blogEsprGuide: {
    title:
      "EU ESPR 2024 Explained: What Regulation 2024/1781 Requires From Fashion Brands | StableDPP",
    description:
      "EU ESPR 2024 (Regulation EU 2024/1781) makes Digital Product Passports mandatory for products sold in the EU. Here is what it requires, when it applies to textiles, and how to prepare.",
    canonical:
      "https://stabledpp.com/blog/espr-regulation-2024-1781-explained",
    ogTitle:
      "EU ESPR 2024 Explained: What Regulation 2024/1781 Requires From Fashion Brands | StableDPP",
    ogDescription:
      "EU ESPR 2024 (Regulation EU 2024/1781) makes Digital Product Passports mandatory for products sold in the EU. Here is what it requires, when it applies to textiles, and how to prepare.",
    ogImage: "https://stabledpp.com/blog/blog-2-espr-2024.png",
  },
  blogHowToCreate: {
    title:
      "How to Create a Digital Product Passport (Step by Step) | StableDPP",
    description:
      "Learn how to create a Digital Product Passport in 5 simple steps — from gathering product data to generating a blockchain-verified, ESPR-compliant QR code.",
    canonical:
      "https://stabledpp.com/blog/how-to-create-a-digital-product-passport",
    ogTitle:
      "How to Create a Digital Product Passport (Step by Step) | StableDPP",
    ogDescription:
      "Learn how to create a Digital Product Passport in 5 simple steps — from gathering product data to generating a blockchain-verified, ESPR-compliant QR code.",
    ogImage: "https://stabledpp.com/blog/blog-3-how-to-create-dpp.png",
  },
  blogDppCost: {
    title:
      "How Much Does a Digital Product Passport Cost? (2026 Guide) | StableDPP",
    description:
      "Digital Product Passport costs range from free self-serve tiers to enterprise contracts. See what actually drives the price, and how to budget for ESPR compliance in 2026.",
    canonical: "https://stabledpp.com/blog/digital-product-passport-cost",
    ogTitle:
      "How Much Does a Digital Product Passport Cost? (2026 Guide) | StableDPP",
    ogDescription:
      "Digital Product Passport costs range from free self-serve tiers to enterprise contracts. See what actually drives the price, and how to budget for ESPR compliance in 2026.",
    ogImage: "https://stabledpp.com/blog/blog-4-dpp-cost.png",
  },
  blogTextileManufacturers: {
    title:
      "Digital Product Passport for Textile Manufacturers: Complete Guide | StableDPP",
    description:
      "A practical guide for textile manufacturers and exporters: what a Digital Product Passport requires, how to prepare supply-chain data, and how to stay ahead of EU ESPR.",
    canonical:
      "https://stabledpp.com/blog/digital-product-passport-for-textile-manufacturers",
    ogTitle:
      "Digital Product Passport for Textile Manufacturers: Complete Guide | StableDPP",
    ogDescription:
      "A practical guide for textile manufacturers and exporters: what a Digital Product Passport requires, how to prepare supply-chain data, and how to stay ahead of EU ESPR.",
    ogImage: "https://stabledpp.com/blog/blog-5-textile-manufacturers.png",
  },
  blogGs1DigitalLink: {
    title:
      "What Is GS1 Digital Link? How It Powers Digital Product Passports | StableDPP",
    description:
      "GS1 Digital Link is the QR standard connecting products to their Digital Product Passport data. Learn how it works, why ESPR favors it, and what brands need to use it.",
    canonical:
      "https://stabledpp.com/blog/gs1-digital-link-digital-product-passport",
    ogTitle:
      "What Is GS1 Digital Link? How It Powers Digital Product Passports | StableDPP",
    ogDescription:
      "GS1 Digital Link is the QR standard connecting products to their Digital Product Passport data. Learn how it works, why ESPR favors it, and what brands need to use it.",
    ogImage: "https://stabledpp.com/blog/blog-6-gs1-digital-link.png",
  },
  demo: {
    title: "Book a StableDPP Demo | See DPPs in Action",
    description:
      "Book a free 30-minute personalised Digital Product Passport demo. We build a live DPP for your products and create your ESPR compliance roadmap.",
    canonical: "https://stabledpp.com/book-a-demo",
  },
  signin: {
    title: "Sign In to StableDPP | Your Digital Product Passport Dashboard",
    description:
      "Sign in to your StableDPP account to manage, publish, and track your Digital Product Passports. Secured by 256-bit encryption. GDPR compliant.",
    canonical: "https://stabledpp.com/signin",
  },
  getStarted: {
    title:
      "Create Your Free StableDPP Account | Digital Product Passports for Fashion",
    description:
      "Start issuing blockchain-verified Digital Product Passports in minutes. Free to start. EU ESPR 2024 compliant from your first passport. No credit card required.",
    canonical: "https://stabledpp.com/get-started",
  },
  comingSoon: {
    title: "Coming Soon | StableDPP",
    description: "This feature is coming soon. Stay tuned for updates.",
    canonical: "https://stabledpp.com/resources",
  },
};

type MetaDescriptor =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string }
  | { tagName: string; [key: string]: string | undefined };

export const PRODUCT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "StableDPP Digital Product Passport Platform",
  description:
    "Issue blockchain-verified, EU ESPR-compliant Digital Product Passports in minutes. Component-level traceability, GS1 Digital Link QR codes, and an auto-validating compliance engine. Free to start.",
  brand: {
    "@type": "Brand",
    name: "StableDPP",
  },
  url: "https://stabledpp.com/product",
  category: "Business Software",
  offers: {
    "@type": "Offer",
    url: "https://stabledpp.com/get-started",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
};

/** Product-page SoftwareApplication schema (client sheet requirement). */
export const PRODUCT_SOFTWARE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "StableDPP",
  url: "https://stabledpp.com/product",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Free to start",
  },
};

export const PRODUCT_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://stabledpp.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Product",
      item: "https://stabledpp.com/product",
    },
  ],
};

export const PRODUCT_PRIVACY_FAQS = [
  {
    q: "Will all our supplier data be visible to the public through the QR code?",
    a: "No. The public QR code shows only the information you choose to publish — such as materials and sustainability data. Supplier identities, pricing, and sourcing details stay private and are never automatically exposed.",
  },
  {
    q: "How does StableDPP protect supplier confidentiality?",
    a: "Through Private Data Collections and role-based access, suppliers share only what compliance requires. Their commercially sensitive data stays hidden from the public, competitors, and other participants on the network.",
  },
  {
    q: "Is StableDPP GDPR-compliant?",
    a: "Yes. StableDPP is GDPR-compliant, with data encrypted in transit and at rest, and strict access controls over who can view each part of a Digital Product Passport.",
  },
  {
    q: "Who decides what information becomes public?",
    a: "You do. Nothing is published to the public passport unless you explicitly choose to share it. You control the line between public transparency and private, confidential data at all times.",
  },
] as const;

export const PRODUCT_PRIVACY_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://stabledpp.com/product#data-privacy-faq",
  mainEntity: PRODUCT_PRIVACY_FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export function buildFaqSchema(
  id: string,
  faqs: readonly { q: string; a: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": id,
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

export const HOME_PAGE_FAQS = [
  {
    q: "What is a Digital Product Passport?",
    a: "A Digital Product Passport is a verifiable digital record of a product's materials, origin, certifications, and sustainability data, accessible by a single QR scan. It is required under EU ESPR 2024.",
  },
  {
    q: "Do fashion brands need a Digital Product Passport?",
    a: "Yes. Under EU ESPR 2024, fashion and textile products sold in the EU must carry a compliant Digital Product Passport, with requirements rolling out through 2027 and beyond.",
  },
  {
    q: "Is StableDPP EU ESPR 2024 compliant?",
    a: "Yes. StableDPP is built specifically for EU ESPR 2024 (Regulation EU 2024/1781). It auto-validates the required data fields and flags missing information before a passport is published.",
  },
  {
    q: "Why does StableDPP use blockchain?",
    a: "Blockchain makes every data point in a passport tamper-proof and independently verifiable. Regulators and buyers can trust the data as cryptographic proof, rather than relying on a brand's word alone.",
  },
  {
    q: "How fast can we go live?",
    a: "Your first Digital Product Passport can be live in minutes. There is no technical setup and no credit card needed to start.",
  },
  {
    q: "How much does StableDPP cost?",
    a: "StableDPP is free to start — create your first Digital Product Passport at no cost. There is no credit card required, no technical setup, and blockchain anchoring is included from day one.",
  },
  {
    q: "What does Stable DPP stand for?",
    a: "StableDPP (Stable DPP) stands for stable, tamper-evident Digital Product Passports — blockchain-verified records that give every fashion product a permanent, independently verifiable digital identity.",
  },
] as const;

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://stabledpp.com/#organization",
  name: "StableDPP",
  alternateName: ["Stable DPP", "Stable DPP Platform"],
  description:
    "EU ESPR 2024 compliant Digital Product Passport platform for fashion brands",
  url: "https://stabledpp.com",
  logo: "https://stabledpp.com/logo-transparent.png",
  email: "info@stabledpp.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@stabledpp.com",
  },
  knowsAbout: [
    "Digital Product Passport",
    "EU ESPR Regulation",
    "Blockchain",
    "Fashion Supply Chain",
    "GS1 Digital Link",
  ],
  sameAs: [
    "https://x.com/stabledpp",
    "https://www.instagram.com/stabledpp/",
    "https://www.linkedin.com/company/stable-dpp/",
  ],
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://stabledpp.com/#website",
  name: "StableDPP",
  alternateName: "Stable DPP",
  url: "https://stabledpp.com",
};

export const HOME_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://stabledpp.com/#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://stabledpp.com/",
    },
  ],
};

export const HOME_PAGE_FAQ_SCHEMA = buildFaqSchema(
  "https://stabledpp.com/#faq",
  HOME_PAGE_FAQS,
);

export const PRODUCT_PAGE_FAQS = [
  {
    q: "What can the StableDPP platform do?",
    a: "StableDPP lets you issue, manage, and verify blockchain-backed Digital Product Passports — with lifecycle tracking, an ESPR compliance engine, instant QR codes, role-based access, and a sustainability dashboard.",
  },
  {
    q: "How does blockchain anchoring work?",
    a: "When a passport is finalised, a cryptographic summary of its data is written to the blockchain. This timestamped record cannot be altered, making every claim independently verifiable.",
  },
  {
    q: "Does StableDPP integrate with our existing systems?",
    a: "Yes. StableDPP supports portal upload, CSV/bulk upload, and API, ERP, and PLM integration, so you can bring product data in whatever format you already use.",
  },
  {
    q: "Is our data private and GDPR-compliant?",
    a: "Yes. StableDPP is GDPR-compliant, with encryption in transit and at rest. Private Data Collections let you share confidential supply-chain data only with chosen participants.",
  },
  {
    q: "Can we track a product's full lifecycle?",
    a: "Yes. Immutable Lifecycle Tracking records every event — manufacture, certification, sale, repair, resale, and recycling — as a permanent, tamper-proof history on the blockchain.",
  },
] as const;

export const PRODUCT_PAGE_FAQ_SCHEMA = buildFaqSchema(
  "https://stabledpp.com/product#faq",
  PRODUCT_PAGE_FAQS,
);

export const SOLUTIONS_PAGE_FAQS = [
  {
    q: "Who is StableDPP for?",
    a: "StableDPP serves fashion brands, textile manufacturers, and retailers who need EU ESPR 2024 compliant Digital Product Passports and verifiable supply-chain transparency.",
  },
  {
    q: "How does StableDPP help with ESPR compliance?",
    a: "StableDPP's compliance engine maps to EU ESPR 2024 requirements, auto-validates the required data fields, flags gaps, and keeps your passports aligned as delegated acts roll out through 2030.",
  },
  {
    q: "When is the ESPR deadline for textiles?",
    a: "EU ESPR 2024 has been in force since July 2024. Digital Product Passport requirements roll out in phases — batteries from 2027, with textiles and other categories following through 2030.",
  },
  {
    q: "Do you offer implementation services?",
    a: "Yes. StableDPP provides end-to-end services — consulting, implementation, BaaS hosting, and ongoing support — to take you from ESPR readiness assessment to a fully managed solution.",
  },
  {
    q: "What is BaaS hosting?",
    a: "BaaS (Blockchain-as-a-Service) is fully managed blockchain hosting, so you can deploy and run Digital Product Passports without building or maintaining blockchain infrastructure yourself.",
  },
] as const;

export const SOLUTIONS_PAGE_FAQ_SCHEMA = buildFaqSchema(
  "https://stabledpp.com/solutions#faq",
  SOLUTIONS_PAGE_FAQS,
);

export const RESOURCES_PAGE_FAQS = [
  {
    q: "What is the difference between ESPR and a DPP?",
    a: "ESPR is the EU regulation (Regulation EU 2024/1781) that sets the rules; a Digital Product Passport (DPP) is the digital record that fulfils those rules by carrying a product's verified data.",
  },
  {
    q: "Is EU ESPR mandatory?",
    a: "Yes. EU ESPR 2024 is binding regulation. Products sold in the EU must meet its ecodesign and Digital Product Passport requirements as they phase in by product category through 2030.",
  },
  {
    q: "Where should I start learning about Digital Product Passports?",
    a: "Start with our DPP Glossary and EU ESPR 2024 guide on this page. They explain the key terms, the regulation, deadlines, and what fashion brands need to do to comply.",
  },
] as const;

export const RESOURCES_PAGE_FAQ_SCHEMA = buildFaqSchema(
  "https://stabledpp.com/resources#faq",
  RESOURCES_PAGE_FAQS,
);

export const COMPANY_PAGE_FAQS = [
  {
    q: "Who founded StableDPP?",
    a: "StableDPP was co-founded by Priya Hebbal and Sudhanva Bhandolkar, combining expertise in fashion supply-chain trust and blockchain infrastructure.",
  },
  {
    q: "What is StableDPP's mission?",
    a: "StableDPP's mission is to make every fashion product verifiably sustainable — replacing unverified claims with blockchain-backed proof that brands, buyers, and regulators can trust.",
  },
  {
    q: "Is StableDPP a startup?",
    a: "Yes. StableDPP is an early-stage technology company building blockchain-powered Digital Product Passport infrastructure for fashion and textile brands preparing for EU ESPR 2024.",
  },
] as const;

export const COMPANY_PAGE_FAQ_SCHEMA = buildFaqSchema(
  "https://stabledpp.com/company#faq",
  COMPANY_PAGE_FAQS,
);

export const DEMO_PAGE_FAQS = [
  {
    q: "What happens in a StableDPP demo?",
    a: "In a 30-minute demo we build a live Digital Product Passport for one of your products and walk you through an ESPR compliance roadmap tailored to your brand.",
  },
  {
    q: "How long is the demo?",
    a: "The demo takes about 30 minutes — enough to see a live passport created, ask questions, and understand your path to EU ESPR 2024 compliance.",
  },
  {
    q: "Is the demo free?",
    a: "Yes. The demo is completely free, with no credit card required and no obligation to continue.",
  },
  {
    q: "Do I need to prepare anything for the demo?",
    a: "No preparation is required. If you have a product's material details handy, we can build a more tailored passport, but it is not essential.",
  },
] as const;

export const DEMO_PAGE_FAQ_SCHEMA = buildFaqSchema(
  "https://stabledpp.com/book-a-demo#faq",
  DEMO_PAGE_FAQS,
);

export const COMPANY_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://stabledpp.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Company",
      item: "https://stabledpp.com/company",
    },
  ],
};

export const PRIVACY_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://stabledpp.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Privacy Policy",
      item: "https://stabledpp.com/privacy-policy",
    },
  ],
};

export const TERMS_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://stabledpp.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Terms & Conditions",
      item: "https://stabledpp.com/terms",
    },
  ],
};

/** Standalone Person schemas for E-E-A-T. LinkedIn sameAs omitted until confirmed profile URLs are provided. */
export const COMPANY_FOUNDER_PERSON_SCHEMAS = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sudhanva Bhandolkar",
    jobTitle: "Co-Founder",
    worksFor: {
      "@type": "Organization",
      name: "StableDPP",
    },
    image: "https://stabledpp.com/IMG1.jpg",
    description:
      "Co-founder of StableDPP, building the blockchain infrastructure behind every passport with Trust as Infrastructure (TAS) verification.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Priya Hebbal",
    jobTitle: "Co-Founder",
    worksFor: {
      "@type": "Organization",
      name: "StableDPP",
    },
    image: "https://stabledpp.com/IMG2.jpg",
    description:
      "Co-founder of StableDPP, focused on the trust layer for India's exports and building verifiable proof for sustainability claims in the circular economy.",
  },
] as const;

export const COMPANY_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://stabledpp.com/company/#webpage",
      name: "About StableDPP",
      description:
        "StableDPP (Stable DPP) builds blockchain-native Digital Product Passport infrastructure for fashion and textiles — tamper-evident verification that turns sustainability claims into on-chain proof.",
      url: "https://stabledpp.com/company",
      mainEntity: {
        "@id": "https://stabledpp.com/company/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://stabledpp.com/company/#organization",
      name: "StableDPP",
      description:
        "EU ESPR 2024 compliant Digital Product Passport platform for fashion brands",
      url: "https://stabledpp.com",
      logo: {
        "@type": "ImageObject",
        url: "https://stabledpp.com/logo-transparent.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@stabledpp.com",
      },
      knowsAbout: [
        "Digital Product Passport",
        "EU ESPR Regulation",
        "Blockchain",
        "Fashion Supply Chain",
        "GS1 Digital Link",
      ],
      founder: [
        {
          "@type": "Person",
          name: "Sudhanva Bhandolkar",
          jobTitle: "Co-Founder",
          image: "https://stabledpp.com/IMG1.jpg",
          description:
            "Co-founder of StableDPP, building the blockchain infrastructure behind every passport with Trust as Infrastructure (TAS) verification.",
        },
        {
          "@type": "Person",
          name: "Priya Hebbal",
          jobTitle: "Co-Founder",
          image: "https://stabledpp.com/IMG2.jpg",
          description:
            "Co-founder of StableDPP, focused on the trust layer for India's exports and building verifiable proof for sustainability claims in the circular economy.",
        },
      ],
    },
  ],
};

export const DEMO_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://stabledpp.com/book-a-demo/#webpage",
      name: "Book a StableDPP Demo",
      description:
        "Book a free 30-minute personalised Digital Product Passport demo. We build a live DPP for your products and create your ESPR compliance roadmap.",
      url: "https://stabledpp.com/book-a-demo",
      mainEntity: {
        "@type": "Organization",
        "@id": "https://stabledpp.com/#organization",
        name: "StableDPP",
        url: "https://stabledpp.com",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "info@stabledpp.com",
          availableLanguage: "English",
        },
      },
    },
  ],
};

export const RESOURCES_ESPR_EXPLAINER = [
  {
    q: "What is the EU Digital Product Passport (DPP)?",
    a: "The EU Digital Product Passport (DPP) is a structured digital record that captures a product's full lifecycle — materials, origin, processes, transformations, certifications, repairability, and sustainability data — accessible through a single QR, NFC, or RFID scan. It is the EU's mechanism for enforcing supply-chain transparency, and it becomes mandatory for textiles and apparel sold in the EU.",
  },
  {
    q: "What is EU ESPR 2024?",
    a: "EU ESPR 2024 — the Ecodesign for Sustainable Products Regulation, Regulation (EU) 2024/1781 — has been in effect since July 2024. It establishes the legal framework for Digital Product Passports and sets ecodesign requirements that promote sustainable products and circular-economy practices across the EU. The rules roll out in phases: batteries from 2027, followed by textiles, electronics, and further categories through 2030.",
  },
] as const;

export const RESOURCES_GLOSSARY = [
  {
    q: "What is EU ESPR 2024?",
    a: "EU ESPR 2024 is the Ecodesign for Sustainable Products Regulation — Regulation (EU) 2024/1781 — effective since July 2024. It establishes the framework for Digital Product Passports and sets ecodesign requirements that promote sustainable products and circular-economy practices across the EU.",
  },
  {
    q: "What is a Digital Product Passport (DPP)?",
    a: "A Digital Product Passport is a structured digital record capturing a product's full lifecycle — materials, origin, certifications, repairability, and sustainability data — accessible through a single QR, NFC, or RFID scan.",
  },
  {
    q: "What is RWA Tokenization?",
    a: "RWA (Real-World Asset) tokenization is the process of representing physical or traditional financial assets — such as products, invoices, materials, or carbon credits — as digital tokens on a blockchain. It enables fractional ownership, liquidity, and programmability.",
  },
  {
    q: "What is an NFT?",
    a: "An NFT (Non-Fungible Token) is a unique digital token representing ownership or proof of a specific asset. In Digital Product Passport contexts, an NFT is often used as a 'digital twin' for an individual product.",
  },
  {
    q: "What is a Soulbound Token?",
    a: "A Soulbound Token is a non-transferable NFT tied to a specific identity or product. It is ideal for immutable Digital Product Passport records that should not be sold or transferred separately from the asset itself.",
  },
  {
    q: "What is a Digital Twin?",
    a: "A Digital Twin is a virtual representation of a physical product that mirrors its real-world characteristics, lifecycle events, and data in real time.",
  },
  {
    q: "What is Data Provenance?",
    a: "Data provenance is the verifiable record of the origin, history, and custody of a product or material throughout its supply chain. Blockchain provides immutable provenance that cannot be altered.",
  },
  {
    q: "What is Traceability?",
    a: "Traceability is the ability to track a product's journey from raw materials to end user, including all transformations and movements along the way. It is critical for EU compliance and fraud prevention.",
  },
  {
    q: "What is BaaS (Blockchain-as-a-Service)?",
    a: "BaaS (Blockchain-as-a-Service) refers to cloud-based services that let enterprises deploy and manage blockchain networks without building the infrastructure from scratch.",
  },
  {
    q: "What are Private Data Collections?",
    a: "Private Data Collections are a blockchain capability that allows a subset of participants to share confidential data among themselves while keeping it hidden from others on the same network.",
  },
] as const;

export const RESOURCES_DEFINED_TERM_SET_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": "https://stabledpp.com/resources#glossary",
  name: "DPP & Blockchain Glossary",
  description:
    "Clear answers to the key questions behind Digital Product Passports, blockchain, and EU sustainability regulation.",
  hasDefinedTerm: RESOURCES_GLOSSARY.map(({ q, a }) => ({
    "@type": "DefinedTerm",
    name: q,
    description: a,
  })),
};

export const SOLUTIONS_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "StableDPP Digital Product Passport Solutions",
  description:
    "ESPR compliance workflows for every role in the fashion supply chain — brands proving sustainability claims, manufacturers sharing component data, retailers verifying stock. One passport, every stakeholder.",
  provider: {
    "@type": "Organization",
    name: "StableDPP",
    url: "https://stabledpp.com",
  },
  url: "https://stabledpp.com/solutions",
  serviceType: "Digital Product Passport Solutions",
  areaServed: {
    "@type": "Place",
    name: "European Union",
  },
};

export const SOLUTIONS_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://stabledpp.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
      item: "https://stabledpp.com/solutions",
    },
  ],
};

export const RESOURCES_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://stabledpp.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Resources",
      item: "https://stabledpp.com/resources",
    },
  ],
};

export const BLOG_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://stabledpp.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://stabledpp.com/blog",
    },
  ],
};

export type BlogSeoKey =
  | "blogWhatIsDpp"
  | "blogEsprGuide"
  | "blogHowToCreate"
  | "blogDppCost"
  | "blogTextileManufacturers"
  | "blogGs1DigitalLink";

const BLOG_SLUG_SEO_KEYS = {
  "what-is-a-digital-product-passport": "blogWhatIsDpp",
  "espr-regulation-2024-1781-explained": "blogEsprGuide",
  "how-to-create-a-digital-product-passport": "blogHowToCreate",
  "digital-product-passport-cost": "blogDppCost",
  "digital-product-passport-for-textile-manufacturers":
    "blogTextileManufacturers",
  "gs1-digital-link-digital-product-passport": "blogGs1DigitalLink",
} as const satisfies Record<string, BlogSeoKey>;

export function getBlogSeoKey(slug: string): BlogSeoKey | null {
  if (slug in BLOG_SLUG_SEO_KEYS) {
    return BLOG_SLUG_SEO_KEYS[slug as keyof typeof BLOG_SLUG_SEO_KEYS];
  }
  return null;
}

export function buildBlogBreadcrumbSchema(
  title: string,
  canonical: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://stabledpp.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://stabledpp.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: canonical,
      },
    ],
  };
}

export function buildArticleSchema(input: {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    image: [input.image],
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: {
      "@type": "Person",
      name: "Sudhanva Bhandolkar",
      jobTitle: "Co-founder",
      url: "https://stabledpp.com/company",
    },
    publisher: {
      "@type": "Organization",
      name: "StableDPP",
      logo: {
        "@type": "ImageObject",
        url: "https://stabledpp.com/logo-transparent.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url,
    },
  };
}

export function buildHowToSchema(input: {
  name: string;
  description: string;
  url: string;
  steps: readonly { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    url: input.url,
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export const DEMO_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://stabledpp.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Book a Demo",
      item: "https://stabledpp.com/book-a-demo",
    },
  ],
};

export type SolutionSegmentId =
  | "fashion-brands"
  | "manufacturers"
  | "retailers";

const SOLUTION_SEGMENT_SEO_KEYS = {
  "fashion-brands": "solutionsFashionBrands",
  manufacturers: "solutionsManufacturers",
  retailers: "solutionsRetailers",
} as const satisfies Record<SolutionSegmentId, keyof typeof SEO_CONFIG>;

const SOLUTION_SEGMENT_CRUMB_NAMES: Record<SolutionSegmentId, string> = {
  "fashion-brands": "Fashion Brands",
  manufacturers: "Manufacturers",
  retailers: "Retailers",
};

export function getSolutionSegmentSeoKey(
  segment: string,
): keyof typeof SEO_CONFIG | null {
  if (segment in SOLUTION_SEGMENT_SEO_KEYS) {
    return SOLUTION_SEGMENT_SEO_KEYS[segment as SolutionSegmentId];
  }
  return null;
}

export function buildSolutionSegmentBreadcrumbSchema(segment: SolutionSegmentId) {
  const config = SEO_CONFIG[SOLUTION_SEGMENT_SEO_KEYS[segment]];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://stabledpp.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solutions",
        item: "https://stabledpp.com/solutions",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: SOLUTION_SEGMENT_CRUMB_NAMES[segment],
        item: config.canonical,
      },
    ],
  };
}

export function getSolutionSegmentCrumbName(segment: SolutionSegmentId) {
  return SOLUTION_SEGMENT_CRUMB_NAMES[segment];
}

export function buildRouteMeta(
  pageKey: keyof typeof SEO_CONFIG,
  options?: { ogType?: "website" | "article" },
): MetaDescriptor[] {
  const config = SEO_CONFIG[pageKey];
  const tags: MetaDescriptor[] = [
    { title: config.title },
    { name: "description", content: config.description },
    { tagName: "link", rel: "canonical", href: config.canonical },
    { property: "og:url", content: config.canonical },
    { property: "og:type", content: options?.ogType ?? "website" },
  ];

  if (config.ogTitle) {
    tags.push({ property: "og:title", content: config.ogTitle });
  }
  if (config.ogDescription) {
    tags.push({ property: "og:description", content: config.ogDescription });
  }
  if (config.ogImage) {
    tags.push({ property: "og:image", content: config.ogImage });
    tags.push({ name: "twitter:image", content: config.ogImage });
  }

  return tags;
}

export function updateSEO(pageKey: keyof typeof SEO_CONFIG) {
  updatePageSEO(pageKey);
}

export function updatePageSEO(pageKey: keyof typeof SEO_CONFIG) {
  const config = SEO_CONFIG[pageKey];
  if (!config) return;

  document.title = config.title;

  let metaDesc = document.querySelector(
    'meta[name="description"]',
  ) as HTMLMetaElement;
  if (metaDesc) {
    metaDesc.content = config.description;
  }

  // Remove obsolete keywords meta if present (leaks SEO strategy).
  document.querySelector('meta[name="keywords"]')?.remove();

  let canonical = document.querySelector(
    'link[rel="canonical"]',
  ) as HTMLLinkElement;
  if (canonical) {
    canonical.href = config.canonical;
  }

  if (config.ogTitle) {
    let ogTitle = document.querySelector(
      'meta[property="og:title"]',
    ) as HTMLMetaElement;
    if (ogTitle) {
      ogTitle.content = config.ogTitle;
    }
  }

  if (config.ogDescription) {
    let ogDesc = document.querySelector(
      'meta[property="og:description"]',
    ) as HTMLMetaElement;
    if (ogDesc) {
      ogDesc.content = config.ogDescription;
    }
  }

  if (pageKey !== "home") {
    updateBreadcrumbSchema(pageKey, config);
  }
}

function updateBreadcrumbSchema(pageKey: string, config: PageSEO) {
  const breadcrumbMap: Record<string, string> = {
    product: "Product",
    solutions: "Solutions",
    solutionsFashionBrands: "Fashion Brands",
    solutionsManufacturers: "Manufacturers",
    solutionsRetailers: "Retailers",
    resources: "Resources",
    company: "Company",
    blog: "Blog",
    blogWhatIsDpp: "What Is a Digital Product Passport?",
    blogEsprGuide: "EU ESPR 2024 Explained",
    blogHowToCreate: "How to Create a Digital Product Passport",
    blogDppCost: "How Much Does a DPP Cost?",
    blogTextileManufacturers: "DPP for Textile Manufacturers",
    blogGs1DigitalLink: "GS1 Digital Link",
    demo: "Book a Demo",
    signin: "Sign In",
    getStarted: "Get Started",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  };

  const isSolutionChild =
    pageKey === "solutionsFashionBrands" ||
    pageKey === "solutionsManufacturers" ||
    pageKey === "solutionsRetailers";

  const isBlogChild =
    pageKey === "blogWhatIsDpp" ||
    pageKey === "blogEsprGuide" ||
    pageKey === "blogHowToCreate" ||
    pageKey === "blogDppCost" ||
    pageKey === "blogTextileManufacturers" ||
    pageKey === "blogGs1DigitalLink";

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://stabledpp.com/",
    },
    ...(isSolutionChild
      ? [
          {
            "@type": "ListItem",
            position: 2,
            name: "Solutions",
            item: "https://stabledpp.com/solutions",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: breadcrumbMap[pageKey] || pageKey,
            item: config.canonical,
          },
        ]
      : isBlogChild
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: "https://stabledpp.com/blog",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: breadcrumbMap[pageKey] || pageKey,
              item: config.canonical,
            },
          ]
        : [
            {
              "@type": "ListItem",
              position: 2,
              name: breadcrumbMap[pageKey] || pageKey,
              item: config.canonical,
            },
          ]),
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  const existingBreadcrumb = document.querySelector(
    'script[type="application/ld+json"][data-breadcrumb]',
  );
  if (existingBreadcrumb) {
    existingBreadcrumb.remove();
  }

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-breadcrumb", "true");
  script.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(script);
}
