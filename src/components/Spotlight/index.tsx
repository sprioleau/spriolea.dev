"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { useEffect } from "react";
import styles from "./styles.module.scss";

export default function Spotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (!document) return;

    function getMousePosition({ currentTarget, clientX, clientY }: MouseEvent) {
      if (!currentTarget) return;

      const { left, top } = document.body.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    document.body.addEventListener("mousemove", getMousePosition);

    return () => document.body.addEventListener("mousemove", getMousePosition);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={styles.spotlight}
      style={{
        background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 196, 0, 0.2),
              transparent 80%
            )
          `,
      }}
    />
  );
}
