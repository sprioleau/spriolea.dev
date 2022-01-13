import { MdOutlineRemoveRedEye } from "react-icons/md";
import PortableTextBlock from "../PortableTextBlock";

const Footer = ({ content, visits }) => {
	const { body } = content[0]; 

	return (
		<footer className="footer">
			<div className="container">
				{body.map(({ _key, children, markDefs }) => (
					<p key={_key} className="footer__message">
						<PortableTextBlock childrenContent={children} markDefs={markDefs} />
					</p>
				))}
				<p className="footer__stat"><span>{visits}</span> <span className="icon visits-icon"><MdOutlineRemoveRedEye /></span></p>
			</div>
		</footer>
	);
};

export default Footer;
