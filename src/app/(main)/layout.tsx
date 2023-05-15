import "@/styles/styles.scss";

import { Footer, InfoRails, Nav, StructuredData } from "@/components";
import { IBM_Plex_Mono, Inter, Quattrocento } from "next/font/google";
import { breadCrumbSchema, logoSchema, websiteSchema } from "@/seo/schemas";

import { Analytics } from "@vercel/analytics/react";
// import { BASE_URL } from "@/contants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San'Quan Prioleau - Frontend Engineeer",
  description: "Personal website of San'Quan Prioleau",
  applicationName: "sprioleau.dev",
  // metadataBase: new URL(BASE_URL),
};

// Local fonts reference: https://beta.nextjs.org/docs/optimizing/fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ss",
  display: "swap",
});
const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${quattrocento.variable} ${ibmPlexMono.variable}`}
    >
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
