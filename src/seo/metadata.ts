/* eslint-disable import/prefer-default-export */

export const META = {
  DESCRIPTION: "San'Quan Prioleau is a Frontend Engineer with an eye for good design, who loves combining ideas to create new things.",
  IMAGE_URL: "http://sprioleau.dev/images/sprioleau-social-card.png",
  URL: "http://sprioleau.dev",
  TITLE: "San'Quan Prioleau - Frontend Engineer",
};

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
    content: META.TITLE,
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
    content: META.TITLE,
  },
  {
    property: "og:description",
    content: META.DESCRIPTION,
  },
  {
    property: "og:image",
    content: META.IMAGE_URL,
  },
];

export const schemaDotOrgMeta = [
  {
    itemProp: "name",
    content: META.TITLE,
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
];
