import { useRouter } from "next/router";
import React from "react"
import { MdOutlineArrowRightAlt } from "react-icons/md";

const SkipToMainContent = ({ sectionId = "#about" }) => {
  const router = useRouter();
  const buttonRef = React.useRef()

  const handleSkipToMainContent = () => {
    router.push(sectionId);
    buttonRef.current.blur();
  }

  const handleKeyDown = (e) => {
    if (!["Enter", " "].includes(e.key)) return;
    if (e.key === " ") e.preventDefault();
    handleSkipToMainContent();
  };

  return (
	<button
      ref={buttonRef}
      type="button"
      className="skip-to-main-content"
      tabIndex={0}
      onClick={handleSkipToMainContent}
      onKeyDown={handleKeyDown}
    >
		<p className="skip-to-main-content__label">Skip to main content</p>
		<MdOutlineArrowRightAlt />
	</button>
  )
}

export default SkipToMainContent;
