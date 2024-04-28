import { Footer, InfoRail, Nav, SkipToMainContentLink, Spotlight, StructuredData } from "@/components";
import ToastContainer from "@/components/ToastContainer";
import { homepageMetadata, homepageViewport } from "@/seo";
import { breadCrumbSchema, logoSchema, websiteSchema } from "@/seo/schemas";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/styles.scss";
import styles from "./layout.module.scss";

export const metadata = homepageMetadata;
export const viewport = homepageViewport;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <div className={styles["layout-background"]} />
          {/* <div className={styles["little-star"]}>
            <Star />
          </div> */}
          <SkipToMainContentLink route="/#about" />
          <Nav />
          <InfoRail />
          <main className="main">{children}</main>
          <Footer />
        </div>
        <ToastContainer />
        <Spotlight />
        <Analytics />
        <SpeedInsights />
        <StructuredData structuredData={[logoSchema, websiteSchema, breadCrumbSchema]} />
      </body>
    </html>
  );
}
