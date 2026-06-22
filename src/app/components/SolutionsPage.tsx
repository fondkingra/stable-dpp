import { useNavigate } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
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
            <button onClick={() => navigate('/book-a-demo')} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer', color: '#fff', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 500, padding: '13px 28px', borderRadius: '100px' }}>Talk to Our Team →</button>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}
