import "@/styles/styles.scss";

import { Footer, InfoRails, Nav, StructuredData } from "@/components";
import { breadCrumbSchema, logoSchema, websiteSchema } from "@/seo/schemas";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San'Quan Prioleau - Frontend Engineeer",
  description: "Personal website of San'Quan Prioleau",
  applicationName: "sprioleau.dev",
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
