import { useState } from 'react';
import { Link } from 'react-router';
import emailjs from '@emailjs/browser';
import { SharedNav, SharedFooter } from './SharedNav';
import { PageFAQ } from './PageFAQ';
import { GuidesHero, GuideCard, GuidesDemoCta } from './GuideComponents';
import { EMAILJS_CONFIG } from '../constants';
import {
  GUIDE_DOWNLOAD_COUNTRIES,
  GUIDE_DOWNLOAD_ROLES,
  GUIDE_TRACKS,
  formatGuidePages,
  getGuideById,
  type GuideDetail,
  type GuideSummary,
} from '../constants/guides';

type DownloadForm = {
  name: string;
  company: string;
  email: string;
  country: string;
  role: string;
};

const EMPTY_FORM: DownloadForm = { name: '', company: '', email: '', country: '', role: '' };

function GuideDownloadForm({ guide, detail }: { guide: GuideSummary; detail: GuideDetail }) {
  const [form, setForm] = useState<DownloadForm>(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          phone: 'Not provided',
          company: form.company,
          job_title: form.role,
          num_products: 'Not specified',
          primary_market: form.country,
          message: `Guide download: ${guide.id} — ${guide.title}`,
        },
        EMAILJS_CONFIG.publicKey,
      );
      setSubmitted(true);
    } catch {
      setError(
        'We could not send your details. Please try again, or email us at info@stabledpp.com and we will send you the guide.',
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="guide-form guide-form--done" role="status">
        <h2 className="guide-form__title">Your guide is ready</h2>
        <p className="guide-form__note">
          Thanks, {form.name.split(' ')[0]}. Download the full PDF below.
        </p>
        <a
          href={detail.pdfPath}
          className="guide-btn guide-btn--primary guide-btn--block"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Download the PDF ({formatGuidePages(guide.pages)})
        </a>
      </div>
    );
  }

  return (
    <form className="guide-form" onSubmit={handleSubmit}>
      <h2 className="guide-form__title">Download the free guide</h2>
      <p className="guide-form__note">
        {guide.type} · {formatGuidePages(guide.pages)} · PDF
      </p>

      <div className="guide-field">
        <label htmlFor="guide-name">Name *</label>
        <input id="guide-name" name="name" type="text" autoComplete="name" required value={form.name} onChange={handleChange} />
      </div>
      <div className="guide-field">
        <label htmlFor="guide-company">Company *</label>
        <input id="guide-company" name="company" type="text" autoComplete="organization" required value={form.company} onChange={handleChange} />
      </div>
      <div className="guide-field">
        <label htmlFor="guide-email">Work email *</label>
        <input id="guide-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={handleChange} />
      </div>
      <div className="form-row-2col guide-field-row">
        <div className="guide-field">
          <label htmlFor="guide-country">Country *</label>
          <select id="guide-country" name="country" required value={form.country} onChange={handleChange}>
            <option value="">Select country</option>
            {GUIDE_DOWNLOAD_COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="guide-field">
          <label htmlFor="guide-role">Role *</label>
          <select id="guide-role" name="role" required value={form.role} onChange={handleChange}>
            <option value="">Select role</option>
            {GUIDE_DOWNLOAD_ROLES.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className="guide-btn guide-btn--primary guide-btn--block" disabled={loading}>
        {loading ? 'Sending…' : 'Get the guide'}
      </button>

      {error && (
        <p className="guide-form__error" role="alert">
          {error}
        </p>
      )}

      <p className="guide-form__legal">
        Your data is handled in accordance with our{' '}
        <Link to="/privacy-policy">Privacy Policy</Link> and EU GDPR guidelines. We never sell or share your information.
      </p>
    </form>
  );
}

export function GuidePage({ guide, detail }: { guide: GuideSummary; detail: GuideDetail }) {
  const track = GUIDE_TRACKS[guide.track];
  const related = detail.related
    .map((id) => getGuideById(id))
    .filter((g): g is GuideSummary => Boolean(g));

  return (
    <div className="guides-page">
      <SharedNav />

      <GuidesHero
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Resources', href: '/resources' },
          { label: 'Guides', href: '/resources/guides' },
          { label: track.label, href: track.path },
          { label: guide.title },
        ]}
        eyebrow={guide.type.toUpperCase()}
        title={guide.title}
      >
        <dl className="guide-hero-meta">
          <div>
            <dt>Type</dt>
            <dd>{guide.type}</dd>
          </div>
          <div>
            <dt>Length</dt>
            <dd>{formatGuidePages(guide.pages)}</dd>
          </div>
          <div>
            <dt>Last reviewed</dt>
            <dd>{detail.lastReviewed}</dd>
          </div>
        </dl>
      </GuidesHero>

      <section className="guides-section guides-section--white">
        <div className="guide-layout">
          <div className="guide-layout__main">
            <h2 className="guide-h2">What this guide covers</h2>
            {detail.summary.map((p) => (
              <p key={p} className="guide-body">{p}</p>
            ))}

            <h2 className="guide-h2">Who it is for</h2>
            <ul className="guide-list">
              {detail.audience.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>

            <h2 className="guide-h2">Contents</h2>
            <ol className="guide-toc">
              {detail.toc.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <aside id="download" className="guide-layout__aside" aria-label="Download the guide">
            <GuideDownloadForm guide={guide} detail={detail} />
          </aside>
        </div>
      </section>

      <PageFAQ id="faq" faqs={detail.faqs} />

      {related.length > 0 && (
        <section className="guides-section guides-section--white">
          <div className="guides-container">
            <header className="product-features-header">
              <div className="section-eyebrow">RELATED GUIDES</div>
              <h2 className="product-features-heading">Read next</h2>
            </header>
            <div className="guide-grid">
              {related.map((g) => (
                <GuideCard key={g.id} guide={g} />
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
