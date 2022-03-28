import TabList from "../TabList";
import PageSectionLayout from "../PageSectionLayout";
import { organizeByKey } from "../../utils";
import ProjectKudos from "../ProjectKudos";

const Experience = ({ experience, kudos }) => {
  if (!experience) return null;

  const experienceByType = organizeByKey(experience, "jobType.type");

  const tabListData = [
    {
      label: "Web Development",
      id: "web-development",
      showSublabel: true,
      expandByDefault: true,
    },
    {
      label: "Engineering",
      id: "engineering",
      showSublabel: false,
      expandByDefault: false,
    },
  ];

  return (
    <PageSectionLayout sectionId="experience" sectionTitle="Experience">
      {tabListData.map(({
        id, label, showSublabel, expandByDefault,
      }) => (
        <TabList
          key={label}
          id={id}
          label={label}
          experience={experienceByType[label]}
          showSublabel={showSublabel}
          expandByDefault={expandByDefault}
        />
      ))}
      <ProjectKudos kudos={kudos} />
    </PageSectionLayout>
  );
};

export default Experience;
