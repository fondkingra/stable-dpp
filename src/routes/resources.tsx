import { ResourcesPage } from "../app/components/ResourcesPage";
import {
  buildRouteMeta,
  RESOURCES_DEFINED_TERM_SET_SCHEMA,
  RESOURCES_PAGE_FAQ_SCHEMA,
} from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("resources");
}

export default function Component() {
  return (
    <>
      <script
        type="application/ld+json"
        data-resources-faq-schema
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(RESOURCES_PAGE_FAQ_SCHEMA),
        }}
      />
      <script
        type="application/ld+json"
        data-resources-glossary-schema
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(RESOURCES_DEFINED_TERM_SET_SCHEMA),
        }}
      />
      <ResourcesPage />
    </>
  );
}
