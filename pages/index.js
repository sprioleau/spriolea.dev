import React from "react"
import Head from "next/head";
import {
  ApolloClient,
  InMemoryCache,
	gql,
	createHttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { InfoRails, Nav, Main, Footer } from "../components";
import getData from "../libs/sanity";
import CONFIG from "../config";
import apiStaticData from "../data/apiStaticData";

const Home = ({ data, visits, pageViews }) => {
	const { navLinks, footer, siteDetails } = data;
	const [navExpanded, setNavExpanded] = React.useState(false);

	return (
		<div className={["app", navExpanded ? "nav-expanded" : ""].join(" ").trim()}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>San&apos;Quan Prioleau</title>
			</Head>
			<Nav navLinks={navLinks} navExpanded={navExpanded} setNavExpanded={setNavExpanded} />
			<InfoRails siteDetails={siteDetails} />
			<Main data={data} />
			<Footer content={footer} visits={visits} pageViews={pageViews} />
			<div className="accent-line" />
		</div>
	);
};

export default Home;

export const getStaticProps = async (context) => {
	const isDevelopment = process.env.NODE_ENV === "development";
	
	const fetchData = () => {
		if (isDevelopment && !CONFIG.USE_API) {
			return { data: apiStaticData };
		} else {
			return getData()
		}
	}
	
	const fetchVisits = async () => {
		const response = await fetch(process.env.INCREMENT_VISITS_WORKER_URL);
		const visits = await response.json();
		return visits;
	}

	const { data } = await fetchData();
	const { visits } = await fetchVisits();

	const httpLink = createHttpLink({
		uri: "https://api.cloudflare.com/client/v4/graphql",
	});

	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				"X-AUTH-EMAIL": process.env.X_AUTH_EMAIL,
				authorization: `Bearer ${process.env.CLOUDFLARE_ANALYTICS_API_TOKEN}`,
			}
		}
	});

	const client = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache()
	});

	const { data: analyticsData } = await client.query({
		query: gql`
			{
				viewer {
					zones(filter: {zoneTag: "${process.env.CLOUDFLARE_ZONE_ID}"}) {
						httpRequests1dGroups(limit: 10, filter: {AND: [{date_geq: "2022-01-01"}]}) {
							sum {
								pageViews
							}
						}
					}
				}
			}

		`
	});

	// eslint-disable-next-line prefer-destructuring
	const pageViews = analyticsData.viewer.zones[0].httpRequests1dGroups[0].sum.pageViews;

  return {
		props: { 
			data,
			visits,
			pageViews,
		},
  }
}

