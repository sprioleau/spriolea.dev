"use client";

import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useMemo, useState } from "react";
import { Kudos } from "@/schemas/types";
import KudosCard from "../KudosCard";
import { composeClasses } from "@/utils";

type Props = {
  kudos: Kudos[];
};

export default function KudosCarousel({ kudos = [] }: Props) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  function handleGoToPrevious() {
    // prettier-ignore
    const newSlideIndex = currentSlideIndex - 1 < 0
      ? kudos.length - 1
      : currentSlideIndex - 1;
    setCurrentSlideIndex(newSlideIndex);
  }

  function handleGoToNext() {
    const newSlideIndex = (currentSlideIndex + 1) % kudos.length;
    setCurrentSlideIndex(newSlideIndex);
  }

  function handleGoToSlide(selectedIndex: number) {
    setCurrentSlideIndex(selectedIndex);
  }

  const navigationItems = useMemo(() => Array.from({ length: kudos.length }), [kudos.length]);

  return (
    <div className={styles.carousel}>
      <ol className={styles.navigation}>
        {navigationItems.map((_, index) => (
          <button
            key={index}
            className={composeClasses({
              [styles["navigation-item"]]: true,
              "no-frame": true,
              active: index === currentSlideIndex,
            })}
            onClick={() => handleGoToSlide(index)}
          />
        ))}
      </ol>
      <div className={styles["slides-buttons-wrapper"]}>
        <motion.button
          onClick={handleGoToPrevious}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: "none" }}
        >
          <FiChevronLeft />
        </motion.button>
        <motion.div
          layoutId="slide"
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className={styles.slide}
        >
          <KudosCard kudos={kudos[currentSlideIndex]} />
        </motion.div>
        <motion.button
          onClick={handleGoToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: "none" }}
        >
          <FiChevronRight />
        </motion.button>
      </div>
    </div>
  );
}
