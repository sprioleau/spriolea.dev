"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function Spotlight() {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (!window || !document) return;

    const smallScreenMedia = window?.matchMedia("(max-width: 600px)");

    function getMousePosition({ currentTarget, clientX, clientY }: MouseEvent) {
      if (!currentTarget) return;

      const { left, top } = document.body.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);

      if (smallScreenMedia.matches && isVisible) {
        setIsVisible(false);
        return;
      }

      if (!smallScreenMedia.matches && !isVisible) {
        setIsVisible(true);
        return;
      }
    }

    window.addEventListener("mousemove", getMousePosition);

    return () => {
      window.removeEventListener("mousemove", getMousePosition);
    };
  }, [mouseX, mouseY, isVisible, setIsVisible]);

  return (
    <motion.div
      className={styles.spotlight}
      style={{
        background: !isVisible
          ? useMotionTemplate`none`
          : useMotionTemplate`
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
