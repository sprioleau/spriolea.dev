
import { MdOutlineMarkEmailRead } from "react-icons/md"
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import PageSectionLayout from "../PageSectionLayout";

const Contact = ({ content }) => {
	const { email, overline } = content[0];

	const handleToast = () => toast.dark("Email address successfully copied!", { toastId: "email" });
	
  return (
		<PageSectionLayout sectionId="contact" sectionTitle="Get in touch" center offset="0px">
			<CopyToClipboard text={email} onCopy={handleToast}>
				<div className="contact__card">
					<span className="icon mail-icon"><MdOutlineMarkEmailRead /></span>
					<h3 className="contact__card-heading">{overline}</h3>
						<p className="a contact__card-email">{email}</p>
				</div>
			</CopyToClipboard>
		</PageSectionLayout>
  )
}

export default Contact;