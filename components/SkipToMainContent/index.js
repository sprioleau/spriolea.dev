import React from "react"
import { useRouter } from "next/router";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { handleKeyDown } from "../../utils";

const SkipToMainContent = ({ sectionId = "#about" }) => {
  const router = useRouter();
  const buttonRef = React.useRef()

  const handleSkipToMainContent = () => {
    router.push(sectionId);
    buttonRef.current.blur();
  }

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
		<MdOutlineArrowRightAlt />
	</button>
  )
}

export default SkipToMainContent;
