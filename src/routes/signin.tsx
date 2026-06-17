import { SignInPage } from "../app/components/SignInPage";
import { buildRouteMeta } from "../app/utils/seo";

export function meta() {
  return buildRouteMeta("signin");
}

export default function Component() {
  return <SignInPage />;
}
