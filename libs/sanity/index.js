/* eslint-disable no-param-reassign */
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"
import CONFIG from "../../config";
import apiStaticData from "../../data/apiStaticData";

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID,
  dataset:  process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET,
  apiVersion: "2021-12-24",
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}

const queries = {
  employers: "*[_type == \"employer\"]",
  experience: "*[_type == \"experience\"] | order(fromDate desc, order asc) { ..., employer->, jobType-> }",
  hero: "*[_type == \"hero\"]",
  about: "*[_type == \"about\"]",
  navLinks: "*[_type == \"navLink\"] | order(order asc)",
  projects: "*[_type == \"project\"] | order(isFeatured desc, yearBuilt desc) | order(order asc) { ..., builtWith[]->, builtFor->, tags[]-> }",
  skills: "*[_type == \"skill\"]",
  siteDetails: "*[_type == \"siteDetails\"]",
  contact: "*[_type == \"contact\"]",
  footer: "*[_type == \"footer\"]",
}

const getDataByKey = async (query, key) => {
  try {
    const data = await client.fetch(query);
    return { 
      key,
      data
    }
  } catch (error) {
    return {
      [key]: null,
      error
    }
  }
}

export const getData = async () => {
  const promises = Object.entries(queries).map(([key, query]) => getDataByKey(query, key));
  const unformattedData = await Promise.all(promises);

  const data = unformattedData.reduce((result, dataset) => {
    result[dataset.key] = dataset.data;
    return result;
  }, {})
  return { data };
}

const isDevelopment = process.env.NODE_ENV === "development";
	
export const fetchStaticSiteData = () => {
  if (isDevelopment && !CONFIG.USE_API) {
    return { data: apiStaticData };
  } else {
    return getData()
  }
}