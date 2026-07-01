import { useNavigate } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import { Icon, type IconName } from '../utils/icons';
import { pageH1OnDark, pageH2OnLight, pageH2OnDark, heroEyebrow, heroLead } from '../styles/typography';

const solutions = [
  {
    emoji: '🏷️',
    badge: 'FASHION BRANDS',
    badgeBg: '#1ac8b0',
    badgeColor: '#071528',
    border: '#a7f3d0',
    headerBg: 'linear-gradient(135deg, #e6faf7 0%, #f0fdfa 100%)',
    iconBg: '#1ac8b0',
    capabilityBg: '#e6faf7',
    capabilityAccent: '#1ac8b0',
    shadow: '0 4px 24px rgba(26,200,176,0.08)',
    heading: 'For Fashion Brands — Turn Compliance Into a Competitive Advantage',
    body: 'The EU ESPR 2024 mandate is not just a compliance obligation — it is an opportunity to prove what your brand stands for. StableDPP gives fashion brands the infrastructure to issue verified Digital Product Passports for every product.',
    capabilities: [
      'Full product DPP creation',
      'Component-level tracking',
      'Consumer-facing QR codes',
      'ESPR 2024 compliance',
    ],
  },
  {
    emoji: '🏭',
    badge: 'MANUFACTURERS',
    badgeBg: '#3b82f6',
    badgeColor: '#fff',
    border: '#bfdbfe',
    headerBg: 'linear-gradient(135deg, #eff6ff 0%, #f8faff 100%)',
    iconBg: '#3b82f6',
    capabilityBg: '#eff6ff',
    capabilityAccent: '#3b82f6',
    shadow: '0 4px 24px rgba(59,130,246,0.07)',
    heading: 'For Textile Manufacturers — Become the Verified Partner Brands Want',
    body: 'Brands increasingly require verified sustainability data from every supplier in their chain. StableDPP lets textile manufacturers issue component DPPs for every material they produce — giving brand partners the verified data they need.',
    capabilities: [
      'Component DPP issuance',
      'Fibre origin tracking',
      'Supplier verification',
      'Multi-brand data sharing',
    ],
  },
  {
    emoji: '🛍️',
    badge: 'RETAILERS',
    badgeBg: '#9333ea',
    badgeColor: '#fff',
    border: '#d8b4fe',
    headerBg: 'linear-gradient(135deg, #f5f3ff 0%, #faf8ff 100%)',
    iconBg: '#9333ea',
    capabilityBg: '#f5f3ff',
    capabilityAccent: '#9333ea',
    shadow: '0 4px 24px rgba(147,51,234,0.07)',
    heading: 'For Retailers — Verified Product Data at Every Point of Sale',
    body: 'The EU Green Claims Directive requires retailers to substantiate every sustainability claim at the shelf. StableDPP gives retail partners access to verified DPP data from their entire brand and supplier network.',
    capabilities: [
      'DPP verification portal',
      'Real-time supplier data',
      'Green Claims compliance',
      'Multi-brand dashboards',
    ],
  },
];

const valuePropositions = [
  {
    heading: 'Enhanced Market Access — Through Compliance to EU ESPR',
    body: 'Since the sale of batteries / textile products in the EU will be mandatory since 2027, non-compliance to DPP embedded products would effectively deny you market access to the EU countries. Compliance to DPP embedded products would help in gaining market access. Act now and gain first mover advantage by adopting StableDPP, a blockchain based Solution for DPPs.',
    accent: '#1ac8b0',
    border: '#a7f3d0',
  },
  {
    heading: 'Regulatory Leadership — EU ESPR 2024 & Beyond',
    body: 'Achieve effortless compliance with EU ESPR 2024 — the Ecodesign for Sustainable Products Regulation (EU) 2024/1781 — and the upcoming delegated acts: batteries in 2027, followed by textiles and electronics. Stay ahead of the phased rollout running through 2030 with a Digital Product Passport platform that evolves as the regulations do.',
    accent: '#2563eb',
    border: '#bfdbfe',
  },
  {
    heading: 'Sustainability Impact — Circular Economy in Action',
    body: 'Accelerate the circular economy for fashion. StableDPP helps brands boost recycling rates, extend product lifecycles, and measurably reduce carbon footprints — turning sustainability from a reporting burden into a verifiable, blockchain-backed outcome buyers can trust.',
    accent: '#16a34a',
    border: '#bbf7d0',
  },
];

