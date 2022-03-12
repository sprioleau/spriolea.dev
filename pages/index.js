import React from "react";
import Head from "next/head";
import {
  InfoRails, Nav, Main, Footer,
} from "../components";
import { fetchStaticSiteData } from "../libs/sanity";
import { composeClasses } from "../utils";

const Home = ({ data }) => {
  const { navLinks, footer, siteDetails } = data;
  const [navExpanded, setNavExpanded] = React.useState(false);

  const appClasses = composeClasses({
    app: "",
    "nav-expanded": navExpanded,
  });

  return (
    <div className={appClasses}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>San&apos;Quan Prioleau - Frontend Web Developer</title>
      </Head>
      <Nav navLinks={navLinks} navExpanded={navExpanded} setNavExpanded={setNavExpanded} />
      <InfoRails siteDetails={siteDetails} />
      <Main data={data} />
      <Footer content={footer} />
      <div className="accent-line" />
    </div>
  );
};

export default Home;

export const getStaticProps = async (context) => {
  const { data } = await fetchStaticSiteData();

  return {
    props: {
      data,
    },
  };
};
