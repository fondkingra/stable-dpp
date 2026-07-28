import { TermsAndConditionsPage } from "../app/components/TermsAndConditionsPage";
import { PRIVACY_BREADCRUMB_SCHEMA } from "../app/utils/seo";

export function meta() {
  return [
    { title: "Privacy Policy | StableDPP" },
    {
      name: "description",
      content: "StableDPP privacy policy — how we collect, use, and protect your data.",
    },
    { tagName: "link", rel: "canonical", href: "https://stabledpp.com/privacy-policy" },
  ];
}

export default function Component() {
  return (
    <>
      <script
        type="application/ld+json"
        data-breadcrumb
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PRIVACY_BREADCRUMB_SCHEMA),
        }}
      />
      <TermsAndConditionsPage page="privacy" />
    </>
  );
}
