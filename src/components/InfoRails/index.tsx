import { client, queries } from "@/libs/sanity";

import CopyEmailButton from "../CopyEmailButton";
import { SiteDetails } from "@/schemas/types";
import icons from "../Icons";

export default async function InfoRails() {
  const siteDetails = await client.fetch<SiteDetails[]>(queries.siteDetails);

  const {
    creator: {
      email,
      links: { gitHubUrl },
    },
    meta: { vsCodeUrl },
  } = siteDetails[0];

  return (
    <>
      <div className="info-rail left">
        <ul className="info-rail__link-list">
          <li className="info-rail__link-list-item">
            <a
              aria-label="link"
              href={gitHubUrl}
              rel="noreferrer"
              className="info-rail__link shadow-link"
              target="_blank"
            >
              <span className="icon">{icons.gitHub}</span>
            </a>
          </li>
          <li className="info-rail__link-list-item">
            <a
              aria-label="link"
              href={vsCodeUrl}
              rel="noreferrer"
              className="info-rail__link shadow-link"
              target="_blank"
            >
              <span className="icon">{icons.code}</span>
            </a>
          </li>
          <li className="info-rail__link-list-item">
            <a
              aria-label="link"
              href="https://www.linkedin.com/in/sanquanprioleau/"
              rel="noreferrer"
              className="info-rail__link shadow-link"
              target="_blank"
            >
              <span className="icon">{icons.linkedIn}</span>
            </a>
          </li>
        </ul>
        <div className="info-rail__accent-line" />
      </div>
      <div className="info-rail right">
        <ul className="info-rail__link-list">
          <li className="info-rail__link-list-item">
            <CopyEmailButton email={email} />
          </li>
        </ul>
        <div className="info-rail__accent-line" />
      </div>
    </>
  );
}
