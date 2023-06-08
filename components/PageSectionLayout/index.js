import SectionHeader from "../SectionHeader";

function PageSectionLayout({ sectionId, sectionTitle, center = false, children }) {
  return (
    <section className={`${sectionId} section`}>
      <div
        id={sectionId}
        className="marker"
      />
      <div className="container">
        <SectionHeader
          sectionTitle={sectionTitle}
          center={center}
        />
        <div className={`${sectionId}__main-content`}>{children}</div>
      </div>
    </section>
  );
}

export default PageSectionLayout;
