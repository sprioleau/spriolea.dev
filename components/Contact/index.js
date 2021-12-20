
import { MdOutlineMarkEmailRead } from "react-icons/md"
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import PageSectionLayout from "../PageSectionLayout";

const Contact = () => {
	const EMAIL_ADDRESS = "sq.prioleau@gmail.com";

	const handleToast = () => toast.dark("Email address successfully copied!", { toastId: "email" });
	
  return (
		<PageSectionLayout sectionId="contact" sectionTitle="Get in touch" center offset="0px">
			<CopyToClipboard text={EMAIL_ADDRESS} onCopy={handleToast}>
				<div className="contact__card">
					<span className="icon mail-icon"><MdOutlineMarkEmailRead /></span>
					<h3 className="contact__card-heading">You can find me at</h3>
						<p className="a contact__card-email">{EMAIL_ADDRESS}</p>
				</div>
			</CopyToClipboard>
		</PageSectionLayout>
  )
}

export default Contact;