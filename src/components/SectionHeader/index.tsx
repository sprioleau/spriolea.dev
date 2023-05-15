"use client";

import useWindowSize, { breakpoints as bp } from "../../hooks/useWindowSize";

import { composeClasses } from "../../utils";

type Props = {
  sectionTitle: string;
  shouldCenter?: boolean;
};

const SectionHeader = ({ sectionTitle, shouldCenter = false }: Props) => {
  const { windowSize } = useWindowSize();
  const isSmallScreen = windowSize && windowSize <= bp.md;

  const sectionHeaderClasses = composeClasses({
    "section-header": true,
    center: shouldCenter ?? isSmallScreen,
  });

  return (
    <header className={sectionHeaderClasses}>
      <h2 className="section-header__title">{sectionTitle}</h2>
      <div className="section-header__accent-line" />
    </header>
  );
};

export default SectionHeader;
