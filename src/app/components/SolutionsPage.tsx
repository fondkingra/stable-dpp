import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import { updatePageSEO } from '../utils/seo';


export function SolutionsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    updatePageSEO('solutions');
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8', fontFamily: 'var(--font-primary)' }}>
      <SharedNav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 60%, #0d2a4a 100%)', padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(26,200,176,0.12)', border: '1px solid rgba(26,200,176,0.3)', color: '#1ac8b0', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.14em', padding: '6px 14px', borderRadius: '100px', marginBottom: '24px' }}>
            SOLUTIONS
          </div>
          <h1 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '28px' }}>
            One DPP Platform. Every Fashion Supply Chain Challenge Solved.
          </h1>
          <p style={{ color: '#a8bcc8', fontSize: '17px', lineHeight: 1.8, marginBottom: '20px' }}>
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
                <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 800, color: '#0f172a', marginTop: '8px', marginBottom: '4px' }}>Turn Compliance Into a Competitive Advantage</h2>
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
                <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 800, color: '#0f172a', marginTop: '8px', marginBottom: '4px' }}>Become the Verified Partner Brands Want</h2>
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
                <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 800, color: '#0f172a', marginTop: '8px', marginBottom: '4px' }}>Verified Product Data at Every Point of Sale</h2>
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
      <section style={{ background: '#fff', padding: '80px 24px', borderTop: '1px solid #ede8e3' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0a1f3c', marginBottom: '16px' }}>Stay Ahead of Every Regulation — StableDPP Monitors So You Don't Have To</h2>
            <p style={{ color: '#5a6a7a', fontSize: '16px', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
              Regulations governing fashion sustainability are accelerating. StableDPP's compliance engine is continuously updated as requirements evolve — so your Digital Product Passports stay compliant without any manual monitoring on your side.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div style={{ background: '#fafaf8', padding: '32px', borderRadius: '16px', border: '1px solid #ede8e3' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: '#0a1f3c', marginBottom: '12px' }}>EU ESPR 2024</h3>
              <p style={{ color: '#5a6a7a', fontSize: '14px', lineHeight: 1.6 }}>All DPP data fields fully mapped and auto-validated. Compliance gaps flagged before publication.</p>
            </div>
            
            <div style={{ background: '#fafaf8', padding: '32px', borderRadius: '16px', border: '1px solid #ede8e3' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: '#0a1f3c', marginBottom: '12px' }}>EU Green Claims Directive</h3>
              <p style={{ color: '#5a6a7a', fontSize: '14px', lineHeight: 1.6 }}>Every claim in your passport is verified, third-party-anchored, and defensible against regulatory challenge.</p>
            </div>
            
            <div style={{ background: '#fafaf8', padding: '32px', borderRadius: '16px', border: '1px solid #ede8e3' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: '#0a1f3c', marginBottom: '12px' }}>GS1 Digital Link</h3>
              <p style={{ color: '#5a6a7a', fontSize: '14px', lineHeight: 1.6 }}>Globally interoperable QR infrastructure — your passport works everywhere your products are sold.</p>
            </div>
            
            <div style={{ background: '#fafaf8', padding: '32px', borderRadius: '16px', border: '1px solid #ede8e3' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: '#0a1f3c', marginBottom: '12px' }}>ISO 14001</h3>
              <p style={{ color: '#5a6a7a', fontSize: '14px', lineHeight: 1.6 }}>Environmental management system data aligned and reportable in one click.</p>
            </div>
            
            <div style={{ background: '#fafaf8', padding: '32px', borderRadius: '16px', border: '1px solid #ede8e3' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: '#0a1f3c', marginBottom: '12px' }}>GDPR</h3>
              <p style={{ color: '#5a6a7a', fontSize: '14px', lineHeight: 1.6 }}>EU data residency, AES-256 encryption, role-based access controls, and data minimisation by design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0a1f3c', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 900, color: '#fff', lineHeight: 1.35, marginBottom: '14px' }}>
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