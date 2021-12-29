export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "emoji",
      title: "Emoji",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
    },
    {
      name: "isFeatured",
      title: "Featured",
      type: "boolean",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "links",
      title: "Links",
      type: "object",
      fields: [
        {
          name: "gitHubUrl",
          title: "GitHub URL",
          type: "url",
        },
        {
          name: "vsCodeUrl",
          title: "VS Code URL",
          type: "url",
        },
        {
          name: "deployedUrl",
          title: "Deployed URL",
          type: "url",
        },
      ]
    },
    {
      name: "builtFor",
      title: "Built For",
      type: "reference",
      to: { type: "association" }
    },
    {
      name: "builtWith",
      title: "Built With",
      type: "array",
      of: [{
        type: "reference",
        to: { type: "technology" }
      }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{
        type: "reference",
        to: { type: "tag" }
      }],
    },
    {
      name: "yearBuilt",
      title: "Year Built",
      type: "date",
      options: { dateFormat: "MMM YYYY" }
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      readOnly: true,
      initialValue: (new Date()).toISOString(),
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
}
