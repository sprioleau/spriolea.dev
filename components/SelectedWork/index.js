/* eslint-disable @next/next/no-img-element */

import { urlFor } from "../../libs/sanity";
import PortableTextBlock from "../PortableTextBlock";
import icons from "../Icons";

function SelectedWork({ projects }) {
  return (
    <div className="selected-work">
      <ul className="selected-work__works">
        {projects.map(
          ({ _id, mainImage, title, tags, description, links: { gitHubUrl, vsCodeUrl, deployedUrl }, emoji }) => (
            <li
              key={_id}
              className="selected-work__work"
            >
              <div className="selected-work__image">
                <a
                  href={deployedUrl}
                  className="button selected-work__link"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundImage: `url(${urlFor(mainImage)
                      .format("webp")
                      .width(800)
                      .height(800 * 0.5625)
                      .url()})`,
                    backgroundSize: "cover",
                  }}
                >
                  <span>{title}</span>
                </a>
              </div>
              <div className="selected-work__details">
                <h3 className="selected-work__title">{title}</h3>
                <p className="selected-work__description">
                  {description.map(({ _key, children, markDefs }) => (
                    <PortableTextBlock
                      key={_key}
                      childrenContent={children}
                      markDefs={markDefs}
                    />
                  ))}
                </p>
                <div className="selected-work__meta">
                  {tags && (
                    <ul className="selected-work__tags">
                      {tags.map(({ _id: tagKey, name }) => (
                        <li
                          key={tagKey}
                          className="selected-work__tag"
                        >
                          <p>{name}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                  {(gitHubUrl || vsCodeUrl || deployedUrl) && (
                    <ul className="selected-work__icon-links">
                      {gitHubUrl && (
                        <li>
                          <a
                            aria-label="link"
                            href={gitHubUrl}
                            rel="noreferrer"
                            className="selected-work__icon-link shadow-link"
                            target="_blank"
                          >
                            {icons.gitHub}
                          </a>
                        </li>
                      )}
                      {vsCodeUrl && (
                        <li>
                          <a
                            aria-label="link"
                            href={vsCodeUrl}
                            rel="noreferrer"
                            className="selected-work__icon-link shadow-link"
                            target="_blank"
                          >
                            {icons.code}
                          </a>
                        </li>
                      )}
                      {deployedUrl && (
                        <li>
                          <a
                            aria-label="link"
                            href={deployedUrl}
                            rel="noreferrer"
                            className="selected-work__icon-link shadow-link"
                            target="_blank"
                          >
                            {icons.externalLink}
                          </a>
                        </li>
                      )}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default SelectedWork;
