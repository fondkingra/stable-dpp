import { DppTextilesPage } from "../app/components/DppTextilesPage";
import {
  buildRouteMeta,
  DPP_TEXTILES_BREADCRUMB_SCHEMA,
  DPP_TEXTILES_PAGE_FAQ_SCHEMA,
  DPP_TEXTILES_PAGE_SCHEMA,
} from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("dppTextiles");
}

export default function Component() {
  return (
    <>
      <script
        type="application/ld+json"
        data-service-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DPP_TEXTILES_PAGE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        data-breadcrumb
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(DPP_TEXTILES_BREADCRUMB_SCHEMA),
        }}
      />
      <script
        type="application/ld+json"
        data-page-faq-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DPP_TEXTILES_PAGE_FAQ_SCHEMA) }}
      />
      <DppTextilesPage />
    </>
  );
}
