
import Document, { Head, Html, Main, NextScript } from "next/document";
import { StructuredData, MetaTag } from "../components";
import { twitterMeta, ogMeta, schemaDotOrgMeta, titleMeta } from "../seo/metadata";
import { websiteSchema } from "../seo/schemas";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charSet="UTF-8" />
					<link rel="icon" href="/favicon.png" />
					<meta name="description" content="San'Quan Prioleau is a frontend web developer with an eye for good design, who loves combining ideas to create new things." />
					<MetaTag data={titleMeta} />
					<MetaTag data={schemaDotOrgMeta} />
					<MetaTag data={ogMeta} />
					<MetaTag data={twitterMeta} />
					<link rel="stylesheet" href="https://use.typekit.net/hnv6eep.css" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=Inter:wght@300;400;700&display=swap" rel="stylesheet" />
					<StructuredData data={websiteSchema} />
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
