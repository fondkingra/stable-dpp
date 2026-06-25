import { useNavigate } from 'react-router';
import { ArrowRight, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { TShirt3D, Jeans3D } from './Clothing3D';
import { SharedNav, SharedFooter } from './SharedNav';
import { COMPLIANCE_BADGES } from '../constants';

export function CreateDPPPage() {
  const navigate = useNavigate();

  const products = [
    {
      type: 'shirt',
      title: 'T-Shirt',
      desc: 'Full component tracking — fabric, collar, buttons, threads, and labels with end-to-end supply chain visibility.',
      tags: ['Fabric', 'Buttons', 'Collar', 'Threads', 'Labels'],
      Model: TShirt3D,
      gradient: 'linear-gradient(135deg, #f0fdf9 0%, #ecfdf5 50%, #d1fae5 100%)',
      accent: '#10b981',
    },
    {
      type: 'jeans',
      title: 'Jeans',
      desc: 'Complete denim provenance — cotton sourcing, dye processes, hardware, wash compliance, and material traceability.',
      tags: ['Zipper', 'Rivets', 'Denim', 'Pockets', 'Waistband'],
      Model: Jeans3D,
      gradient: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
      accent: '#0ea5e9',
    },
  ];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fafaf8', minHeight: '100vh' }}>
      <SharedNav />

      {/* Hero */}
      <div style={{ background: 'linear-gradient(160deg, #071528 0%, #0d2a4a 55%, #0a2535 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-150px', right: '5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(26,200,176,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(103,232,249,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 24px 56px', textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(26,200,176,0.1)', border: '1px solid rgba(26,200,176,0.2)', borderRadius: '100px', padding: '6px 16px', marginBottom: '24px' }}>
            <Sparkles style={{ width: 13, height: 13, color: '#1ac8b0' }} />
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', fontFamily: 'JetBrains Mono, monospace' }}>CREATE DIGITAL PRODUCT PASSPORT</span>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 800, color: '#fff', lineHeight: 1.12, letterSpacing: '-0.025em', marginBottom: '16px' }}>
            Choose Your Product
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '17px', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Select a product category below to start building your blockchain-verified, EU ESPR-compliant passport in minutes.
          </p>

          {/* Steps indicator */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', marginTop: '40px' }}>
            {['Select Product', 'Fill Details', 'Get Passport'].map((step, i) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: i === 0 ? '#1ac8b0' : 'rgba(255,255,255,0.08)',
                    border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '12px', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace',
                    color: i === 0 ? '#071528' : 'rgba(255,255,255,0.4)',
                  }}>
                    {i === 0 ? <CheckCircle2 style={{ width: 14, height: 14 }} /> : `0${i + 1}`}
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: i === 0 ? '#1ac8b0' : 'rgba(255,255,255,0.35)' }}>{step}</span>
                </div>
                {i < 2 && <div style={{ width: '48px', height: '1px', background: 'rgba(255,255,255,0.1)', margin: '0 12px' }} />}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Compliance bar */}
      <section style={{ background: '#fff', padding: '16px 24px', borderBottom: '1px solid #ede8e3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '8px 28px' }}>
          <span style={{ color: '#5a6a7a', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.14em', fontWeight: 600 }}>COMPLIANT WITH</span>
          {COMPLIANCE_BADGES.map(b => (
            <span key={b} style={{ color: '#1ac8b0', fontSize: '13px', fontWeight: 600 }}>{b}</span>
          ))}
        </div>
      </section>

      {/* Product cards section */}
      <section style={{ padding: '72px 24px 96px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-eyebrow" style={{ color: '#1ac8b0', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.14em', marginBottom: '12px', fontWeight: 600 }}>APPARELS</div>
            <h2 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#0a1f3c', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
              Start with a Product Type
            </h2>
          </div>

          {/* Cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {products.map(({ type, title, desc, tags, Model, gradient, accent }) => (
              <div
                key={type}
                onClick={() => navigate(`/create/${type}`)}
                className="product-card"
                style={{
                  background: '#fff',
                  borderRadius: '24px',
                  border: '1px solid #e8eeec',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(-6px)';
                  el.style.boxShadow = '0 24px 64px rgba(10,31,60,0.1), 0 8px 24px rgba(26,200,176,0.08)';
                  el.style.borderColor = 'rgba(26,200,176,0.35)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'none';
                  el.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
                  el.style.borderColor = '#e8eeec';
                }}
              >
                {/* 3D Preview area */}
                <div style={{ height: '240px', background: gradient, position: 'relative', borderBottom: '1px solid #f0f4f2' }}>
                  <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', borderRadius: '100px', padding: '5px 12px', border: '1px solid rgba(0,0,0,0.06)' }}>
                    <Shield style={{ width: 12, height: 12, color: accent }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#0a1f3c', letterSpacing: '0.03em' }}>BLOCKCHAIN READY</span>
                  </div>
                  <Model />
                </div>

                {/* Card body */}
                <div style={{ padding: '28px' }}>
                  <h3 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: '22px', fontWeight: 700, color: '#0a1f3c', marginBottom: '8px' }}>
                    {title}
                  </h3>
                  <p style={{ color: '#5a6a7a', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>{desc}</p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                    {tags.map(tag => (
                      <span key={tag} style={{
                        background: '#f0fdf9',
                        border: '1px solid #d1fae5',
                        borderRadius: '100px',
                        padding: '4px 12px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#0d9488',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '14px 20px', borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(26,200,176,0.06), rgba(26,200,176,0.02))',
                    border: '1px solid rgba(26,200,176,0.15)',
                  }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#0a1f3c', fontFamily: "'Space Grotesk', sans-serif" }}>Create {title} Passport</span>
                    <div style={{
                      width: 32, height: 32, borderRadius: '50%',
                      background: '#1ac8b0', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <ArrowRight style={{ width: 16, height: 16, color: '#fff' }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming soon hint */}
          <div style={{ textAlign: 'center', marginTop: '48px', padding: '24px', borderRadius: '16px', border: '1px dashed #d4dcd9', background: 'rgba(255,255,255,0.6)' }}>
            <p style={{ color: '#5a6a7a', fontSize: '14px', margin: 0 }}>
              <span style={{ fontWeight: 700, color: '#0a1f3c' }}>More categories coming soon</span> — Jackets, Footwear, Accessories, and custom product types.
            </p>
          </div>
        </div>
      </section>

      <SharedFooter />

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </div>
  );
}
