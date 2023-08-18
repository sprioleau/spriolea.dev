import Document, { Head, Html, Main, NextScript } from "next/document";
import { StructuredData, MetaTag } from "../components";
import { twitterMeta, ogMeta, schemaDotOrgMeta, titleMeta, META } from "../seo/metadata";
import { breadCrumbSchema, logoSchema, websiteSchema } from "../seo/schemas";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="icon"
            href="/favicon.png"
          />
          <meta
            name="description"
            content={META.DESCRIPTION}
          />
          <link
            rel="manifest"
            href="/manifest.json"
          />
          <MetaTag data={titleMeta} />
          <MetaTag data={schemaDotOrgMeta} />
          <MetaTag data={ogMeta} />
          <MetaTag data={twitterMeta} />
          <link
            rel="stylesheet"
            href="https://use.typekit.net/hnv6eep.css"
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=Inter:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <StructuredData data={logoSchema} />
          <StructuredData data={websiteSchema} />
          <StructuredData data={breadCrumbSchema} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
