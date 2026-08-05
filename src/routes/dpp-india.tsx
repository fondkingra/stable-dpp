import { DppIndiaPage } from "../app/components/DppIndiaPage";
import {
  buildRouteMeta,
  DPP_INDIA_BREADCRUMB_SCHEMA,
  DPP_INDIA_PAGE_FAQ_SCHEMA,
  DPP_INDIA_PAGE_SCHEMA,
} from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("dppIndia");
}

export default function Component() {
  return (
    <>
      <script
        type="application/ld+json"
        data-service-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DPP_INDIA_PAGE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        data-breadcrumb
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(DPP_INDIA_BREADCRUMB_SCHEMA),
        }}
      />
      <script
        type="application/ld+json"
        data-page-faq-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DPP_INDIA_PAGE_FAQ_SCHEMA) }}
      />
      <DppIndiaPage />
    </>
  );
}
