import Head from "next/head";
import { Main, Nav } from "../components";

const Home = () => {
	return (
		<div className="app">
			<Head>
				<title>S. Prioleau</title>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Nav />
			<Main />
		</div>
	);
};

export default Home;
