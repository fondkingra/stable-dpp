import { useNavigate } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import { getSolutionBySegment, solutions, type SolutionAudience } from './SolutionsPage';
import {
  getSolutionSegmentCrumbName,
  type SolutionSegmentId,
} from '../utils/seo';
import { pageH1OnDark, pageH2OnLight, pageH2OnDark, heroEyebrow, heroLead } from '../styles/typography';

type SolutionSegmentPageProps = {
  segment: SolutionSegmentId;
};

export function SolutionSegmentPage({ segment }: SolutionSegmentPageProps) {
  const navigate = useNavigate();
  const solution = getSolutionBySegment(segment) as SolutionAudience;
  const crumbName = getSolutionSegmentCrumbName(segment);
  const related = solutions.filter((item) => item.id !== segment);

  return (
    <div style={{ minHeight: '100vh', background: '#fafaf8', fontFamily: 'var(--font-primary)' }}>
      <SharedNav />

      <section style={{ background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 60%, #0d2a4a 100%)', padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><a href="/">Home</a></li>
              <li><a href="/solutions">Solutions</a></li>
              <li aria-current="page">{crumbName}</li>
            </ol>
          </nav>
          <div style={heroEyebrow}>{solution.badge}</div>
          <h1 style={{ ...pageH1OnDark, marginBottom: '28px' }}>
            {solution.pageH1}
          </h1>
          <p style={{ ...heroLead, marginBottom: '28px' }}>
            {solution.body}
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="/solutions"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'none',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff',
                fontFamily: 'var(--font-primary)',
                fontSize: '14px',
                fontWeight: 500,
                padding: '12px 22px',
                borderRadius: '100px',
                textDecoration: 'none',
              }}
            >
              ← All Solutions
            </a>
            <a
              href="/product"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)',
                border: 'none',
                color: '#071528',
                fontFamily: 'var(--font-primary)',
                fontSize: '14px',
                fontWeight: 700,
                padding: '12px 22px',
                borderRadius: '100px',
                textDecoration: 'none',
              }}
            >
              Explore the Platform →
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: '1000px', margin: '0 auto' }}>
        <article
          style={{
            background: '#fff',
            borderRadius: '24px',
            border: `1px solid ${solution.border}`,
            overflow: 'hidden',
            boxShadow: solution.shadow,
          }}
        >
          <div style={{ background: solution.headerBg, padding: '32px 40px 0', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: solution.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
              {solution.emoji}
            </div>
            <div>
              <span style={{ background: solution.badgeBg, color: solution.badgeColor, fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', padding: '3px 10px', borderRadius: '100px' }}>
                {solution.badge}
              </span>
              <h2 style={{ ...pageH2OnLight, fontSize: 'clamp(20px, 2.5vw, 28px)', marginTop: '8px', marginBottom: '4px' }}>
                {solution.heading}
              </h2>
            </div>
          </div>
          <div style={{ padding: '28px 40px 36px' }}>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.7, margin: '0 0 24px' }}>
              {solution.body}
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
              {solution.capabilities.map((capability) => (
                <li key={capability} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: solution.capabilityBg, borderRadius: '10px', padding: '10px 14px' }}>
                  <span style={{ color: solution.capabilityAccent, fontWeight: 700, fontSize: '14px' }}>✓</span>
                  <span style={{ color: '#0f172a', fontSize: '13px', fontWeight: 500 }}>{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <div style={{ marginTop: '48px' }}>
          <h2 style={{ ...pageH2OnLight, fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: '20px' }}>
            Related solutions
          </h2>
          <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {related.map((item) => (
              <a
                key={item.id}
                href={item.path}
                style={{
                  display: 'block',
                  background: '#fff',
                  border: `1px solid ${item.border}`,
                  borderRadius: '16px',
                  padding: '20px 22px',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <span style={{ background: item.badgeBg, color: item.badgeColor, fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', padding: '3px 8px', borderRadius: '100px' }}>
                  {item.badge}
                </span>
                <p style={{ ...pageH2OnLight, fontSize: '18px', marginTop: '12px', marginBottom: 0 }}>
                  {item.pageH1}
                </p>
              </a>
            ))}
            <a
              href="/product"
              style={{
                display: 'block',
                background: '#fff',
                border: '1px solid #a7f3d0',
                borderRadius: '16px',
                padding: '20px 22px',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <span style={{ background: '#1ac8b0', color: '#071528', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', padding: '3px 8px', borderRadius: '100px' }}>
                PLATFORM
              </span>
              <p style={{ ...pageH2OnLight, fontSize: '18px', marginTop: '12px', marginBottom: 0 }}>
                See the StableDPP product
              </p>
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: '#0a1f3c', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p style={{ ...pageH2OnDark, textAlign: 'center', marginBottom: '14px' }}>
            Ready to roll out DPPs for your supply chain?
          </p>
          <p style={{ color: '#7a8a98', fontSize: '16px', marginBottom: '28px' }}>
            Book a 30-minute call and we will map the right Digital Product Passport workflow for your products and markets.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/book-a-demo')}
              style={{
                background: 'linear-gradient(135deg, #1ac8b0, #0ea58c)',
                border: 'none',
                cursor: 'pointer',
                color: '#071528',
                fontFamily: 'var(--font-primary)',
                fontSize: '15px',
                fontWeight: 700,
                padding: '14px 28px',
                borderRadius: '100px',
              }}
            >
              Book a Free Demo →
            </button>
            <a
              href="/solutions"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff',
                fontFamily: 'var(--font-primary)',
                fontSize: '15px',
                fontWeight: 500,
                padding: '13px 28px',
                borderRadius: '100px',
                textDecoration: 'none',
              }}
            >
              Back to Solutions
            </a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}
