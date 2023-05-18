import { SANITY_CONFIG } from "./config";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: SANITY_CONFIG.PROJECT_ID,
  dataset: SANITY_CONFIG.DATASET,
  apiVersion: SANITY_CONFIG.API_VERSION,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

export const queries = {
  hero: '*[_type == "hero"][0]',
  siteDetails: '*[_type == "siteDetails"][0]',
  about: '*[_type == "about"][0]',
  employers: '*[_type == "employer"]',
  experience:
    '*[_type == "experience"] | order(fromDate desc, order asc) { ..., employer->, jobType-> }',
  kudos: '*[_type=="kudos"] { ..., credit->, project->}',
  jobTypes: '*[_type == "jobType"]',
  navLinks: '*[_type == "navLink"] | order(order asc)',
  projects:
    '*[_type == "project"] | order(isFeatured desc, yearBuilt desc) | order(order asc) { ..., builtWith[]->, builtFor->, tags[]-> }',
  skills: '*[_type == "skill"]',
  contact: '*[_type == "contact"][0]',
  footer: '*[_type == "footer"][0]',
} as const;
