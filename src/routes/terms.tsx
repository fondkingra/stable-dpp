import { TermsAndConditionsPage } from "../app/components/TermsAndConditionsPage";

export function meta() {
  return [
    { title: "Terms & Conditions | StableDPP" },
    {
      name: "description",
      content: "StableDPP terms and conditions for using our Digital Product Passport platform.",
    },
    { tagName: "link", rel: "canonical", href: "https://stabledpp.com/terms" },
  ];
}

export default function Component() {
  return <TermsAndConditionsPage />;
}
