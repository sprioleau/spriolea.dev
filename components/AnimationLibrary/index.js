import React from "react"
import { motion as m } from "framer-motion";

// Reference: https://stackoverflow.com/questions/58958972/framer-motion-animate-when-element-is-in-view-when-you-scroll-to-element

const defaultStyles = {
	display: "block",
	width: "100%",
}

export const FadeInWhenVisible = ({ offset = "-30%", children }) => {
	const variants = {
		hidden: { opacity: 0, translateY: 100 },
		visible: { opacity: 1, translateY: 0 },
	}

  return (
	<m.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: offset }}
    transition={{ duration: 0.5 }}
		variants={variants}
		style={defaultStyles}
  >
		{children}
	</m.div>
  );
}

export const FadeInAndUp = ({ children, delay, distance = 20, reverseOnExit = false }) => {
  return (
		<m.div
			initial="hidden"
			animate="animate"
			exit={reverseOnExit ? "exit" : null}
			transition={{ duration: 0.3, delay }}
			variants={{
				hidden: { opacity: 0, translateY: distance },
				animate: { opacity: 1, translateY: 0 },
				exit: { opacity: 0, translateY: distance }
			}}
			style={defaultStyles}
		>
			{children}
		</m.div>
  );
}

export const StaggeredReveal = ({ tag: Tag = "h1", text, wrapperClass = null, speed = 1, delayIncrement = 0.1, delay = 0, subtitle = false, animate = true }) => {
	const [animationComplete, setAnimationComplete] = React.useState(false);

	const handleAnimationComplete = () => setAnimationComplete(true);

	const variants = {
		initial: {
			opacity: 0,
			top: "3rem",
		},
		animate: {
			opacity: 1,
			top: 0,
		},
	}

	const styles = {
		wrapperSpan: {
			display: "flex",
		},
		letter: {
			position: "relative",
			display: "inline-block",
		}
	}

	const adjustedDelay = subtitle ? 0.5 + delay : delay;

	if (animationComplete || !animate) return (
		<Tag className={wrapperClass}>{text}</Tag>
	)
	
	return (
		<Tag className={wrapperClass}>
			<m.span
				initial="initial"
				animate="animate"
				style={styles.wrapperSpan}
				onAnimationComplete={handleAnimationComplete}
			>
				{text.split("").map((letter, index) => (
					<m.span
						key={index}
						variants={variants}
						transition={{
							delay: adjustedDelay + (index * delayIncrement) / speed,
							duration: (delayIncrement * 3) / speed,
							type: "spring",
							damping: 20,
							stiffness: 500,
						}}
						style={{
							...styles.letter,
							marginRight: letter === " " ? "0.22em" : null,
						}}
					>{letter}</m.span>
				))}
			</m.span>
		</Tag>
	)
}
