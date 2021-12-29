export default {
  name: "navLink",
  title: "Nav Link",
  type: "document",
  fields: [
    {
      name: "navLabel",
      title: "Nav Label",
      type: "string",
    },
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    },
    {
      name: "sectionSlug",
      title: "Section Slug",
      type: "string",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
  ], 
  preview: {
    select: {
      title: "navLabel",
    },
  }
}
