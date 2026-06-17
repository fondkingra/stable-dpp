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
    title:
      "StableDPP Product | Blockchain-Verified Digital Product Passport Platform for Fashion",
    description:
      "StableDPP is the most trusted Digital Product Passport platform for fashion brands. Blockchain anchoring, ESPR compliance engine, instant QR codes, and a sustainability dashboard — free to start.",
    keywords:
      "Digital Product Passport platform fashion, blockchain DPP fashion, ESPR compliance engine, fashion sustainability dashboard, GS1 Digital Link QR",
    canonical: "https://www.stabledpp.com/product",
  },
  solutions: {
    title:
      "StableDPP Solutions | Digital Product Passports for Brands, Manufacturers & Retailers",
    description:
      "Tailored Digital Product Passport solutions for fashion brands, textile manufacturers, and retailers. EU ESPR 2024 compliant. GS1 Digital Link aligned. Built for every supply chain.",
    keywords:
      "DPP solutions fashion brands, textile manufacturer DPP, retail DPP compliance, EU ESPR supply chain, Green Claims Directive",
    canonical: "https://www.stabledpp.com/solutions",
  },
  resources: {
    title:
      "StableDPP Resources | EU ESPR Guides, DPP Explainers & Compliance Webinars for Fashion",
    description:
      "Free guides, articles, and webinars on EU ESPR 2024, Digital Product Passports, and sustainable fashion supply chains. Everything fashion brands need to navigate DPP compliance in 2026.",
    keywords:
      "EU ESPR guide fashion DPP, Digital Product Passport explainer, ESPR compliance webinar, sustainable fashion guides, DPP implementation tutorial",
    canonical: "https://www.stabledpp.com/resources",
  },
  company: {
    title: "About StableDPP | Built for Transparency and Trust in Fashion",
    description:
      "StableDPP is on a mission to make every fashion product verifiably sustainable. Learn about our blockchain-first approach to Digital Product Passports, EU ESPR compliance, and supply chain transparency.",
    keywords:
      "StableDPP fashion DPP platform, blockchain fashion transparency, sustainable fashion company, DPP mission values, fashion compliance team",
    canonical: "https://www.stabledpp.com/company",
  },
  demo: {
    title:
      "Book a StableDPP Demo | See Digital Product Passports for Fashion in Action",
    description:
      "Book a 30-minute personalised Digital Product Passport demo with the StableDPP team. We will build a live DPP for your products, walk through ESPR compliance, and create a tailored roadmap for your brand.",
    keywords:
      "StableDPP demo, Digital Product Passport demo, ESPR compliance demo, fashion DPP consultation, blockchain passport demo",
    canonical: "https://www.stabledpp.com/book-a-demo",
  },
  signin: {
    title: "Sign In to StableDPP | Your Digital Product Passport Dashboard",
    description:
      "Sign in to your StableDPP account to manage, publish, and track your Digital Product Passports. Secured by 256-bit encryption. GDPR compliant.",
    keywords:
      "StableDPP login, DPP dashboard, Digital Product Passport account, fashion DPP management, ESPR compliance dashboard",
    canonical: "https://www.stabledpp.com/signin",
  },
  getStarted: {
    title:
      "Create Your Free StableDPP Account | Digital Product Passports for Fashion",
    description:
      "Start issuing blockchain-verified Digital Product Passports in minutes. Free to start. EU ESPR 2024 compliant from your first passport. No credit card required.",
    keywords:
      "create StableDPP account, free Digital Product Passport account, fashion DPP signup, ESPR compliance registration, blockchain passport account",
    canonical: "https://www.stabledpp.com/get-started",
  },
  comingSoon: {
    title: "Coming Soon | StableDPP",
    description: "This feature is coming soon. Stay tuned for updates.",
    keywords: "coming soon, updates",
    canonical: "https://www.stabledpp.com/resources",
  },
};

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

  // Add breadcrumb structured data for sub-pages
  if (pageKey !== "home") {
    updateBreadcrumbSchema(pageKey, config);
  }
}

// Add breadcrumb structured data
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
        item: "https://www.stabledpp.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: breadcrumbMap[pageKey] || pageKey,
        item: config.canonical,
      },
    ],
  };

  // Remove existing breadcrumb schema if present
  const existingBreadcrumb = document.querySelector(
    'script[type="application/ld+json"][data-breadcrumb]',
  );
  if (existingBreadcrumb) {
    existingBreadcrumb.remove();
  }

  // Add new breadcrumb schema
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-breadcrumb", "true");
  script.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(script);
}