type ServiceOffering = {
  icon: IconName;
  iconColor: string;
  iconBg: string;
  border: string;
  title: string;
  body: string;
  subItems?: string[];
};

const services: ServiceOffering[] = [
  {
    icon: 'clipboard',
    iconColor: '#1ac8b0',
    iconBg: 'rgba(26,200,176,0.1)',
    border: '#a7f3d0',
    title: 'Consulting',
    body: 'ESPR readiness assessment, strategy, and a clear roadmap to Digital Product Passport compliance.',
  },
  {
    icon: 'factory',
    iconColor: '#2563eb',
    iconBg: 'rgba(59,130,246,0.1)',
    border: '#bfdbfe',
    title: 'Implementation',
    body: 'Hands-on setup, system integration, and onboarding of your products. We support both on-prem DPP implementation and cloud based DPP implementation.',
    subItems: [
      'Integration with your existing systems for data interchange needed for DPP implementation.',
    ],
  },
  {
    icon: 'link',
    iconColor: '#7c3aed',
    iconBg: 'rgba(147,51,234,0.1)',
    border: '#d8b4fe',
    title: 'BaaS Hosting',
    body: 'Fully managed Blockchain-as-a-Service, so you deploy DPPs without building infrastructure from scratch.',
  },
  {
    icon: 'check-circle',
    iconColor: '#16a34a',
    iconBg: 'rgba(34,197,94,0.1)',
    border: '#bbf7d0',
    title: 'Ongoing Support',
    body: 'Continuous guidance and updates as EU ESPR regulations and your needs evolve.',
  },
];

const complianceRows = [
  {
    regulation: 'EU ESPR 2024',
    coverage: 'All DPP data fields fully mapped and auto-validated. Compliance gaps flagged before publication.',
  },
  {
    regulation: 'EU Green Claims Directive',
    coverage: 'Every claim is verified, third-party-anchored, and defensible against regulatory challenge.',
  },
  {
    regulation: 'GS1 Digital Link',
    coverage: 'Globally interoperable QR infrastructure — your passport works everywhere your products are sold.',
  },
  {
    regulation: 'ISO 14001',
    coverage: 'Environmental management system data aligned and reportable in one click.',
  },
  {
    regulation: 'GDPR',
    coverage: 'EU data residency, AES-256 encryption, role-based access controls, and data minimisation by design.',
  },
];

