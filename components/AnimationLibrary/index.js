import { motion as m } from "framer-motion";

// Reference: https://stackoverflow.com/questions/58958972/framer-motion-animate-when-element-is-in-view-when-you-scroll-to-element

const defaultWrapperProps = {
  width: "100%",
  margin: "0 auto"
}

export const FadeInWhenVisible = ({ children }) => {
  return (
	<m.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "200px" }}
    transition={{ duration: 1 }}
    variants={{
      hidden: { opacity: 0, translateY: 100, ...defaultWrapperProps },
      visible: { opacity: 1, translateY: 0, ...defaultWrapperProps },
    }}
  >
		{children}
	</m.div>
  );
}

export const FadeInAndUpWhenVisible = ({ children }) => {
  return (
	<m.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    variants={{
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0 }
    }}
  >
		{children}
	</m.div>
  );
}
