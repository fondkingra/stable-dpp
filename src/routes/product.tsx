import { ProductPage } from "../app/components/ProductPage";
import {
  buildRouteMeta,
  PRODUCT_PAGE_SCHEMA,
  PRODUCT_PAGE_FAQ_SCHEMA,
  PRODUCT_PRIVACY_FAQ_SCHEMA,
  PRODUCT_SOFTWARE_SCHEMA,
  PRODUCT_BREADCRUMB_SCHEMA,
} from "../app/utils/seo";

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
        data-product-software-schema
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PRODUCT_SOFTWARE_SCHEMA),
        }}
      />
      <script
        type="application/ld+json"
        data-breadcrumb
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PRODUCT_BREADCRUMB_SCHEMA),
        }}
      />
      <script
        type="application/ld+json"
        data-privacy-faq-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_PRIVACY_FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        data-page-faq-schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_PAGE_FAQ_SCHEMA) }}
      />
      <ProductPage />
    </>
  );
}
