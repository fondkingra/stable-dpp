import { BookDemoPage } from "../app/components/BookDemoPage";
import { buildRouteMeta, DEMO_PAGE_FAQ_SCHEMA, DEMO_PAGE_SCHEMA } from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("demo");
}

export default function Component() {
  return (
    <>
      <script
        type="application/ld+json"
        data-demo-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DEMO_PAGE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        data-page-faq-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DEMO_PAGE_FAQ_SCHEMA) }}
      />
      <BookDemoPage />
    </>
  );
}
