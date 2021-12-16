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
				<h4 className="contact__card-heading">You can find me at</h4>
				<a href="mailto:sq.prioleau@gmail.com" className="a contact__card-email">sq.prioleau@gmail.com</a>
			</div>
		</div>
	</section>
  )
}

export default Contact;

// export const ConcactAlt = () => {
//   const ref = React.useRef(null)
//   const mouse = useMouse(ref, {
//     enterDelay: 100,
//     leaveDelay: 100,
//   })

//   return (
// 	<section id="contact" className="contact-alt section">
// 		<div className="container">
// 			<header>
// 				<h2>Contact</h2>
// 				<div ref={ref} className="contact-alt__effects-wrapper">
// 					<div className="contact-alt__card">
// 						<h4>Hello</h4>
// 					</div>
// 					<div
//             className="contact-alt__mouse"
//             style={{
//               top: mouse.y,
//               left: mouse.x,
//             }}
//           />
// 				</div>
// 			</header>
// 		</div>
// 	</section>
//   )
// }
