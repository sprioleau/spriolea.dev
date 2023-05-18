import "@/styles/styles.scss";

import { Footer, InfoRails, Nav, StructuredData } from "@/components";
import { NavLink, SiteDetails } from "@/schemas/types";
import { breadCrumbSchema, logoSchema, websiteSchema } from "@/seo/schemas";
import { client, queries } from "@/libs/sanity";

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
  const [navLinks, siteDetails] = await Promise.all([
    client.fetch<NavLink[]>(queries.navLinks),
    client.fetch<SiteDetails[]>(queries.siteDetails),
  ]);

  return (
    <html lang="en">
      <body>
        <div className="app">
          {/* @ts-expect-error Async Server Component */}
          <Nav navLinks={navLinks} />
          {/* @ts-expect-error Async Server Component */}
          <InfoRails siteDetails={siteDetails} />
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
