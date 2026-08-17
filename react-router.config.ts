import type { Config } from "@react-router/dev/config";

const SEO_ROUTES = [
  "/",
  "/product/",
  "/solutions/",
  "/solutions/fashion-brands/",
  "/solutions/manufacturers/",
  "/solutions/retailers/",
  "/digital-product-passport-india/",
  "/dpp-for-textiles/",
  "/create-dpp/",
  "/resources/",
  "/company/",
  "/blog/",
  "/blog/what-is-a-digital-product-passport/",
  "/blog/espr-regulation-2024-1781-explained/",
  "/blog/how-to-create-a-digital-product-passport/",
  "/blog/digital-product-passport-cost/",
  "/blog/digital-product-passport-textile-manufacturers/",
  "/blog/gs1-digital-link-digital-product-passport/",
  "/book-a-demo/",
  "/get-started/",
  "/signin/",
  "/terms/",
  "/privacy-policy/",
] as const;

export default {
  appDirectory: "src",
  ssr: false,
  prerender: [...SEO_ROUTES],
} satisfies Config;
