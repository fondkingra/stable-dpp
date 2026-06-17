import { SolutionsPage } from "../app/components/SolutionsPage";
import { buildRouteMeta } from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("solutions");
}

export default function Component() {
  return <SolutionsPage />;
}
