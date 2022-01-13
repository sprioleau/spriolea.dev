import { MdOutlineRemoveRedEye } from "react-icons/md";
import PortableTextBlock from "../PortableTextBlock";

const Footer = ({ content, visits, pageViews }) => {
	const { body } = content[0];
	const views = pageViews ?? visits;

	return (
		<footer className="footer">
			<div className="container">
				{body.map(({ _key, children, markDefs }) => (
					<p key={_key} className="footer__message">
						<PortableTextBlock childrenContent={children} markDefs={markDefs} />
					</p>
				))}
				{views && <p className="footer__stat"><span>{views}</span> <span className="icon visits-icon"><MdOutlineRemoveRedEye /></span></p>}
			</div>
		</footer>
	);
};

export default Footer;
