import { client, queries } from "@/libs/sanity";

import { Kudos } from "@/schemas/types";
import KudosCarousel from "../KudosCarousel";

import styles from "./styles.module.scss";

export default async function ProjectKudos() {
  const kudos = await client.fetch<Kudos[]>(queries.kudos);

  return (
    <div>
      <h3 className={styles.title}>Project Kudos</h3>
      <KudosCarousel kudos={kudos} />
    </div>
  );
}
