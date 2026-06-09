import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import { updatePageSEO } from '../utils/seo';
import { Icon } from '../utils/icons';

const values = [
  {
    title: 'Verifiability First',
    body: 'Sustainability claims without verifiable proof are marketing, not progress. Every StableDPP passport is blockchain-anchored — independently verifiable by any buyer, regulator, or consumer, anywhere in the world, at any time.',
    icon: 'link' as const,
  },
  {
    title: 'Regulation as an Opportunity',
    body: 'EU ESPR 2024 and the Green Claims Directive are not burdens — they are an opportunity to separate genuine sustainability leaders from greenwashers. We track every regulatory development so you can turn compliance into competitive advantage.',
    icon: 'scale' as const,
  },
  {
    title: 'Supply Chain Equity',
    body: 'Sustainability transparency should not be exclusive to brands with enterprise budgets. StableDPP is built to be accessible to every player in the fashion supply chain — large manufacturers, emerging labels, single-product SMEs, and everything in between.',
    icon: 'globe' as const,
  },
];

const team = [
  {
    role: 'CO-FOUNDER',
    name: 'Priya Hebbal',
    bio: 'Co-founder of StableDPP, focused on the trust layer for India\'s exports. Priya is building the verifiable proof layer that every producer, consumer and other stakeholders in the circular economy can trust on — enabling each sustainability claim to be verified, never just believed, giving brands, buyers and recyclers a record they can rely on.',
    initials: 'PH',
    image: './IMG2.jpg',
  },
  {
    role: 'CO-FOUNDER',
    name: 'Sudhanva Bhandolkar',
    bio: 'Co-founder of StableDPP, building the blockchain infrastructure behind every passport. Sudhanva has pioneered Trust as Infrastructure (TAS), a blockchain-based verification layer that enables one-scan verification of product data provenance through permanently recorded and tamper-resistant audit trails.',
    initials: 'SB',
    image: './IMG1.jpg',
    
  },
];

export function CompanyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    updatePageSEO('company');
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8', fontFamily: 'Inter, sans-serif' }}>
      <SharedNav />

      {/* Mission */}
      <section style={{ background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 60%, #0d2a4a 100%)', padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(26,200,176,0.12)', border: '1px solid rgba(26,200,176,0.3)', color: '#1ac8b0', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.14em', padding: '6px 14px', borderRadius: '100px', marginBottom: '24px' }}>
            OUR MISSION
          </div>
          <h1 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '28px' }}>
            We Built StableDPP Because Fashion Deserves Proof — Not Just Promises.
          </h1>
          <p style={{ color: '#a8bcc8', fontSize: '17px', lineHeight: 1.8, marginBottom: '20px' }}>
            The fashion industry generates $2.5 trillion in annual revenue — yet the majority of sustainability claims made by fashion brands remain unverifiable by any buyer, regulator, or consumer who wants to check them.
          </p>
          <p style={{ color: '#a8bcc8', fontSize: '17px', lineHeight: 1.8, marginBottom: '20px' }}>
            StableDPP was built to change that. We believe every fashion product deserves a tamper-proof, independently verifiable record of its sustainability story — from the cotton field to the retail shelf. A record that cannot be altered, cannot be gamed, and can be trusted by anyone who scans it.
          </p>
          <p style={{ color: '#a8bcc8', fontSize: '17px', lineHeight: 1.8 }}>
            By anchoring Digital Product Passports to the Ethereum blockchain and engineering our platform to meet EU ESPR 2024 requirements from day one, we give fashion brands the compliance infrastructure and credibility credentials they need to compete in a market where transparency is no longer optional.
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, color: '#0a1f3c' }}>What We Stand For</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {values.map((v, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #ede8e3', borderRadius: '16px', padding: '32px' }}>
              <Icon name={v.icon} className="w-8 h-8 text-slate-600 mb-3" />
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '18px', fontWeight: 700, color: '#0a1f3c', marginBottom: '10px' }}>{v.title}</h3>
              <p style={{ color: '#5a6a7a', fontSize: '14px', lineHeight: 1.75 }}>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ background: '#fff', padding: '80px 24px', borderTop: '1px solid #ede8e3' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ color: '#1ac8b0', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.14em', marginBottom: '10px' }}>THE TEAM</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#0a1f3c' }}>Built by Fashion & Blockchain Experts</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', maxWidth: '800px', margin: '0 auto' }}>
            {team.map((member, i) => (
              <div key={i} style={{ background: '#fafaf8', border: '1px solid #ede8e3', borderRadius: '16px', padding: '28px', textAlign: 'center' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: member.image ? 'none' : 'linear-gradient(135deg, #1ac8b0, #0ea58c)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  overflow: 'hidden',
                  border: '4px solid #fff',
                  boxShadow: '0 4px 20px rgba(26,200,176,0.15)',
                }}>
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%'
                      }}
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background = 'linear-gradient(135deg, #1ac8b0, #0ea58c)';
                          parent.innerHTML = `<span style="color: #071528; font-family: Syne, sans-serif; font-size: 18px; font-weight: 800; letter-spacing: 0.05em;">${member.initials}</span>`;
                        }
                      }}
                    />
                  ) : (
                    <span style={{
                      color: '#071528',
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '18px',
                      fontWeight: 800,
                      letterSpacing: '0.05em',
                    }}>
                      {member.initials}
                    </span>
                  )}
                </div>
                <div style={{ color: '#1ac8b0', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', marginBottom: '8px', textTransform: 'uppercase' }}>{member.role}</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '18px', fontWeight: 700, color: '#0a1f3c', marginBottom: '12px' }}>{member.name}</h3>
                <p style={{ color: '#5a6a7a', fontSize: '14px', lineHeight: 1.7 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0a1f3c', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 900, color: '#fff', lineHeight: 1.35, marginBottom: '14px' }}>
            Want to know more? We love talking DPPs — and the fashion industry's sustainability future.
          </h2>
          <p style={{ color: '#7a8a98', fontSize: '14px', marginBottom: '28px' }}>Our team responds within 24 hours.</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/book-a-demo')} style={{ background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: 'pointer', color: '#071528', fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '100px' }}>Book a Demo →</button>
            <button style={{ background: 'none', border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500, padding: '13px 28px', borderRadius: '100px' }}>Contact Us</button>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}