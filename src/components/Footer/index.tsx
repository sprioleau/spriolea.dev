import { ContributionsData, fetchContributions } from "@/libs/github";
import { client, queries } from "@/libs/sanity";

import { FooterContent } from "@/components";
import { FooterData } from "@/schemas/types";

export default async function Footer() {
  const footerContent = await client.fetch<FooterData[]>(queries.footer);
  const { contributions } = (await fetchContributions()) as ContributionsData;

  const { body } = footerContent[0];

  return (
    <footer className="footer">
      <div className="container">
        <FooterContent
          content={body}
          contributions={contributions}
        />
      </div>
    </footer>
  );
}
