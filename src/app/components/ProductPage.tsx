import { useNavigate } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import { Icon } from '../utils/icons';
import { PRODUCT_PRIVACY_FAQS, PRODUCT_PAGE_FAQS } from '../utils/seo';
import { PageFAQ } from './PageFAQ';
import { PageBreadcrumb } from './PageBreadcrumb';
import { pageH1OnDark, pageH2OnDark, heroEyebrow, heroLead } from '../styles/typography';

const features = [
  {
    icon: 'link' as const,
    iconColor: '#1ac8b0',
    bg: 'linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%)',
    border: '#a7f3d0',
    iconBg: 'rgba(26,200,176,0.1)',
    heading: 'Blockchain-Verified, Tamper-Evident Passports',
    headingLevel: 'h2' as const,
    body: 'Every Digital Product Passport you create is anchored to an immutable blockchain record. Your sustainability claims are permanently timestamped, independently verifiable, and impossible to falsify.',
  },
  {
    icon: 'leaf' as const,
    iconColor: '#16a34a',
    bg: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)',
    border: '#bbf7d0',
    iconBg: 'rgba(34,197,94,0.1)',
    heading: 'Component-Level DPPs: Fabric, Dye, Hardware, Lining',
    headingLevel: 'h2' as const,
    body: 'Go beyond product-level data. StableDPP lets you attach individual component DPPs to every material in your product — fabric origin, button sourcing, collar certification, thread dye compliance.',
  },
  {
    icon: 'clipboard' as const,
    iconColor: '#2563eb',
    bg: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)',
    border: '#bfdbfe',
    iconBg: 'rgba(59,130,246,0.1)',
    heading: 'ESPR Compliance Engine — Every Data Field Auto-Validated',
    headingLevel: 'h2' as const,
    body: 'Purpose-built for EU ESPR 2024. Our compliance engine auto-validates your DPP data against all ESPR data fields, flags missing information, and ensures GS1 Digital Link compliance.',
  },
  {
    icon: 'mobile' as const,
    iconColor: '#7c3aed',
    bg: 'linear-gradient(135deg, #f5f3ff 0%, #ffffff 100%)',
    border: '#d8b4fe',
    iconBg: 'rgba(147,51,234,0.1)',
    heading: 'GS1 Digital Link QR Codes on Every Product',
    headingLevel: 'h2' as const,
    body: 'When your Digital Product Passport is ready, StableDPP generates a GS1 Digital Link-compliant QR code instantly — ready to embed on garment labels, hang tags, or packaging.',
  },
  {
    icon: 'chart-line' as const,
    iconColor: '#d97706',
    bg: 'linear-gradient(135deg, #fefce8 0%, #ffffff 100%)',
    border: '#fde68a',
    iconBg: 'rgba(245,158,11,0.1)',
    heading: 'Sustainability Dashboard',
    headingLevel: 'h3' as const,
    body: 'Monitor sustainability performance across your entire product catalogue. Track CO₂ equivalent, water consumption, recycled-material percentages, and export compliance reports.',
  },
  {
    icon: 'lock' as const,
    iconColor: '#db2777',
    bg: 'linear-gradient(135deg, #fdf2f8 0%, #ffffff 100%)',
    border: '#fbcfe8',
    iconBg: 'rgba(236,72,153,0.1)',
    heading: 'GDPR Data Infrastructure',
    headingLevel: 'h3' as const,
    body: 'Your supply chain data is commercially sensitive. StableDPP is fully GDPR compliant — all data encrypted at rest and in transit, with EU-regulated cloud infrastructure.',
  },
];

