/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import Name from "../Name";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<p className="footer__message">Designed and Built by <a href="https://github.com/sprioleau"><Name /></a></p>
			</div>
		</footer>
	);
};

export default Footer;
