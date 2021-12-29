import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charSet="UTF-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<link rel="icon" href="/favicon.png" />
					<meta name="description" content="San'Quan Prioleau is a frontend web developer with an eye for good design, who loves combining ideas to create new things." />
					<meta itemProp="name" content="San'Quan Prioleau" />
					<meta itemProp="description" content="San'Quan Prioleau is a frontend web developer with an eye for good design, who loves combining ideas to create new things." />
					<meta itemProp="image" content="http://sprioleau.dev/images/sprioleau-social-card.png" />
					<meta property="og:url" content="http://sprioleau.dev" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="San'Quan Prioleau" />
					<meta property="og:description" content="San'Quan Prioleau is a frontend web developer with an eye for good design, who loves combining ideas to create new things." />
					<meta property="og:image" content="http://sprioleau.dev/images/sprioleau-social-card.png" />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content="San'Quan Prioleau" />
					<meta name="twitter:description" content="San'Quan Prioleau is a frontend web developer with an eye for good design, who loves combining ideas to create new things." />
					<meta name="twitter:image" content="http://sprioleau.dev/images/sprioleau-social-card.png" />
					<meta name="description" content="San'Quan Prioleau is a frontend web developer with an eye for good design, who loves combining ideas to create new things." />
					<link rel="stylesheet" href="https://use.typekit.net/hnv6eep.css" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link rel="stylesheet" href="https://use.typekit.net/hnv6eep.css" />
					<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=Inter:wght@300;400;700&display=swap" rel="stylesheet" />
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
