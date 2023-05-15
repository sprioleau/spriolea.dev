"use client";

import { MotionProps, MotionStyle, motion } from "framer-motion";

import React from "react";

type ElementTag = "div" | "ul" | "li" | "h1";

const defaultStyles: MotionStyle = {
  display: "block",
  width: "100%",
};

export type StaggerElement = {
  tag: ElementTag;
  className: string | undefined;
};

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
  },
};

export const FadeInWhenVisible = ({
  tag = "div",
  className,
  useDefaultStyles = true,
  offset = "-30%",
  distance = 100,
  children,
}: {
  tag: ElementTag;
  className?: string;
  useDefaultStyles?: boolean;
  offset?: string;
  distance?: number;
  children?: React.ReactNode;
}) => {
  const variants = variantsLibrary.fadeInWhenVisible;
  variants.initial.translateY = distance;

  const Tag = motion[tag];

  const styles = useDefaultStyles ? defaultStyles : undefined;

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
};

export const FadeInAndUp = ({
  tag = "div",
  className,
  delay,
  useDefaultStyles = true,
  distance = 20,
  dataTooltip = null,
  children,
}: {
  tag?: ElementTag;
  className?: string;
  delay?: number;
  useDefaultStyles?: boolean;
  distance?: number;
  dataTooltip?: string | null;
  children?: React.ReactNode;
}) => {
  const Tag = motion[tag];

  const styles = useDefaultStyles ? defaultStyles : undefined;

  const variants = variantsLibrary.fadeInAndUp;
  variants.initial.translateY = distance;

  const attributes = {
    "data-tooltip": dataTooltip,
  };

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
};

export const FadeInAndDown = ({
  tag = "div",
  delay,
  distance = 20,
  children,
}: {
  tag: ElementTag;
  delay: number;
  distance: number;
  children: React.ReactNode;
}) => {
  const Tag = motion[tag];

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
};

export const Stagger = ({
  parent = { tag: "ul", className: undefined },
  child = { tag: "li", className: undefined },
  style,
  staggerBy = 0.15,
  staggerDelay = 0,
  delayWithIndex = false,
  indexDelay = 0.15,
  children,
}: {
  parent?: StaggerElement;
  child?: StaggerElement;
  style?: MotionStyle | undefined;
  staggerBy?: number;
  staggerDelay?: number;
  delayWithIndex?: boolean;
  indexDelay?: number;
  children: React.ReactElement[];
}) => {
  const ParentTag = motion[parent.tag];
  const ChildTag = motion[child.tag];

  const parentAttributes: MotionProps & { className: string | undefined } = {
    style,
    initial: "initial",
    animate: "animate",
    whileInView: "whileInView",
    transition: {
      staggerChildren: !delayWithIndex ? staggerBy : undefined,
      delay: staggerDelay,
    },
    className: parent.className,
  };

  return (
    <ParentTag {...parentAttributes}>
      {children.map((childElement, index) => (
        <ChildTag
          variants={variantsLibrary.stagger}
          transition={{
            delay: delayWithIndex ? index * indexDelay : undefined,
          }}
          key={childElement.props["data-key"]}
          title={childElement.props["data-title"]}
          className={child?.className}
        >
          {childElement}
        </ChildTag>
      ))}
    </ParentTag>
  );
};

export const StaggeredReveal = ({
  tag: Tag = "h1",
  text,
  wrapperClass,
  speed = 1,
  delayIncrement = 0.1,
  delay = 0,
  subtitle = false,
  animate = true,
  altTextOnHover = null,
}: {
  tag: ElementTag;
  text: string;
  wrapperClass?: string | undefined;
  speed: number;
  delayIncrement: number;
  delay: number;
  subtitle: boolean;
  animate: boolean;
  altTextOnHover: string | null;
}) => {
  const [animationComplete, setAnimationComplete] = React.useState(false);

  const handleAnimationComplete = () => setAnimationComplete(true);

  const variants = variantsLibrary.staggeredReveal;

  const styles: Record<string, MotionStyle> = {
    wrapperSpan: {
      display: "flex",
    },
    letter: {
      position: "relative",
      display: "inline-block",
    },
  };

  const adjustedDelay = subtitle ? 0.5 + delay : delay;

  if (animationComplete || !animate) {
    return (
      <Tag
        className={wrapperClass}
        data-alt-text={altTextOnHover ?? null}
      >
        <span>{text}</span>
      </Tag>
    );
  }

  return (
    <Tag className={wrapperClass}>
      <motion.span
        initial="initial"
        animate="animate"
        style={styles.wrapperSpan}
        onAnimationComplete={handleAnimationComplete}
      >
        {text.split("").map((letter, index) => (
          <motion.span
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
              marginRight: letter === " " ? "0.22em" : 0,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};
