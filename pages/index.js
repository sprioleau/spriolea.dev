import Head from "next/head";
import { InfoRails, Main, Nav } from "../components";

const Home = () => {
	return (
		<div className="app">
			<Head>
				<title>San&apos;Quan Prioleau</title>
				<meta charset="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="San'Quan Prioleau is a frontend web developer with an eye for good design, who loves combining ideas to create new things." />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Nav />
			<InfoRails />
			<Main />
		</div>
	);
};

export default Home;
