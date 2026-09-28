import { GuidesLibraryPage } from "../app/components/GuidesLibraryPage";
import { buildBreadcrumbSchema, buildRouteMeta } from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("resourcesGuides");
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Guides", path: "/resources/guides" },
]);

export default function Component() {
  return (
    <>
      <script
        type="application/ld+json"
        data-breadcrumb
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GuidesLibraryPage />
    </>
  );
}
