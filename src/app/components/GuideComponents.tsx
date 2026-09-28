import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { PageBreadcrumb, type BreadcrumbItem } from './PageBreadcrumb';
import { pageH1OnDark, pageH2OnDark, heroEyebrow, heroLead } from '../styles/typography';
import {
  GUIDE_DETAILS,
  GUIDE_TRACKS,
  formatGuidePages,
  getGuidePath,
  type GuideSummary,
  type GuideTrack,
} from '../constants/guides';

export function GuidesHero({
  breadcrumb,
  eyebrow,
  title,
  lead,
  children,
}: {
  breadcrumb: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section
      style={{
        background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 60%, #0d2a4a 100%)',
        padding: '96px 24px 80px',
      }}
    >
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <PageBreadcrumb items={breadcrumb} />
        <div style={heroEyebrow}>{eyebrow}</div>
        <h1 style={{ ...pageH1OnDark, marginBottom: lead || children ? '24px' : 0 }}>{title}</h1>
        {lead && <p style={heroLead}>{lead}</p>}
        {children}
      </div>
    </section>
  );
}

function GuideMeta({ guide }: { guide: GuideSummary }) {
  return (
    <div className="guide-card__meta">
      <span>{guide.type}</span>
      <span aria-hidden="true">·</span>
      <span>{formatGuidePages(guide.pages)}</span>
    </div>
  );
}

function GuideAction({ guide }: { guide: GuideSummary }) {
  if (guide.live && GUIDE_DETAILS[guide.id]) {
    return (
      <Link to={getGuidePath(guide)} className="guide-card__cta">
        Download <span aria-hidden="true">→</span>
        <span className="sr-only"> {guide.title}</span>
      </Link>
    );
  }
  return <span className="guide-card__soon">Coming soon</span>;
}

export function GuideCard({ guide }: { guide: GuideSummary }) {
  const live = guide.live && GUIDE_DETAILS[guide.id];
  return (
    <article className={`guide-card${live ? '' : ' guide-card--soon'}`}>
      <GuideMeta guide={guide} />
      <h3 className="guide-card__title">
        {live ? <Link to={getGuidePath(guide)}>{guide.title}</Link> : guide.title}
      </h3>
      <GuideAction guide={guide} />
    </article>
  );
}

export function FeaturedGuideCard({ guide }: { guide: GuideSummary }) {
  const detail = GUIDE_DETAILS[guide.id];
  const live = guide.live && detail;
  return (
    <article className={`guide-featured${live ? '' : ' guide-card--soon'}`}>
      <div className="guide-featured__label">Start here · Master guide</div>
      <h3 className="guide-featured__title">
        {live ? <Link to={getGuidePath(guide)}>{guide.title}</Link> : guide.title}
      </h3>
      {detail && <p className="guide-featured__summary">{detail.summary[0]}</p>}
      <div className="guide-featured__footer">
        <GuideMeta guide={guide} />
        <GuideAction guide={guide} />
      </div>
    </article>
  );
}

export function CountryGuideCard({ guide }: { guide: GuideSummary }) {
  const live = guide.live && GUIDE_DETAILS[guide.id];
  const content = (
    <>
      <span className="guide-country__name">{guide.country}</span>
      <span className="guide-country__meta">
        {live ? `${formatGuidePages(guide.pages)} · Download →` : 'Coming soon'}
      </span>
    </>
  );
  return live ? (
    <Link to={getGuidePath(guide)} className="guide-country" aria-label={guide.title}>
      {content}
    </Link>
  ) : (
    <div className="guide-country guide-card--soon" aria-label={`${guide.title} (coming soon)`}>
      {content}
    </div>
  );
}

export function GuideGrid({ guides }: { guides: GuideSummary[] }) {
  return (
    <div className="guide-grid">
      {guides.map((g) => (
        <GuideCard key={g.id} guide={g} />
      ))}
    </div>
  );
}

export function TrackEntryCards() {
  return (
    <div className="guide-entry-grid">
      {(Object.keys(GUIDE_TRACKS) as GuideTrack[]).map((track) => {
        const t = GUIDE_TRACKS[track];
        return (
          <Link key={track} to={t.path} className="guide-entry">
            <span className="guide-entry__label">{t.entryLabel}</span>
            <span className="guide-entry__body">{t.audience}</span>
            <span className="guide-entry__cta">
              See {t.label.toLowerCase()} guides <span aria-hidden="true">→</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export function GuidesSectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="product-features-header">
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="product-features-heading">{title}</h2>
      {subtitle && <p className="product-features-subheading">{subtitle}</p>}
    </header>
  );
}

export function GuidesDemoCta({
  title = 'Ready to see where you stand?',
  body = 'Book a demo and we will walk through your readiness and what a Digital Product Passport for your products could look like.',
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section
      style={{
        background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 100%)',
        padding: '80px 24px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <h2 style={{ ...pageH2OnDark, marginBottom: '16px' }}>{title}</h2>
        <p style={{ ...heroLead, marginBottom: '32px', color: '#94a8bc' }}>{body}</p>
        <Link to="/book-a-demo" className="guide-btn guide-btn--primary">
          Book a Demo
        </Link>
      </div>
    </section>
  );
}
