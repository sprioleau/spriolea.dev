/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import experience from "./experience";
import employer from "./employer";
import blockContent from "./blockContent";
import jobType from "./jobType";
import hero from "./hero";
import about from "./about";
import navLink from "./navLink";
import project from "./project";
import tag from "./tag";
import technology from "./technology";
import association from "./association";
import skill from "./skill";
import contact from "./contact";
import footer from "./footer";
import siteDetails from "./siteDetails";
import kudos from "./kudos";
import internalProject from "./internalProject";
import credit from "./credit";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "S. Prioleau",
  types: schemaTypes.concat([
    experience,
    employer,
    blockContent,
    jobType,
    kudos,
    internalProject,
    credit,
    hero,
    about,
    navLink,
    project,
    tag,
    technology,
    association,
    skill,
    contact,
    footer,
    siteDetails,
  ]),
});
