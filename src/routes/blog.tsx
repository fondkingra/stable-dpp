import { BlogIndexPage } from "../app/components/BlogIndexPage";
import {
  buildRouteMeta,
  BLOG_BREADCRUMB_SCHEMA,
} from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("blog");
}

export default function Component() {
  return (
    <>
      <script
        type="application/ld+json"
        data-breadcrumb
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(BLOG_BREADCRUMB_SCHEMA),
        }}
      />
      <BlogIndexPage />
    </>
  );
}
