/* eslint-disable import/prefer-default-export */

// TODO: Review to see what is needed

export const logoSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "https://www.sprioleau.dev",
  logo: "https://www.sprioleau.dev/images/logo-seo.png",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "S. Prioleau",
  about:
    "San'Quan Prioleau is a Senior Frontend Engineer with an eye for good design, who loves combining ideas to create new things.",
  creator: {
    "@type": "Person",
    givenName: "San'Quan",
    familyName: "Prioleau",
  },
};

export const breadCrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "About",
      item: "https://www.sprioleau.dev#about",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Experience",
      item: "https://www.sprioleau.dev#experience",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Work",
      item: "https://www.sprioleau.dev#work",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Skills",
      item: "https://www.sprioleau.dev#skills",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contact",
      item: "https://www.sprioleau.dev#contact",
    },
  ],
};
