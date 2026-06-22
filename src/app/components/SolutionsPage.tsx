import { useNavigate } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import { pageH1OnDark, pageH2OnLight, pageH2OnDark, cardH3, heroEyebrow, heroLead } from '../styles/typography';
export function SolutionsPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8', fontFamily: 'var(--font-primary)' }}>
      <SharedNav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 60%, #0d2a4a 100%)', padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={heroEyebrow}>
            SOLUTIONS
          </div>
          <h1 style={{ ...pageH1OnDark, marginBottom: '28px' }}>
            One DPP Platform. Every Fashion Supply Chain Challenge Solved.
          </h1>
          <p style={heroLead}>
            Whether you are a global fashion house, a sustainable emerging brand, or a multi-tier textile manufacturer — StableDPP has a Digital Product Passport solution architected for your supply chain complexity and EU ESPR 2024 compliance requirements.
          </p>
        </div>
      </section>

      {/* Solutions Cards */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '28px' }}>

          {/* For Fashion Brands */}
          <div style={{ background: '#fff', borderRadius: '24px', border: '1px solid #a7f3d0', overflow: 'hidden', boxShadow: '0 4px 24px rgba(26,200,176,0.08)' }}>
            <div style={{ background: 'linear-gradient(135deg, #e6faf7 0%, #f0fdfa 100%)', padding: '32px 40px 0', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: '#1ac8b0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>🏷️</div>
              <div>
                <span style={{ background: '#1ac8b0', color: '#071528', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', padding: '3px 10px', borderRadius: '100px' }}>FASHION BRANDS</span>
                <h2 style={{ ...pageH2OnLight, fontSize: 'clamp(20px, 2.5vw, 28px)', marginTop: '8px', marginBottom: '4px' }}>Turn Compliance Into a Competitive Advantage</h2>
              </div>
            </div>
            <div style={{ padding: '28px 40px 36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.7 }}>The EU ESPR 2024 mandate is not just a compliance obligation — it is an opportunity to prove what your brand stands for. StableDPP gives fashion brands the infrastructure to issue verified Digital Product Passports for every product.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {['Full product DPP creation', 'Component-level tracking', 'Consumer-facing QR codes', 'ESPR 2024 compliance'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#e6faf7', borderRadius: '10px', padding: '10px 14px' }}>
                    <span style={{ color: '#1ac8b0', fontWeight: 700, fontSize: '14px' }}>✓</span>
                    <span style={{ color: '#0f172a', fontSize: '13px', fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* For Textile Manufacturers */}
          <div style={{ background: '#fff', borderRadius: '24px', border: '1px solid #bfdbfe', overflow: 'hidden', boxShadow: '0 4px 24px rgba(59,130,246,0.07)' }}>
            <div style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f8faff 100%)', padding: '32px 40px 0', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>🏭</div>
              <div>
                <span style={{ background: '#3b82f6', color: '#fff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', padding: '3px 10px', borderRadius: '100px' }}>MANUFACTURERS</span>
                <h2 style={{ ...pageH2OnLight, fontSize: 'clamp(20px, 2.5vw, 28px)', marginTop: '8px', marginBottom: '4px' }}>Become the Verified Partner Brands Want</h2>
              </div>
            </div>
            <div style={{ padding: '28px 40px 36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.7 }}>Brands increasingly require verified sustainability data from every supplier in their chain. StableDPP lets textile manufacturers issue component DPPs for every material they produce — giving brand partners the verified data they need.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {['Component DPP issuance', 'Fibre origin tracking', 'Supplier verification', 'Multi-brand data sharing'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#eff6ff', borderRadius: '10px', padding: '10px 14px' }}>
                    <span style={{ color: '#3b82f6', fontWeight: 700, fontSize: '14px' }}>✓</span>
                    <span style={{ color: '#0f172a', fontSize: '13px', fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* For Retailers */}
          <div style={{ background: '#fff', borderRadius: '24px', border: '1px solid #d8b4fe', overflow: 'hidden', boxShadow: '0 4px 24px rgba(147,51,234,0.07)' }}>
            <div style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #faf8ff 100%)', padding: '32px 40px 0', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: '#9333ea', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>🛍️</div>
              <div>
                <span style={{ background: '#9333ea', color: '#fff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', padding: '3px 10px', borderRadius: '100px' }}>RETAILERS</span>
                <h2 style={{ ...pageH2OnLight, fontSize: 'clamp(20px, 2.5vw, 28px)', marginTop: '8px', marginBottom: '4px' }}>Verified Product Data at Every Point of Sale</h2>
              </div>
            </div>
            <div style={{ padding: '28px 40px 36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.7 }}>The EU Green Claims Directive requires retailers to substantiate every sustainability claim at the shelf. StableDPP gives retail partners access to verified DPP data from their entire brand and supplier network.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {['DPP verification portal', 'Real-time supplier data', 'Green Claims compliance', 'Multi-brand dashboards'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f5f3ff', borderRadius: '10px', padding: '10px 14px' }}>
                    <span style={{ color: '#9333ea', fontWeight: 700, fontSize: '14px' }}>✓</span>
                    <span style={{ color: '#0f172a', fontSize: '13px', fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Focus */}
      <section style={{ background: '#0a1f3c', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: '#1ac8b0', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.14em', marginBottom: '12px' }}>COMPLIANCE COVERAGE</div>
            <h2 style={{ ...pageH2OnDark, textAlign: 'center', marginBottom: '16px' }}>Stay Ahead of Every Regulation</h2>
            <p style={{ color: '#7a8a98', fontSize: '16px', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              StableDPP's compliance engine is continuously updated as requirements evolve — your passports stay compliant without any manual monitoring.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { emoji: '🇪🇺', title: 'EU ESPR 2024', color: '#1ac8b0', border: 'rgba(26,200,176,0.25)', bg: 'rgba(26,200,176,0.06)', desc: 'All DPP data fields fully mapped and auto-validated. Compliance gaps flagged before publication.' },
              { emoji: '🌿', title: 'EU Green Claims Directive', color: '#22c55e', border: 'rgba(34,197,94,0.25)', bg: 'rgba(34,197,94,0.06)', desc: 'Every claim is verified, third-party-anchored, and defensible against regulatory challenge.' },
              { emoji: '📡', title: 'GS1 Digital Link', color: '#38bdf8', border: 'rgba(56,189,248,0.25)', bg: 'rgba(56,189,248,0.06)', desc: 'Globally interoperable QR infrastructure — your passport works everywhere your products are sold.' },
              { emoji: '🌱', title: 'ISO 14001', color: '#a78bfa', border: 'rgba(167,139,250,0.25)', bg: 'rgba(167,139,250,0.06)', desc: 'Environmental management system data aligned and reportable in one click.' },
              { emoji: '🔒', title: 'GDPR', color: '#fb923c', border: 'rgba(251,146,60,0.25)', bg: 'rgba(251,146,60,0.06)', desc: 'EU data residency, AES-256 encryption, role-based access controls, and data minimisation by design.' },
            ].map(({ emoji, title, color, border, bg, desc }) => (
              <div key={title} style={{ background: bg, border: `1px solid ${border}`, borderRadius: '20px', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>{emoji}</div>
                  <h3 style={{ ...cardH3, fontSize: '16px', color: '#fff', lineHeight: 1.2 }}>{title}</h3>
                </div>
                <p style={{ color: '#7a8a98', fontSize: '14px', lineHeight: 1.7 }}>{desc}</p>
                <div style={{ marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: `${color}15`, border: `1px solid ${color}30`, borderRadius: '100px', padding: '4px 12px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, display: 'inline-block' }} />
                  <span style={{ color, fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em' }}>ACTIVE COVERAGE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0a1f3c', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ ...pageH2OnDark, textAlign: 'center', marginBottom: '14px' }}>
            Not sure which DPP solution is right for your supply chain?
          </h2>
          <p style={{ color: '#7a8a98', fontSize: '16px', marginBottom: '28px' }}>Our team works with fashion brands of every size — from emerging labels to global manufacturers. Book a 30-minute call and we will build a bespoke DPP roadmap for your products and markets.</p>
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