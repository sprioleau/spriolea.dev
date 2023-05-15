import { getFilenameDate } from "../../utils";
import icons from "../Icons";

export default function ResumeButton() {
  const resumeFilename = `sanquan_prioleau_resume_${getFilenameDate()}.pdf`;

  return (
    <div className="resume-button">
      <a
        href="/resume/SanQuan Prioleau - Resume (2022-12).pdf"
        className="nav__resume-link shadow-link"
        target="_blank"
        rel="noreferrer"
        download={resumeFilename}
      >
        <button
          type="button"
          className="resume-button__button m0"
          data-tooltip="Download"
        >
          <span className="icon resume-button__download-icon">
            {icons.download}
          </span>
          <span>Resume</span>
        </button>
      </a>
    </div>
  );
}
