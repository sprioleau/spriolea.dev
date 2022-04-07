export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "overline",
      title: "Overline",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "email",
    },
  },
};
