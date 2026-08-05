import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("product", "routes/product.tsx"),
  route("solutions", "routes/solutions.tsx"),
  route("solutions/:segment", "routes/solutions-segment.tsx"),
  route("digital-product-passport-india", "routes/dpp-india.tsx"),
  route("dpp-for-textiles", "routes/dpp-textiles.tsx"),
  route("resources", "routes/resources.tsx"),
  route("company", "routes/company.tsx"),
  route("blog", "routes/blog.tsx"),
  route("blog/:slug", "routes/blog-post.tsx"),
  route("book-a-demo", "routes/book-demo.tsx"),
  route("signin", "routes/signin.tsx"),
  route("get-started", "routes/get-started.tsx"),
  route("terms", "routes/terms.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("create-dpp", "routes/create-dpp.tsx"),
  route("create/:productType", "routes/create.tsx"),
  route("passport/:productType", "routes/passport.tsx"),
  route("test-3d", "routes/test-3d.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