export function SolutionsPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8', fontFamily: 'var(--font-primary)' }}>
      <SharedNav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 60%, #0d2a4a 100%)', padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={heroEyebrow}>SOLUTIONS</div>
          <h1 style={{ ...pageH1OnDark, marginBottom: '28px' }}>
            One Platform. Every Fashion Supply Chain Solved.
          </h1>
          <p style={heroLead}>
            Whether you are a global fashion house, a sustainable emerging brand, or a multi-tier textile manufacturer — StableDPP has a Digital Product Passport solution architected for your supply chain complexity and EU ESPR 2024 compliance requirements.
          </p>
        </div>
      </section>

      {/* Solutions Cards */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '28px' }}>
          {solutions.map((solution) => (
            <article
              key={solution.heading}
              style={{
                background: '#fff',
                borderRadius: '24px',
                border: `1px solid ${solution.border}`,
                overflow: 'hidden',
                boxShadow: solution.shadow,
              }}
            >
              <div style={{ background: solution.headerBg, padding: '32px 40px 0', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: solution.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                  {solution.emoji}
                </div>
                <div>
                  <span style={{ background: solution.badgeBg, color: solution.badgeColor, fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', padding: '3px 10px', borderRadius: '100px' }}>
                    {solution.badge}
                  </span>
                  <h2 style={{ ...pageH2OnLight, fontSize: 'clamp(20px, 2.5vw, 28px)', marginTop: '8px', marginBottom: '4px' }}>
                    {solution.heading}
                  </h2>
                </div>
              </div>
              <div style={{ padding: '28px 40px 36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'start' }}>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>{solution.body}</p>
                <div>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                    {solution.capabilities.map((capability) => (
                      <li key={capability} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: solution.capabilityBg, borderRadius: '10px', padding: '10px 14px' }}>
                        <span style={{ color: solution.capabilityAccent, fontWeight: 700, fontSize: '14px' }}>✓</span>
                        <span style={{ color: '#0f172a', fontSize: '13px', fontWeight: 500 }}>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Value Propositions */}
      <section id="value-propositions" className="solutions-value-section">
        <div className="solutions-value-container">
          <header className="solutions-value-header">
            <div className="section-eyebrow">VALUE PROPOSITIONS</div>
          </header>
          <div className="solutions-value-grid">
            {valuePropositions.map(({ heading, body, accent, border }) => (
              <article
                key={heading}
                className="solutions-value-card"
                style={{ borderColor: border }}
              >
                <div className="solutions-value-card__accent" style={{ background: accent }} aria-hidden="true" />
                <h2 className="solutions-value-card__title">{heading}</h2>
                <p className="solutions-value-card__body">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="solutions-services-section" aria-label="Our Services">
        <div className="solutions-services-container">
          <header className="solutions-services-header">
            <div className="section-eyebrow">Our Services</div>
            <h2 className="product-features-heading">More Than a Platform — Your End-to-End Digital Product Passport Partner.</h2>
            <p className="product-features-subheading">
              StableDPP provides complete, end-to-end services across Blockchain, AI, Digital Product Passports, and EU ESPR compliance. From first consultation to long-term implementation and maintenance of DPP projects, we support fashion brands and textile manufacturers &amp; exporters at every stage:
            </p>
          </header>

          <div className="solutions-services-grid">
            {services.map(({ icon, iconColor, iconBg, border, title, body, subItems }) => (
              <article
                key={title}
                className="solutions-service-card"
                style={{ borderColor: border }}
              >
                <div className="solutions-service-card__icon" style={{ background: iconBg }}>
                  <Icon name={icon} className="" style={{ width: '24px', height: '24px', color: iconColor, strokeWidth: 1.6 }} />
                </div>
                <h3 className="solutions-service-card__title">{title}</h3>
                <p className="solutions-service-card__body">{body}</p>
                {subItems && (
                  <ul className="solutions-service-card__sublist">
                    {subItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <p className="solutions-services-footer">
            Whether you need a guiding hand or a fully managed solution, our team takes you from where you are to fully ESPR-ready.
          </p>
        </div>
      </section>

      {/* Compliance Focus */}
      <section style={{ background: '#0a1f3c', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-eyebrow">COMPLIANCE COVERAGE</div>
            <h2 style={{ ...pageH2OnDark, textAlign: 'center', marginBottom: '16px' }}>
              Stay Ahead of Every Regulation
            </h2>
            <p style={{ color: '#7a8a98', fontSize: '16px', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              StableDPP&apos;s compliance engine is continuously updated as requirements evolve — your passports stay compliant without any manual monitoring.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <table className="solutions-compliance-table">
              <thead>
                <tr>
                  <th scope="col">Regulation</th>
                  <th scope="col">Coverage</th>
                </tr>
              </thead>
              <tbody>
                {complianceRows.map((row) => (
                  <tr key={row.regulation}>
                    <th scope="row">{row.regulation}</th>
                    <td>{row.coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0a1f3c', padding: '72px 24px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p style={{ ...pageH2OnDark, textAlign: 'center', marginBottom: '14px' }}>
            Not sure which DPP solution is right for your supply chain?
          </p>
          <p style={{ color: '#7a8a98', fontSize: '16px', marginBottom: '28px' }}>
            Our team works with fashion brands of every size — from emerging labels to global manufacturers. Book a 30-minute call and we will build a bespoke DPP roadmap for your products and markets.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/book-a-demo')} style={{ background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: 'pointer', color: '#071528', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '100px' }}>Book a Free Demo →</button>

          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}
