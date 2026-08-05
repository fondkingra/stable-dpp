import { useNavigate } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import { PageFAQ } from './PageFAQ';
import { PageBreadcrumb } from './PageBreadcrumb';
import { Icon, type IconName } from '../utils/icons';
import { DPP_INDIA_PAGE_FAQS } from '../utils/seo';
import { pageH1OnDark, pageH2OnDark, heroEyebrow, heroLead } from '../styles/typography';

type Reason = {
  icon: IconName;
  iconColor: string;
  iconBg: string;
  border: string;
  title: string;
  body: string;
};

const reasons: Reason[] = [
  {
    icon: 'globe',
    iconColor: '#1ac8b0',
    iconBg: 'rgba(26,200,176,0.1)',
    border: '#a7f3d0',
    title: 'EU ESPR Applies the Moment You Export',
    body: 'EU ESPR 2024 (Regulation (EU) 2024/1781) attaches to placing a product on the EU market — not to where the manufacturer is based. Indian textile exporters shipping into the EU are in scope, exactly like an EU-based manufacturer.',
  },
  {
    icon: 'factory',
    iconColor: '#2563eb',
    iconBg: 'rgba(59,130,246,0.1)',
    border: '#bfdbfe',
    title: 'Built for Multi-Tier Indian Supply Chains',
    body: 'Component-level DPPs let Tier 1 cut-and-sew units, fabric mills, and raw-material suppliers each contribute verified data — so a passport can be built up in stages as your supply chain gets onboarded, not all at once.',
  },
  {
    icon: 'clipboard',
    iconColor: '#7c3aed',
    iconBg: 'rgba(147,51,234,0.1)',
    border: '#d8b4fe',
    title: 'One Passport, Every EU Buyer',
    body: 'A single GS1 Digital Link-compliant passport works across every EU brand and retailer you sell to — no need to rebuild compliance data separately for each buyer relationship.',
  },
  {
    icon: 'check-circle',
    iconColor: '#16a34a',
    iconBg: 'rgba(34,197,94,0.1)',
    border: '#bbf7d0',
    title: 'Free to Start, No Infrastructure to Build',
    body: 'Issue a real, verifiable Digital Product Passport on a free self-serve tier — no blockchain expertise, no development team, and no upfront infrastructure investment required.',
  },
];

export function DppIndiaPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <SharedNav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 60%, #0d2a4a 100%)', padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <PageBreadcrumb
            items={[{ label: 'Home', href: '/' }, { label: 'Digital Product Passport in India' }]}
          />
          <div style={heroEyebrow}>FOR INDIAN EXPORTERS</div>
          <h1 style={{ ...pageH1OnDark, marginBottom: '28px' }}>
            Digital Product Passport in India — EU ESPR Compliance for Indian Textile Exporters
          </h1>
          <p style={{ ...heroLead, marginBottom: '36px' }}>
            Indian textile manufacturers and exporters selling into the EU are in scope for EU ESPR 2024, the same as any EU-based brand. StableDPP gives Indian suppliers a straightforward, blockchain-verified way to issue Digital Product Passports their EU buyers can trust — free to start, no infrastructure to build.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/create-dpp')} style={{ background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: 'pointer', color: '#071528', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '100px' }}>Start for Free →</button>
            <button onClick={() => navigate('/book-a-demo')} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer', color: '#fff', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 500, padding: '13px 28px', borderRadius: '100px' }}>Book a Demo</button>
          </div>
        </div>
      </section>

      {/* Why Indian exporters need a DPP */}
      <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ color: '#1ac8b0', fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>WHY IT MATTERS FOR INDIA</div>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, color: '#0a1f3c', marginBottom: '16px' }}>
            EU ESPR Doesn't Stop at the Border
          </h2>
          <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto' }}>
            If your products are sold in the EU, EU ESPR 2024 applies to you — regardless of where they were manufactured. Here is what that means for Indian textile exporters, and how StableDPP fits.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {reasons.map(({ icon, iconColor, iconBg, border, title, body }) => (
            <div key={title} style={{ background: '#fff', border: `1px solid ${border}`, borderRadius: '18px', padding: '28px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <Icon name={icon} className="" style={{ width: '22px', height: '22px', color: iconColor, strokeWidth: 1.6 }} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0a1f3c', marginBottom: '8px' }}>{title}</h3>
              <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.65, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline / context */}
      <section style={{ background: '#0a1f3c', padding: '72px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ ...pageH2OnDark, marginBottom: '16px' }}>When Does This Apply to Your Exports?</h2>
          <p style={{ color: '#a8bcc8', fontSize: '16px', lineHeight: 1.75 }}>
            EU ESPR 2024 (Regulation (EU) 2024/1781) has been in force since July 2024. Digital Product Passport requirements phase in by product category — batteries from 2027, with textiles following as their delegated act is finalised, through a rollout running to 2030. EU buyers are increasingly requesting passport-ready data well ahead of formal enforcement dates, so Indian suppliers who prepare early are positioned to win and retain EU buyer relationships rather than scramble to catch up.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0a1f3c', padding: '72px 24px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ ...pageH2OnDark, textAlign: 'center', marginBottom: '16px' }}>
            Start Your First Digital Product Passport — Free
          </h2>
          <p style={{ color: '#a8bcc8', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
            No technical setup, no credit card required. Your first passport can be live in minutes.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/create-dpp')} style={{ background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: 'pointer', color: '#071528', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 700, padding: '16px 32px', borderRadius: '100px' }}>Get Started Free →</button>
          </div>
        </div>
      </section>

      <PageFAQ
        id="faq"
        title="Digital Product Passport in India — FAQ"
        faqs={DPP_INDIA_PAGE_FAQS}
        showQaPrefix
      />

      <SharedFooter />
    </div>
  );
}
