import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import "./styles/index.css";

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
    {
      "@type": "FAQPage",
      "@id": "https://stabledpp.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What exactly is a Digital Product Passport?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A DPP is a structured digital record capturing a product's full lifecycle — materials, origin, certifications, repairability, and sustainability data — accessible via a single QR, NFC, or RFID scan. It's the EU's mechanism to enforce transparency across supply chains.",
          },
        },
        {
          "@type": "Question",
          name: "Do fashion brands really need this?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Under EU ESPR 2024, any fashion product sold in Europe must carry a compliant Digital Product Passport by 2027. Without it, products risk being held at customs or excluded from EU shelves entirely.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can we go live?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our platform gets your first passport live in minutes. No technical setup required. No credit card needed to start.",
          },
        },
        {
          "@type": "Question",
          name: "Why blockchain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Blockchain ensures every data point in the passport is tamper-proof and independently verifiable. Regulators and buyers can trust the data without relying on your word alone — turning claims into cryptographic proof.",
          },
        },
        {
          "@type": "Question",
          name: "Does it integrate with our existing systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We support portal upload, CSV/bulk upload, and API/ERP/PLM integration on the Enterprise plan. You bring the data in whatever format works — we handle the rest.",
          },
        },
      ],
    },
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
