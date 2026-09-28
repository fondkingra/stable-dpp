// Resources Hub guide library.
// Source: "StableDPP Resources Hub — Guides and Content Plan".
// Guides go live one per week; only guides with `live: true` get a page,
// a download form and a sitemap entry. The rest are listed as "Coming soon".

export type GuideTrack = 'exporters' | 'importers';

export type GuideType =
  | 'Guide'
  | 'Guide (master)'
  | 'Guide + templates'
  | 'Checklist'
  | 'Country guide'
  | 'Brief'
  | 'Workbook'
  | 'Template';

export type GuideFaq = { q: string; a: string };

export type GuideTocItem = string;

export type GuideSummary = {
  id: string;
  track: GuideTrack;
  title: string;
  type: GuideType;
  pages: string;
  /** Path segment after the track, e.g. "espr-readiness-checklist" or "country/india". */
  slug: string;
  /** Country guides (A6–A9) render in the country row. */
  country?: string;
  live: boolean;
  /** One- or two-sentence card description shown on the Resources hub. */
  blurb: string;
  /** Master guides only: the short "Inside" list on the hub. */
  inside?: readonly string[];
};

export type GuideDetail = {
  lastReviewed: string;
  /** Short written summary: what the guide covers and who it is for. */
  summary: readonly string[];
  audience: readonly string[];
  toc: readonly GuideTocItem[];
  faqs: readonly GuideFaq[];
  /** Guide ids, including the matching guide on the other track where one exists. */
  related: readonly string[];
  pdfPath: string;
  metaTitle: string;
  metaDescription: string;
};

export const GUIDES_BASE_PATH = '/resources/guides';

export const GUIDE_TRACKS = {
  exporters: {
    label: 'Exporters and Suppliers',
    menuLabel: 'Guides for Exporters',
    entryLabel: "I'm an Exporter or Supplier",
    path: `${GUIDES_BASE_PATH}/exporters`,
    audience:
      'Export managers, compliance and merchandising heads, and owners of textile and garment units in India, Bangladesh, Vietnam, Sri Lanka and other countries, and the export promotion councils and industry associations that share material with members.',
  },
  importers: {
    label: 'EU Importers and Brands',
    menuLabel: 'Guides for Importers',
    entryLabel: "I'm an EU Importer or Brand",
    path: `${GUIDES_BASE_PATH}/importers`,
    audience:
      'Sourcing, sustainability and compliance managers at EU brands, retailers and importers who buy textiles from Asia.',
  },
} as const satisfies Record<GuideTrack, unknown>;

