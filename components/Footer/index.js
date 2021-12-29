import PortableTextBlock from "../PortableTextBlock";

const Footer = ({ content }) => {
	const { body } = content[0]; 

	return (
		<footer className="footer">
			<div className="container">
				{body.map(({ _key, children, markDefs }) => (
					<p key={_key} className="footer__message">
						<PortableTextBlock childrenContent={children} markDefs={markDefs} />
					</p>
				))}
			</div>
		</footer>
	);
};

export default Footer;
