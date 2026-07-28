import { Link } from "react-router";
import { SharedNav, SharedFooter } from "./SharedNav";
import { PageBreadcrumb } from "./PageBreadcrumb";
import { PageFAQ } from "./PageFAQ";
import { BlogPostContent } from "./BlogPostContent";
import {
  BLOG_AUTHOR,
  formatBlogDate,
  getRelatedPosts,
  type BlogPostMeta,
} from "../constants/blogs";
import {
  pageH1OnDark,
  pageH2OnLight,
} from "../styles/typography";

type BlogPostPageProps = {
  post: BlogPostMeta;
};

export function BlogPostPage({ post }: BlogPostPageProps) {
  const related = getRelatedPosts(post.slug);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fafaf8",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <SharedNav />

      <section className="blog-post-hero">
        <div className="blog-post-hero__inner">
          <PageBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.crumbLabel },
            ]}
          />
          <h1 style={{ ...pageH1OnDark, marginBottom: "28px" }}>{post.title}</h1>
          <div className="blog-post-byline">
            <div>
              <div className="blog-post-byline__name">{BLOG_AUTHOR.name}</div>
              <div className="blog-post-byline__role">{BLOG_AUTHOR.jobTitle}</div>
            </div>
            <div className="blog-post-byline__meta">
              <time dateTime={post.datePublished}>
                {formatBlogDate(post.datePublished)}
              </time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
            </div>
          </div>
        </div>
      </section>

      <div className="blog-post-layout">
        <figure className="blog-post-featured">
          <img src={post.image} alt={post.imageAlt} />
        </figure>

        <article className="blog-post-article">
          <BlogPostContent slug={post.slug} />
        </article>

        <PageFAQ
          id={`blog-${post.slug}-faq`}
          faqs={post.faqs}
          embedded
          tone="platform"
          defaultOpen={0}
        />

        {related.length > 0 && (
          <section className="blog-related" aria-labelledby="related-posts-title">
            <h2
              id="related-posts-title"
              style={{ ...pageH2OnLight, fontSize: "clamp(20px, 2.5vw, 28px)" }}
            >
              Related articles
            </h2>
            <div className="blog-related__grid">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="blog-related__card"
                >
                  <img src={item.image} alt="" aria-hidden="true" />
                  <div>
                    <div className="blog-related__title">{item.title}</div>
                    <div className="blog-related__meta">
                      {item.readingMinutes} min read
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <SharedFooter />
    </div>
  );
}
