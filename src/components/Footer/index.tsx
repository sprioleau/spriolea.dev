import { client, queries } from "@/libs/sanity";

// import { BASE_URL } from "@/contants";
import { ContributionsData } from "@/libs/github";
import { FooterContent } from "@/components";
import { FooterData } from "@/schemas/types";

const url = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-contributions`;

console.log("🚀 ~ file: index.tsx:10 ~ url:", url);

export default async function Footer() {
  const footerContent = await client.fetch<FooterData[]>(queries.footer);
  const { contributions } = (await fetch(url).then((res) =>
    res.json()
  )) as ContributionsData;

  console.log("🚀 ~ file: index.tsx:14 ~ Footer ~ url:", url);

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
