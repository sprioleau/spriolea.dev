import React from "react"
import Head from "next/head";
import axios from "axios";
import { Footer, InfoRails, Nav, Main } from "../components";
import getData from "../libs/sanity";
import useStore from "../store";
import { selectUpdateData } from "../store/selectors";
import CONFIG from "../config";

const Home = ({ data }) => {
	const updateData = useStore(selectUpdateData);
		
	React.useEffect(() => {
		if (data) updateData(data);
	}, [data, updateData]);

	return (
		<div className="app">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>San&apos;Quan Prioleau</title>
			</Head>
			<Nav />
			<InfoRails />
			<Main />
			<Footer />
		</div>
	);
};

export default Home;

export const getStaticProps = async (context) => {
	const isDevelopment = process.env.NODE_ENV === "development";
	
	const fetchData = () => {
		if (isDevelopment && !CONFIG.USE_API) {
			return axios.get("http://localhost:3000/data/apiSampleData.json");
		} else {
			return getData()
		}
	}

	const { data } = await fetchData();

  return {
		props: { 
			data,
		},
  }
}

