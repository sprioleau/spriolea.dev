import { VscJson } from "react-icons/vsc";
import { TiArrowSync } from "react-icons/ti";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { CgFileDocument, CgSoftwareDownload } from "react-icons/cg";
import { HiOutlineCode, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FiGithub, FiExternalLink, FiGitCommit, FiThumbsUp, FiArrowDown, } from "react-icons/fi";
import { FaFigma, FaGitAlt, FaNodeJs, FaNpm, FaReact, FaSass, FaLinkedinIn, } from "react-icons/fa";
import { MdOutlineRemoveRedEye, MdOutlineArrowRightAlt, MdOutlineMarkEmailRead, } from "react-icons/md";
import { SiCss3, SiCypress, SiExpress, SiGraphql, SiHasura, SiHtml5, SiJavascript, SiJest, SiNextdotjs, SiRedux, SiTypescript, SiSocketdotio, } from "react-icons/si";

import AdobeIllustrator from "./AdobeIllustrator";
import AdobePhotoshop from "./AdobePhotoshop";
import AdobeXd from "./AdobeXd";
import Clap from "./Clap";

const icons = {
  figma: <FaFigma />,
  git: <FaGitAlt />,
  file: <CgFileDocument />,
  download: <CgSoftwareDownload />,
  gitHub: <FiGithub />,
  code: <HiOutlineCode />,
  clap: <Clap />,
  externalLink: <FiExternalLink />,
  api: <VscJson />,
  node: <FaNodeJs />,
  npm: <FaNpm />,
  react: <FaReact />,
  sass: <FaSass />,
  css: <SiCss3 />,
  linkedIn: <FaLinkedinIn />,
  cypress: <SiCypress />,
  express: <SiExpress />,
  graphql: <SiGraphql />,
  hasura: <SiHasura />,
  html: <SiHtml5 />,
  es6: <SiJavascript />,
  javascript: <SiJavascript />,
  jest: <SiJest />,
  nextjs: <SiNextdotjs />,
  redux: <SiRedux />,
  typescript: <SiTypescript />,
  async: <TiArrowSync />,
  xd: <AdobeXd />,
  photoshop: <AdobePhotoshop />,
  illustrator: <AdobeIllustrator />,
  socketio: <SiSocketdotio />,
  menu: <RiMenu3Line />,
  close: <RiCloseLine />,
  commit: <FiGitCommit />,
  views: <MdOutlineRemoveRedEye />,
  thumbsUp: <FiThumbsUp />,
  arrowDown: <FiArrowDown />,
  arrowRight: <MdOutlineArrowRightAlt />,
  arrowRightNarrow: <HiOutlineArrowNarrowRight />,
  email: <MdOutlineMarkEmailRead />,
} as const;

export default icons;
