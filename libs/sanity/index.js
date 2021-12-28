/* eslint-disable no-param-reassign */
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset:  process.env.SANITY_STUDIO_API_DATASET,
  apiVersion: "2021-12-24",
  useCdn: true,
})

const queries = {
  employers: "*[_type == \"employer\"]",
  experience: "*[_type == \"experience\"] | order(fromDate desc) { ..., employer->, jobType-> }",
  hero: "*[_type == \"hero\"]",
  navLinks: "*[_type == \"navLink\"]",
  projects: "*[_type == \"project\"] { ..., builtWith->, builtFor->, tags-> }",
  skills: "*[_type == \"skill\"]",
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

const getData = async () => {
  const promises = Object.entries(queries).map(([key, query]) => getDataByKey(query, key));
  const unformattedData = await Promise.all(promises);

  const data = unformattedData.reduce((result, dataset) => {
    result[dataset.key] = dataset.data;
    return result;
  }, {})
  return { data };
}

export default getData;