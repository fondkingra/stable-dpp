import { CompanyPage } from "../app/components/CompanyPage";
import {
  buildRouteMeta,
  COMPANY_PAGE_FAQ_SCHEMA,
  COMPANY_PAGE_SCHEMA,
  COMPANY_BREADCRUMB_SCHEMA,
  COMPANY_FOUNDER_PERSON_SCHEMAS,
} from "../app/utils/seo";

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
      {COMPANY_FOUNDER_PERSON_SCHEMAS.map((person) => (
        <script
          key={person.name}
          type="application/ld+json"
          data-founder-person-schema
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      ))}
      <script
        type="application/ld+json"
        data-breadcrumb
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(COMPANY_BREADCRUMB_SCHEMA),
        }}
      />
      <script
        type="application/ld+json"
        data-page-faq-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(COMPANY_PAGE_FAQ_SCHEMA) }}
      />
      <CompanyPage />
    </>
  );
}
