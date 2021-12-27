import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset:  process.env.SANITY_STUDIO_API_DATASET,
  apiVersion: "2021-12-24",
  useCdn: true,
})

const queries = {
  employers: {
    all: "*[_type == \"employer\"]",
  },
  experience: {
    all: "*[_type == \"experience\"]{ ..., employer-> }",
  },
}

const getData = async (query) => {
  try {
    const data = await client.fetch(query);
    return { 
      data,
      error: null,
    }
  } catch (error) {
    return {
      data: null,
      error
    }
  }
}

export const getEmployers = async () => {
  return getData(queries.employers.all)
}

export const getExperience = async () => {
  return getData(queries.experience.all)
}
