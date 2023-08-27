export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "sectionName",
      title: "Section Name",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "sectionName",
    },
  },
};
