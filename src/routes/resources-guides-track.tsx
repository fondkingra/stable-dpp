import { useLocation } from "react-router";
import { GuideTrackPage } from "../app/components/GuideTrackPage";
import { GUIDE_TRACKS, type GuideTrack } from "../app/constants/guides";
import { buildBreadcrumbSchema, buildRouteMeta } from "../app/utils/seo";
import type { Route } from "./+types/resources-guides-track";

const SEO_KEYS = {
  exporters: "resourcesGuidesExporters",
  importers: "resourcesGuidesImporters",
} as const satisfies Record<GuideTrack, string>;

function trackFromPath(pathname: string): GuideTrack {
  return pathname.replace(/\/$/, "").endsWith("/importers") ? "importers" : "exporters";
}

export function meta({ location }: Route.MetaArgs) {
  return buildRouteMeta(SEO_KEYS[trackFromPath(location.pathname)]);
}

export default function Component() {
  const { pathname } = useLocation();
  const track = trackFromPath(pathname);
  const t = GUIDE_TRACKS[track];
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Guides", path: "/resources/guides" },
    { name: t.label, path: t.path },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        data-breadcrumb
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GuideTrackPage track={track} />
    </>
  );
}
