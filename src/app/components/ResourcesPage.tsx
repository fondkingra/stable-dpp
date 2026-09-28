import { Link } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import { PageFAQ } from './PageFAQ';
import { GuidesHero, GuidesSectionHeader } from './GuideComponents';
import {
  GUIDE_DETAILS,
  GUIDE_TRACKS,
  formatGuidePages,
  getCountryGuides,
  getGuidePath,
  getGuidesByTrack,
  getMasterGuide,
  type GuideSummary,
  type GuideTrack,
  type GuideType,
} from '../constants/guides';
import {
  RESOURCES_BLOCKCHAIN_TERMS,
  RESOURCES_ESPR_EXPLAINER,
  RESOURCES_GLOSSARY,
  RESOURCES_PAGE_FAQS,
} from '../utils/seo';
import { heroLead, pageH2OnDark } from '../styles/typography';

const TYPE_BADGE: Record<GuideType, string> = {
  'Guide': 'Guide',
  'Guide (master)': 'Guide',
  'Guide + templates': 'Guide + templates',
  'Checklist': 'Checklist',
  'Country guide': 'Country guide',
  'Brief': 'Brief',
  'Workbook': 'Workbook',
  'Template': 'Template',
};

const TRACK_EYEBROW: Record<GuideTrack, string> = {
  exporters: 'EXPORTER GUIDES',
  importers: 'IMPORTER GUIDES',
};

const SUBNAV = [
  { label: 'Guides for Exporters', href: '#exporter-guides' },
  { label: 'Guides for Importers', href: '#importer-guides' },
  { label: 'Country Guides', href: '#country-guides' },
  { label: 'Glossary', href: '#glossary' },
];

