import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, ChevronDown, ChevronUp, Globe, Check, Shield } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faLinkedinIn, faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import { TShirt3D, Jeans3D } from './Clothing3D';
import { updatePageSEO } from '../utils/seo';
import { Icon } from '../utils/icons';
import { 
  APP_CONFIG, 
  NAVIGATION_LINKS, 
  TICKER_ITEMS, 
  FEATURES, 
  HOW_IT_WORKS_STEPS, 
  FAQS, 
  TRUSTED_BRANDS, 
  COMPLIANCE_BADGES, 
  TRUST_BADGES, 
  STATS, 
  PRODUCT_CATEGORIES 
} from '../constants';

export function HomePage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    updatePageSEO('home');
  }, []);

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#fafaf8', minHeight: '100vh' }}>

      {/* ── Urgency Banner ── */}
      <div style={{ background: '#0a1f3c', borderBottom: '1px solid rgba(26,200,176,0.2)', padding: '10px 0', textAlign: 'center' }}>
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
          🇪🇺 EU ESPR · Textile DPP mandatory from 2027 —
          <button onClick={() => navigate('/resources')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1ac8b0', fontWeight: 700, fontSize: '13px', marginLeft: '6px', textDecoration: 'underline' }}>
            Download Free Readiness Checklist →
          </button>
        </span>
      </div>

      {/* ── Nav ── */}
      <nav style={{ background: '#0a1f3c', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 1px 0 rgba(26,200,176,0.15)' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #1ac8b0 25%, #67e8f9 55%, #1ac8b0 75%, transparent)' }} />
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between" style={{ height: '100px', position: 'relative' }}>
          <img src={APP_CONFIG.logo} alt={APP_CONFIG.name} style={{ height: '80px', width: 'auto', display: 'block', objectFit: 'contain' }} />
          <div className="hidden md:flex items-center">
            {NAVIGATION_LINKS.map(item => (
              <button key={item.label} onClick={() => navigate(item.href)} style={{ padding: '8px 16px', color: 'rgba(255,255,255,0.55)', fontSize: '14px', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.15s', borderRadius: '8px' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >{item.label}</button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button onClick={() => navigate(APP_CONFIG.signinUrl)} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer' }}>Sign In</button>
            <button onClick={() => navigate(APP_CONFIG.demoUrl)}
              style={{ background: '#1ac8b0', color: '#0a1f3c', fontSize: '14px', fontWeight: 700, padding: '9px 22px', borderRadius: '100px', border: 'none', cursor: 'pointer', boxShadow: '0 0 20px rgba(26,200,176,0.35)', transition: 'all 0.2s' }}
              aria-label="Book a 30-minute Digital Product Passport demo"
            >Book a Demo</button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div style={{ background: 'linear-gradient(160deg, #071528 0%, #0d2a4a 55%, #0a2535 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-120px', right: '10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(26,200,176,0.09) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-60px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(103,232,249,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <section className="max-w-7xl mx-auto px-8 pt-20 pb-24" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '72px' }}>
            <div style={{ flex: 1 }}>
              {/* Eyebrow */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(26,200,176,0.1)', border: '1px solid rgba(26,200,176,0.2)', borderRadius: '100px', padding: '5px 14px', marginBottom: '28px' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1ac8b0', display: 'inline-block', animation: 'blink 2s ease-in-out infinite' }} />
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', fontFamily: 'JetBrains Mono, monospace' }}>BLOCKCHAIN-POWERED TRANSPARENCY</span>
              </div>

              {/* H1 */}
              <h1 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(34px, 4vw, 56px)', fontWeight: 900, color: '#fff', lineHeight: 1.12, letterSpacing: '-0.015em', marginBottom: '28px' }}>
                Every Fashion Product. One Verified Passport.{' '}
                <span style={{ color: '#1ac8b0', fontStyle: 'italic' }}>Prove it. On-chain.</span>
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '17px', lineHeight: 1.8, maxWidth: '500px', marginBottom: '36px' }}>
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
                      <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '13px', color: '#0a1f3c' }}>StableDPP</span>
                    </div>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#e8faf7', border: '1px solid #b3ede6', borderRadius: '100px', padding: '3px 10px', fontSize: '10px', fontWeight: 700, color: '#1ac8b0' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#1ac8b0', display: 'inline-block' }} /> Verified
                    </span>
                  </div>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '15px', color: '#0a1f3c', marginBottom: '2px' }}>Organic Cotton T-Shirt</p>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '14px' }}>by Jane Smith · T-Shirt DPP</p>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                    {['Fabric', 'Buttons', 'Collar', 'Threads'].map(t => (
                      <span key={t} style={{ background: '#e8faf7', border: '1px solid #b3ede6', borderRadius: '100px', padding: '2px 10px', fontSize: '11px', fontWeight: 600, color: '#1ac8b0' }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ paddingTop: '12px', borderTop: '1px solid #f0f4f8', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#94a3b8' }}>Blockchain Hash</div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#1ac8b0', fontWeight: 600 }}>0x3f8a…c291</div>
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
                <p style={{ fontFamily: 'Syne, sans-serif', fontSize: '32px', fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: '6px' }}>{s.value}</p>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Scrolling ticker ── */}
      <div style={{ background: '#071528', borderTop: '1px solid rgba(26,200,176,0.1)', borderBottom: '1px solid rgba(26,200,176,0.1)', padding: '13px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '48px', animation: 'ticker 28s linear infinite', whiteSpace: 'nowrap' }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
            <span key={i} style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', flexShrink: 0, fontFamily: 'JetBrains Mono, monospace' }}>
              <span style={{ color: '#1ac8b0', marginRight: '12px' }}>◆</span>{t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Compliance Trust Bar ── */}
      <div style={{ background: '#fff', borderBottom: '1px solid #ede8e3', padding: '18px 0' }}>
        <div className="max-w-7xl mx-auto px-8 flex items-center gap-0 overflow-x-auto">
          <p style={{ color: '#b0a89e', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap', marginRight: '32px', flexShrink: 0, fontFamily: 'JetBrains Mono, monospace' }}>COMPLIANT WITH</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {COMPLIANCE_BADGES.map((b, i) => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 24px', borderLeft: i > 0 ? '1px solid #ede8e3' : 'none' }}>
                <span style={{ color: '#3d5a6b', fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap' }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Trusted by ── */}
      <div style={{ background: '#fafaf8', borderBottom: '1px solid #ede8e3', padding: '24px 0' }}>
        <div className="max-w-7xl mx-auto px-8 flex items-center gap-40 flex-wrap">
          <p style={{ color: '#b0a89e', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0 }}>Trusted by</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {TRUSTED_BRANDS.map(b => (
              <div key={b} style={{ background: '#fff', border: '1px solid #ede8e3', borderRadius: '10px', padding: '9px 18px', color: '#7a7068', fontSize: '13px', fontWeight: 600 }}>{b}</div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why StableDPP ── */}
      <section style={{ background: '#fff', padding: '88px 0', borderBottom: '1px solid #ede8e3' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: '#1ac8b0', fontSize: '20px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px', fontFamily: 'JetBrains Mono, monospace' }}>WHY STABLEDPP</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800, color: '#0a1f3c', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              Why Fashion Brands Choose StableDPP for Digital Product Passports
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} style={{ background: '#fafaf8', borderRadius: '20px', padding: '28px', border: '1px solid #ede8e3', transition: 'all 0.25s' }}
                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = 'rgba(26,200,176,0.35)'; d.style.transform = 'translateY(-3px)'; d.style.boxShadow = '0 10px 30px rgba(10,31,60,0.07)'; }}
                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = '#ede8e3'; d.style.transform = 'none'; d.style.boxShadow = 'none'; }}
              >
                <Icon name={icon} className="w-7 h-7 text-slate-600" />
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '16px', color: '#0a1f3c', marginBottom: '10px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: '#7a8a98', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" style={{ background: '#f5f3f0', padding: '88px 0', borderBottom: '1px solid #ede8e3' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ color: '#1ac8b0', fontSize: '17px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px', fontFamily: 'JetBrains Mono, monospace' }}>SIMPLE PROCESS</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800, color: '#0a1f3c', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '14px' }}>
              How StableDPP Creates Your Digital<br />Product Passport in 3 Steps
            </h2>
            <p style={{ color: '#7a8a98', fontSize: '16px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 }}>We remove the blockchain complexity. You bring the product data — we turn it into a tamper‑proof passport your buyers and regulators can trust.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
            {HOW_IT_WORKS_STEPS.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '20px', padding: '32px', border: '1px solid #ede8e3', transition: 'all 0.25s', position: 'relative' }}
                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = 'translateY(-4px)'; d.style.boxShadow = '0 12px 40px rgba(10,31,60,0.08)'; }}
                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = 'none'; d.style.boxShadow = 'none'; }}
              >
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: 700, color: '#c0b8b0', letterSpacing: '0.1em', marginBottom: '16px' }}>STEP {s.num}</div>
                <Icon name={s.icon} className="w-8 h-8 text-slate-600 mb-4" />
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '17px', color: '#0a1f3c', marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: '#7a8a98', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Type Selector ── */}
      <section style={{ background: '#fff', padding: '88px 0', borderBottom: '1px solid #ede8e3' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <p style={{ color: '#1ac8b0', fontSize: '17px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px', fontFamily: 'JetBrains Mono, monospace' }}>GET STARTED</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800, color: '#0a1f3c', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '14px' }}>
              Select Your Product Type. Start Your Digital Product Passport.
            </h2>
            <p style={{ color: '#7a8a98', fontSize: '16px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75 }}>
              Choose your garment category to begin creating a blockchain-verified Digital Product Passport — EU ESPR 2024 compliant, GS1 Digital Link ready, and live in minutes.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
            {PRODUCT_CATEGORIES.map(({ type, title, desc, tags, cta }) => (
              <div key={title}
                onClick={() => type ? navigate(`/create/${type}`) : navigate(APP_CONFIG.demoUrl)}
                style={{ background: '#fafaf8', borderRadius: '24px', border: '1px solid #ede8e3', cursor: 'pointer', overflow: 'hidden', transition: 'all 0.3s' }}
                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = '#1ac8b0'; d.style.boxShadow = '0 12px 40px rgba(26,200,176,0.12)'; d.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = '#ede8e3'; d.style.boxShadow = 'none'; d.style.transform = 'none'; }}
              >
                {type === 'shirt' ? (
                  <div style={{ height: '160px', background: 'linear-gradient(135deg, #f0fdfb, #e8f8f5)', overflow: 'hidden' }}><TShirt3D /></div>
                ) : type === 'jeans' ? (
                  <div style={{ height: '160px', background: 'linear-gradient(135deg, #f0fdfb, #e8f8f5)', overflow: 'hidden' }}><Jeans3D /></div>
                ) : (
                  <div style={{ height: '160px', background: 'linear-gradient(135deg, #f5f3f0, #ede8e3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>✦</div>
                )}
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '19px', color: '#0a1f3c', marginBottom: '6px' }}>{title}</h3>
                  <p style={{ fontSize: '13px', color: '#7a8a98', lineHeight: 1.65, marginBottom: '14px' }}>{desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '18px' }}>
                    {tags.map(tag => (
                      <span key={tag} style={{ background: '#e8f8f5', border: '1px solid #b3ede6', borderRadius: '100px', padding: '2px 10px', fontSize: '11px', fontWeight: 600, color: '#1ac8b0' }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#0a1f3c', color: '#fff', fontWeight: 700, fontSize: '13px', padding: '10px 18px', borderRadius: '100px' }}>
                    {cta} <ArrowRight style={{ width: 13, height: 13 }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#fafaf8', padding: '88px 0', borderBottom: '1px solid #ede8e3' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <p style={{ color: '#1ac8b0', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px', fontFamily: 'JetBrains Mono, monospace' }}>FAQ</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800, color: '#0a1f3c', letterSpacing: '-0.025em', lineHeight: 1.15 }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {FAQS.map((f, i) => (
              <div key={i} style={{ borderRadius: '16px', border: `1px solid ${openFaq === i ? 'rgba(26,200,176,0.3)' : '#ede8e3'}`, overflow: 'hidden', background: '#fff', transition: 'border-color 0.2s' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px' }}>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '16px', color: '#0a1f3c' }}>{f.q}</span>
                  {openFaq === i ? <ChevronUp style={{ width: 18, height: 18, color: '#1ac8b0', flexShrink: 0 }} /> : <ChevronDown style={{ width: 18, height: 18, color: '#b0a89e', flexShrink: 0 }} />}
                </button>
                {openFaq === i && (
                  <div style={{ borderTop: '1px solid #f0ede8', borderLeft: '3px solid #1ac8b0', padding: '0 24px 22px 21px' }}>
                    <p style={{ fontSize: '15px', color: '#7a8a98', lineHeight: 1.8, marginTop: '16px' }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA Banner ── */}
      <section style={{ background: 'linear-gradient(135deg, #071528 0%, #0d2a4a 100%)', padding: '96px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(26,200,176,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-8" style={{ position: 'relative' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.015em', marginBottom: '14px', lineHeight: 1.2 }}>
            Ready to Issue Your First Digital Product Passport?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '17px', marginBottom: '40px', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto 40px' }}>
            Join the 30+ forward-thinking fashion brands building transparent, EU ESPR-compliant supply chains with StableDPP.
          </p>
          <button onClick={() => navigate(APP_CONFIG.signupUrl)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#1ac8b0', color: '#071528', fontWeight: 700, fontSize: '16px', padding: '16px 36px', borderRadius: '100px', border: 'none', cursor: 'pointer', boxShadow: '0 0 48px rgba(26,200,176,0.35)', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'none'; }}
          >
            Create Your First DPP <ArrowRight style={{ width: 18, height: 18 }} />
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#060d1a', padding: '60px 0 32px' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
            <div>
              <img src={APP_CONFIG.logo} alt={APP_CONFIG.name} style={{ height: '70px', width: 'auto', objectFit: 'contain', marginBottom: '16px', display: 'block' }} />
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px', lineHeight: 1.8, maxWidth: '280px', marginBottom: '8px' }}>Give every product a passport. Make every claim verifiable.</p>
              <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px', lineHeight: 1.7, maxWidth: '280px', marginBottom: '20px' }}>Digital Product Passports for Fashion · EU ESPR 2024 Compliant</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {TRUST_BADGES.map(b => (
                  <span key={b} style={{ background: 'rgba(26,200,176,0.08)', border: '1px solid rgba(26,200,176,0.15)', borderRadius: '6px', padding: '4px 10px', fontSize: '10px', fontWeight: 700, color: 'rgba(26,200,176,0.7)', letterSpacing: '0.07em' }}>{b}</span>
                ))}
              </div>
            </div>
            {[
              { title: 'Product', links: [{ label: 'How it Works', href: '/#how-it-works' }, { label: 'Solutions', href: '/solutions' }, { label: 'ESPR Checklist', href: '/resources' }] },
              { title: 'Company', links: [{ label: 'About Us', href: '/company' }, { label: 'Resources', href: '/resources' }, { label: 'Privacy Policy', href: '#' }, { label: 'Terms of Service', href: '#' }] },
              { 
                title: 'Follow Us', 
                social: true,
                socialLinks: [
                  { icon: faXTwitter, url: 'https://x.com/stabledpp', label: 'X' },
                  { icon: faInstagram, url: 'https://www.instagram.com/stabledpp/', label: 'Instagram' },
                  { icon: faLinkedinIn, url: 'https://www.linkedin.com/company/stable-dpp/', label: 'LinkedIn' },
                  { icon: faRedditAlien, url: 'https://www.reddit.com/user/stable-dpp/', label: 'Reddit' },
                ],
                links: [{ label: 'Book a Demo', href: '/book-a-demo' }, { label: 'hello@stabledpp.com', href: 'mailto:hello@stabledpp.com' }]
              },
            ].map(col => (
              <div key={col.title}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '18px' }}>{col.title}</p>
                
                {/* Social Links */}
                {col.social && col.socialLinks && (
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    {col.socialLinks.map(({ icon, url, label }) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          background: 'rgba(26,200,176,0.08)',
                          border: '1px solid rgba(26,200,176,0.15)',
                          color: '#1ac8b0',
                          transition: 'all 0.2s',
                          textDecoration: 'none'
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(26,200,176,0.15)';
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(26,200,176,0.3)';
                          (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(26,200,176,0.08)';
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(26,200,176,0.15)';
                          (e.currentTarget as HTMLAnchorElement).style.transform = 'none';
                        }}
                      >
                        <FontAwesomeIcon icon={icon} style={{ width: '16px', height: '16px' }} />
                      </a>
                    ))}
                  </div>
                )}
                
                {/* Regular Links */}
                {col.links && col.links.map(l => (
                  <p key={l.label} onClick={() => navigate(l.href)} style={{ color: 'rgba(255,255,255,0.28)', fontSize: '14px', marginBottom: '11px', cursor: 'pointer', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}
                  >{l.label}</p>
                ))}
              </div>
            ))
          }
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px' }}>© 2026 StableDPP · Digital Product Passports for Fashion · EU ESPR Compliant</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.2)' }}>
              <Globe style={{ width: 13, height: 13 }} />
              <span style={{ fontSize: '13px' }}>🌐 English</span>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
      `}</style>
    </div>
  );
}
