
import { FiGithub } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { copyNotification } from "../../utils";

const InfoRails = ({ siteDetails }) => {
	const { creator: { email, links: { gitHubUrl } }, meta: { vsCodeUrl } } = siteDetails[0];
	
	return (
		<>
			<div className="info-rail left">
				<ul className="info-rail__link-list">
					<li className="info-rail__link-list-item">
						<a aria-label="link" href={gitHubUrl} rel="noreferrer" className="info-rail__link" target="_blank"><span className="icon"><FiGithub /></span></a>
					</li>
					<li className="info-rail__link-list-item">
						<a aria-label="link" href={vsCodeUrl} rel="noreferrer" className="info-rail__link" target="_blank"><span className="icon"><HiOutlineCode /></span></a>
					</li>
				</ul>
				<div className="info-rail__accent-line" />
			</div>
			<div className="info-rail right">
				<ul className="info-rail__link-list">
					<li className="info-rail__link-list-item">
						<CopyToClipboard text={email} onCopy={copyNotification}>
							<span className="info-rail__link text-link">{email}</span>
						</CopyToClipboard>
					</li>
				</ul>
				<div className="info-rail__accent-line" />
			</div>
		</>
  )
}

export default InfoRails;
