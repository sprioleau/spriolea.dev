import React from "react";
import { getFilenameDate } from "../../utils";
import icons from "../Icons";

function ResumeButton({ tabIndex }) {
  const [download, setDownload] = React.useState(null);

  const handleDownload = () => {
    const date = getFilenameDate();
    const filename = `sanquan_prioleau_resume_${date}.pdf`;
    setDownload(filename);
  };

  return (
    <div className="resume-button">
      <a
        href="/resume/SanQuan Prioleau - Resume (2022-12).pdf"
        className="nav__resume-link shadow-link"
        target="_blank"
        rel="noreferrer"
        download={download}
      >
        <button type="button" className="m0 sm nav__button nav__button--resume resume-button__button" tabIndex={tabIndex}>
          <span className="icon resume-button__file-icon" data-tooltip="View">{icons.file}<span>Resume</span></span>
          <span className="icon resume-button__download-icon" role="button" tabIndex={tabIndex} data-tooltip="Download" onClick={handleDownload}>{icons.download}</span>
        </button>
      </a>
    </div>
  );
}

export default ResumeButton;
