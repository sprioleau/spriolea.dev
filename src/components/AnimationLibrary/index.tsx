"use client";

import { MotionProps, MotionStyle, motion } from "framer-motion";

import React from "react";

type ElementTag = "div" | "ul" | "li" | "h1";

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
