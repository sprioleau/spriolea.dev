export default {
  name: "kudos",
  title: "Kudos",
  type: "document",
  fields: [
    {
      name: "quote",
      title: "Quote",
      type: "blockContent",
    },
    {
      name: "credit",
      title: "Credit",
      type: "reference",
      to: { type: "credit" },
    },
    {
      name: "project",
      title: "Project",
      type: "reference",
      to: { type: "internalProject" },
    },
  ],
  preview: {
    select: {
      title: "quote",
      creditName: "credit.name",
      projectName: "project.name",
    },
    prepare(selection) {
      const { title, creditName, projectName } = selection;
      const newTitle = title[0].children[0].text.split(" ").slice(0, 6).join(" ");
      return {
        title: newTitle,
        subtitle: `${projectName}, ${creditName}`,
      };
    },
  },
};
