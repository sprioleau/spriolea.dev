import useWindowSize, { breakpoints as bp } from "../../hooks/useWindowSize";
import { composeClasses } from "../../utils";

function SectionHeader({ sectionTitle, center }) {
  const { windowSize } = useWindowSize();
  const isSmallScreen = windowSize <= bp.md;

  const sectionHeaderClasses = composeClasses({
    "section-header": "",
    center: center || isSmallScreen,
  });

  return (
    <header className={sectionHeaderClasses}>
      <h2 className="section-header__title">{sectionTitle}</h2>
      <div className="section-header__accent-line" />
    </header>
  );
}

export default SectionHeader;
