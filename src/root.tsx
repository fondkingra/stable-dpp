import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import "./styles/index.css";
import { ORGANIZATION_SCHEMA } from "./app/utils/seo";

const softwareApplicationSchema = {
  "@context": "https://schema.org",
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
        <meta property="og:image" content="https://stabledpp.com/og-home.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://stabledpp.com/og-home.png" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <script
          type="application/ld+json"
          data-organization-schema
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_SCHEMA),
          }}
        />
        <script
          type="application/ld+json"
          data-software-schema
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
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
