/* eslint-disable import/prefer-default-export */

export const META = {
  DESCRIPTION: "San'Quan Prioleau is a frontend web developer with an eye for good design, who loves combining ideas to create new things.",
	IMAGE_URL: "http://sprioleau.dev/images/sprioleau-social-card.png",
	URL: "http://sprioleau.dev",
	NAME: "San'Quan Prioleau",
}

export const twitterMeta = [
	{
		property: "twitter:card",
		content: "summary_large_image",
	},
	{			
		property: "twitter:url",
		content: META.URL,
	},
	{
		property: "twitter:title",
		content: META.NAME,
	},
	{
		property: "twitter:description",
		content: META.DESCRIPTION,
	},
	{
		property: "twitter:image",
		content: META.IMAGE_URL,
	},
];

export const ogMeta = [
	{
		property: "og:url",
		content: META.URL,
	},
	{
		property: "og:type",
		content: "website",
	},
	{
		property: "og:title",
		content: META.NAME,
	},
	{
		property: "og:description",
		content: META.DESCRIPTION,
	},
	{
		property: "og:image",
		content: META.IMAGE_URL,
	}
];

export const schemaDotOrgMeta = [
	{
		itemProp: "name",
		content: META.NAME,
	},
	{
		itemProp: "description",
		content: META.DESCRIPTION,
	},
	{
		itemProp: "image",
		content: META.IMAGE_URL,
	},
];

export const titleMeta = [
	{
		name: "description",
		content: META.DESCRIPTION,
	},
]