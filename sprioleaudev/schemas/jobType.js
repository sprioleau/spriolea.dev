export default {
  name: "jobType",
  title: "Job Type",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    {
      name: "shouldHide",
      title: "Hide?",
      type: "boolean",
    },
    {
      name: "expandByDefault",
      title: "Expand by Default?",
      type: "boolean",
    },
    {
      name: "showSubLabel",
      title: "Show Sub-label?",
      type: "boolean",
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
      title: "type",
    },
  },
};
