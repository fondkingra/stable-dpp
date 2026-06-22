import { SolutionsPage } from "../app/components/SolutionsPage";
import { buildRouteMeta, SOLUTIONS_PAGE_SCHEMA } from "../app/utils/seo";

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
      <SolutionsPage />
    </>
  );
}
