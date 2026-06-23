import { useNavigate } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import { Icon } from '../utils/icons';
import { pageH1OnDark, pageH2OnLight, pageH2OnDark, cardH3, cardBody, heroEyebrow, heroLead } from '../styles/typography';

const values = [
  {
    title: 'Verifiability First',
    body: 'Sustainability claims without verifiable proof are marketing, not progress. Every StableDPP passport is blockchain-anchored — independently verifiable by any buyer, regulator, or consumer, anywhere in the world, at any time.',
    icon: 'link' as const,
  },
  {
    title: 'Regulation as Opportunity',
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
    role: 'Co-Founder',
    name: 'Priya Hebbal',
    bio: 'Co-founder of StableDPP, focused on the trust layer for India\'s exports. Priya is building the verifiable proof layer that every producer, consumer and other stakeholders in the circular economy can trust on — enabling each sustainability claim to be verified, never just believed, giving brands, buyers and recyclers a record they can rely on.',
    initials: 'PH',
    image: import.meta.env.BASE_URL + 'IMG2.jpg',
    imagePosition: '50% 0%',
    imageScale: 1.55,
    imageScaleOrigin: '50% 18%',
  },
  {
    role: 'Co-Founder',
    name: 'Sudhanva Bhandolkar',
    bio: 'Co-founder of StableDPP, building the blockchain infrastructure behind every passport. Sudhanva has pioneered Trust as Infrastructure (TAS), a blockchain-based verification layer that enables one-scan verification of product data provenance through permanently recorded and tamper-resistant audit trails.',
    initials: 'SB',
    image: import.meta.env.BASE_URL + 'IMG1.jpg',
  },
];

export function CompanyPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <SharedNav />

      {/* Mission */}
      <section style={{ background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 60%, #0d2a4a 100%)', padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={heroEyebrow}>
            OUR MISSION
          </div>
          <h1 style={{ ...pageH1OnDark, marginBottom: '28px' }}>
            Built by Fashion &amp; Blockchain Experts
          </h1>
          <h2 style={{ ...pageH2OnDark, marginBottom: '28px' }}>
            We Built StableDPP Because Fashion Deserves Proof — Not Just Promises
          </h2>
          <p style={{ ...heroLead, marginBottom: '20px' }}>
            The fashion industry generates $2.5 trillion in annual revenue — yet the majority of sustainability claims made by fashion brands remain unverifiable by any buyer, regulator, or consumer who wants to check them.
          </p>
          <p style={{ ...heroLead, marginBottom: '20px' }}>
            StableDPP was built to change that. We believe every fashion product deserves a tamper-proof, independently verifiable record of its sustainability story — from the cotton field to the retail shelf. A record that cannot be altered, cannot be gamed, and can be trusted by anyone who scans it.
          </p>
          <p style={heroLead}>
            By anchoring Digital Product Passports to the blockchain and engineering our platform to meet EU ESPR 2024 requirements from day one, we give fashion brands the compliance infrastructure and credibility credentials they need to compete in a market where transparency is no longer optional.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ ...pageH2OnLight, textAlign: 'center' }}>Three Principles That Drive Every Decision We Make</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {values.map((v, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #ede8e3', borderRadius: '16px', padding: '32px' }}>
              <Icon name={v.icon} className="w-8 h-8 text-slate-600 mb-3" />
              <h3 style={cardH3}>{v.title}</h3>
              <p style={cardBody}>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ background: '#fff', padding: '80px 24px', borderTop: '1px solid #ede8e3' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-eyebrow">THE TEAM</div>
            <h2 style={{ ...pageH2OnLight }}>Meet the Co-Founders</h2>
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
                  position: 'relative',
                }}>
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: member.imagePosition ?? 'center',
                        transform: member.imageScale ? `scale(${member.imageScale})` : undefined,
                        transformOrigin: member.imageScaleOrigin ?? 'center',
                        borderRadius: '50%',
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
                <div className="team-member-role">{member.role}</div>
                <h3 style={cardH3}>{member.name}</h3>
                <p style={{ color: '#5a6a7a', fontSize: '14px', lineHeight: 1.7 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0a1f3c', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <p style={{ ...pageH2OnDark, textAlign: 'center', marginBottom: '14px' }}>
            Want to know more? We love talking DPPs — and the fashion industry&apos;s sustainability future.
          </p>
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
