import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { CgSoftwareDownload } from "react-icons/cg";
import { HiOutlineCode, HiOutlineArrowNarrowRight, HiOutlinePresentationChartLine } from "react-icons/hi";
import { FiGithub, FiExternalLink, FiGitCommit, FiArrowDown, FiArrowLeft, FiArrowRight, } from "react-icons/fi";
import { FaFigma, FaLinkedinIn, FaNodeJs, FaReact, FaSass, } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import {SiExpress, SiGraphql, SiHasura, SiJavascript, SiNextdotjs, SiTypescript} from "react-icons/si"

import Clap from "./Clap";
import AdobeIllustrator from "./AdobeIllustrator";
import AdobePhotoshop from "./AdobePhotoshop";

const icons = { 
  arrowDown: <FiArrowDown />,
  arrowLeft: <FiArrowLeft />,
  arrowRight: <FiArrowRight />,
  arrowRightNarrow: <HiOutlineArrowNarrowRight />,
  chart: <HiOutlinePresentationChartLine />,
  clap: <Clap />,
  close: <RiCloseLine />,
  code: <HiOutlineCode />,
  commit: <FiGitCommit />, 
  download: <CgSoftwareDownload />,
  email: <MdOutlineMarkEmailRead />,
  express: <SiExpress />,
  externalLink: <FiExternalLink />,
  figma: <FaFigma />,
  gitHub: <FiGithub />,
  graphql: <SiGraphql />,
  hasura: <SiHasura />,
  illustrator: <AdobeIllustrator />,
  javascript: <SiJavascript />,
  linkedIn: <FaLinkedinIn />,
  menu: <RiMenu3Line />,
  nextjs: <SiNextdotjs />,
  node: <FaNodeJs />,
  photoshop: <AdobePhotoshop />,
  react: <FaReact />,
  sass: <FaSass />,
  typescript: <SiTypescript />,
} as const;

export default icons;
