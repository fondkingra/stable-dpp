import { useState } from 'react';
import { useNavigate } from 'react-router';
import { SharedNav, SharedFooter } from './SharedNav';
import {
  pageH1OnDark,
  pageH2OnLight,
  pageH2OnDark,
  heroEyebrow,
  heroLead,
} from '../styles/typography';
import {
  RESOURCES_ESPR_EXPLAINER,
  RESOURCES_GLOSSARY,
} from '../utils/seo';

export function ResourcesPage() {
  const navigate = useNavigate();
  const [openGlossary, setOpenGlossary] = useState<number | null>(null);

  const toggleGlossary = (index: number) => {
    setOpenGlossary(openGlossary === index ? null : index);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#fafaf8',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <SharedNav />

      {/* Hero */}
      <section
        style={{
          background:
            'linear-gradient(160deg, #071528 0%, #0a1f3c 60%, #0d2a4a 100%)',
          padding: '96px 24px 80px',
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={heroEyebrow}>RESOURCES</div>
          <h1 style={{ ...pageH1OnDark, marginBottom: '24px' }}>
            Your Guide to EU Digital Product Passports &amp; ESPR Compliance
          </h1>
          <p style={heroLead}>
            Clear explainers and a glossary of the terms behind Digital Product
            Passports, blockchain traceability, and EU sustainability regulation
            — built for fashion brands navigating ESPR 2024.
          </p>
        </div>
      </section>

      {/* Intro positioning */}
      <section className="resources-intro-section">
        <div className="resources-intro-container">
          <div className="resources-intro-accent" aria-hidden="true" />
          <h2 style={{ ...pageH2OnLight, marginBottom: '20px' }}>
            Revolutionising Product Transparency and Circularity
          </h2>
          <p className="resources-intro-body">
            In an era of rising EU regulation and growing consumer demand for
            sustainable products, the EU Digital Product Passport (DPP) compliant
            StableDPP is your strategic advantage to prove data provenance in
            circular economy. Powered by permissioned blockchain technology,
            StableDPP&apos;s Digital Product Passport solutions deliver unmatched
            traceability, EU ESPR 2024 compliance, and new circular-economy
            business opportunities for fashion brands.
          </p>
        </div>
      </section>

      {/* ESPR Explainer */}
      <section className="resources-explainer-section" id="espr-explainer">
        <div className="resources-explainer-container">
          <header className="product-features-header">
            <div className="section-eyebrow">ESPR EXPLAINER</div>
            <h2 className="product-features-heading">
              EU Digital Product Passport &amp; ESPR 2024
            </h2>
            <p className="product-features-subheading">
              Front-loaded answers to the compliance questions fashion brands
              ask most.
            </p>
          </header>

          <div className="resources-explainer-grid">
            {RESOURCES_ESPR_EXPLAINER.map((item) => (
              <article key={item.q} className="resources-explainer-card">
                <h3 className="resources-explainer-card__title">{item.q}</h3>
                <p className="resources-explainer-card__body">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="resources-glossary-section" id="glossary">
        <div className="resources-glossary-container">
          <header className="product-features-header">
            <div className="section-eyebrow">DPP GLOSSARY</div>
            <h2 className="product-features-heading">
              DPP &amp; Blockchain Glossary
            </h2>
            <p className="product-features-subheading">
              Clear answers to the key questions behind Digital Product
              Passports, blockchain, and EU sustainability regulation.
            </p>
          </header>

          <div className="resources-glossary__accordion">
            {RESOURCES_GLOSSARY.map((item, index) => {
              const isOpen = openGlossary === index;
              return (
                <div
                  key={item.q}
                  className={`resources-glossary__row${isOpen ? ' is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="resources-glossary__trigger"
                    onClick={() => toggleGlossary(index)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="resources-glossary__question">{item.q}</h3>
                    <span className="resources-glossary__chevron" aria-hidden="true" />
                  </button>
                  {isOpen && (
                    <div className="resources-glossary__panel">
                      <p className="resources-glossary__answer">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
          <p
            style={{
              ...heroLead,
              marginBottom: '32px',
              color: '#94a8bc',
            }}
          >
            Start issuing blockchain-verified Digital Product Passports or book
            a personalised demo with our team.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="button"
              onClick={() => navigate('/get-started')}
              style={{
                background: '#1ac8b0',
                color: '#071528',
                border: 'none',
                borderRadius: '10px',
                padding: '14px 28px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  'translateY(-2px)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  '0 8px 24px rgba(26,200,176,0.35)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'none';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
              }}
            >
              Get Started Free
            </button>
            <button
              type="button"
              onClick={() => navigate('/book-a-demo')}
              style={{
                background: 'transparent',
                color: '#c8d8e8',
                border: '1px solid rgba(200,216,232,0.35)',
                borderRadius: '10px',
                padding: '14px 28px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  '#1ac8b0';
                (e.currentTarget as HTMLButtonElement).style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  'rgba(200,216,232,0.35)';
                (e.currentTarget as HTMLButtonElement).style.color = '#c8d8e8';
              }}
            >
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}
