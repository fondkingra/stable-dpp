import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import "./styles/index.css";
import { HOME_PAGE_FAQ_SCHEMA } from "./app/utils/seo";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://stabledpp.com/#organization",
      name: "StableDPP",
      description:
        "EU ESPR 2024 compliant Digital Product Passport platform for fashion brands",
      url: "https://stabledpp.com",
      logo: {
        "@type": "ImageObject",
        url: "https://stabledpp.com/logo.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@stabledpp.com",
      },
      knowsAbout: [
        "Digital Product Passport",
        "EU ESPR Regulation",
        "Blockchain",
        "Fashion Supply Chain",
        "GS1 Digital Link",
      ],
      sameAs: ["https://www.linkedin.com/company/stabledpp"],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://stabledpp.com/#software",
      name: "StableDPP Digital Product Passport Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://stabledpp.com",
      description:
        "Blockchain-verified Digital Product Passport platform for fashion brands - EU ESPR 2024 compliant",
      provider: {
        "@id": "https://stabledpp.com/#organization",
      },
    },
    HOME_PAGE_FAQ_SCHEMA,
    {
      "@type": "BreadcrumbList",
      "@id": "https://stabledpp.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://stabledpp.com/",
        },
      ],
    },
  ],
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="StableDPP" />
        <meta name="theme-color" content="#1ac8b0" />
        <meta property="og:site_name" content="StableDPP" />
        <meta property="og:image" content="https://stabledpp.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://stabledpp.com/logo.png" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Meta />
        <Links />

        <style>{`html, body { height: 100%; margin: 0; }`}</style>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
              const p = new URLSearchParams(window.location.search).get("p");
              if (p) {
                window.history.replaceState(null, "", p);
              }
            })();`,
          }}
        />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