export const GUIDES: readonly GuideSummary[] = [
  // Track A: Exporters and Suppliers
  {
    id: 'A1', track: 'exporters', title: 'EU Digital Product Passport Guide for Asian Textile Exporters', type: 'Guide (master)', pages: '28', slug: 'eu-dpp-guide-asian-exporters', live: true,
    blurb: 'The starting point for every exporter. What ESPR and the DPP mean in plain terms, why suppliers will be asked for data, the expected textile timeline, and a 90-day starter plan.',
    inside: [
      'What ESPR and the DPP are, in plain terms',
      'Why suppliers, not only brands, will be asked for data',
      'The expected textile timeline',
      'Exporting to the EU without a DPP: what happens',
      'What EU buyers will request, and in what form',
      'Readiness self-check and a 90-day starter plan',
    ],
  },
  { id: 'A2', track: 'exporters', title: 'ESPR Readiness Checklist for Exporters', type: 'Checklist', pages: '12', slug: 'espr-readiness-checklist', live: false,
    blurb: 'Tick-box sections on awareness, data, suppliers, systems, buyer communication and team, with a readiness score.' },
  { id: 'A3', track: 'exporters', title: 'Textile DPP Data Fields Checklist', type: 'Checklist', pages: '16', slug: 'textile-dpp-data-fields-checklist', live: false,
    blurb: 'Every field a textile passport needs, who holds it, the typical source document and a gap check.' },
  { id: 'A4', track: 'exporters', title: "How to Answer Your EU Buyer's DPP Data Request", type: 'Guide + templates', pages: '14', slug: 'answer-eu-buyer-dpp-data-request', live: false,
    blurb: 'What buyer questionnaires are really asking, what to share, what to protect, and three reply templates.' },
  { id: 'A5', track: 'exporters', title: 'Supplier Data Collection Guide: Tier 2 to Tier 4 Traceability', type: 'Guide', pages: '20', slug: 'supplier-data-collection-traceability', live: false,
    blurb: 'Map spinners, weavers, dyers and processors, and get small suppliers to share evidence.' },
  { id: 'A6', track: 'exporters', title: "India Exporter's Guide to the EU DPP", type: 'Country guide', pages: '12', slug: 'country/india', country: 'India', live: false,
    blurb: 'Clusters from Tiruppur and Ludhiana to Surat, Panipat, Bengaluru and Jaipur.' },
  { id: 'A7', track: 'exporters', title: 'Bangladesh RMG Guide to the EU DPP', type: 'Country guide', pages: '12', slug: 'country/bangladesh', country: 'Bangladesh', live: false,
    blurb: 'For RMG factories building on existing compliance systems.' },
  { id: 'A8', track: 'exporters', title: "Vietnam Exporter's Guide to the EU DPP", type: 'Country guide', pages: '10', slug: 'country/vietnam', country: 'Vietnam', live: false,
    blurb: 'A shorter step-by-step plan for Vietnamese exporters.' },
  { id: 'A9', track: 'exporters', title: "Sri Lanka Exporter's Guide to the EU DPP", type: 'Country guide', pages: '10', slug: 'country/sri-lanka', country: 'Sri Lanka', live: false,
    blurb: 'A shorter step-by-step plan for Sri Lankan exporters.' },
  { id: 'A10', track: 'exporters', title: 'EU Forced Labour Regulation and Cotton Traceability for Suppliers', type: 'Brief', pages: '12', slug: 'eu-forced-labour-regulation-cotton-traceability', live: false,
    blurb: 'What the regulation requires, and why cotton origin proof matters for Asian supply chains.' },
  { id: 'A11', track: 'exporters', title: 'DPP Cost and ROI Workbook for MSME Exporters', type: 'Workbook', pages: '8 + Excel', slug: 'dpp-cost-roi-workbook', live: false,
    blurb: 'Enter your own figures to weigh preparation cost against the risk of losing EU orders.' },
  { id: 'A12', track: 'exporters', title: 'DPP Implementation Timeline Template', type: 'Template', pages: '8', slug: 'dpp-implementation-timeline', live: false,
    blurb: 'Milestones for each phase (assess, collect, connect, issue, maintain) with named roles.' },
  { id: 'A13', track: 'exporters', title: 'Certifications to DPP Data: GOTS, OEKO-TEX, GRS Mapping', type: 'Checklist', pages: '10', slug: 'certifications-to-dpp-data', live: false,
    blurb: 'Which DPP fields your existing certifications already support, and where the gaps are.' },
  { id: 'A14', track: 'exporters', title: 'Green Claims Guide: What Exporters Can No Longer Say', type: 'Guide', pages: '10', slug: 'eu-green-claims-guide-exporters', live: false,
    blurb: 'Replace vague terms like eco-friendly on labels and hangtags, with before-and-after wording.' },

  // Track B: EU Importers and Brands
  { id: 'B1', track: 'importers', title: 'Sourcing from Asia: How EU Importers Get DPP Data from Suppliers', type: 'Guide (master)', pages: '20', slug: 'sourcing-from-asia-dpp-data', live: false,
    blurb: 'Why Asian supply chains are the hardest part of DPP readiness, what data sits with Tier 1 versus further upstream, and how to build supplier cooperation instead of sending forms.' },
  { id: 'B2', track: 'importers', title: 'Importer and Brand Obligations under ESPR', type: 'Guide', pages: '12', slug: 'importer-brand-obligations-espr', live: false,
    blurb: 'Who is responsible for the passport (manufacturer, importer or distributor) and what records to keep.' },
  { id: 'B3', track: 'importers', title: 'Supplier Onboarding Checklist for EU Brands Sourcing from India, Bangladesh and Vietnam', type: 'Checklist', pages: '12', slug: 'supplier-onboarding-checklist-asia', live: false,
    blurb: 'Assess supplier readiness country by country, with onboarding steps and red flags.' },
  { id: 'B4', track: 'importers', title: 'How to Write a DPP Data Request Your Asian Supplier Can Answer', type: 'Guide + templates', pages: '10', slug: 'write-dpp-data-request-asian-supplier', live: false,
    blurb: 'A clear, prioritised request structure and ready-to-use templates. Pairs with A4.' },
];

