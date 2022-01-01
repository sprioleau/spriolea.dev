
import { MdOutlineMarkEmailRead } from "react-icons/md"
import { CopyToClipboard } from "react-copy-to-clipboard";
import PageSectionLayout from "../PageSectionLayout";
import { copyNotification } from "../../utils";

const Contact = ({ content }) => {
	const { email, overline } = content[0];

	const getFormattedEmail = () => {
		const [userName, serverDomain] = email.split("@");
		return (
			<>
				<span>{userName}</span><span>{`@${serverDomain}`}</span>
			</>
		)
	}

  return (
		<PageSectionLayout sectionId="contact" sectionTitle="Get in touch" center offset="0px">
			<CopyToClipboard text={email} onCopy={copyNotification}>
				<div className="contact__card">
					<span className="icon mail-icon"><MdOutlineMarkEmailRead /></span>
					<h3 className="contact__card-heading">{overline}</h3>
						<p className="a contact__card-email">{getFormattedEmail()}</p>
				</div>
			</CopyToClipboard>
		</PageSectionLayout>
  )
}

export default Contact;