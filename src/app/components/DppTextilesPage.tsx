import { useNavigate } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import { PageFAQ } from './PageFAQ';
import { PageBreadcrumb } from './PageBreadcrumb';
import { Icon, type IconName } from '../utils/icons';
import { DPP_TEXTILES_PAGE_FAQS } from '../utils/seo';
import { pageH1OnDark, pageH2OnDark, heroEyebrow, heroLead } from '../styles/typography';

type DataLayer = {
  icon: IconName;
  iconColor: string;
  iconBg: string;
  border: string;
  title: string;
  body: string;
};

const dataLayers: DataLayer[] = [
  {
    icon: 'link',
    iconColor: '#1ac8b0',
    iconBg: 'rgba(26,200,176,0.1)',
    border: '#a7f3d0',
    title: 'Fibre & Material Composition',
    body: 'Percentage breakdown of fibres, recycled content, and material origin — the core data field EU buyers and regulators check first.',
  },
  {
    icon: 'factory',
    iconColor: '#2563eb',
    iconBg: 'rgba(59,130,246,0.1)',
    border: '#bfdbfe',
    title: 'Supply-Chain Tier Data',
    body: 'From fabric mills to cut-and-sew units, component-level DPPs let each tier of a textile supply chain contribute verified data without exposing commercially sensitive supplier details.',
  },
  {
    icon: 'shield-check',
    iconColor: '#7c3aed',
    iconBg: 'rgba(147,51,234,0.1)',
    border: '#d8b4fe',
    title: 'Certifications & Evidence',
    body: 'GOTS, OEKO-TEX, and other textile certifications attached with supporting evidence, ready for buyer or regulator verification at any time.',
  },
  {
    icon: 'chart-line',
    iconColor: '#d97706',
    iconBg: 'rgba(245,158,11,0.1)',
    border: '#fde68a',
    title: 'Care, Repair & End-of-Life',
    body: 'Care instructions, repairability information, and recycling guidance — the fields that support the circular-economy goals behind ESPR.',
  },
];

export function DppTextilesPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <SharedNav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 60%, #0d2a4a 100%)', padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <PageBreadcrumb
            items={[{ label: 'Home', href: '/' }, { label: 'DPP for Textiles' }]}
          />
          <div style={heroEyebrow}>FOR TEXTILES & APPAREL</div>
          <h1 style={{ ...pageH1OnDark, marginBottom: '28px' }}>
            Digital Product Passport for Textiles
          </h1>
          <p style={{ ...heroLead, marginBottom: '36px' }}>
            Textiles are among the priority categories under EU ESPR 2024. A textile-specific Digital Product Passport documents fibre composition, supply-chain origin, certifications, and end-of-life data — built for the multi-tier reality of textile manufacturing, from raw fibre to finished garment.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/create-dpp')} style={{ background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: 'pointer', color: '#071528', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 700, padding: '14px 28px', borderRadius: '100px' }}>Start for Free →</button>
            <button onClick={() => navigate('/solutions/manufacturers')} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer', color: '#fff', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 500, padding: '13px 28px', borderRadius: '100px' }}>See Manufacturer Solutions</button>
          </div>
        </div>
      </section>

      {/* What goes into a textile DPP */}
      <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ color: '#1ac8b0', fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>WHAT A TEXTILE DPP CONTAINS</div>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, color: '#0a1f3c', marginBottom: '16px' }}>
            Four Data Layers, One Passport
          </h2>
          <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto' }}>
            A textile Digital Product Passport is built up in layers, matching how textile supply chains actually work — from fibre origin through to the finished, labelled product.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {dataLayers.map(({ icon, iconColor, iconBg, border, title, body }) => (
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
          <h2 style={{ ...pageH2OnDark, marginBottom: '16px' }}>When Do Textile DPP Requirements Apply?</h2>
          <p style={{ color: '#a8bcc8', fontSize: '16px', lineHeight: 1.75 }}>
            EU ESPR 2024 (Regulation (EU) 2024/1781) has applied since July 2024. Digital Product Passport requirements roll out by product category — batteries lead from 2027, with a textiles-specific delegated act following as it is finalised, within a phased rollout running through 2030. Many EU brands and retailers are already requesting passport-ready data ahead of formal enforcement, so early preparation is a commercial advantage, not just a compliance step.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0a1f3c', padding: '72px 24px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ ...pageH2OnDark, textAlign: 'center', marginBottom: '16px' }}>
            Issue Your First Textile Passport — Free
          </h2>
          <p style={{ color: '#a8bcc8', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
            No technical setup, no credit card required. Component-level tracking included from day one.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/create-dpp')} style={{ background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)', border: 'none', cursor: 'pointer', color: '#071528', fontFamily: 'var(--font-primary)', fontSize: '15px', fontWeight: 700, padding: '16px 32px', borderRadius: '100px' }}>Get Started Free →</button>
          </div>
        </div>
      </section>

      <PageFAQ
        id="faq"
        title="Digital Product Passport for Textiles — FAQ"
        faqs={DPP_TEXTILES_PAGE_FAQS}
        showQaPrefix
      />

      <SharedFooter />
    </div>
  );
}