const capabilities = [
  {
    icon: 'shield-check' as const,
    iconColor: '#1ac8b0',
    accentBg: 'rgba(26,200,176,0.1)',
    heading: 'Secure Blockchain-Based Application',
    body: 'StableDPP is a secure, blockchain-based Digital Product Passport platform built on permissioned blockchain infrastructure. Every passport and transaction is cryptographically protected end-to-end, giving fashion and textile brands enterprise-grade security at the core.',
  },
  {
    icon: 'link' as const,
    iconColor: '#2563eb',
    accentBg: 'rgba(59,130,246,0.1)',
    heading: 'Immutable Lifecycle Tracking',
    body: 'Capture every event in a product\'s life — manufacture, certification, sale, repair, resale, and recycling — as a permanent, tamper-proof record on the blockchain. Once written, lifecycle data cannot be edited or deleted, giving every Digital Product Passport a trustworthy, immutable history.',
  },
  {
    icon: 'lock' as const,
    iconColor: '#db2777',
    accentBg: 'rgba(236,72,153,0.1)',
    heading: 'Role-Based Access Control',
    body: 'Control exactly who can see and edit each Digital Product Passport. Granular, role-based permissions let brands, suppliers, auditors, and regulators access only the data relevant to them — keeping commercially sensitive supply-chain information protected.',
  },
  {
    icon: 'factory' as const,
    iconColor: '#7c3aed',
    accentBg: 'rgba(147,51,234,0.1)',
    heading: 'Smart Contract Configuration & Automation',
    body: 'Automate compliance and lifecycle rules with configurable smart contracts. Trigger validations and updates across every Digital Product Passport automatically — reducing manual work and enforcing EU ESPR rules consistently at scale.',
  },
  {
    icon: 'package' as const,
    iconColor: '#d97706',
    accentBg: 'rgba(245,158,11,0.1)',
    heading: 'RWA Tokenization Integration',
    body: 'Represent physical fashion products, batches of products, materials, or assets as digital tokens on the blockchain. Real-World Asset (RWA) tokenization turns each Digital Product Passport into a programmable asset — unlocking potential fractional ownership, liquidity, and new circular-economy business models.',
  },
  {
    icon: 'globe' as const,
    iconColor: '#16a34a',
    accentBg: 'rgba(34,197,94,0.1)',
    heading: 'Seamless Interoperability',
    body: 'Aligned with GS1 Digital Link and global standards, StableDPP Digital Product Passports work across systems, platforms, and borders. Your passports are recognised everywhere EU buyers, retailers, and regulators expect them. The data stored on StableDPP\'s blockchain can be shared bidirectionally to other such systems through access controlled APIs for interoperability.',
  },
  {
    icon: 'shield-check' as const,
    iconColor: '#0d9488',
    accentBg: 'rgba(13,148,136,0.1)',
    heading: 'Privacy-First, GDPR-Compliant Design',
    body: 'Privacy is built into every Digital Product Passport. Fully GDPR-compliant, StableDPP encrypts data at rest and in transit, while Private Data Collections let chosen participants share confidential supply-chain data among themselves and keep it hidden from everyone else on the network. The StableDPP system allows configuring of access control permissions at various levels and to various roles.',
  },
  {
    icon: 'chart-line' as const,
    iconColor: '#ea580c',
    accentBg: 'rgba(234,88,12,0.1)',
    heading: 'Analytics & Sustainability Insights',
    body: 'Turn Digital Product Passport data into intelligence. Track carbon footprint, recycled content, certifications, and ESPR compliance status across your fashion catalogue — and export audit-ready sustainability reports for regulators, retail partners, and stakeholders. The data is based on UNTP\'s data model for Digital Product Passport.',
  },
  {
    icon: 'building' as const,
    iconColor: '#4f46e5',
    accentBg: 'rgba(79,70,229,0.1)',
    heading: 'Private Data Collections',
    body: 'StableDPP\'s high-performance blockchain lets a subset of participants share confidential data among themselves while keeping it hidden from others on the network — ideal for commercially sensitive Digital Product Passport information across a fashion supply chain.',
  },
  {
    icon: 'scale' as const,
    iconColor: '#0891b2',
    accentBg: 'rgba(8,145,178,0.1)',
    heading: 'Data Privacy by Design',
    body: 'Data privacy is a founding principle of StableDPP, not an afterthought. Every Digital Product Passport separates public information from private records: only the data a brand chooses to share is ever made visible, while everything else stays encrypted and access-controlled. You decide exactly what the world sees through the QR code — and what stays private.',
  },
  {
    icon: 'check-circle' as const,
    iconColor: '#16a34a',
    accentBg: 'rgba(34,197,94,0.1)',
    heading: 'Supplier Confidentiality Protected',
    body: 'StableDPP safeguards supplier confidentiality at every step. Sensitive supplier identities, pricing, and sourcing details are never automatically published to the public passport. Through Private Data Collections and role-based access, suppliers share only what is required for compliance — and their commercially sensitive data remains hidden from competitors, the public, and even other participants on the network.',
  },
];

