import "../styles/styles.scss";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { LazyMotion, domAnimation } from "framer-motion";

const MyApp = ({ Component, pageProps }) => {
	return (
		<LazyMotion features={domAnimation}>
			<Component {...pageProps} />
			<ToastContainer
				position="top-center"
				autoClose={3000}
			/>
		</LazyMotion>
	);
};

export default MyApp;
