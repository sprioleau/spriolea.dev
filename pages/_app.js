import "../styles/styles.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Component {...pageProps} />
			<ToastContainer
				position="top-center"
				autoClose={3000}
			/>
		</>
	);
};

export default MyApp;
