import { Link } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import {
  GuidesHero,
  GuidesSectionHeader,
  GuideGrid,
  TrackEntryCards,
  GuidesDemoCta,
} from './GuideComponents';
import { GUIDE_TRACKS, getGuidesByTrack, type GuideTrack } from '../constants/guides';

export function GuidesLibraryPage() {
  return (
    <div className="guides-page">
      <SharedNav />

      <GuidesHero
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' },
          { label: 'Guides' },
        ]}
        eyebrow="GUIDES LIBRARY"
        title="Free EU Digital Product Passport guides for the Asia–EU textile supply chain"
        lead="Guides, checklists and templates for both sides of the same trade: the exporters and suppliers who provide the data, and the EU importers and brands responsible for the passport."
      />

      <section className="guides-section guides-section--white">
        <div className="guides-container">
          <TrackEntryCards />
        </div>
      </section>

      {(Object.keys(GUIDE_TRACKS) as GuideTrack[]).map((track, i) => {
        const t = GUIDE_TRACKS[track];
        const guides = getGuidesByTrack(track);
        return (
          <section
            key={track}
            id={track}
            className={`guides-section ${i % 2 ? 'guides-section--white' : ''}`}
          >
            <div className="guides-container">
              <GuidesSectionHeader
                eyebrow={`${guides.length} GUIDES`}
                title={`For ${t.label}`}
                subtitle={t.audience}
              />
              <GuideGrid guides={guides} />
              <p className="guides-section__more">
                <Link to={t.path}>
                  Browse the {t.label.toLowerCase()} track <span aria-hidden="true">→</span>
                </Link>
              </p>
            </div>
          </section>
        );
      })}

      <GuidesDemoCta />
      <SharedFooter />
    </div>
  );
}
