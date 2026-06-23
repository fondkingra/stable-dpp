// SEO Utility for StableDPP - Following seo_designs.md guidelines

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
}

export const SEO_CONFIG: Record<string, PageSEO> = {
  home: {
    title: "StableDPP | Digital Product Passports for Fashion | EU ESPR 2024",
    description:
      "Create blockchain-verified Digital Product Passports that prove sustainability claims. EU ESPR 2024 compliant DPP platform for fashion. Free to start.",
    keywords:
      "Digital Product Passport fashion, EU ESPR 2024 compliance, blockchain DPP fashion brands, garment sustainability passport, fashion DPP platform",
    canonical: "https://stabledpp.com/",
    ogTitle: "StableDPP — Digital Product Passports for Fashion Brands",
    ogDescription:
      "Give every fashion product a verifiable digital identity. StableDPP's blockchain-secured passports prove sustainability claims and build consumer trust. Free to start. EU ESPR 2024 compliant.",
  },
  product: {
    title: "DPP Platform for Fashion | Blockchain-Verified | StableDPP",
    description:
      "The most trusted Digital Product Passport platform for fashion. Blockchain anchoring, ESPR compliance engine, instant QR codes, sustainability dashboard.",
    keywords:
      "Digital Product Passport platform fashion, blockchain DPP fashion, ESPR compliance engine, fashion sustainability dashboard, GS1 Digital Link QR",
    canonical: "https://stabledpp.com/product",
    ogTitle: "DPP Platform for Fashion | Blockchain-Verified | StableDPP",
    ogDescription:
      "The most trusted Digital Product Passport platform for fashion. Blockchain anchoring, ESPR compliance engine, instant QR codes, sustainability dashboard.",
  },
  solutions: {
    title: "DPP Solutions | Brands, Manufacturers & Retailers | StableDPP",
    description:
      "Tailored Digital Product Passport solutions for fashion brands, textile manufacturers, and retailers. EU ESPR 2024 and GS1 Digital Link compliant.",
    keywords:
      "DPP solutions fashion brands, textile manufacturer DPP, retail DPP compliance, EU ESPR supply chain, Green Claims Directive",
    canonical: "https://stabledpp.com/solutions",
    ogTitle: "DPP Solutions | Brands, Manufacturers & Retailers | StableDPP",
    ogDescription:
      "Tailored Digital Product Passport solutions for fashion brands, textile manufacturers, and retailers. EU ESPR 2024 and GS1 Digital Link compliant.",
  },
  resources: {
    title:
      "StableDPP Resources | EU ESPR Guides, DPP Explainers & Compliance Webinars for Fashion",
    description:
      "Free guides, articles, and webinars on EU ESPR 2024, Digital Product Passports, and sustainable fashion supply chains. Everything fashion brands need to navigate DPP compliance in 2026.",
    keywords:
      "EU ESPR guide fashion DPP, Digital Product Passport explainer, ESPR compliance webinar, sustainable fashion guides, DPP implementation tutorial",
    canonical: "https://stabledpp.com/resources",
  },
  company: {
    title: "About StableDPP | Transparency and Trust in Fashion",
    description:
      "StableDPP's mission: make every fashion product verifiably sustainable. Blockchain-first Digital Product Passports for EU ESPR 2024 compliance.",
    keywords:
      "StableDPP fashion DPP platform, blockchain fashion transparency, sustainable fashion company, DPP mission values, fashion compliance team",
    canonical: "https://stabledpp.com/company",
    ogTitle: "About StableDPP | Transparency and Trust in Fashion",
    ogDescription:
      "StableDPP's mission: make every fashion product verifiably sustainable. Blockchain-first Digital Product Passports for EU ESPR 2024 compliance.",
  },
  demo: {
    title:
      "Book a StableDPP Demo | See Digital Product Passports for Fashion in Action",
    description:
      "Book a 30-minute personalised Digital Product Passport demo with the StableDPP team. We will build a live DPP for your products, walk through ESPR compliance, and create a tailored roadmap for your brand.",
    keywords:
      "StableDPP demo, Digital Product Passport demo, ESPR compliance demo, fashion DPP consultation, blockchain passport demo",
    canonical: "https://stabledpp.com/book-a-demo",
  },
  signin: {
    title: "Sign In to StableDPP | Your Digital Product Passport Dashboard",
    description:
      "Sign in to your StableDPP account to manage, publish, and track your Digital Product Passports. Secured by 256-bit encryption. GDPR compliant.",
    keywords:
      "StableDPP login, DPP dashboard, Digital Product Passport account, fashion DPP management, ESPR compliance dashboard",
    canonical: "https://stabledpp.com/signin",
  },
  getStarted: {
    title:
      "Create Your Free StableDPP Account | Digital Product Passports for Fashion",
    description:
      "Start issuing blockchain-verified Digital Product Passports in minutes. Free to start. EU ESPR 2024 compliant from your first passport. No credit card required.",
    keywords:
      "create StableDPP account, free Digital Product Passport account, fashion DPP signup, ESPR compliance registration, blockchain passport account",
    canonical: "https://stabledpp.com/get-started",
  },
  comingSoon: {
    title: "Coming Soon | StableDPP",
    description: "This feature is coming soon. Stay tuned for updates.",
    keywords: "coming soon, updates",
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
    "The most trusted Digital Product Passport platform for fashion. Blockchain anchoring, ESPR compliance engine, instant QR codes, sustainability dashboard.",
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

export const COMPANY_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://stabledpp.com/company/#webpage",
      name: "About StableDPP",
      description:
        "StableDPP's mission: make every fashion product verifiably sustainable. Blockchain-first Digital Product Passports for EU ESPR 2024 compliance.",
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
        url: "https://stabledpp.com/logo.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@stabledpp.com",
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
          name: "Priya Hebbal",
          jobTitle: "Co-Founder",
          image: "https://stabledpp.com/IMG2.jpg",
          description:
            "Co-founder of StableDPP, focused on the trust layer for India's exports and building verifiable proof for sustainability claims in the circular economy.",
        },
        {
          "@type": "Person",
          name: "Sudhanva Bhandolkar",
          jobTitle: "Co-Founder",
          image: "https://stabledpp.com/IMG1.jpg",
          description:
            "Co-founder of StableDPP, building the blockchain infrastructure behind every passport with Trust as Infrastructure (TAS) verification.",
        },
      ],
    },
  ],
};

