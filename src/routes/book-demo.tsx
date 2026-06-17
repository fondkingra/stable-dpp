import { BookDemoPage } from "../app/components/BookDemoPage";
import { buildRouteMeta } from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("demo");
}

export default function Component() {
  return <BookDemoPage />;
}
