import { client, queries, urlFor } from "@/libs/sanity";

import { AboutData } from "@/schemas/types";
import Image from "next/image";
import { PortableTextBlock } from "@/components";

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
      {/* <div className="about__image"> */}
      <Image
        className="about__image"
        src={urlFor(mainImage).format("webp").width(400).height(400).url()}
        alt="San'Quan Prioleau headshot"
        width={400}
        height={400}
        quality={100}
        priority
      />
      {/* </div> */}
    </>
  );
}
