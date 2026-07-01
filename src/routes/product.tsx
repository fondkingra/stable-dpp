import { ProductPage } from "../app/components/ProductPage";
import { buildRouteMeta, PRODUCT_PAGE_SCHEMA, PRODUCT_PRIVACY_FAQ_SCHEMA } from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("product");
}

export default function Component() {
  return (
    <>
      <script
        type="application/ld+json"
        data-product-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_PAGE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        data-privacy-faq-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_PRIVACY_FAQ_SCHEMA) }}
      />
      <ProductPage />
    </>
  );
}
