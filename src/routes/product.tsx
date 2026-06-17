import { ProductPage } from "../app/components/ProductPage";
import { buildRouteMeta } from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("product");
}

export default function Component() {
  return <ProductPage />;
}
