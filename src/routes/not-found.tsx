import { NotFoundPage } from "../app/components/NotFoundPage";

export function meta() {
  return [{ title: "Page Not Found | StableDPP" }];
}

export default function Component() {
  return <NotFoundPage />;
}
