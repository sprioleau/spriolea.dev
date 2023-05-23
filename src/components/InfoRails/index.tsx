import { client, queries } from "@/libs/sanity";

import CopyEmailButton from "../CopyEmailButton";
import { SiteDetails } from "@/schemas/types";
import icons from "../Icons";

export default async function InfoRails() {
  const siteDetails = await client.fetch<SiteDetails>(queries.siteDetails);

  const {
    creator: {
      email,
      links: { gitHubUrl },
    },
    meta: { vsCodeUrl },
  } = siteDetails;

  return (
    <div className="info-rails">
      <div className="info-rails__left">
        <ul className="info-rails__link-list">
          <li className="info-rails__link-list-item">
            <a
              aria-label="link"
              href={gitHubUrl}
              rel="noreferrer"
              className="info-rails__link shadow-link"
              target="_blank"
            >
              <span className="icon">{icons.gitHub}</span>
            </a>
          </li>
          <li className="info-rails__link-list-item">
            <a
              aria-label="link"
              href={vsCodeUrl}
              rel="noreferrer"
              className="info-rails__link shadow-link"
              target="_blank"
            >
              <span className="icon">{icons.code}</span>
            </a>
          </li>
          <li className="info-rails__link-list-item">
            <a
              aria-label="link"
              href="https://www.linkedin.com/in/sanquanprioleau/"
              rel="noreferrer"
              className="info-rails__link shadow-link"
              target="_blank"
            >
              <span className="icon">{icons.linkedIn}</span>
            </a>
          </li>
        </ul>
        <div className="info-rails__accent-line" />
      </div>
      <div className="info-rails__right">
        <ul className="info-rails__link-list">
          <li className="info-rails__link-list-item">
            <CopyEmailButton
              email={email}
              className="info-rails__link text-link"
            />
          </li>
        </ul>
        <div className="info-rails__accent-line" />
      </div>
    </div>
  );
}