function isLive(guide: GuideSummary) {
  return guide.live && Boolean(GUIDE_DETAILS[guide.id]);
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2v8m0 0L4.5 6.5M8 10l3.5-3.5M3 13h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HubGuideCard({ guide }: { guide: GuideSummary }) {
  const live = isLive(guide);
  return (
    <article className={`rh-card rh-card--${guide.track}`}>
      <div className="rh-card__top">
        <span className="rh-badge">{TYPE_BADGE[guide.type]}</span>
      </div>
      <h3 className="rh-card__title">
        {live ? <Link to={getGuidePath(guide)}>{guide.title}</Link> : guide.title}
      </h3>
      <p className="rh-card__blurb">{guide.blurb}</p>
      <div className="rh-card__foot">
        <span>{formatGuidePages(guide.pages)}</span>
        {live ? (
          <Link to={`${getGuidePath(guide)}#download`} className="rh-card__action">
            <DownloadIcon /> Download<span className="sr-only"> {guide.title}</span>
          </Link>
        ) : (
          <span className="rh-card__soon">Coming soon</span>
        )}
      </div>
    </article>
  );
}

function MasterGuide({ guide }: { guide: GuideSummary }) {
  const live = isLive(guide);
  const detail = GUIDE_DETAILS[guide.id];
  const path = getGuidePath(guide);
  return (
    <article className={`rh-master rh-master--${guide.track}${guide.inside ? ' rh-master--split' : ''}`}>
      <div className="rh-master__main">
        <div className="rh-master__meta">
          <span>{TYPE_BADGE[guide.type]}</span>
          <span aria-hidden="true">·</span>
          <span>{formatGuidePages(guide.pages)}</span>
          {detail && (
            <>
              <span aria-hidden="true">·</span>
              <span>Last reviewed {detail.lastReviewed}</span>
            </>
          )}
        </div>
        <h3 className="rh-master__title">
          {live ? <Link to={path}>{guide.title}</Link> : guide.title}
        </h3>
        <p className="rh-master__blurb">{guide.blurb}</p>
        <MasterActions guide={guide} />
      </div>
      {guide.inside && (
        <div className="rh-master__inside">
          <div className="rh-master__inside-label">INSIDE</div>
          <ol>
            {guide.inside.map((item, i) => (
              <li key={item}>
                <span className="rh-master__num">{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      )}
    </article>
  );
}

function MasterActions({ guide }: { guide: GuideSummary }) {
  if (!isLive(guide)) {
    return (
      <div className="rh-master__actions">
        <span className="rh-btn rh-btn--disabled">Coming soon</span>
      </div>
    );
  }
  const path = getGuidePath(guide);
  return (
    <div className="rh-master__actions">
      <Link to={`${path}#download`} className={`rh-btn rh-btn--${guide.track}`}>
        <DownloadIcon /> Download the guide
      </Link>
      <Link to={path} className="rh-link">
        Read overview
      </Link>
    </div>
  );
}

function CountryCard({ guide }: { guide: GuideSummary }) {
  const live = isLive(guide);
  return (
    <article className="rh-country">
      <div className="rh-country__meta">
        Country guide · {formatGuidePages(guide.pages)}
      </div>
      <h3 className="rh-country__name">
        {live ? <Link to={getGuidePath(guide)}>{guide.country}</Link> : guide.country}
      </h3>
      <p className="rh-country__blurb">{guide.blurb}</p>
      {live ? (
        <Link to={getGuidePath(guide)} className="rh-card__action" aria-label={`Read ${guide.title}`}>
          Read guide <span aria-hidden="true">→</span>
        </Link>
      ) : (
        <span className="rh-card__soon">Coming soon</span>
      )}
    </article>
  );
}

function TrackHeader({ track }: { track: GuideTrack }) {
  const t = GUIDE_TRACKS[track];
  return (
    <GuidesSectionHeader
      eyebrow={TRACK_EYEBROW[track]}
      title={`For ${t.label}`}
      subtitle={t.audience}
    />
  );
}

function ViewAll({ track }: { track: GuideTrack }) {
  return (
    <p className="guides-section__more">
      <Link to={GUIDE_TRACKS[track].path}>
        View all {track === 'exporters' ? 'exporter' : 'importer'} guides <span aria-hidden="true">→</span>
      </Link>
    </p>
  );
}

export function ResourcesPage() {
  const exporterMaster = getMasterGuide('exporters');
  const importerMaster = getMasterGuide('importers');
  const exporterGuides = getGuidesByTrack('exporters').filter(
    (g) => g.id !== exporterMaster.id && !g.country,
  );
  const importerGuides = getGuidesByTrack('importers').filter(
    (g) => g.id !== importerMaster.id,
  );
  const countryGuides = getCountryGuides();

  return (
    <div className="guides-page rh-page">
      <SharedNav />

      <GuidesHero
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Resources' }]}
        eyebrow="FREE RESOURCES"
        title="Free guides for the Asia–EU textile supply chain: prepare for the EU Digital Product Passport"
        lead="Practical guides, checklists and templates for both sides of the same trade: the suppliers who provide the data, and the importers who are responsible for the passport."
      />

      <nav className="rh-subnav" aria-label="Resources">
        <div className="guides-container rh-subnav__inner">
          {SUBNAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Choose a track */}
      <section className="guides-section guides-section--white rh-section--entry">
        <div className="guides-container">
          <div className="guide-entry-grid">
            <a href="#exporter-guides" className="guide-entry">
              <span className="guide-entry__label">{GUIDE_TRACKS.exporters.entryLabel}</span>
              <span className="guide-entry__body">
                For textile and garment exporters in India, Bangladesh, Vietnam,
                Sri Lanka and beyond, and the councils and associations that
                support them.
              </span>
              <span className="guide-entry__cta">
                See exporter guides <span aria-hidden="true">→</span>
              </span>
            </a>
            <a href="#importer-guides" className="guide-entry">
              <span className="guide-entry__label">{GUIDE_TRACKS.importers.entryLabel}</span>
              <span className="guide-entry__body">
                For sourcing, sustainability and compliance teams at EU brands,
                retailers and importers buying textiles from Asia.
              </span>
              <span className="guide-entry__cta">
                See importer guides <span aria-hidden="true">→</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Exporter guides */}
      <section className="guides-section rh-anchor" id="exporter-guides" aria-label="Guides for exporters">
        <div className="guides-container">
          <TrackHeader track="exporters" />
          <MasterGuide guide={exporterMaster} />
          <div className="rh-grid">
            {exporterGuides.map((g) => (
              <HubGuideCard key={g.id} guide={g} />
            ))}
          </div>
          <ViewAll track="exporters" />
        </div>
      </section>

      {/* Country guides */}
      <section className="guides-section guides-section--white rh-anchor" id="country-guides" aria-label="Country guides">
        <div className="guides-container">
          <GuidesSectionHeader
            eyebrow="COUNTRY GUIDES"
            title="A step-by-step plan for your country"
          />
          <div className="rh-country-grid">
            {countryGuides.map((g) => (
              <CountryCard key={g.id} guide={g} />
            ))}
          </div>
        </div>
      </section>

      {/* Importer guides */}
      <section className="guides-section rh-anchor" id="importer-guides" aria-label="Guides for importers">
        <div className="guides-container">
          <TrackHeader track="importers" />
          <MasterGuide guide={importerMaster} />
          <div className="rh-grid">
            {importerGuides.map((g) => (
              <HubGuideCard key={g.id} guide={g} />
            ))}
          </div>
          <ViewAll track="importers" />
        </div>
      </section>

      {/* ESPR explainer */}
      <section className="rh-explainer rh-anchor" id="espr-explainer" aria-labelledby="espr-explainer-title">
        <div className="rh-explainer__inner">
          <header className="rh-explainer__header">
            <div className="section-eyebrow">ESPR EXPLAINER</div>
            <h2 id="espr-explainer-title" style={{ ...pageH2OnDark, textAlign: 'center', margin: 0 }}>
              {RESOURCES_ESPR_EXPLAINER.title}
            </h2>
          </header>
          <p className="rh-explainer__body">{RESOURCES_ESPR_EXPLAINER.body}</p>
          <p className="rh-explainer__note">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M8 7.2v4M8 4.8v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {RESOURCES_ESPR_EXPLAINER.note}
          </p>
          <p className="rh-explainer__reviewed">
            Last reviewed {RESOURCES_ESPR_EXPLAINER.lastReviewed}
          </p>
        </div>
      </section>

      {/* Glossary */}
      <section className="guides-section guides-section--white rh-anchor" id="glossary" aria-label="Glossary">
        <div className="guides-container">
          <GuidesSectionHeader eyebrow="GLOSSARY" title="DPP terms, explained" />
          <dl className="rh-glossary">
            {RESOURCES_GLOSSARY.map((term) => (
              <div key={term.q} className="rh-glossary__term">
                <dt>{term.q}</dt>
                <dd>{term.a}</dd>
              </div>
            ))}
          </dl>
          <div className="rh-chips">
            <span className="rh-chips__label">BLOCKCHAIN TERMS</span>
            <ul>
              {RESOURCES_BLOCKCHAIN_TERMS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PageFAQ id="faq" faqs={RESOURCES_PAGE_FAQS} tone="platform" />

      {/* CTA */}
      <section
        style={{
          background: 'linear-gradient(160deg, #071528 0%, #0a1f3c 100%)',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ ...pageH2OnDark, marginBottom: '16px' }}>
            Ready to put DPP compliance into practice?
          </h2>
          <p style={{ ...heroLead, marginBottom: '32px', color: '#94a8bc' }}>
            Start issuing blockchain-verified Digital Product Passports or book
            a personalised demo with our team.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/create-dpp" className="blog-banner-btn blog-banner-btn--primary">
              Get Started Free
            </Link>
            <Link to="/book-a-demo" className="blog-banner-btn blog-banner-btn--ghost">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}
