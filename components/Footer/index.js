import React from "react";
import PortableTextBlock from "../PortableTextBlock";
import ClapButton from "../ClapButton";
import icons from "../Icons";
import { formatNumber } from "../../utils";

const Footer = ({ content, footerData: { claps, pageViews, contributionsInLastYear } }) => {
	const [clientClapCount, setClientClapCount] = React.useState(0);
	
	const { body } = content[0];

	const stats = [
		{ key: "Page views", value: pageViews, icon: icons.views },
		{ key: "Page claps", value: claps + clientClapCount, icon: icons.clap },
		{ key: "GitHub contributions in past year", value: contributionsInLastYear, icon: icons.commit },
	]

	return (
		<footer className="footer">
			<div className="container">
				<ClapButton
					initialCount={claps}
					clientClapCount={clientClapCount}
					setClientClapCount={setClientClapCount}
				/>
				{body.map(({ _key, children, markDefs }) => (
					<p key={_key} className="footer__message">
						<PortableTextBlock childrenContent={children} markDefs={markDefs} />
					</p>
				))}
				<ul className="footer__stats">
					{stats.map(({ key, value, icon }) => (
						<li key={key} className="footer__stat tooltip" data-tooltip={key}>
							<p className="footer__stat-wrapper"><span>{formatNumber(value)}</span> <span className="icon">{icon}</span></p>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
