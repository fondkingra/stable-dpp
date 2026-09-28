import { SharedNav, SharedFooter } from './SharedNav';
import {
  GuidesHero,
  GuidesSectionHeader,
  GuideGrid,
  FeaturedGuideCard,
  CountryGuideCard,
  GuidesDemoCta,
} from './GuideComponents';
import {
  GUIDE_TRACKS,
  getCountryGuides,
  getGuidesByTrack,
  getMasterGuide,
  type GuideTrack,
} from '../constants/guides';

const TRACK_COPY: Record<GuideTrack, { title: string; lead: string }> = {
  exporters: {
    title: 'EU Digital Product Passport guides for textile exporters and suppliers',
    lead: 'Your EU buyers will ask you for the data behind their Digital Product Passports. These free guides show what they will ask for, how to collect it from your own suppliers, and how to get ready before the textile rules apply.',
  },
  importers: {
    title: 'EU Digital Product Passport guides for importers and brands sourcing from Asia',
    lead: 'The passport is your responsibility, but most of its data sits with your suppliers in Asia. These free guides cover your obligations under ESPR and how to get usable DPP data from the supply chain.',
  },
};

export function GuideTrackPage({ track }: { track: GuideTrack }) {
  const t = GUIDE_TRACKS[track];
  const copy = TRACK_COPY[track];
  const master = getMasterGuide(track);
  const others = getGuidesByTrack(track).filter((g) => g.id !== master.id && !g.country);
  const countries = track === 'exporters' ? getCountryGuides() : [];

  return (
    <div className="guides-page">
      <SharedNav />

      <GuidesHero
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' },
          { label: 'Guides', href: '/resources/guides' },
          { label: t.label },
        ]}
        eyebrow={`GUIDES · ${t.label.toUpperCase()}`}
        title={copy.title}
        lead={copy.lead}
      />

      <section className="guides-section guides-section--white">
        <div className="guides-container">
          <FeaturedGuideCard guide={master} />
        </div>
      </section>

      <section className="guides-section">
        <div className="guides-container">
          <GuidesSectionHeader
            eyebrow="ALL GUIDES"
            title={`Guides for ${t.label}`}
            subtitle={t.audience}
          />
          <GuideGrid guides={others} />
        </div>
      </section>

      {countries.length > 0 && (
        <section className="guides-section guides-section--white" id="country-guides">
          <div className="guides-container">
            <GuidesSectionHeader
              eyebrow="COUNTRY GUIDES"
              title="Country guides to the EU DPP"
              subtitle="Step-by-step plans for export units in each country, built around local clusters, export councils and existing certifications."
            />
            <div className="guide-country-grid">
              {countries.map((g) => (
                <CountryGuideCard key={g.id} guide={g} />
              ))}
            </div>
          </div>
        </section>
      )}

      <GuidesDemoCta />
      <SharedFooter />
    </div>
  );
}
