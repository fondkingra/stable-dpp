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
  { id: 'A2', track: 'exporters', title: 'ESPR Readiness Checklist for Exporters', type: 'Checklist', pages: '12', slug: 'espr-readiness-checklist', live: true,
    blurb: 'Score your factory against the data EU buyers will ask for under the Digital Product Passport: 60 checkpoints across 10 areas, with a readiness score.' },
  { id: 'A3', track: 'exporters', title: 'Textile DPP Data Fields Checklist', type: 'Checklist', pages: '16', slug: 'textile-dpp-data-fields-checklist', live: true,
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
  A2: {
    lastReviewed: 'October 2026',
    summary: [
      'EU buyers will need product data from their suppliers to build Digital Product Passports under the Ecodesign for Sustainable Products Regulation (ESPR). This checklist helps you test, area by area, whether that data exists in your business today, where it lives, and whether you could prove it.',
      '60 checkpoints across 10 areas, scored 0 to 2, for about 90 minutes with your export, compliance and production leads in the room. It covers buyer exposure, product identity, materials, traceability, chemicals, certifications, durability, environmental data, claims and labelling, and data systems and governance, with a score sheet, a timeline of the dates driving buyer requests, and next-guide recommendations for your weakest areas.',
      'This is a readiness tool, not a compliance certificate: the exact passport data for textiles will be set by an ESPR delegated act that has not yet been adopted.',
    ],
    audience: [
      'Export and merchandising heads who know what buyers are asking for.',
      'Compliance or sustainability leads who hold certificates, test reports and audit records.',
      'Production or sourcing heads who know the suppliers further up the chain.',
      'Owners and directors who want a single readiness score across the whole factory.',
    ],
    toc: [
      'Before you start: who should fill it in, and how to score each checkpoint',
      'A. EU buyer exposure and requests',
      'B. Product identity and batch records',
      'C. Materials and fibre composition',
      'D. Supply chain traceability',
      'E. Chemicals and substances',
      'F. Certifications and audit evidence',
      'G. Durability, care, repair and end of life',
      'H. Environmental data',
      'I. Product claims and labelling',
      'J. Data systems and governance',
      'Score sheet and what your total means',
      'Timeline: dates to plan around',
      'Next steps: which guide to read for your weakest area',
    ],
    faqs: [
      {
        q: 'How long does the ESPR readiness checklist take to complete?',
        a: 'About 90 minutes, sat down together with the export or merchandising head, the compliance or sustainability lead, and the production or sourcing head. It has 60 checkpoints across 10 areas, scored 0 (not in place), 1 (partly in place) or 2 (in place, with evidence), for a total out of 120.',
      },
      {
        q: 'What score should an exporter aim for?',
        a: '81–120 means you could answer most buyer requests with evidence today; 41–80 means the basics exist but are patchy; 0–40 means most of the data buyers will ask for is not yet recorded. Look at your weakest single area as well as the total: any area scoring 4 or below out of 12 is a priority gap, since a buyer request usually needs all ten areas at once.',
      },
      {
        q: 'Which areas are hardest for exporters to score well on?',
        a: 'Supply chain traceability (D) and environmental data (H) usually take the longest to fix, because they depend on suppliers further up the chain and on months of recorded history. If either is low, start there rather than waiting for a buyer request to force the pace.',
      },
      {
        q: 'Does a high score mean our products comply with EU regulations?',
        a: 'No. This is a readiness tool, not a compliance certificate. The exact passport data for textiles will be set by an ESPR delegated act that has not yet been adopted, expected in 2027. A full score means you are well placed to answer buyers when that happens, not that your products already comply with rules still being written.',
      },
    ],
    related: ['A1', 'A3', 'A4', 'A5'],
    pdfPath: '/downloads/espr-readiness-checklist.pdf',
    metaTitle: 'ESPR Readiness Checklist for Exporters | StableDPP',
    metaDescription:
      'Free 60-point checklist for textile and apparel exporters in India and Asia: score your readiness for EU Digital Product Passport data requests across 10 areas, with a score sheet and timeline.',
  },
  A3: {
    lastReviewed: 'October 2026',
    summary: [
      'A textile Digital Product Passport is a structured data record that sits behind a code on each garment, label or carton. Most of the data in it starts life with you and your suppliers in India, not with the EU brand.',
      'This checklist lists every field a textile passport is expected to need, names who in a typical Indian export chain actually holds each one, points to the document where it usually lives, and gives you a box to mark whether you can produce it today — across 10 sections from product identity to data governance, 66 fields in total.',
      'Each field carries a tag showing how firm it is: Core (set by ESPR for every passport, build now), Existing law (already required today under textile labelling or REACH, a risk now not in 2028), Expected (named in preparatory work, start collecting the raw data), or Supporting (evidence buyers use to verify other fields). A gap scorecard and a 90-day plan to close the gaps that matter most are included.',
    ],
    audience: [
      'Garment exporters and merchandising teams who end up as the data aggregator for EU buyer questionnaires, even when the data sits two tiers upstream.',
      'Compliance and QA leads who hold test reports, certificates and chemical declarations.',
      'Sourcing and production heads who need to map fabric mills, spinners, fibre suppliers and trim suppliers by style.',
      'Owners and directors who want a single working document to take to merchandising, QA and sourcing together.',
    ],
    toc: [
      'What this checklist does, and where the rules stand in October 2026',
      'How firm is each field: Core, Existing law, Expected, Supporting',
      'Who holds what in a textile chain, tier by tier',
      'A. Product identity and identifiers',
      'B. Operators and facilities',
      'C. Material composition',
      'D. Substances and chemicals',
      'E. Supply chain traceability',
      'F. Environmental performance',
      'G. Durability, care and repair',
      'H. End of life',
      'I. Compliance documents and user information',
      'J. Data governance and access',
      'Gap scorecard and reading your score',
      'A 90-day plan to close the gaps',
    ],
    faqs: [
      {
        q: 'How many data fields does a textile Digital Product Passport need?',
        a: 'This checklist lists 66 fields across 10 sections, from product identifiers and operator data through to material composition, chemicals, traceability, environmental performance, durability, end of life, compliance documents and data governance. The textile delegated act has not yet been adopted, so the final list may change — each field is tagged by how firm it is.',
      },
      {
        q: 'What do the Core, Existing law, Expected and Supporting tags mean?',
        a: 'Core fields are set by ESPR for every passport regardless of product and should be built now. Existing law fields are already required for textiles sold in the EU today, under rules like textile fibre labelling or REACH, so gaps here are risks today, not in 2028. Expected fields are named in the Commission’s textile preparatory work but not finalised. Supporting fields are not passport fields themselves, but the evidence buyers use to verify the others.',
      },
      {
        q: 'Who actually holds the data behind a textile passport?',
        a: 'It is scattered across four or five tiers: the brand or EU importer, the garment exporter, the fabric mill or processor, the yarn spinner, the fibre supplier, chemical and trim suppliers, labs and certifiers, and the customs broker. EU buyers usually ask the garment exporter for everything, because that is the tier they pay, which makes the exporter the natural data aggregator even when the data sits two tiers upstream.',
      },
      {
        q: 'Where do most exporters find gaps when they fill this in?',
        a: 'Common gaps are lot identity that survives from the cutting floor to the carton, Tier-2 facility details for dyeing and spinning sites, finished-garment composition rather than just shell fabric, and turning delivery challans into a searchable lot-to-lot chain. The checklist’s gap tips flag the usual weak point in each section.',
      },
    ],
    related: ['A1', 'A2', 'A4', 'A13'],
    pdfPath: '/downloads/textile-dpp-data-fields-checklist.pdf',
    metaTitle: 'Textile DPP Data Fields Checklist | StableDPP',
    metaDescription:
      'Free 66-field checklist for textile and apparel exporters: every data field a Digital Product Passport needs, who holds it in a typical Indian export chain, the source document, and a gap check.',
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
