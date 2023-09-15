import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { CgSoftwareDownload } from "react-icons/cg";
import { HiOutlineCode, HiOutlineArrowNarrowRight, HiOutlinePresentationChartLine } from "react-icons/hi";
import { FiGithub, FiExternalLink, FiGitCommit, FiArrowDown, FiArrowLeft, FiArrowRight, } from "react-icons/fi";
import { FaLinkedinIn, } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";

import Clap from "./Clap";

const icons = { 
  clap: <Clap />,
  linkedIn: <FaLinkedinIn />,
  commit: <FiGitCommit />, 
  gitHub: <FiGithub />,
  menu: <RiMenu3Line />,
  chart: <HiOutlinePresentationChartLine />,
  close: <RiCloseLine />,
  code: <HiOutlineCode />,
  download: <CgSoftwareDownload />,
  arrowRight: <FiArrowRight />,
  arrowDown: <FiArrowDown />,
  arrowRightNarrow: <HiOutlineArrowNarrowRight />,
  arrowLeft: <FiArrowLeft />,
  externalLink: <FiExternalLink />,
  email: <MdOutlineMarkEmailRead />,
} as const;

export default icons;
