import React from "react"
import { m } from "framer-motion";


const defaultStyles = {
	display: "block",
	width: "100%",
}

const variantsLibrary = {
	fadeInWhenVisible: {
		initial: { opacity: 0, translateY: 100 },
		whileInView: { opacity: 1, translateY: 0 },
	}, 
	fadeInAndUp: {
		initial: { opacity: 0, translateY: 20 },
		animate: { opacity: 1, translateY: 0 },
	},
	fadeInAndDown: {
		initial: { opacity: 0, translateY: 20 },
		animate: { opacity: 1, translateY: 0 },
	},
	stagger: {
		initial: { opacity: 0, translateY: -20 },
		animate: { opacity: 1, translateY: 0 },
	},
	staggeredReveal: {
		initial: { opacity: 0, top: "3rem" },
		animate: { opacity: 1, top: 0 },
	}
}

export const FadeInWhenVisible = ({
	tag = "div",
	className,
	useDefaultStyles = true,
	offset = "-30%",
	distance = 100,
	children
}) => {
	const variants = variantsLibrary.fadeInWhenVisible;
	variants.initial.translateY = distance;

	const Tag = m[tag];

	const styles = useDefaultStyles ? defaultStyles : null;

  return (
		<Tag
			initial="initial"
			whileInView="whileInView"
			viewport={{ once: true, margin: offset }}
			transition={{ duration: 0.5 }}
			variants={variants}
			style={styles}
			className={className}
		>
			{children}
		</Tag>
  );
}

export const FadeInAndUp = ({
	tag = "div", 
	className, 
	children, 
	delay, 
	useDefaultStyles = true, 
	distance = 20,
	dataTooltip = null,
}) => {
	const Tag = m[tag];

	const styles = useDefaultStyles ? defaultStyles : null;

	const variants = variantsLibrary.fadeInAndUp;
	variants.initial.translateY = distance;

	const attributes = {
		"data-tooltip": dataTooltip,
	}

  return (
		<Tag
			initial="initial"
			animate="animate"
			transition={{ duration: 0.3, delay }}
			className={className}
			variants={variants}
			style={styles}
			{...attributes}
		>
			{children}
		</Tag>
  );
}

export const FadeInAndDown = ({
	tag = "div", 
	children, 
	delay, 
	distance = 20
}) => {
	const Tag = m[tag];

	const variants = variantsLibrary.fadeInAndDown;
	variants.initial.translateY = distance;

  return (
		<Tag
			initial="initial"
			animate="animate"
			transition={{ duration: 0.3, delay }}
			variants={variants}
			style={defaultStyles}
		>
			{children}
		</Tag>
  );
}

export const Stagger = ({
	parent = { tag: "ul", className: null, additionalProps: {} },
	child = { tag: "li", className: null, additionalProps: {} },
	style = null,
	staggerBy = 0.15,
	staggerDelay = 0,
	delayWithIndex = false,
	indexDelay = 0.15,
	children
}) => {
	const ParentTag = m[parent.tag];
	const ChildTag = m[child.tag];

	const parentAttributes = {
		style,
		initial: "initial",
		animate: "animate",
		whileInView: "whileInView",
		transition: { staggerChildren: !delayWithIndex ? staggerBy : null, delay: staggerDelay },
		className: parent.className,
		...parent.additionalProps,
	}

	return (
		<ParentTag {...parentAttributes}>
			{children.map((childElement, index) => (
				<ChildTag
					variants={variantsLibrary.stagger}
					transition={{ delay: delayWithIndex ? index * indexDelay : null }}
					key={childElement.props["data-key"]}
					title={childElement.props["data-title"]}
					className={child.className}
					{...child.additionalProps}
				>
					{childElement}
				</ChildTag>
			))}
		</ParentTag>
  );
}

export const StaggeredReveal = ({
	tag: Tag = "h1", 
	text, 
	wrapperClass = null, 
	speed = 1, 
	delayIncrement = 0.1, 
	delay = 0, 
	subtitle = false, 
	animate = true,
	altTextOnHover = null,
}) => {
	const [animationComplete, setAnimationComplete] = React.useState(false);

	const handleAnimationComplete = () => setAnimationComplete(true);

	const variants = variantsLibrary.staggeredReveal

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

	if (animationComplete || !animate) {
		return <Tag className={wrapperClass} data-alt-text={altTextOnHover ?? null}><span>{text}</span></Tag>
	}
	
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
