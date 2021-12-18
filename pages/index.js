import Head from "next/head";
import { Footer, InfoRails, Nav, Main } from "../components";

const Home = () => {
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
