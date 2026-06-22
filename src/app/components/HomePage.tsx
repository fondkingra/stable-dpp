import { useNavigate } from 'react-router';
import { ArrowRight, Check, Shield } from 'lucide-react';
import { SharedNav, SharedFooter } from './SharedNav';
import { Icon } from '../utils/icons';
import { APP_CONFIG, STATS } from '../constants';
import { pageH1OnDark, pageH2OnLight, pageH2OnDark, cardH3, cardBody, heroLead, heroSubtitle, passportCardBrand, passportCardTitle, passportCardMeta, passportCardTag, passportCardBadge, passportCardMonoMuted, passportCardMonoAccent } from '../styles/typography';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: 'var(--font-primary)', background: '#fafaf8', minHeight: '100vh' }}>

      <SharedNav />

      {/* ── Hero ── */}
      <div style={{ background: 'linear-gradient(160deg, #071528 0%, #0d2a4a 55%, #0a2535 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-120px', right: '10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(26,200,176,0.09) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-60px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(103,232,249,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 96px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '72px' }}>
            <div style={{ flex: 1 }}>
              {/* Eyebrow */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(26,200,176,0.1)', border: '1px solid rgba(26,200,176,0.2)', borderRadius: '100px', padding: '5px 14px', marginBottom: '28px' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1ac8b0', display: 'inline-block', animation: 'blink 2s ease-in-out infinite' }} />
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', fontFamily: 'JetBrains Mono, monospace' }}>BLOCKCHAIN-POWERED TRANSPARENCY</span>
              </div>

              {/* H1 */}
              <h1 style={{ ...pageH1OnDark, marginBottom: '12px' }}>
                Every Fashion Product. One Verified Passport.
              </h1>
              <p style={{ ...heroSubtitle, marginBottom: '28px' }}>
                Prove it. On-chain.
              </p>

              <p style={{ ...heroLead, color: 'rgba(255,255,255,0.65)', maxWidth: '500px', marginBottom: '36px' }}>
                StableDPP gives every fashion brand a blockchain-verified Digital Product Passport — the EU ESPR 2024 compliant record that proves fibre origin, material sustainability, certifications, and supply chain transparency. One QR scan. Every claim verified. Every stakeholder convinced.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
                <button onClick={() => navigate(APP_CONFIG.signupUrl)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1ac8b0', color: '#071528', fontWeight: 700, fontSize: '15px', padding: '14px 28px', borderRadius: '100px', border: 'none', cursor: 'pointer', boxShadow: '0 6px 28px rgba(26,200,176,0.4)', transition: 'all 0.2s' }}
                  aria-label="Create your free Digital Product Passport account"
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'none'; }}
                >
                  Get Started Free <ArrowRight style={{ width: 16, height: 16 }} />
                </button>
                <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontSize: '15px', padding: '14px 26px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.12)', cursor: 'pointer' }}
                  aria-label="See how StableDPP Digital Product Passports work"
                >
                  See How It Works
                </button>
              </div>

              {/* Trust signals */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['◆  EU ESPR 2024 Compliant', '◆  Blockchain Verified', '◆  GS1 Digital Link aligned', '◆  Your first DPP live in minutes'].map(b => (
                  <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '100px', padding: '5px 13px', color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace' }}>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero passport card */}
            <div className="hidden lg:block shrink-0" style={{ width: '290px', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '-40px', background: 'radial-gradient(circle, rgba(26,200,176,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
              <div style={{ animation: 'float 4s ease-in-out infinite', position: 'relative' }}>
                <div style={{ background: '#fff', borderRadius: '24px', padding: '24px', boxShadow: '0 32px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(26,200,176,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                      <div style={{ width: 26, height: 26, borderRadius: '8px', background: '#0a1f3c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Shield style={{ width: 13, height: 13, color: '#1ac8b0' }} />
                      </div>
                      <span style={passportCardBrand}>StableDPP</span>
                    </div>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#e8faf7', border: '1px solid #b3ede6', borderRadius: '100px', padding: '3px 10px', ...passportCardBadge }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#1ac8b0', display: 'inline-block' }} /> Verified
                    </span>
                  </div>
                  <p style={passportCardTitle}>Organic Cotton T-Shirt</p>
                  <p style={passportCardMeta}>by Jane Smith · T-Shirt DPP</p>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                    {['Fabric', 'Buttons', 'Collar', 'Threads'].map(t => (
                      <span key={t} style={{ background: '#e8faf7', border: '1px solid #b3ede6', borderRadius: '100px', padding: '2px 10px', ...passportCardTag }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ paddingTop: '12px', borderTop: '1px solid #f0f4f8', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={passportCardMonoMuted}>Blockchain Hash</div>
                    <div style={passportCardMonoAccent}>0x3f8a…c291</div>
                    <div style={{ marginLeft: 'auto', width: 20, height: 20, borderRadius: '50%', background: '#1ac8b0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Check style={{ width: 10, height: 10, color: '#fff' }} />
                    </div>
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: '-10px', left: '14px', right: '-10px', height: '100%', background: 'rgba(26,200,176,0.06)', borderRadius: '24px', zIndex: -1, border: '1px solid rgba(26,200,176,0.1)' }} />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '56px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{ textAlign: 'center', padding: '0 24px', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: '6px', letterSpacing: '-0.02em' }}>{s.value}</p>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Compliance Trust Bar */}
      <section style={{ background: '#fff', padding: '20px 24px', borderTop: '1px solid #ede8e3', borderBottom: '1px solid #ede8e3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '8px 32px' }}>
          <span style={{ color: '#5a6a7a', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.14em', fontWeight: 600 }}>COMPLIANT WITH</span>
          {['EU ESPR 2024', 'Blockchain Verified', 'GS1 Standards', 'ISO 14001', 'GDPR Compliant', 'GS1 Digital Link'].map(b => (
            <span key={b} style={{ color: '#1ac8b0', fontSize: '13px', fontWeight: 600 }}>●  {b}</span>
          ))}
        </div>
      </section>

      {/* Why StableDPP */}
      <section style={{ padding: '80px 24px', background: '#fafaf8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-eyebrow">WHY STABLEDPP</div>
            <h2 style={{ ...pageH2OnLight, textAlign: 'center' }}>Built for the Future of Fashion — and the Regulations Already Here</h2>
          </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          <div style={{ background: 'linear-gradient(135deg, #f8fdfc 0%, #ffffff 100%)', padding: '28px', borderRadius: '20px', border: '1px solid #e0f2f1', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(26,200,176,0.08)' }} />
            <Icon name="shield-check" className="w-8 h-8 text-teal-600 mb-4" />
            <h3 style={cardH3}>Blockchain Verified</h3>
            <p style={cardBody}>Every passport you issue is locked to the blockchain — timestamped the moment it is created and impossible to alter after the fact.</p>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #fefdf8 0%, #ffffff 100%)', padding: '28px', borderRadius: '20px', border: '1px solid #fef3cd', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(34,197,94,0.08)' }} />
            <Icon name="leaf" className="w-8 h-8 text-green-600 mb-4" />
            <h3 style={cardH3}>Sustainability Proof</h3>
            <p style={cardBody}>Quantify, disclose, and prove your environmental impact across your entire supply chain. Every metric verified on-chain.</p>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)', padding: '28px', borderRadius: '20px', border: '1px solid #e2e8f0', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(59,130,246,0.08)' }} />
            <Icon name="lock" className="w-8 h-8 text-blue-600 mb-4" />
            <h3 style={cardH3}>ESPR Compliant</h3>
            <p style={cardBody}>Purpose-built for EU regulations. Auto-validates data fields and flags missing information before publication.</p>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #fdf4ff 0%, #ffffff 100%)', padding: '28px', borderRadius: '20px', border: '1px solid #f3e8ff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(147,51,234,0.08)' }} />
            <Icon name="globe" className="w-8 h-8 text-purple-600 mb-4" />
            <h3 style={cardH3}>Global Standards</h3>
            <p style={cardBody}>Fully aligned with GS1 Digital Link, ISO 14001, and EU Textile Strategy. Works everywhere buyers expect it to.</p>
          </div>
        </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-eyebrow">SIMPLE PROCESS</div>
            <h2 style={{ ...pageH2OnLight, textAlign: 'center' }}>How StableDPP Creates Your Digital Product Passport in 3 Steps</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: '24px', fontWeight: 700, margin: '0 auto 24px' }}>01</div>
              <h3 style={{ ...cardH3, textAlign: 'center', marginBottom: '16px' }}>Select Your Product</h3>
              <p style={{ color: '#5a6a7a', fontSize: '15px', lineHeight: 1.6 }}>Choose your garment type — T-shirt, jeans, jacket, footwear — and select the component DPPs that make up your product. Each component (fabric, dye, hardware, lining) gets its own traceable record.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: '24px', fontWeight: 700, margin: '0 auto 24px' }}>02</div>
              <h3 style={{ ...cardH3, textAlign: 'center', marginBottom: '16px' }}>Fill Your Sustainability Data</h3>
              <p style={{ color: '#5a6a7a', fontSize: '15px', lineHeight: 1.6 }}>Upload a product image and enter your material composition, certifications (GOTS, Oeko-Tex, GRS), sustainability metrics, and supply chain provenance. Our compliance engine guides every field.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: '24px', fontWeight: 700, margin: '0 auto 24px' }}>03</div>
              <h3 style={{ ...cardH3, textAlign: 'center', marginBottom: '16px' }}>Get Your Blockchain-Verified Passport</h3>
              <p style={{ color: '#5a6a7a', fontSize: '15px', lineHeight: 1.6 }}>Your EU ESPR-compliant Digital Product Passport is generated instantly — anchored on-chain with a tamper-proof blockchain hash and a GS1 Digital Link-ready QR code. Done in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Banner */}
      <section style={{ background: '#0a1f3c', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ ...pageH2OnDark, textAlign: 'center', marginBottom: '16px' }}>Ready to Issue Your First Digital Product Passport?</h2>
          <p style={{ color: '#a8bcc8', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>Join the 30+ forward-thinking fashion brands building transparent, EU ESPR-compliant supply chains with StableDPP.</p>
          <button onClick={() => navigate('/get-started')} style={{ background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', color: '#071528', border: 'none', padding: '16px 32px', borderRadius: '100px', fontFamily: 'var(--font-primary)', fontSize: '16px', fontWeight: 700, cursor: 'pointer' }}>Create Your First DPP →</button>
        </div>
      </section>


      <SharedFooter />

      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </div>
  );
}