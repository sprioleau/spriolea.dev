import React from "react"
import Head from "next/head";
import { Footer, InfoRails, Nav, Main } from "../components";
import { getEmployers, getExperience } from "../libs/sanity";
import useStore from "../store";
import { selectUpdateData } from "../store/selectors";

const Home = ({ data }) => {
	const updateData = useStore(selectUpdateData);
		
	React.useEffect(() => {
		if (data) {
			updateData(data);
		}
	}, [data, updateData]);

	return (
		<div className="app">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>San&apos;Quan Prioleau</title>
			</Head>
			<Nav />
			<InfoRails />
			<Main data={data} />
			<Footer />
		</div>
	);
};

export default Home;

export const getStaticProps = async (context) => {
	const { data: employers } = await getEmployers();
	const { data: experience } = await getExperience();

	const data = {
		employers,
		experience,
	}

  return {
		props: { 
			data
		},
  }
}