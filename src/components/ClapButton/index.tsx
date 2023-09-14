"use client";

import { animate as animateImport, motion, useAnimate } from "framer-motion";
import { composeClasses, toastMessage } from "@/utils";

import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
import Clap from "../Icons/Clap";

type Props = {
  serverClapCount: number;
  clientClapCount: number;
  setClientClapCount: React.Dispatch<React.SetStateAction<number>>;
};

const MAX_CLAP_COUNT = 15;

const ClapButton = ({ serverClapCount, clientClapCount, setClientClapCount }: Props) => {
  const [scope, animate] = useAnimate();
  const [hasSeenToast, setHasSeenToast] = useState(false);

  const debouncedHandleClaps = useDebouncedCallback(async () => {
    await fetch("/claps", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newClapsTotal: serverClapCount + clientClapCount }),
    });
  }, 1500);

  function decrementClaps() {
    const newClapCount = clientClapCount - 1;
    const countAnimationProps = getCountAnimationProps();
    const fillAnimationProps = getFillAnimationProps(newClapCount / MAX_CLAP_COUNT);

    animate([...fillAnimationProps, ...countAnimationProps]);

    setClientClapCount(newClapCount);
    debouncedHandleClaps();
  }

  function incrementClaps() {
    const newClapCount = clientClapCount + 1;

    if (newClapCount === MAX_CLAP_COUNT && !hasSeenToast) {
      toastMessage("Thanks for the claps!");
      setHasSeenToast(true);
    }

    const countAnimationProps = getCountAnimationProps();
    const fillAnimationProps = getFillAnimationProps(newClapCount / MAX_CLAP_COUNT);

    animate([...fillAnimationProps, ...countAnimationProps]);

    setClientClapCount(newClapCount);
    debouncedHandleClaps();
  }

  function handleTouch(e: React.MouseEvent<HTMLButtonElement>) {
    if (!e.altKey && clientClapCount >= MAX_CLAP_COUNT) {
      if (hasSeenToast) return;
      toastMessage("Thanks for the claps");
      return;
    }

    if (e.altKey && clientClapCount === 0) return;

    if (e.altKey && clientClapCount > 0) {
      decrementClaps();
      return;
    }

    incrementClaps();
  }

  function handleKeydown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (![" ", "Enter"].includes(e.key)) return;

    if (e.altKey) {
      decrementClaps();
      return;
    }

    incrementClaps();
  }

  return (
    <>
      <div
        className={composeClasses({
          "clap-button": true,
          pulse: clientClapCount < MAX_CLAP_COUNT,
        })}
      >
        <div
          ref={scope}
          className="clap-button__wrapper"
        >
          <motion.button
            className="clap-button__button clap no-frame"
            onMouseDown={handleTouch}
            onKeyDown={(e) => handleKeydown(e)}
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
        </div>
      </div>
    </>
  );
};

type AnimationSequence = Parameters<typeof animateImport>[0];

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

export default ClapButton;
