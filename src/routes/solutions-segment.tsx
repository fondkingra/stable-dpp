import { useEffect } from "react";
import { useParams, Navigate } from "react-router";
import { SolutionsPage } from "../app/components/SolutionsPage";
import { buildRouteMeta, SOLUTIONS_PAGE_FAQ_SCHEMA, SOLUTIONS_PAGE_SCHEMA } from "../app/utils/seo";

const VALID_SEGMENTS = new Set(["fashion-brands", "manufacturers", "retailers"]);

export function meta() {
  return buildRouteMeta("solutions");
}

export default function Component() {
  const { segment = "" } = useParams();

  useEffect(() => {
    if (!VALID_SEGMENTS.has(segment)) return;
    requestAnimationFrame(() => {
      document.getElementById(segment)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [segment]);

  if (!VALID_SEGMENTS.has(segment)) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <>
      <script
        type="application/ld+json"
        data-service-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOLUTIONS_PAGE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        data-page-faq-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOLUTIONS_PAGE_FAQ_SCHEMA) }}
      />
      <SolutionsPage />
    </>
  );
}
