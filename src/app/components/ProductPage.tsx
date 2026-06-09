import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import { updatePageSEO } from '../utils/seo';
import { Icon } from '../utils/icons';

export function ProductPage() {
  const navigate = useNavigate();

  useEffect(() => {
    updatePageSEO('product');
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8', fontFamily: 'var(--font-primary)' }}>
      <SharedNav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 60%, #0d2a4a 100%)', padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(26,200,176,0.12)', border: '1px solid rgba(26,200,176,0.3)', color: '#1ac8b0', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.14em', padding: '6px 14px', borderRadius: '100px', marginBottom: '24px' }}>
            THE PLATFORM
          </div>
          <h1 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '28px' }}>
            The Most Trusted Digital Product Passport Platform for Fashion Brands.
          </h1>
          <p style={{ color: '#a8bcc8', fontSize: '17px', lineHeight: 1.8, marginBottom: '36px' }}>
            StableDPP gives fashion brands, textile manufacturers, and retailers a single platform to create, manage, and publish blockchain-verified Digital Product Passports — fully compliant with EU ESPR 2024 and aligned to every global sustainability standard that matters.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/get-started')} style={{ background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: 'pointer', color: '#071528', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '100px' }}>Start for Free →</button>
            <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer', color: '#fff', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 500, padding: '13px 28px', borderRadius: '100px' }}>See How It Works</button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ color: '#1ac8b0', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.14em', marginBottom: '12px' }}>CORE FEATURES</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, color: '#0a1f3c', marginBottom: '20px' }}>Everything You Need to Issue, Manage, and Prove Your Digital Product Passports</h2>
        </div>
        
        <div style={{ display: 'grid', gap: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '32px' }}>
            <div style={{ background: 'linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%)', padding: '40px', borderRadius: '24px', border: '1px solid #a7f3d0', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '20px', right: '20px', width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(26,200,176,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="link" className="w-6 h-6 text-teal-600" />
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Blockchain Anchoring — Tamper-Proof by Design</h3>
              <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.7 }}>
                Every Digital Product Passport you create is anchored to an immutable record on Ethereum Mainnet. Your sustainability claims are permanently timestamped, independently verifiable, and impossible to falsify.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)', padding: '40px', borderRadius: '24px', border: '1px solid #bbf7d0', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '20px', right: '20px', width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="leaf" className="w-6 h-6 text-green-600" />
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Component-Level Tracking — Every Material, Accounted For</h3>
              <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.7 }}>
                Go beyond product-level data. StableDPP lets you attach individual component DPPs to every material in your product — fabric origin, button sourcing, collar certification, thread dye compliance.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '32px' }}>
            <div style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)', padding: '40px', borderRadius: '24px', border: '1px solid #bfdbfe', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '20px', right: '20px', width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="clipboard" className="w-6 h-6 text-blue-600" />
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>ESPR & Global Compliance Engine — Built for Every Regulation</h3>
              <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.7 }}>
                Purpose-built for EU ESPR 2024. Our compliance engine auto-validates your DPP data against all ESPR data fields, flags missing information, and ensures GS1 Digital Link compliance.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ffffff 100%)', padding: '40px', borderRadius: '24px', border: '1px solid #d8b4fe', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '20px', right: '20px', width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(147,51,234,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="mobile" className="w-6 h-6 text-purple-600" />
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Instant QR Code Generation — GS1 Digital Link Ready</h3>
              <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.7 }}>
                When your Digital Product Passport is ready, StableDPP generates a GS1 Digital Link-compliant QR code instantly — ready to embed on garment labels, hang tags, or packaging.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '32px' }}>
            <div style={{ background: 'linear-gradient(135deg, #fefce8 0%, #ffffff 100%)', padding: '40px', borderRadius: '24px', border: '1px solid #fde68a', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '20px', right: '20px', width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="chart-line" className="w-6 h-6 text-amber-600" />
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Sustainability Data Dashboard — Track Everything, Report Anything</h3>
              <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.7 }}>
                Monitor sustainability performance across your entire product catalogue. Track CO₂ equivalent, water consumption, recycled-material percentages, and export compliance reports.
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #ffffff 100%)', padding: '40px', borderRadius: '24px', border: '1px solid #fbcfe8', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '20px', right: '20px', width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(236,72,153,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="lock" className="w-6 h-6 text-pink-600" />
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>GDPR-Compliant Data Infrastructure — Your Data, Your Control</h3>
              <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.7 }}>
                Your supply chain data is commercially sensitive. StableDPP is fully GDPR compliant — all data encrypted at rest and in transit, with EU-regulated cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0a1f3c', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 900, color: '#fff', lineHeight: 1.35, marginBottom: '16px' }}>
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