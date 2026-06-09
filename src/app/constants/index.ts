// Application constants and configuration
export const APP_CONFIG = {
  name: 'StableDPP',
  logo: '/logo-transparent.png',
  baseUrl: 'https://www.stabledpp.com',
  supportEmail: 'hello@stabledpp.com',
  demoUrl: '/book-a-demo',
  signupUrl: '/get-started',
  signinUrl: '/signin',
} as const;

export const NAVIGATION_LINKS = [
  { label: 'Product', href: '/product' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Resources', href: '/resources' },
  { label: 'Company', href: '/company' },
] as const;

export const PRODUCT_TYPES = {
  SHIRT: 'shirt',
  JEANS: 'jeans',
} as const;

export const COUNTRIES = [
  'Austria', 'Belgium', 'Denmark', 'Finland', 'France', 'Germany', 
  'Ireland', 'Italy', 'Netherlands', 'Portugal', 'Spain', 'Sweden', 
  'United Kingdom', 'United States', 'Other'
] as const;

export const COMPLIANCE_BADGES = [
  '● EU ESPR 2024',
  '● Ethereum Mainnet', 
  '● ISO 14001',
  '● GDPR Compliant',
  '● GS1 Digital Link'
] as const;

export const TRUST_BADGES = [
  'ESPR ALIGNED',
  'GS1 READY', 
  'GDPR COMPLIANT'
] as const;

export const TRUSTED_BRANDS = [
  'Madura Fashion',
  'Arvind Limited', 
  'Raymond Group',
  'Welspun India',
  'Vardhman Textiles',
  'Trident Group'
] as const;

export const TICKER_ITEMS = [
  'ESPR 2024',
  'TEXTILES',
  'BATTERIES', 
  'ELECTRONICS',
  'GS1 DIGITAL LINK',
  'HYPERLEDGER FABRIC',
  'QR · NFC · RFID',
  'CIRCULAR ECONOMY',
  'CARBON TRACEABILITY',
  'ANTI‑GREENWASHING'
] as const;

export const PRODUCT_SELECT_OPTIONS = {
  numProducts: ['1–10', '11–50', '51–200', '200+'] as const,
  primaryMarket: ['EU', 'UK', 'USA', 'Global', 'Other'] as const,
};

export const STATS = [
  { value: '500+', label: 'Digital Product Passports issued' },
  { value: 'mins', label: 'Sign-up to first passport' },
  { value: '100%', label: 'ESPR 2024 data fields covered' },
  { value: '30+', label: 'Fashion brands onboarded' },
] as const;

export const FEATURES = [
  {
    icon: "shield-check" as const,
    title: "Blockchain Verified",
    desc: "Every passport you issue is locked to the Ethereum blockchain — timestamped the moment it is created and impossible to alter after the fact. Your sustainability claims stop being promises and become proof anyone can check.",
  },
  {
    icon: "leaf" as const, 
    title: "Sustainability Proof",
    desc: "Quantify, disclose, and prove your environmental impact across your entire supply chain. From carbon footprint to water usage — every metric, every material, every supplier, verified on-chain.",
  },
  {
    icon: "lock" as const,
    title: "ESPR Compliant", 
    desc: "Purpose-built for the EU Ecodesign for Sustainable Products Regulation. StableDPP checks every data field against ESPR requirements and flags what is missing before your passport ever goes live.",
  },
  {
    icon: "globe" as const,
    title: "Global Standards",
    desc: "Fully aligned with GS1 Digital Link, ISO 14001, and EU Textile Strategy. Your Digital Product Passport works everywhere EU buyers, regulators, and retailers expect it to.",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  { 
    num: '01', 
    icon: 'package' as const, 
    title: 'Select Your Product', 
    desc: 'Choose your garment type — T-shirt, jeans, jacket, footwear — and select the component DPPs that make up your product. Each component (fabric, dye, hardware, lining) gets its own traceable record.' 
  },
  { 
    num: '02', 
    icon: 'clipboard' as const, 
    title: 'Fill Your Sustainability Data', 
    desc: 'Upload a product image and enter your material composition, certifications (GOTS, Oeko-Tex, GRS), sustainability metrics, and supply chain provenance. Our compliance engine guides every field.' 
  },
  { 
    num: '03', 
    icon: 'mobile' as const, 
    title: 'Get Your Blockchain-Verified Passport', 
    desc: 'Your EU ESPR-compliant Digital Product Passport is generated instantly — anchored on Ethereum Mainnet with a tamper-proof blockchain hash and a GS1 Digital Link-ready QR code. Done in minutes.' 
  },
] as const;

export const FAQS = [
  { 
    q: 'What exactly is a Digital Product Passport?', 
    a: 'A DPP is a structured digital record capturing a product\'s full lifecycle — materials, origin, certifications, repairability, and sustainability data — accessible via a single QR, NFC, or RFID scan. It\'s the EU\'s mechanism to enforce transparency across supply chains.' 
  },
  { 
    q: 'Do fashion brands really need this?', 
    a: 'Yes. Under EU ESPR 2024, any fashion product sold in Europe must carry a compliant Digital Product Passport by 2027. Without it, products risk being held at customs or excluded from EU shelves entirely.' 
  },
  { 
    q: 'How fast can we go live?', 
    a: 'Our platform gets your first passport live in minutes. No technical setup required. No credit card needed to start.' 
  },
  { 
    q: 'Why blockchain?', 
    a: 'Blockchain ensures every data point in the passport is tamper-proof and independently verifiable. Regulators and buyers can trust the data without relying on your word alone — turning claims into cryptographic proof.' 
  },
  { 
    q: 'Does it integrate with our existing systems?', 
    a: 'Yes. We support portal upload, CSV/bulk upload, and API/ERP/PLM integration on the Enterprise plan. You bring the data in whatever format works — we handle the rest.' 
  },
] as const;

export const PRODUCT_CATEGORIES = [
  {
    type: 'shirt',
    title: 'T-Shirt',
    desc: 'Full component tracking for shirt products with end-to-end supply chain visibility — fabric, collar, buttons, threads, and labels.',
    tags: ['Fabric', 'Collar', 'Buttons', 'Threads', 'Labels'],
    cta: 'Create T-Shirt DPP'
  },
  {
    type: 'jeans', 
    title: 'Jeans',
    desc: 'Denim supply chain verification with complete material provenance — cotton sourcing, dye processes, hardware, and wash compliance.',
    tags: ['Zipper', 'Rivets', 'Denim', 'Pockets', 'Waistband'],
    cta: 'Create Jeans DPP'
  },
  {
    type: null,
    title: '+ More Categories',
    desc: 'Jackets, footwear, accessories, and more — contact us to add your category to the StableDPP platform.',
    tags: ['Jackets', 'Footwear', 'Accessories'],
    cta: 'Contact Us'
  },
] as const;