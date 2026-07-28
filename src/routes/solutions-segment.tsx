import { Navigate, useParams } from "react-router";
import { SolutionSegmentPage } from "../app/components/SolutionSegmentPage";
import {
  buildRouteMeta,
  buildSolutionSegmentBreadcrumbSchema,
  getSolutionSegmentSeoKey,
  type SolutionSegmentId,
} from "../app/utils/seo";

const VALID_SEGMENTS = new Set<SolutionSegmentId>([
  "fashion-brands",
  "manufacturers",
  "retailers",
]);

export function meta({ params }: { params: { segment?: string } }) {
  const seoKey = getSolutionSegmentSeoKey(params.segment ?? "");
  return buildRouteMeta(seoKey ?? "solutions");
}

export default function Component() {
  const { segment = "" } = useParams();

  if (!VALID_SEGMENTS.has(segment as SolutionSegmentId)) {
    return <Navigate to="/solutions" replace />;
  }

  const typedSegment = segment as SolutionSegmentId;
  const breadcrumbSchema = buildSolutionSegmentBreadcrumbSchema(typedSegment);

  return (
    <>
      <script
        type="application/ld+json"
        data-breadcrumb
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <SolutionSegmentPage segment={typedSegment} />
    </>
  );
}
