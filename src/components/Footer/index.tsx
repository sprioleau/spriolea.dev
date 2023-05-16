import { client, queries } from "@/libs/sanity";

// import { BASE_URL } from "@/contants";
import { ContributionsData } from "@/libs/github";
import { FooterContent } from "@/components";
import { FooterData } from "@/schemas/types";

export default async function Footer() {
  const footerContent = await client.fetch<FooterData[]>(queries.footer);
  const { contributions } = (await fetch(
    `${process.env.VERCEL_URL}/api/get-contributions`
  ).then((res) => res.json())) as ContributionsData;

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
