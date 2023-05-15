import { defineType, defineArrayMember } from "sanity";

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export default defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      name: "block",
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {
          title: "Normal",
          value: "normal",
          component: ({ children }) => <>{children}</>,
        },
        {
          title: "H1",
          value: "h1",
          component: ({ children }) => <h1>{children}</h1>,
        },
        {
          title: "H2",
          value: "h2",
          component: ({ children }) => <h2>{children}</h2>,
        },
        {
          title: "H3",
          value: "h3",
          component: ({ children }) => <h3>{children}</h3>,
        },
        {
          title: "H4",
          value: "h4",
          component: ({ children }) => <h4>{children}</h4>,
        },
      ],
      lists: [
        {
          title: "Bullet",
          value: "bullet",
          component: ({ children }) => <>{children}</>,
        },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {
            title: "Emphasis",
            value: "em",
            component: ({ children }) => (
              <span style={{ textDecoration: "underline" }}>{children}</span>
            ),
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: "link",
            title: "URL",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
          {
            name: "internalProjectReference",
            title: "Internal Project Reference",
            type: "reference",
            icon: () => <>✨ Internal Project</>,
            to: {
              type: "internalProject",
            },
          },
        ],
      },
    }),
  ],
});
