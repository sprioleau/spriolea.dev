import { Metadata } from "next";

const fullName = "San'Quan Prioleau";
const title = `${fullName} - Frontend Engineer`;
const description = `Personal website of ${fullName}`;
const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
const baseUrl = `${protocol}://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
const keywords = [
  fullName,
  "Portfolio",
  "Work",
  "Projects",
  "Web Development",
  "Frontend Engineer",
  "Software Engineer",
  "Full-Stack",
  "Full-Stack Engineer",
  "React",
  "TypeScript",
  "Atlanta",
];

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

const metadataBase = new URL(baseUrl);

export const homepageMetadata: Metadata = {
  title,
  description,
  applicationName: "sprioleau.dev",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/favicon.png",
  },
  viewport: {
    initialScale: 1,
    width: "device-width",
  },
  manifest: "/manifest.json",
  keywords,
  authors: [{ name: fullName, url: baseUrl }],
  colorScheme: "dark",
  creator: fullName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase,
  openGraph: {
    ...baseOgConfig,
    url: baseUrl,
    siteName: title,
    locale: "en-US",
    type: "website",
  },
  twitter: baseOgConfig,
};
