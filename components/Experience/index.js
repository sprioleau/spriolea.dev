import TabList from "../TabList";
import PageSectionLayout from "../PageSectionLayout";
import ProjectKudos from "../ProjectKudos";

function Experience({ experience, kudos, jobTypes }) {
  if (!experience) return null;

  return (
    <PageSectionLayout
      sectionId="experience"
      sectionTitle="Experience"
    >
      {jobTypes
        .sort((a, b) => b.type.localeCompare(a.type))
        .map(({ _id, type, showSublabel, expandByDefault, shouldHide }) => (
          <TabList
            key={_id}
            id={_id}
            label={type}
            experience={experience}
            showSublabel={showSublabel}
            expandByDefault={expandByDefault}
            shouldHide={shouldHide}
          />
        ))}
      <ProjectKudos kudos={kudos} />
    </PageSectionLayout>
  );
}

export default Experience;
