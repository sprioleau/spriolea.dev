import { useRouter } from "next/router";
import React from "react";

const PageSection = () => {
  const router = useRouter();
  const { path } = router.query;

  React.useEffect(() => {
    const pageSectionIds = [
      "about",
      "experience",
      "work",
      "skills",
      "contact",
    ];

    if (!path) return null;

    document.querySelector("html").style.scrollBehavior = "auto";

    const navigateToPath = pageSectionIds.includes(path[0])
      ? `/#${path[0]}`
      : "/";

    return router.push(navigateToPath);
  }, [path, router]);

  return null;
};

export default PageSection;
