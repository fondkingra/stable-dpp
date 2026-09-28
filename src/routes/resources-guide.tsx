import { Navigate, useLocation } from "react-router";
import { GuidePage } from "../app/components/GuidePage";
import {
  GUIDE_DETAILS,
  GUIDE_TRACKS,
  getGuideByPath,
  getGuidePath,
  type GuideTrack,
} from "../app/constants/guides";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildGuideDocumentSchema,
  buildGuideMeta,
  buildRouteMeta,
} from "../app/utils/seo";
import type { Route } from "./+types/resources-guide";

// Handles /resources/guides/{exporters|importers}/<slug>
// and /resources/guides/exporters/country/<country>.
function resolveGuide(pathname: string) {
  const match = pathname
    .replace(/\/$/, "")
    .match(/^\/resources\/guides\/(exporters|importers)\/(.+)$/);
  if (!match) return null;
  const track = match[1] as GuideTrack;
  const guide = getGuideByPath(track, match[2]);
  const detail = guide ? GUIDE_DETAILS[guide.id] : undefined;
  return { track, guide: guide?.live ? guide : undefined, detail };
}

export function meta({ location }: Route.MetaArgs) {
  const resolved = resolveGuide(location.pathname);
  if (!resolved?.guide || !resolved.detail) return buildRouteMeta("resourcesGuides");
  return buildGuideMeta({
    title: resolved.detail.metaTitle,
    description: resolved.detail.metaDescription,
    path: getGuidePath(resolved.guide),
  });
}

export default function Component() {
  const { pathname } = useLocation();
  const resolved = resolveGuide(pathname);

  if (!resolved) return <Navigate to="/resources/guides" replace />;
  const { track, guide, detail } = resolved;
  // Guides that are not published yet fall back to their track page.
  if (!guide || !detail) return <Navigate to={GUIDE_TRACKS[track].path} replace />;

  const path = getGuidePath(guide);
  const t = GUIDE_TRACKS[guide.track];
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Guides", path: "/resources/guides" },
    { name: t.label, path: t.path },
    { name: guide.title, path },
  ]);
  const documentSchema = buildGuideDocumentSchema({
    name: guide.title,
    description: detail.metaDescription,
    path,
    pages: guide.pages,
    genre: guide.type,
    audience: t.label,
  });
  const faqSchema = buildFaqSchema(`https://stabledpp.com${path}#faq`, detail.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        data-breadcrumb
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        data-guide-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(documentSchema) }}
      />
      <script
        type="application/ld+json"
        data-guide-faq-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GuidePage guide={guide} detail={detail} />
    </>
  );
}
