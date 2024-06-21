import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import icons from "@/components/Icons";

export type BaseSchema = {
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
  _updatedAt: string;
};

type ImageAsset = {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

export type SiteDetails = {
  creator: {
    name: string;
    email: string;
    links: {
      linkedInUrl: string;
      gitHubUrl: string;
    };
  };
  meta: {
    gitHubUrl: string;
    vsCodeUrl: string;
    deployedUrl: string;
    description: string;
    mainImage: ImageAsset;
  };
  siteName: string;
} & BaseSchema;

export type NavLink = {
  sectionSlug: string;
  sectionTitle: string;
  navLabel: string;
  order: 5;
} & BaseSchema;

type KeyAndType = {
  _key: string;
  _type: string; // Could use union "block" | "span" ...others
};

export type MarkDefs = {
  href: string;
} & KeyAndType;

type BodyContentChild = {
  marks: any[];
  text: string;
} & KeyAndType;

export type BodyContent = {
  markDefs: MarkDefs[];
  children: BodyContentChild[];
  style: string; // Could use union "normal" | ...others
} & KeyAndType;

export type FooterData = {
  body: BodyContent[];
  sectionName: string;
} & BaseSchema;

export type AboutData = {
  title: string;
  body: BodyContent[];
  mainImage: SanityImageSource;
} & BaseSchema;

export type ContactData = {
  email: string;
  overline: string;
} & BaseSchema;

type KudosProject = {
  name: string;
  shortDescription: string;
} & BaseSchema;

type Credit = {
  jobTitle: string;
  company: string;
  group: string;
  name: string;
  publishedAt: string;
} & BaseSchema;

export type Kudos = {
  project: KudosProject;
  credit: Credit;
  quote: BodyContent[];
} & BaseSchema;

type JobType = {
  shouldHide: boolean;
  expandByDefault: boolean;
  showSubLabel: boolean;
  publishedAt: string;
  type: string;
} & BaseSchema;

type WorkHighlight = {
  level: number;
  listItem: string;
} & BodyContent &
  KeyAndType;

type Employer = {
  logo: ImageAsset;
  alt: string;
  publishedAt: string;
  webAddress: string;
  name: string;
} & BaseSchema;

export type Experience = {
  location: string;
  label: string;
  jobTitle: string;
  currentlyInRole: boolean;
  jobType: JobType;
  workHighlights: WorkHighlight[];
  publishedAt: string;
  fromDate: string;
  toDate?: string;
  employer: Employer;
  order: number;
} & BaseSchema;

export type LinksObject = {
  gitHubUrl: string;
  deployedUrl: string;
  figmaUrl: string;
  vsCodeUrl: string;
};

type Association = {
  name: string;
} & BaseSchema;

type Tag = {
  name: string;
} & BaseSchema;

type Technology = Tag;

export type Project = {
  publishedAt: string;
  mainImage: ImageAsset;
  isFeatured: boolean;
  yearBuilt: string;
  order: number;
  emoji: string;
  title: string;
  links: LinksObject;
  builtFor: Association;
  builtWith: Technology[];
  tags: Tag[];
  description: BodyContent[];
} & BaseSchema;

type Category = string;

export type Skill = {
  publishedAt: string;
  category: Category[];
  techName: string;
  fullName: string;
  experienceYears: number;
  iconKey: keyof typeof icons;
} & BaseSchema;

export type CallToAction = {
  linkTarget: string;
  label: string;
};

export type HeroData = {
  brief: BodyContent[];
  overline: string;
  heading: string;
  subHeading: string;
  cta: CallToAction;
  advanceToSectionSlug: string;
} & BaseSchema;
