import "@/styles/styles.scss";

import { Footer, InfoRails, Nav, StructuredData } from "@/components";
import { breadCrumbSchema, logoSchema, websiteSchema } from "@/seo/schemas";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

const fullName = "San'Quan Prioleau";
const title = `${fullName} - Frontend Engineer`;
const description = `Personal website of ${fullName}`;
const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
const baseUrl = `${protocol}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

console.log("🚀 ~ file: layout.tsx:15 ~ baseUrl:", { protocol, baseUrl });
const baseOgConfig = {
  title,
  description,
  images: [
    {
      url: "/images/sprioleau-social-card.png",
      width: 1200,
      height: 628,
      alt: description,
    },
  ],
};

export const metadata: Metadata = {
  title,
  description,
  applicationName: "sprioleau.dev",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [fullName, "Portfolio", "Web Development", "Frontend Engineer"],
  authors: [{ name: fullName, url: baseUrl }],
  colorScheme: "dark",
  creator: fullName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  openGraph: {
    ...baseOgConfig,
    url: baseUrl,
    siteName: title,
    locale: "en-US",
    type: "website",
  },
  twitter: baseOgConfig,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          {/* @ts-expect-error Async Server Component */}
          <Nav />
          {/* @ts-expect-error Async Server Component */}
          <InfoRails />
          <main className="main">{children}</main>
          {/* @ts-expect-error Async Server Component */}
          <Footer />
        </div>
        <section>
          <StructuredData data={logoSchema} />
          <StructuredData data={websiteSchema} />
          <StructuredData data={breadCrumbSchema} />
        </section>
        <Analytics />
      </body>
    </html>
  );
}
