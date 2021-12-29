export default {
  name: "siteDetails",
  title: "Site Details",
  type: "document",
  fields: [
    {
      name: "siteName",
      title: "Site Name",
      type: "string",
    },
    {
      name: "creator",
      title: "Creator",
      type: "object",
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
          name: "links",
          title: "Links",
          type: "object",
          fields: [
            {
              name: "gitHubUrl",
              title: "GitHub URL",
              type: "url",
            },
          ]
        },
      ]
    },
    {
      name: "meta",
      title: "Meta",
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
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "mainImage",
          title: "Main Image",
          type: "image",
        },
      ]
    },
  ],

  preview: {
    select: {
      title: "siteName",
    },
  },
}
