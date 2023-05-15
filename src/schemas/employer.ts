export default {
  name: "employer",
  title: "Employer",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "webAddress",
      title: "Web Address",
      type: "url",
    },
    {
      name: "alt",
      title: "Alternative Text",
      type: "string",
      desription: "Describe contents of image. Expecially useful for screen readers and improved accessibility.",
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
      title: "name",
      media: "logo",
    },
  },
};
