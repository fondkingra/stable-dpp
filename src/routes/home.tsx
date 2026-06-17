import { HomePage } from "../app/components/HomePage";
import { buildRouteMeta } from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("home");
}

export default function Component() {
  return <HomePage />;
}
