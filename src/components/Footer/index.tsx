import { FooterContent } from "@/components";
import { ContributionsData, fetchContributions } from "@/libs/github";
import { client, queries } from "@/libs/sanity";
import { FooterData } from "@/schemas/types";
import { getClaps } from "@/utils";

export default async function Footer() {
  const footerContent = await client.fetch<FooterData>(queries.footer);
  const { contributions } = (await fetchContributions()) as ContributionsData;
  const { data: claps } = await getClaps();
  const serverClapCount = claps ?? 0;

  const { body } = footerContent;

  return (
    <footer className="footer">
      <div className="container">
        <FooterContent
          content={body}
          contributions={contributions}
          serverClapCount={serverClapCount}
        />
      </div>
    </footer>
  );
}
