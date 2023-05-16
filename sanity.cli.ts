import { SANITY_CONFIG } from "@/libs/sanity/config";
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: SANITY_CONFIG.PROJECT_ID,
    dataset: SANITY_CONFIG.DATASET,
  },
});
