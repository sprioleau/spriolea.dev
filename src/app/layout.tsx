import "@/styles/styles.scss";

import { InfoRail, Nav, SkipToMainContentLink, StructuredData } from "@/components";
import { homepageMetadata, homepageViewport } from "@/seo";
import { breadCrumbSchema, logoSchema, websiteSchema } from "@/seo/schemas";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = homepageMetadata;
export const viewport = homepageViewport;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <SkipToMainContentLink route="/#about" />
          <Nav />
          <InfoRail />
          <main className="main">{children}</main>
        </div>
        <Analytics />
        <SpeedInsights />
        <StructuredData structuredData={[logoSchema, websiteSchema, breadCrumbSchema]} />
      </body>
    </html>
  );
}
