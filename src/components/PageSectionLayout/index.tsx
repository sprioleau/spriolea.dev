import { composeClasses } from "@/utils";
import SectionHeader from "../SectionHeader";

type Props = {
  sectionTitle: string;
  children: React.ReactNode;
  sectionId?: string;
  shouldCenter?: boolean;
};

export default function PageSectionLayout({
  sectionTitle,
  children,
  sectionId = "",
  shouldCenter = false,
}: Props) {
  const pageSectionLayoutClasses = composeClasses({
    section: true,
    [sectionId]: Boolean(sectionId),
  });

  return (
    <section className={pageSectionLayoutClasses}>
      {Boolean(sectionId) && (
        <div
          id={sectionId}
          className="marker"
        />
      )}
      <div className="container">
        <SectionHeader
          sectionTitle={sectionTitle}
          shouldCenter={shouldCenter}
        />
        <div className={sectionId ? `${sectionId}__main-content` : undefined}>
          {children}
        </div>
      </div>
    </section>
  );
}
