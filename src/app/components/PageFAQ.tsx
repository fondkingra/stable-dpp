export type FaqItem = { q: string; a: string };

type PageFAQProps = {
  id?: string;
  title?: string;
  faqs: readonly FaqItem[];
  defaultOpen?: number | null;
  tone?: 'default' | 'privacy' | 'platform';
  embedded?: boolean;
  showQaPrefix?: boolean;
};

export function PageFAQ({
  id = 'faq',
  title = 'Frequently Asked Questions',
  faqs,
  defaultOpen = 0,
  tone = 'default',
  embedded = false,
  showQaPrefix = false,
}: PageFAQProps) {
  const sectionClass = [
    'page-faq-section',
    `page-faq-section--${tone}`,
    embedded ? 'page-faq-section--embedded' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const accordionClass = `product-privacy-faq__accordion page-faq-accordion--${tone}`;

  const content = (
    <>
      <header
        className={
          embedded
            ? 'page-faq-header--embedded'
            : 'product-features-header'
        }
      >
        <h2
          id={`${id}-title`}
          className={
            embedded ? 'page-faq-title--embedded' : 'product-features-heading'
          }
        >
          {title}
        </h2>
      </header>

      <div className={accordionClass}>
        {faqs.map(({ q, a }, index) => {
          const panelId = `${id}-panel-${index}`;
          const triggerId = `${id}-trigger-${index}`;

          return (
            <details
              key={q}
              className="product-privacy-faq__row"
              open={defaultOpen === index ? true : undefined}
            >
              <summary
                id={triggerId}
                className="product-privacy-faq__trigger"
                aria-controls={panelId}
              >
                {showQaPrefix ? (
                  <span className="product-privacy-faq__question">
                    Q. {q}
                  </span>
                ) : (
                  <h3 className="page-faq__question">{q}</h3>
                )}
                <span className="product-privacy-faq__chevron" aria-hidden="true" />
              </summary>
              <div
                id={panelId}
                className="product-privacy-faq__panel is-open"
                role="region"
                aria-labelledby={triggerId}
              >
                <p className="product-privacy-faq__answer">
                  {showQaPrefix ? `A. ${a}` : a}
                </p>
              </div>
            </details>
          );
        })}
      </div>
    </>
  );

  if (embedded) {
    return (
      <div className={sectionClass} id={id} aria-labelledby={`${id}-title`}>
        <div className="page-faq-container page-faq-container--embedded">{content}</div>
      </div>
    );
  }

  return (
    <section className={sectionClass} id={id} aria-labelledby={`${id}-title`}>
      <div className="page-faq-container">{content}</div>
    </section>
  );
}
