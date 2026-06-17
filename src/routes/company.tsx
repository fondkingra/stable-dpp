import { CompanyPage } from "../app/components/CompanyPage";
import { buildRouteMeta } from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("company");
}

export default function Component() {
  return <CompanyPage />;
}
