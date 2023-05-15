import { defineType, defineField } from "sanity";

export default defineType({
  name: "association",
  title: "Association",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "name",
    },
  },
});
