import SectionHeader from "../SectionHeader";

type Props = {
  sectionId: string;
  sectionTitle: string;
  shouldCenter?: boolean;
  children: React.ReactNode;
};

export default function PageSectionLayout({
  sectionId,
  sectionTitle,
  shouldCenter,
  children,
}: Props) {
  return (
    <section className={`${sectionId} section`}>
      <div
        id={sectionId}
        className="marker"
      />
      <div className="container">
        <SectionHeader
          sectionTitle={sectionTitle}
          shouldCenter={shouldCenter}
        />
        <div className={`${sectionId}__main-content`}>{children}</div>
      </div>
    </section>
  );
}
