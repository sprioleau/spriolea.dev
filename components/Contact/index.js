
import { MdOutlineMarkEmailRead } from "react-icons/md"
import PageSectionLayout from "../PageSectionLayout";

const Contact = () => {
  return (
		<PageSectionLayout sectionId="contact" sectionTitle="Get in touch" center offset="0px">
			<div className="contact__card">
				<span className="icon mail-icon"><MdOutlineMarkEmailRead /></span>
				<h3 className="contact__card-heading">You can find me at</h3>
				<a href="mailto:sq.prioleau@gmail.com" className="a contact__card-email">sq.prioleau@gmail.com</a>
			</div>
		</PageSectionLayout>
  )
}

export default Contact;