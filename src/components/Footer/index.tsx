import { ContributionsData, fetchContributions } from "@/libs/github";
import { client, queries } from "@/libs/sanity";

import { FooterContent } from "@/components";
import { FooterData } from "@/schemas/types";
import { getClaps } from "@/utils";
import { incrementClaps } from "@/actions";

export default async function Footer() {
  const footerContent = await client.fetch<FooterData[]>(queries.footer);
  const { contributions } = (await fetchContributions()) as ContributionsData;
  const { data: claps } = await getClaps();
  const serverClapCount = claps ?? 0;

  const { body } = footerContent[0];

  return (
    <footer className="footer">
      <div className="container">
        <FooterContent
          content={body}
          contributions={contributions}
          serverClapCount={serverClapCount}
          incrementClaps={incrementClaps}
        />
      </div>
    </footer>
  );
}
