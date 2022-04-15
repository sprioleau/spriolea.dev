import { useRouter } from "next/router";
import React from "react";
import { fetchStaticSiteData } from "../libs/sanity";

const PageSection = ({ navLinks }) => {
  const router = useRouter();
  const { path } = router.query;

  React.useEffect(() => {
    if (!path || navLinks?.length === 0) return null;

    const pageSectionIds = navLinks.map(({ sectionSlug }) => sectionSlug) ?? [];

    document.querySelector("html").style.scrollBehavior = "auto";

    const navigateToPath = pageSectionIds.includes(path[0])
      ? `/#${path[0]}`
      : "/";

    return router.push(navigateToPath);
  }, [path, router, navLinks]);

  return null;
};

export default PageSection;

export async function getStaticPaths() {
  const { data: { navLinks } } = await fetchStaticSiteData();

  const paths = navLinks.map(({ sectionSlug }) => ({
    params: { path: [sectionSlug] },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps() {
  const { data: { navLinks } } = await fetchStaticSiteData();

  return {
    props: {
      navLinks,
    },
  };
}
