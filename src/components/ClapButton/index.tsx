"use client";

import { animate as animateImport, motion, useAnimate } from "framer-motion";
import { emptyArrayOfLength, randomNumberBetween, toastMessage } from "@/utils";

import Clap from "../Icons/Clap";
import { persistClaps } from "@/actions";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

type Props = {
  serverClapCount: number;
  clientClapCount: number;
  setClientClapCount: React.Dispatch<React.SetStateAction<number>>;
};

const particleCount = 20;
const maxClapCount = 15;

export default function ClapButton({
  serverClapCount,
  clientClapCount,
  setClientClapCount,
}: Props) {
  const [scope, animate] = useAnimate();
  const [hasSeenToast, setHasSeenToast] = useState(false);

  const debouncedHandleClaps = useDebouncedCallback(() => {
    persistClaps({ newClapsTotal: serverClapCount + clientClapCount });
  }, 3000);

  const particleAnimationProps = getParticleAnimationProps(particleCount);

  function handleTouch(e: React.MouseEvent<HTMLButtonElement>) {
    if (!e.altKey && clientClapCount >= maxClapCount) {
      toastMessage("Thanks for the claps");
      return;
    }

    if (e.altKey && clientClapCount === 0) return;

    if (e.altKey && clientClapCount > 0) {
      const newClapCount = clientClapCount - 1;
      const countAnimationProps = getCountAnimationProps();
      const fillanimationProps = getFillAnimationProps(
        newClapCount / maxClapCount
      );

      animate([...fillanimationProps, ...countAnimationProps]);

      setClientClapCount(newClapCount);
      debouncedHandleClaps();
      return;
    }

    const newClapCount = clientClapCount + 1;
    const countAnimationProps = getCountAnimationProps(0.02 * newClapCount);
    const fillAnimationProps = getFillAnimationProps(
      newClapCount / maxClapCount
    );

    if (newClapCount === maxClapCount && !hasSeenToast) {
      toastMessage("Thanks for the claps!");
      setHasSeenToast(true);
    }

    animate([
      ...particleAnimationProps,
      ...fillAnimationProps,
      ...countAnimationProps,
    ]);

    setClientClapCount(newClapCount);
    debouncedHandleClaps();
  }

  return (
    <div
      ref={scope}
      className="clap-button"
      style={{
        margin: "2rem",
      }}
    >
      <motion.button
        onClick={handleTouch}
        className="clap-button__button clap"
        whileTap={{ scale: clientClapCount === maxClapCount ? 1 : 1.2 }}
      >
        <Clap />
        <div className="clap-button__fill" />
      </motion.button>
      <div className="clap-button__count">{clientClapCount}</div>
      <div className="particles">
        {emptyArrayOfLength(particleCount).map((index) => (
          <svg
            className={`clap-button__particle particle-${index}`}
            key={index}
            viewBox="0 0 122 117"
            width="10"
            height="10"
            fill="var(--ui-accent-1)"
          >
            <path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

type AnimationSequence = Parameters<typeof animateImport>[0];

function getFillAnimationProps(fillPercentage: number): AnimationSequence {
  return [
    [
      ".clap-button__fill",
      {
        scaleY: fillPercentage.toFixed(2),
      },
      {
        at: "<",
        type: "spring",
        stiffness: 100,
        mass: 0.7,
      },
    ],
  ];
}

function getCountAnimationProps(nudgeScaleBy: number = 0): AnimationSequence {
  return [
    [
      ".clap-button__count",
      {
        y: [0, -40],
        x: "-50%",
        scale: [0.05, 1 + nudgeScaleBy ?? 0],
        opacity: [0, 1],
      },
      {
        at: "<",
      },
    ],
    [
      ".clap-button__count",
      {
        opacity: 0,
      },
      {
        duration: 0.2,
        delay: 0.4,
      },
    ],
  ];
}

function getParticleAnimationProps(particleCount: number) {
  const particleAnimations: AnimationSequence = emptyArrayOfLength(
    particleCount
  ).map((index) => {
    const x2 = randomNumberBetween(-100, 100) + 30;
    const y2 = randomNumberBetween(-100, 100) + 30;
    const scale2 = randomNumberBetween(0.5, 1.3);

    return [
      `.particle-${index}`,
      {
        x: [0, x2 * 0.7, x2],
        y: [0, y2 * 0.7, y2],
        scale: [0.01, scale2, scale2],
        opacity: [0, 1, 0],
      },
      { duration: 0.3, at: "<", ease: "linear" },
    ];
  });

  return particleAnimations;
}
