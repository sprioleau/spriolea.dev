export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "techName",
      title: "Tech Name",
      type: "string",
      description: "Shortened version of technology name used in the tech industry, such as NPM"
    },
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
      description: "Longform version of name"
    },
    {
      name: "experienceYears",
      title: "Years of experience",
      type: "number",
      description: "Longform version of name"
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          {
            title: "Web Design",
            value: "Web Design"
          },
          {
            title: "Technologies",
            value: "Technologies",
          },
          {
            title: "Testing",
            value: "Testing",
          },
          {
            title: "Core Concepts",
            value: "Core Concepts",
          },
        ],
        layout: "grid"
      }
    },
    {
      name: "iconKey",
      title: "Icon Key",
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
      title: "techName",
    },
  },
}
