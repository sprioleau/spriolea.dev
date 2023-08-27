import "@/styles/styles.scss";

import {
  InfoRail,
  Nav,
  SkipToMainContentLink,
  StructuredData,
} from "@/components";
import { breadCrumbSchema, logoSchema, websiteSchema } from "@/seo/schemas";

import { Analytics } from "@vercel/analytics/react";
import { homepageMetadata } from "@/seo";

export const metadata = homepageMetadata;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <SkipToMainContentLink route="/#about" />
          <Nav />
          <InfoRail />
          <main className="main">{children}</main>
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
