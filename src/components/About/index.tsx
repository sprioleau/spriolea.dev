import { Logo, PortableTextBlock } from "@/components";

import { AboutData } from "@/schemas/types";
import Image from "next/image";
import { urlFor } from "@/libs/sanity";

type Props = {
  aboutContent: AboutData[];
};

export default async function About({ aboutContent }: Props) {
  // const aboutContent = await client.fetch<AboutData[]>(queries.about);
  const { body, mainImage } = aboutContent[0];

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
      <div className="about__image">
        <Image
          src={urlFor(mainImage).format("webp").width(400).height(400).url()}
          alt="San'Quan Prioleau headshot"
          width={400}
          height={400}
          quality={100}
        />
        <div className="about__logo">
          <Logo
            fill="transparent"
            stroke="currentColor"
            strokeWidth={2}
          />
        </div>
      </div>
    </>
  );
}
