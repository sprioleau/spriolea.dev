import { CgSoftwareDownload } from "react-icons/cg";
import { FaFigma, FaLinkedinIn, FaNodeJs, FaReact, FaSass, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { FiArrowDown, FiArrowLeft, FiArrowRight, FiExternalLink, FiGitCommit, FiGithub, } from "react-icons/fi";
import { HiOutlineArrowNarrowRight, HiOutlineCode, HiOutlinePresentationChartLine } from "react-icons/hi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { SiAmazonaws, SiAntdesign, SiAwslambda, SiCircleci, SiCypress, SiExpress, SiGraphql, SiHasura, SiJavascript, SiJest, SiNextdotjs, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

import AdobeIllustrator from "./AdobeIllustrator";
import AdobePhotoshop from "./AdobePhotoshop";
import Clap from "./Clap";
import ReactTestingLibrary from "./ReactTestingLibrary";

const icons = { 
  "ant-design": <SiAntdesign />,
  arrowDown: <FiArrowDown />,
  arrowLeft: <FiArrowLeft />,
  arrowRight: <FiArrowRight />,
  arrowRightNarrow: <HiOutlineArrowNarrowRight />,
  "aws-lambda": <SiAwslambda />,
  chart: <HiOutlinePresentationChartLine />,
  "circle-ci": <SiCircleci />,
  clap: <Clap />,
  close: <RiCloseLine />,
  code: <HiOutlineCode />,
  commit: <FiGitCommit />, 
  css: <FaCss3Alt />, 
  "cypress": <SiCypress />,
  download: <CgSoftwareDownload />,
  email: <MdOutlineMarkEmailRead />,
  express: <SiExpress />,
  externalLink: <FiExternalLink />,
  figma: <FaFigma />,
  "framer-motion": <TbBrandFramerMotion />,
  gitHub: <FiGithub />,
  graphql: <SiGraphql />,
  hasura: <SiHasura />,
  html: <FaHtml5 />,
  "jest": <SiJest />,
  "react-testing-library": <ReactTestingLibrary />,
  aws: <SiAmazonaws />,
  illustrator: <AdobeIllustrator />,
  javascript: <SiJavascript />,
  linkedIn: <FaLinkedinIn />,
  menu: <RiMenu3Line />,
  nextjs: <SiNextdotjs />,
  node: <FaNodeJs />,
  photoshop: <AdobePhotoshop />,
  react: <FaReact />,
  redux: <SiRedux />,
  sass: <FaSass />,
  typescript: <SiTypescript />,
} as const;

export default icons;