const privacySafeguards = [
  'Private Data Collections — confidential data is shared only among chosen participants and hidden from everyone else on the network, including the public.',
  'Role-Based Access Control — brands, suppliers, auditors, and regulators each see only the data relevant to them, and nothing more.',
  'You control publication — nothing becomes public unless you explicitly choose to publish it. Compliance data can be verified by regulators privately, without being shown to the world.',
  'GDPR-compliant and encrypted — all data is encrypted in transit and at rest, in line with GDPR and best-practice data privacy.',
];

export function ProductPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <SharedNav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 60%, #0d2a4a 100%)', padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <PageBreadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Product" }]}
          />
          <div style={heroEyebrow}>
            THE PLATFORM
          </div>
          <h1 style={{ ...pageH1OnDark, marginBottom: '28px' }}>
            The Digital Product Passport Software Built for Fashion Compliance
          </h1>
          <p style={{ ...heroLead, marginBottom: '36px' }}>
            StableDPP is a digital product passport platform for fashion and textile brands, manufacturers, and retailers — a single place to create, manage, and publish blockchain-verified Digital Product Passports fully compliant with EU ESPR 2024 and aligned to every global sustainability standard that matters.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/create-dpp')} style={{ background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: 'pointer', color: '#071528', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '100px' }}>Start for Free →</button>
            <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer', color: '#fff', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 500, padding: '13px 28px', borderRadius: '100px' }}>See How It Works</button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="product-features-section">
        <div className="product-features-container">
          <div className="product-features-header">
            <div className="section-eyebrow">CORE FEATURES</div>
            <p className="product-features-heading">Everything You Need to Issue, Manage, and Prove Your Passports</p>
            <p className="product-features-subheading">
              Create, manage, verify, and distribute EU ESPR-compliant Digital Product Passports with blockchain-backed trust, supply-chain transparency, and automated compliance.
            </p>
          </div>
          <div className="product-features-grid">
            {features.map(({ icon, iconColor, bg, border, iconBg, heading, headingLevel, body }) => {
              const HeadingTag = headingLevel;
              return (
              <div
                key={heading}
                className="product-feature-card"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <div className="product-feature-card__icon" style={{ background: iconBg }}>
                  <Icon name={icon} className="" style={{ width: '26px', height: '26px', color: iconColor, strokeWidth: 1.5 }} />
                </div>
                <HeadingTag className="product-feature-card__title">{heading}</HeadingTag>
                <p className="product-feature-card__body">{body}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section id="capabilities" className="product-capabilities-section">
        <div className="product-capabilities-intro">
          <h2 className="product-capabilities-heading">Digital Product Passport Platform Capabilities</h2>
        </div>
        <div className="product-capabilities-body">
          <div className="product-capabilities-panel">
            <div className="product-capabilities-grid">
              {capabilities.map(({ icon, iconColor, accentBg, heading, body }) => (
                <article key={heading} className="product-capability-card">
                  <div className="product-capability-card__blob" style={{ background: accentBg }} aria-hidden="true" />
                  <div className="product-capability-card__icon" style={{ background: accentBg }}>
                    <Icon name={icon} className="" style={{ width: '24px', height: '24px', color: iconColor, strokeWidth: 1.6 }} />
                  </div>
                  <h3 className="product-capability-card__title">{heading}</h3>
                  <p className="product-capability-card__body">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Privacy & Supplier Confidentiality */}
      <section id="data-privacy" className="product-privacy-section">
        <div className="product-privacy-content">
          <header className="product-privacy-header">
            <div className="section-eyebrow">DATA PRIVACY &amp; SUPPLIER CONFIDENTIALITY</div>
            <h2 className="product-features-heading">Data Privacy &amp; Supplier Confidentiality</h2>
            <p className="product-privacy-lead">Your Data Stays Yours — Public Transparency, Private Protection</p>
            <p className="product-features-subheading">
              A Digital Product Passport is built to prove what matters to customers and regulators — without exposing the confidential information that runs your business. StableDPP draws a clear line between what is shared publicly and what stays private, and you control exactly where that line sits.
            </p>
          </header>

          <div className="product-privacy-columns">
            <div className="product-privacy-block">
              <h3 className="product-privacy-block__heading">Data Privacy</h3>
              <p className="product-privacy-block__subheading">What the public sees through the QR code</p>
              <p className="product-privacy-block__body">
                When a customer or retailer scans the QR code, they see only the information you have chosen to publish — typically the product&apos;s material composition, events of manufacturing and supply chain, sustainability credentials, certifications, care and repair guidance, and recycling information. This is the data that builds trust and meets EU ESPR 2024 requirements.
              </p>
            </div>
            <div className="product-privacy-block">
              <h3 className="product-privacy-block__heading">Supplier Confidentiality</h3>
              <p className="product-privacy-block__subheading">What stays private and protected</p>
              <p className="product-privacy-block__body">
                Your sensitive commercial data is never automatically exposed. Supplier identities, factory locations, pricing, contracts, and proprietary sourcing details remain confidential — stored securely, encrypted, and shared only with the specific participants who are authorised to see them. The public QR code never reveals them.
              </p>
            </div>
          </div>

          <div className="product-privacy-safeguards">
            <h3 className="product-privacy-block__heading">How StableDPP keeps it that way</h3>
            <ul className="product-privacy-list">
              {privacySafeguards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* CTA / Pricing */}
      <section style={{ background: '#0a1f3c', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ ...pageH2OnDark, textAlign: 'center', marginBottom: '16px' }}>
            StableDPP Pricing — Free to Start
          </h2>
          <p style={{ color: '#a8bcc8', fontSize: '16px', lineHeight: 1.7, marginBottom: '20px' }}>
            Start issuing blockchain-verified Digital Product Passports today — no technical setup, no credit card required.
          </p>
          <div style={{ color: '#7a8a98', fontSize: '14px', marginBottom: '28px', display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span>No technical setup</span>
            <span>·</span>
            <span>No credit card required</span>
            <span>·</span>
            <span>Blockchain anchoring included</span>
            <span>·</span>
            <span>Your first passport live in minutes</span>
          </div>
          <button onClick={() => navigate('/create-dpp')} style={{ background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: 'pointer', color: '#071528', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 700, padding: '16px 32px', borderRadius: '100px' }}>Get Started Free →</button>
        </div>
      </section>

      <PageFAQ
        id="data-privacy-faq"
        tone="privacy"
        title="Data Privacy FAQ"
        faqs={PRODUCT_PRIVACY_FAQS}
        defaultOpen={0}
        showQaPrefix
      />

      <PageFAQ
        id="faq"
        faqs={PRODUCT_PAGE_FAQS}
        tone="platform"
        title="Frequently Asked Questions about the StableDPP Platform"
      />

      <SharedFooter />
    </div>
  );
}
