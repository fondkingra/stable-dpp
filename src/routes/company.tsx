import { CompanyPage } from "../app/components/CompanyPage";
import { buildRouteMeta, COMPANY_PAGE_SCHEMA } from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("company");
}

export default function Component() {
  return (
    <>
      <script
        type="application/ld+json"
        data-company-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(COMPANY_PAGE_SCHEMA) }}
      />
      <CompanyPage />
    </>
  );
}
