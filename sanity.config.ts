import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./src/schemas";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "sprioleaudotdev",
  title: "Personal Site - San'Quan Prioleau",

  projectId: "76u9ka0u",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
