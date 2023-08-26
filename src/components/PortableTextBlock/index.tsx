/* eslint-disable no-param-reassign */
import React from "react";

type Props = {
  childrenContent: {
    _key: string;
    text: string;
    marks: string[];
  }[];
  markDefs: {
    _key: string;
    _type: string;
    href: string;
  }[];
  linksClass?: string;
};

const PortableTextBlock = ({ childrenContent, markDefs, linksClass }: Props) => {
  const markIds = childrenContent
    .filter(({ marks }) => marks.length > 0)
    .flatMap(({ marks }) => marks[0])
    .filter((m) => m.length > 2);

  const markData = markIds.reduce((data: Record<string, any>, markId) => {
    data[markId] = markDefs.find(({ _key }) => _key === markId);
    return data;
  }, {});

  const linkLookup = markDefs.reduce((links: Record<string, any>, link) => {
    const { _key: key, href } = link;
    links[key] = href;
    return links;
  }, {});

  const renderText = (text: string, marks: string[]) => {
    if (marks.length === 0) return <span>{text}</span>;

    if (marks.includes("em")) return <em>{text}</em>;

    if (markData[marks[0]]._type === "link") {
      const link = linkLookup[marks[0]];
      return (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={linksClass}
        >
          {text}
        </a>
      );
    }

    if (markData[marks[0]]._type === "internalProjectReference") {
      // Shows formatted project name
      // return <span className="project-reference">{text.slice(1, text.length - 1)}<span>&#10038;</span></span>;
      return "";
    }

    return <span>{text}</span>;
  };

  return (
    <>
      {childrenContent.map(({ _key, text, marks }) => (
        <React.Fragment key={_key}>{renderText(text, marks)}</React.Fragment>
      ))}
    </>
  );
};

export default PortableTextBlock;