export const GUIDE_DETAILS: Readonly<Record<string, GuideDetail>> = {
  A1: {
    lastReviewed: 'September 2026',
    summary: [
      'What the EU Ecodesign Regulation (ESPR) means for textile and apparel suppliers in India and other countries, and how to prepare before your buyers ask.',
      'Most material on the Digital Product Passport is written for European brands. This guide looks at the same regulation from the other end of the supply chain: the factory that must provide the facts behind the passport. It explains what the DPP is, why it reaches suppliers and when it is expected to apply, covers the data buyers will ask for, and ends with a readiness self-check, a 90-day starter plan and the mistakes to avoid.',
    ],
    audience: [
      'Owners and directors of spinning, weaving, knitting, processing and garment units that sell to EU brands, retailers or importers.',
      'Export, merchandising and compliance teams who handle buyer questionnaires, audits and certifications.',
      'Production and sourcing heads who manage the suppliers further up the chain.',
      'Marketing heads who manage market diversification and market access for their products.',
    ],
    toc: [
      'Who this guide is for',
      'The Digital Product Passport in plain terms',
      'Why this lands on the supplier',
      'Timeline: what is in force and what is expected',
      'What EU buyers will ask for',
      'What does non-compliance to DPP mean to exporters?',
      'How a passport works in practice',
      'Related EU rules that ask for the same data',
      'Readiness self-check',
      'A 90-day starter plan',
      'Common mistakes to avoid',
      'Choosing a DPP platform: questions to ask',
      'Key terms',
    ],
    // DRAFT: written only from the A1 guide text; pending approval and regulatory check.
    faqs: [
      {
        q: 'Do Asian textile exporters need a Digital Product Passport?',
        a: 'Legally, the obligation to make a passport available sits with the business that places the product on the EU market, usually the EU importer or brand. But the passport is written in your supply chain: fibre composition, processing locations, chemical treatments and recycled content all come from the mills and factories that made the product. Expect EU buyers to pass the requirement down through supplier codes of conduct, onboarding questionnaires and purchase order terms.',
      },
      {
        q: 'When will Digital Product Passport requirements apply to textiles?',
        a: 'ESPR, Regulation (EU) 2024/1781, entered into force on 18 July 2024, and textiles and apparel are a priority product group. The textile delegated act that sets the exact data, format and scope is expected in 2027, and delegated acts usually allow around 18 months between adoption and application. For most exporters, the practical deadline is when their largest EU buyer starts asking.',
      },
      {
        q: 'What data will EU buyers ask textile suppliers for?',
        a: 'Expect questions on product identity, materials and fibre composition, recycled and certified content, origin and processing, substances and chemicals, durability and care, repair and end of life, environmental performance, and compliance documents. Passport-ready data is linked to a specific product or batch, backed by evidence, structured, traceable upstream and kept current.',
      },
      {
        q: 'Does sharing DPP data mean publishing my costing or supplier list?',
        a: 'No. Passport data has access levels: consumers see public information, while authorities and certain businesses, such as recyclers, can access more detailed information. Commercially sensitive data can be restricted, so agree with your buyers what is shared publicly and what stays restricted.',
      },
      {
        q: 'Does the EU require blockchain for Digital Product Passports?',
        a: 'No. ESPR requires passports to be interoperable and requires passport data to be accurate, reliable and protected against unauthorised change, but it does not require any particular technology. Blockchain-based systems are one practical way to meet these requirements because they create a tamper-evident record of who added what data and when. That is the approach StableDPP takes.',
      },
    ],
    related: ['A2', 'A3', 'B1'],
    pdfPath: '/downloads/eu-dpp-guide-asian-exporters.pdf',
    metaTitle: 'EU Digital Product Passport Guide for Asian Textile Exporters | StableDPP',
    metaDescription:
      'Free guide for textile and apparel exporters in India and Asia: what EU ESPR and the Digital Product Passport mean for suppliers, what buyers will ask for, and a 90-day plan.',
  },
};

/** "28" -> "28 pages", "8 + Excel" -> "8 pages + Excel". */
export function formatGuidePages(pages: string): string {
  return pages.replace(/^(\d+)(.*)$/, '$1 pages$2');
}

export function getGuidePath(guide: GuideSummary): string {
  return `${GUIDE_TRACKS[guide.track].path}/${guide.slug}`;
}

export function getGuideById(id: string): GuideSummary | undefined {
  return GUIDES.find((g) => g.id === id);
}

export function getGuideByPath(track: GuideTrack, slug: string): GuideSummary | undefined {
  return GUIDES.find((g) => g.track === track && g.slug === slug);
}

export function getGuidesByTrack(track: GuideTrack): GuideSummary[] {
  return GUIDES.filter((g) => g.track === track);
}

export function getMasterGuide(track: GuideTrack): GuideSummary {
  return GUIDES.find((g) => g.track === track && g.type === 'Guide (master)')!;
}

export function getCountryGuides(): GuideSummary[] {
  return GUIDES.filter((g) => g.country);
}

export function getLiveGuides(): GuideSummary[] {
  return GUIDES.filter((g) => g.live && GUIDE_DETAILS[g.id]);
}

export const GUIDE_DOWNLOAD_COUNTRIES = [
  'India', 'Bangladesh', 'Vietnam', 'Sri Lanka', 'Pakistan', 'Other Asia',
  'EU country', 'United Kingdom', 'Other',
] as const;

export const GUIDE_DOWNLOAD_ROLES = [
  'Owner or director',
  'Export or merchandising',
  'Compliance or sustainability',
  'Production or sourcing',
  'Marketing',
  'IT or data',
  'Other',
] as const;
