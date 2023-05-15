import { CgFileDocument, CgSoftwareDownload } from "react-icons/cg";
import {
  FaFigma,
  FaGitAlt,
  FaLinkedinIn,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  FiArrowDown,
  FiExternalLink,
  FiGitCommit,
  FiGithub,
  FiThumbsUp,
} from "react-icons/fi";
import { HiOutlineArrowNarrowRight, HiOutlineCode } from "react-icons/hi";
import {
  MdOutlineArrowRightAlt,
  MdOutlineMarkEmailRead,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import {
  SiCss3,
  SiCypress,
  SiExpress,
  SiGraphql,
  SiHasura,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiRedux,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";

import AdobeIllustrator from "./AdobeIllustrator";
import AdobePhotoshop from "./AdobePhotoshop";
import AdobeXd from "./AdobeXd";
import Clap from "./Clap";
import { TiArrowSync } from "react-icons/ti";
import { VscJson } from "react-icons/vsc";

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
