import { Kudos } from "@/schemas/types";
import PortableTextBlock from "../PortableTextBlock";

import styles from "./styles.module.scss";
import { HiOutlinePresentationChartLine } from "react-icons/hi";

type Props = {
  kudos: Kudos;
};

export default function KudosCard({ kudos: { quote, credit, project } }: Props) {
  return (
    <article className={styles.kudo}>
      <p className={styles.quote}>
        <PortableTextBlock
          childrenContent={quote[0].children}
          markDefs={quote[0].markDefs}
        />
      </p>
      <p className={styles.credit}>
        {credit.jobTitle}, {credit.company}
      </p>
      <div className={styles["project-wrapper"]}>
        <HiOutlinePresentationChartLine />
        <p className={styles["project-name"]}>Project: {project.name}</p>
      </div>
    </article>
  );
}
