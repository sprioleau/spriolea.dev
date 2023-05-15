import {
  AdvanceToNextSectionButton,
  CallToActionButton,
  PortableTextBlock,
} from "@/components";
import { client, queries } from "@/libs/sanity";

import { HeroData } from "@/schemas/types";

export default async function Hero() {
  const heroContent = await client.fetch<HeroData[]>(queries.hero);
  const { brief, overline, heading, subHeading, cta, advanceToSectionSlug } =
    heroContent[0];

  return (
    <section className="hero section">
      <div className="container">
        <header className="hero__header">
          <p className="hero__overline">
            <span className="hero__greeting"> {overline}</span>
          </p>
          <div className="hero__headline-wrapper">
            <h1
              className="hero__headline"
              data-alt-text="san-KWON pry-OH-low"
            >
              {heading}
            </h1>
            <span className="hero__phonetic">san-KWON pry-OH-low</span>
          </div>

          <h2 className="hero__vocation">{subHeading}</h2>
          <p className="hero__brief">
            <PortableTextBlock
              childrenContent={brief[0].children}
              markDefs={brief[0].markDefs}
            />
          </p>
        </header>
        <CallToActionButton
          className="hero__cta-button"
          cta={cta}
        />
      </div>
      <AdvanceToNextSectionButton
        className="hero__view-more"
        advanceToSectionSlug={advanceToSectionSlug}
      />
    </section>
  );
}
