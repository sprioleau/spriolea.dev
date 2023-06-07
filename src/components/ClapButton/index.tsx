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

const PARTICLE_COUNT = 5;
const MAX_CLAP_COUNT = 15;

const ClapButton = ({
  serverClapCount,
  clientClapCount,
  setClientClapCount,
}: Props) => {
  const [scope, animate] = useAnimate();
  const [hasSeenToast, setHasSeenToast] = useState(false);

  const debouncedHandleClaps = useDebouncedCallback(() => {
    persistClaps({ newClapsTotal: serverClapCount + clientClapCount });
  }, 3000);

  function handleTouch(e: React.MouseEvent<HTMLButtonElement>) {
    if (!e.altKey && clientClapCount >= MAX_CLAP_COUNT) {
      if (hasSeenToast) return;
      toastMessage("Thanks for the claps");
      return;
    }

    if (e.altKey && clientClapCount === 0) return;

    if (e.altKey && clientClapCount > 0) {
      const newClapCount = clientClapCount - 1;
      const countAnimationProps = getCountAnimationProps();
      const fillanimationProps = getFillAnimationProps(
        newClapCount / MAX_CLAP_COUNT
      );

      animate([...fillanimationProps, ...countAnimationProps]);

      setClientClapCount(newClapCount);
      debouncedHandleClaps();
      return;
    }

    const newClapCount = clientClapCount + 1;
    const countAnimationProps = getCountAnimationProps();
    const fillAnimationProps = getFillAnimationProps(
      newClapCount / MAX_CLAP_COUNT
    );

    if (newClapCount === MAX_CLAP_COUNT && !hasSeenToast) {
      if (hasSeenToast) return;
      toastMessage("Thanks for the claps!");
      setHasSeenToast(true);
    }

    const angleOffset = randomNumberBetween(0, 1); // radians

    const particleAnimationProps = getParticleAnimationProps({
      selectorPrefix: ".particle-",
      particleCount: PARTICLE_COUNT,
      angleOffset,
    });

    const particleResetAnimationProps = getParticleResetAnimationProps({
      selectorPrefix: ".particle-",
      particleCount: PARTICLE_COUNT,
    });

    const followParticleProps = getParticleAnimationProps({
      selectorPrefix: ".follow-",
      particleCount: PARTICLE_COUNT,
      angleOffset: angleOffset + degreesToRadians(360 / PARTICLE_COUNT / 2 + 5),
      distance: 65,
    });
    const followParticleResetAnimationProps = getParticleResetAnimationProps({
      selectorPrefix: ".follow-",
      particleCount: PARTICLE_COUNT,
    });

    animate([
      ...particleAnimationProps,
      ...followParticleProps,
      ...fillAnimationProps,
      ...countAnimationProps,
      ...particleResetAnimationProps,
      ...followParticleResetAnimationProps,
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
        onMouseDown={handleTouch}
        className="clap-button__button clap"
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", duration: 0.2 },
        }}
        whileTap={{ scale: clientClapCount === MAX_CLAP_COUNT ? 0.9 : 1 }}
      >
        <Clap />
        <div className="clap-button__fill" />
      </motion.button>
      <div className="clap-button__count">{clientClapCount}</div>
      <div className="particles">
        {emptyArrayOfLength(PARTICLE_COUNT).map((index) => (
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
        {emptyArrayOfLength(PARTICLE_COUNT).map((index) => (
          <svg
            className={`clap-button__particle follow-${index}`}
            key={index}
            viewBox="0 0 122 117"
            width="10"
            height="10"
            fill="var(--ui-accent-1)"
            fillOpacity={0.5}
          >
            <path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

type AnimationSequence = Parameters<typeof animateImport>[0];

function degreesToRadians(degrees: number) {
  return Math.PI * (degrees / 180);
}

function getFillAnimationProps(fillPercentage: number): AnimationSequence {
  return [
    [
      ".clap-button__fill",
      { scaleY: fillPercentage.toFixed(2) },
      { at: "<", type: "spring", stiffness: 100, mass: 0.7 },
    ],
  ];
}

function getCountAnimationProps(): AnimationSequence {
  return [
    [
      ".clap-button__count",
      {
        y: [0, -40],
        x: "-50%",
        scale: [0.05, 1],
        opacity: [0, 1],
      },
      { at: "<" },
    ],
    [".clap-button__count", { opacity: 0 }, { duration: 0.2, delay: 0.4 }],
  ];
}

function getParticleAnimationProps({
  selectorPrefix,
  particleCount,
  angleOffset = 0,
  distance = 80,
}: {
  selectorPrefix: string;
  particleCount: number;
  angleOffset?: number;
  distance?: number;
}) {
  const particles = emptyArrayOfLength(particleCount);
  const angle = (2 * Math.PI) / particleCount; // radians

  const particleAnimations: AnimationSequence = particles.map((index) => {
    const x = Math.cos(angle * index + angleOffset);
    const y = Math.sin(angle * index + angleOffset);

    return [
      `${selectorPrefix}${index}`,
      {
        x: [0, x * distance],
        y: [0, y * distance],
        scale: [2, 1],
        opacity: [0, 1],
      },
      { duration: 0.2, at: "<" },
    ];
  });

  return particleAnimations;
}

function getParticleResetAnimationProps({
  selectorPrefix,
  particleCount,
}: {
  selectorPrefix: string;
  particleCount: number;
}) {
  const particles = emptyArrayOfLength(particleCount);

  const particleReset: AnimationSequence = particles.map((index) => {
    return [
      `${selectorPrefix}${index}`,
      { opacity: [1, 0] },
      { duration: 0.2, at: "<" },
    ];
  });

  return particleReset;
}

export default ClapButton;
