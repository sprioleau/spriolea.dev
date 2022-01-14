import PortableTextBlock from "../PortableTextBlock";
import ClapButton from "../ClapButton";
import icons from "../Icons";
import { formatNumber } from "../../utils";

const Footer = ({ content, footerData: { likes, pageViews, contributionsInLastYear } }) => {
	const { body } = content[0];

	const stats = [
		{ key: "Page views", value: pageViews, icon: icons.views },
		{ key: "Page likes", value: likes, icon: icons.thumbsUp },
		{ key: "GitHub contributions in past year", value: contributionsInLastYear, icon: icons.commit },
	]

	return (
		<footer className="footer">
			<div className="container">
				<ClapButton count={likes} />
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
