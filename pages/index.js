import Head from "next/head";
import { InfoRails, Main, Nav } from "../components";

const Home = () => {
	return (
		<div className="app">
			<Head>
				<title>S. Prioleau</title>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Nav />
			<InfoRails />
			<Main />
		</div>
	);
};

export default Home;
