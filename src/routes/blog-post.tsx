import { Navigate, useParams } from "react-router";
import { BlogPostPage } from "../app/components/BlogPostPage";
import { getBlogBySlug, isBlogSlug } from "../app/constants/blogs";
import {
  buildArticleSchema,
  buildBlogBreadcrumbSchema,
  buildFaqSchema,
  buildHowToSchema,
  buildRouteMeta,
  getBlogSeoKey,
  SEO_CONFIG,
} from "../app/utils/seo";

export function meta({ params }: { params: { slug?: string } }) {
  const seoKey = getBlogSeoKey(params.slug ?? "");
  return buildRouteMeta(seoKey ?? "blog", {
    ogType: seoKey ? "article" : "website",
  });
}

export default function Component() {
  const { slug = "" } = useParams();

  if (!isBlogSlug(slug)) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogBySlug(slug);
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const seoKey = getBlogSeoKey(slug);
  const canonical = seoKey
    ? SEO_CONFIG[seoKey].canonical
    : `https://stabledpp.com/blog/${slug}`;

  const breadcrumbSchema = buildBlogBreadcrumbSchema(post.title, canonical);
  const articleSchema = buildArticleSchema({
    headline: post.title,
    description: post.metaDescription,
    url: canonical,
    image: post.ogImage,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
  });
  const faqSchema = buildFaqSchema(`${canonical}#faq`, post.faqs);
  const howToSchema =
    post.howToSteps && post.howToSteps.length > 0
      ? buildHowToSchema({
          name: post.title,
          description: post.metaDescription,
          url: canonical,
          steps: post.howToSteps,
        })
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        data-breadcrumb
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        data-article-schema
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        data-blog-faq-schema
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          data-howto-schema
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(howToSchema),
          }}
        />
      )}
      <BlogPostPage post={post} />
    </>
  );
}
