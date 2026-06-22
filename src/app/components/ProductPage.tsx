import { useNavigate } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import { Icon } from '../utils/icons';
import { pageH1OnDark, pageH2OnDark, heroEyebrow, heroLead } from '../styles/typography';

const features = [
  { icon: 'link' as const, iconColor: '#1ac8b0', bg: 'linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%)', border: '#a7f3d0', iconBg: 'rgba(26,200,176,0.1)', title: 'Blockchain Anchoring — Tamper-Proof by Design', body: 'Every Digital Product Passport you create is anchored to an immutable blockchain record. Your sustainability claims are permanently timestamped, independently verifiable, and impossible to falsify.' },
  { icon: 'leaf' as const, iconColor: '#16a34a', bg: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)', border: '#bbf7d0', iconBg: 'rgba(34,197,94,0.1)', title: 'Component-Level Tracking — Every Material, Accounted For', body: 'Go beyond product-level data. StableDPP lets you attach individual component DPPs to every material in your product — fabric origin, button sourcing, collar certification, thread dye compliance.' },
  { icon: 'clipboard' as const, iconColor: '#2563eb', bg: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)', border: '#bfdbfe', iconBg: 'rgba(59,130,246,0.1)', title: 'ESPR & Global Compliance Engine — Built for Every Regulation', body: 'Purpose-built for EU ESPR 2024. Our compliance engine auto-validates your DPP data against all ESPR data fields, flags missing information, and ensures GS1 Digital Link compliance.' },
  { icon: 'mobile' as const, iconColor: '#7c3aed', bg: 'linear-gradient(135deg, #f5f3ff 0%, #ffffff 100%)', border: '#d8b4fe', iconBg: 'rgba(147,51,234,0.1)', title: 'Instant QR Code Generation — GS1 Digital Link Ready', body: 'When your Digital Product Passport is ready, StableDPP generates a GS1 Digital Link-compliant QR code instantly — ready to embed on garment labels, hang tags, or packaging.' },
  { icon: 'chart-line' as const, iconColor: '#d97706', bg: 'linear-gradient(135deg, #fefce8 0%, #ffffff 100%)', border: '#fde68a', iconBg: 'rgba(245,158,11,0.1)', title: 'Sustainability Data Dashboard — Track Everything, Report Anything', body: 'Monitor sustainability performance across your entire product catalogue. Track CO₂ equivalent, water consumption, recycled-material percentages, and export compliance reports.' },
  { icon: 'lock' as const, iconColor: '#db2777', bg: 'linear-gradient(135deg, #fdf2f8 0%, #ffffff 100%)', border: '#fbcfe8', iconBg: 'rgba(236,72,153,0.1)', title: 'GDPR-Compliant Data Infrastructure — Your Data, Your Control', body: 'Your supply chain data is commercially sensitive. StableDPP is fully GDPR compliant — all data encrypted at rest and in transit, with EU-regulated cloud infrastructure.' },
];

export function ProductPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <SharedNav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 60%, #0d2a4a 100%)', padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={heroEyebrow}>
            THE PLATFORM
          </div>
          <h1 style={{ ...pageH1OnDark, marginBottom: '28px' }}>
            The Most Trusted Digital Product Passport Platform for Fashion Brands.
          </h1>
          <p style={{ ...heroLead, marginBottom: '36px' }}>
            StableDPP gives fashion brands, textile manufacturers, and retailers a single platform to create, manage, and publish blockchain-verified Digital Product Passports — fully compliant with EU ESPR 2024 and aligned to every global sustainability standard that matters.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/get-started')} style={{ background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: 'pointer', color: '#071528', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '100px' }}>Start for Free →</button>
            <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer', color: '#fff', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 500, padding: '13px 28px', borderRadius: '100px' }}>See How It Works</button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="product-features-section">
        <div className="product-features-container">
          <div className="product-features-header">
            <h2 className="product-features-heading">Everything Needed for Digital Product Passports</h2>
            <p className="product-features-subheading">
              Create, manage, verify, and distribute EU ESPR-compliant Digital Product Passports with blockchain-backed trust, supply-chain transparency, and automated compliance.
            </p>
          </div>
          <div className="product-features-grid">
            {features.map(({ icon, iconColor, bg, border, iconBg, title, body }) => (
              <div
                key={title}
                className="product-feature-card"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <div className="product-feature-card__icon" style={{ background: iconBg }}>
                  <Icon name={icon} className="" style={{ width: '26px', height: '26px', color: iconColor, strokeWidth: 1.5 }} />
                </div>
                <h3 className="product-feature-card__title">{title}</h3>
                <p className="product-feature-card__body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0a1f3c', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ ...pageH2OnDark, textAlign: 'center', marginBottom: '16px' }}>
            Start issuing blockchain-verified Digital Product Passports today — no technical setup, no credit card required.
          </h2>
          <div style={{ color: '#7a8a98', fontSize: '14px', marginBottom: '28px', display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span>No technical setup</span>
            <span>·</span>
            <span>No credit card required</span>
            <span>·</span>
            <span>Blockchain anchoring included</span>
            <span>·</span>
            <span>Your first passport live in minutes</span>
          </div>
          <button onClick={() => navigate('/get-started')} style={{ background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: 'pointer', color: '#071528', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 700, padding: '16px 32px', borderRadius: '100px' }}>Get Started Free →</button>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}