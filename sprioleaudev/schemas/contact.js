export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "gitHubUrl",
      title: "GitHub URL",
      type: "url",
    },
  ],

  preview: {
    select: {
      title: "name",
    },
  },
}
