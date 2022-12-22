import {
  FaFigma, FaLinkedinIn, FaGitAlt, FaNodeJs, FaNpm, FaReact, FaSass,
} from "react-icons/fa";
import {
  SiCss3, SiCypress, SiExpress, SiGraphql, SiHtml5, SiJavascript, SiJest, SiNextdotjs, SiRedux, SiTypescript, SiSocketdotio, SiHasura,
} from "react-icons/si";
import { TiArrowSync } from "react-icons/ti";
import { VscJson } from "react-icons/vsc";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { MdOutlineRemoveRedEye, MdOutlineMarkEmailRead, MdOutlineArrowRightAlt } from "react-icons/md";
import {
  FiThumbsUp, FiGitCommit, FiGithub, FiArrowDown, FiExternalLink,
} from "react-icons/fi";
import { HiOutlineCode, HiOutlineArrowNarrowRight } from "react-icons/hi";
import { CgFileDocument, CgSoftwareDownload } from "react-icons/cg";
import AdobeXd from "./AdobeXd";
import AdobePhotoshop from "./AdobePhotoshop";
import AdobeIllustrator from "./AdobeIllustrator";
import Clap from "./Clap";

const icons = {
  figma: <FaFigma />,
  git: <FaGitAlt />,
  file: <CgFileDocument />,
  download: <CgSoftwareDownload />,
  gitHub: <FiGithub />,
  code: <HiOutlineCode />,
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
  clap: <Clap />,
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
};

export default icons;
