import { TermsAndConditionsPage } from "../app/components/TermsAndConditionsPage";

export function meta() {
  return [
    { title: "Privacy Policy | StableDPP" },
    {
      name: "description",
      content: "StableDPP privacy policy — how we collect, use, and protect your data.",
    },
    { tagName: "link", rel: "canonical", href: "https://stabledpp.com/privacy" },
  ];
}

export default function Component() {
  return <TermsAndConditionsPage />;
}