export const SOLUTIONS_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "StableDPP Digital Product Passport Solutions",
  description:
    "Tailored Digital Product Passport solutions for fashion brands, textile manufacturers, and retailers. EU ESPR 2024 and GS1 Digital Link compliant.",
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

export function buildRouteMeta(
  pageKey: keyof typeof SEO_CONFIG,
): MetaDescriptor[] {
  const config = SEO_CONFIG[pageKey];
  const tags: MetaDescriptor[] = [
    { title: config.title },
    { name: "description", content: config.description },
    { name: "keywords", content: config.keywords },
    { tagName: "link", rel: "canonical", href: config.canonical },
    { property: "og:url", content: config.canonical },
    { property: "og:type", content: "website" },
  ];

  if (config.ogTitle) {
    tags.push({ property: "og:title", content: config.ogTitle });
  }
  if (config.ogDescription) {
    tags.push({ property: "og:description", content: config.ogDescription });
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

  let metaKeywords = document.querySelector(
    'meta[name="keywords"]',
  ) as HTMLMetaElement;
  if (metaKeywords) {
    metaKeywords.content = config.keywords;
  }

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
    resources: "Resources",
    company: "Company",
    demo: "Book a Demo",
    signin: "Sign In",
    getStarted: "Get Started",
  };

  const breadcrumbSchema = {
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
        name: breadcrumbMap[pageKey] || pageKey,
        item: config.canonical,
      },
    ],
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
