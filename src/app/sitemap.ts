import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sprioleau.dev",
      lastModified: new Date(),
    },
    {
      url: "https://sprioleau.dev/projects/all",
      lastModified: new Date(),
    },
    // {
    //   url: "https://sprioleau.dev/about",
    //   lastModified: new Date(),
    // },
    // {
    //   url: "https://sprioleau.dev/experience",
    //   lastModified: new Date(),
    // },
    // {
    //   url: "https://sprioleau.dev/skills",
    //   lastModified: new Date(),
    // },
    // {
    //   url: "https://sprioleau.dev/work",
    //   lastModified: new Date(),
    // },
  ];
}
