import React from "react"
import {MdOutlineMarkEmailRead} from "react-icons/md"
// import useMouse from "@react-hook/mouse-position"
import SectionHeader from "../SectionHeader/index";

const Contact = () => {
  return (
	<section id="contact" className="contact section">
		<div className="container">
			<SectionHeader sectionTitle="Get in touch" variant="center" />
			<div className="contact__card">
				<span className="icon mail-icon"><MdOutlineMarkEmailRead /></span>
				<h3 className="contact__card-heading">You can find me at</h3>
				<a href="mailto:sq.prioleau@gmail.com" className="a contact__card-email">sq.prioleau@gmail.com</a>
			</div>
		</div>
	</section>
  )
}

export default Contact;