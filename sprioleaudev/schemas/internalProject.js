export default {
  name: "internalProject",
  title: "Internal Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "name",
    },
  },
};
