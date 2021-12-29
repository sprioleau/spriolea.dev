export default {
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    {
      name: "overline",
      title: "Overline",
      type: "string",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subHeading",
      title: "Sub-heading",
      type: "string",
    },
    {
      name: "brief",
      title: "Brief",
      type: "blockContent",
    },
    {
      name: "advanceToSectionSlug",
      title: "Advance to Section Slug",
      type: "string",
    },
    {
      name: "cta",
      title: "CTA",
      type: "object",
      fields: [
        {
          name: "linkTarget",
          title: "Link Target",
          type: "string",
        },
        {
          name: "label",
          title: "Label",
          type: "string",
        },
      ]
    },
  ], 
  preview: {
    select: {
      title: "heading",
    },
  }
}
