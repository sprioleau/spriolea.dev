import React from "react"
import icons from "../Icons";

const ResumeButton = ({ tabIndex }) => {
  const [shouldDownload, setShouldDownload] = React.useState(false);

  const handleDownload = () => setShouldDownload(true);

  return (
    <div className="resume-button">
      <a
        href="/resume/resume.pdf"
        className="nav__resume-link shadow-link"
        target="_blank"
        rel="noreferrer"
        download={shouldDownload}
      >
        <button type="button" className="m0 sm nav__button nav__button--resume resume-button__button" tabIndex={tabIndex}>
          <span className="icon resume-button__file-icon" data-tooltip="View">{icons.file}<span>Resume</span></span>
          <span className="icon resume-button__download-icon" role="button" tabIndex={tabIndex} data-tooltip="Download" onClick={handleDownload}>{icons.download}</span>
        </button>
      </a>
    </div>
  )
}

export default ResumeButton;