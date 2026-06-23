import type { Config } from "@react-router/dev/config";

const SEO_ROUTES = [
  "/",
  "/product",
  "/solutions",
  "/company",
  "/book-a-demo",
  "/get-started",
  "/signin",
  "/terms",
  "/privacy-policy",
] as const;

export default {
  appDirectory: "src",
  ssr: false,
  prerender: [...SEO_ROUTES],
} satisfies Config;
