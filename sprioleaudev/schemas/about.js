export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
    },
  ], 
  preview: {
    select: {
      title: "title",
      media: "mainImage"
    },
  }
}
