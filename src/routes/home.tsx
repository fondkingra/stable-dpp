import { HomePage } from "../app/components/HomePage";
import {
  buildRouteMeta,
  HOME_BREADCRUMB_SCHEMA,
  HOME_PAGE_FAQ_SCHEMA,
  WEBSITE_SCHEMA,
} from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("home");
}

export default function Component() {
  return (
    <>
      <script
        type="application/ld+json"
        data-website-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        data-page-faq-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_PAGE_FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        data-breadcrumb
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(HOME_BREADCRUMB_SCHEMA),
        }}
      />
      <HomePage />
    </>
  );
}
