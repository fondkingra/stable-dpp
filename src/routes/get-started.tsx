import { GetStartedPage } from "../app/components/GetStartedPage";
import { buildRouteMeta } from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("getStarted");
}

export default function Component() {
  return <GetStartedPage />;
}
