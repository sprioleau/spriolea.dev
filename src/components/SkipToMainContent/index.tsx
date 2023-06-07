"use client";

import { handleKeyDown } from "../../utils";
import icons from "../Icons";
import { useRef } from "react";
import { useRouter } from "next/navigation";

type Props = {
  sectionId: string;
};

const SkipToMainContent = ({ sectionId = "about" }: Props) => {
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSkipToMainContent = () => {
    router.push(`#${sectionId}`);
    buttonRef?.current?.blur();
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      className="skip-to-main-content"
      tabIndex={0}
      onClick={handleSkipToMainContent}
      onKeyDown={(e) => handleKeyDown(e, handleSkipToMainContent)}
    >
      <p className="skip-to-main-content__label">Skip to main content</p>
      {icons.arrowRight}
    </button>
  );
};

export default SkipToMainContent;
