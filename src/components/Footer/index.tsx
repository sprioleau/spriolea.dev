import { ContributionsData, fetchContributions } from "@/libs/github";
import { client, queries } from "@/libs/sanity";

import { FooterContent } from "@/components";
import { FooterData } from "@/schemas/types";
import { get } from "@vercel/edge-config";

export default async function Footer() {
  const footerContent = await client.fetch<FooterData[]>(queries.footer);
  const { contributions } = (await fetchContributions()) as ContributionsData;
  const claps = (await get<number>("claps")) ?? 0;

  const { body } = footerContent[0];

  // TODO: Implement way to update claps
  // async function handleIncrementClaps(by: number) {}

  return (
    <footer className="footer">
      <div className="container">
        <FooterContent
          content={body}
          contributions={contributions}
          claps={claps}
        />
      </div>
    </footer>
  );
}
