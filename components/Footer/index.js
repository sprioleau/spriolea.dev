import { MdOutlineRemoveRedEye } from "react-icons/md";
import PortableTextBlock from "../PortableTextBlock";
import ClapButton from "../ClapButton";

const Footer = ({ content, likes, pageViews }) => {
	const { body } = content[0];

	return (
		<footer className="footer">
			<div className="container">
				<ClapButton count={likes} />
				{body.map(({ _key, children, markDefs }) => (
					<p key={_key} className="footer__message">
						<PortableTextBlock childrenContent={children} markDefs={markDefs} />
					</p>
				))}
				{pageViews && <p className="footer__stat"><span>{pageViews}</span> <span className="icon visits-icon"><MdOutlineRemoveRedEye /></span></p>}
			</div>
		</footer>
	);
};

export default Footer;
