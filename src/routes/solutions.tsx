import { SolutionsPage } from "../app/components/SolutionsPage";
import {
  buildRouteMeta,
  SOLUTIONS_BREADCRUMB_SCHEMA,
  SOLUTIONS_PAGE_FAQ_SCHEMA,
  SOLUTIONS_PAGE_SCHEMA,
} from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("solutions");
}

export default function Component() {
  return (
    <>
      <script
        type="application/ld+json"
        data-service-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOLUTIONS_PAGE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        data-breadcrumb
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SOLUTIONS_BREADCRUMB_SCHEMA),
        }}
      />
      <script
        type="application/ld+json"
        data-page-faq-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOLUTIONS_PAGE_FAQ_SCHEMA) }}
      />
      <SolutionsPage />
    </>
  );
}
