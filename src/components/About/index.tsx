import { PortableTextBlock } from "@/components";
import { client, queries, urlFor } from "@/libs/sanity";
import { AboutData } from "@/schemas/types";
import Image from "next/image";

export default async function About() {
  const aboutContent = await client.fetch<AboutData>(queries.about);
  const { body, mainImage } = aboutContent;

  return (
    <>
      <div className="about__bio">
        <div className="about__bio-text">
          {body.map(({ _key, children, markDefs }) => (
            <p key={_key}>
              <PortableTextBlock
                childrenContent={children}
                markDefs={markDefs}
              />
            </p>
          ))}
        </div>
      </div>
      <Image
        className="about__image"
        src={urlFor(mainImage).format("webp").width(350).height(350).url()}
        alt="San'Quan Prioleau headshot"
        width={350}
        height={350}
        quality={100}
        priority
      />
    </>
  );
}
