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
  employers: '*[_type == "employer"]',
  experience:
    '*[_type == "experience"] | order(fromDate desc, order asc) { ..., employer->, jobType-> }',
  jobTypes: '*[_type == "jobType"]',
  hero: '*[_type == "hero"]',
  about: '*[_type == "about"]',
  navLinks: '*[_type == "navLink"] | order(order asc)',
  projects:
    '*[_type == "project"] | order(isFeatured desc, yearBuilt desc) | order(order asc) { ..., builtWith[]->, builtFor->, tags[]-> }',
  kudos: '*[_type=="kudos"] { ..., credit->, project->}',
  skills: '*[_type == "skill"]',
  siteDetails: '*[_type == "siteDetails"]',
  contact: '*[_type == "contact"]',
  footer: '*[_type == "footer"]',
} as const;
