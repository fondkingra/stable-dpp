import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import { updatePageSEO } from '../utils/seo';
import { Icon } from '../utils/icons';

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
      <section style={{ padding: '80px 24px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '40px' }}>
          
          {/* For Fashion Brands */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px', alignItems: 'center', background: 'linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%)', padding: '48px', borderRadius: '32px', border: '1px solid #a7f3d0' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(26,200,176,0.1)', marginBottom: '24px' }}>
                <Icon name="building" className="w-10 h-10 text-teal-600" />
              </div>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '28px', fontWeight: 800, color: '#0f172a', marginBottom: '16px', lineHeight: 1.2 }}>
                For Fashion Brands
              </h2>
              <p style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '18px', fontWeight: 600, color: '#1ac8b0', marginBottom: '16px' }}>Turn Compliance Into a Competitive Advantage</p>
            </div>
            <div>
              <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                The EU ESPR 2024 mandate is not just a compliance obligation — it is an opportunity to prove what your brand stands for. StableDPP gives fashion brands the infrastructure to issue verified Digital Product Passports for every product.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon name="check" className="w-4 h-4 text-teal-600" />
                  <span style={{ color: '#475569', fontSize: '14px' }}>Full product DPP creation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon name="check" className="w-4 h-4 text-teal-600" />
                  <span style={{ color: '#475569', fontSize: '14px' }}>Component-level tracking</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon name="check" className="w-4 h-4 text-teal-600" />
                  <span style={{ color: '#475569', fontSize: '14px' }}>Consumer-facing QR codes</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon name="check" className="w-4 h-4 text-teal-600" />
                  <span style={{ color: '#475569', fontSize: '14px' }}>ESPR 2024 compliance</span>
                </div>
              </div>
            </div>
          </div>

          {/* For Textile Manufacturers */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px', alignItems: 'center', background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)', padding: '48px', borderRadius: '32px', border: '1px solid #bfdbfe' }}>
            <div>
              <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                Brands increasingly require verified sustainability data from every supplier in their chain. StableDPP lets textile manufacturers issue component DPPs for every material they produce — giving brand partners the verified data they need.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon name="check" className="w-4 h-4 text-blue-600" />
                  <span style={{ color: '#475569', fontSize: '14px' }}>Component DPP issuance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon name="check" className="w-4 h-4 text-blue-600" />
                  <span style={{ color: '#475569', fontSize: '14px' }}>Fibre origin tracking</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon name="check" className="w-4 h-4 text-blue-600" />
                  <span style={{ color: '#475569', fontSize: '14px' }}>Supplier verification</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon name="check" className="w-4 h-4 text-blue-600" />
                  <span style={{ color: '#475569', fontSize: '14px' }}>Multi-brand data sharing</span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(59,130,246,0.1)', marginBottom: '24px' }}>
                <Icon name="factory" className="w-10 h-10 text-blue-600" />
              </div>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '28px', fontWeight: 800, color: '#0f172a', marginBottom: '16px', lineHeight: 1.2 }}>
                For Manufacturers
              </h2>
              <p style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '18px', fontWeight: 600, color: '#3b82f6', marginBottom: '16px' }}>Become the Verified Partner Brands Want</p>
            </div>
          </div>

          {/* For Retailers */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px', alignItems: 'center', background: 'linear-gradient(135deg, #f5f3ff 0%, #ffffff 100%)', padding: '48px', borderRadius: '32px', border: '1px solid #d8b4fe' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(147,51,234,0.1)', marginBottom: '24px' }}>
                <Icon name="store" className="w-10 h-10 text-purple-600" />
              </div>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '28px', fontWeight: 800, color: '#0f172a', marginBottom: '16px', lineHeight: 1.2 }}>
                For Retailers
              </h2>
              <p style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '18px', fontWeight: 600, color: '#9333ea', marginBottom: '16px' }}>Verified Product Data at Every Point of Sale</p>
            </div>
            <div>
              <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                The EU Green Claims Directive requires retailers to substantiate every sustainability claim at the shelf. StableDPP gives retail partners access to verified DPP data from their entire brand and supplier network.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon name="check" className="w-4 h-4 text-purple-600" />
                  <span style={{ color: '#475569', fontSize: '14px' }}>DPP verification portal</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon name="check" className="w-4 h-4 text-purple-600" />
                  <span style={{ color: '#475569', fontSize: '14px' }}>Real-time supplier data</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon name="check" className="w-4 h-4 text-purple-600" />
                  <span style={{ color: '#475569', fontSize: '14px' }}>Green Claims compliance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon name="check" className="w-4 h-4 text-purple-600" />
                  <span style={{ color: '#475569', fontSize: '14px' }}>Multi-brand dashboards</span>
                </div>
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
            <button style={{ background: 'none', border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer', color: '#fff', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 500, padding: '13px 28px', borderRadius: '100px' }}>Talk to Our Team →</button>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}