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
}
