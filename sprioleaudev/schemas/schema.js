// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// We import object and document schemas
// import blockContent from "./blockContent"
import experience from "./experience"
import employer from "./employer"
import blockContent from "./blockContent"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "S. Prioleau",
  types: schemaTypes.concat([
    experience,
    employer,
    blockContent,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
})
