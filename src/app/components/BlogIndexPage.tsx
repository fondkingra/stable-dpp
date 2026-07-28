import { Link } from "react-router";
import { SharedNav, SharedFooter } from "./SharedNav";
import { PageBreadcrumb } from "./PageBreadcrumb";
import { BLOG_POSTS, formatBlogDate } from "../constants/blogs";
import {
  pageH1OnDark,
  pageH2OnDark,
  heroEyebrow,
  heroLead,
} from "../styles/typography";

export function BlogIndexPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fafaf8",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <SharedNav />

      <section
        style={{
          background:
            "linear-gradient(160deg, #071528 0%, #0a1f3c 60%, #0d2a4a 100%)",
          padding: "96px 24px 80px",
        }}
      >
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <PageBreadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          />
          <div style={heroEyebrow}>BLOG</div>
          <h1 style={{ ...pageH1OnDark, marginBottom: "24px" }}>
            Digital Product Passport Insights
          </h1>
          <p style={heroLead}>
            Practical guides on Digital Product Passports, EU ESPR 2024, and how
            fashion brands can get compliance-ready — written for teams building
            verifiable product data.
          </p>
        </div>
      </section>

      <section className="blog-index-section">
        <div className="blog-index-grid">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="blog-card">
              <Link
                to={`/blog/${post.slug}`}
                className="blog-card__media"
                aria-label={post.title}
              >
                <img src={post.image} alt={post.imageAlt} loading="lazy" />
              </Link>
              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <time dateTime={post.datePublished}>
                    {formatBlogDate(post.datePublished)}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingMinutes} min read</span>
                </div>
                <h2 className="blog-card__title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="blog-card__cta">
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(160deg, #071528 0%, #0a1f3c 100%)",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ ...pageH2OnDark, marginBottom: "16px" }}>
            Ready to issue your first passport?
          </h2>
          <p
            style={{
              ...heroLead,
              marginBottom: "32px",
              color: "#94a8bc",
            }}
          >
            Start free, or book a demo to see a live Digital Product Passport for
            your products.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
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
