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
      title: "Sub-Heading",
      type: "string",
    },
    {
      name: "brief",
      title: "Brief",
      type: "blockContent",
    },
    {
      name: "ctaLinkTarget",
      title: "CTA Link Target",
      type: "string",
    },
  ], 
  preview: {
    select: {
      title: "heading",
    },
  }
}
