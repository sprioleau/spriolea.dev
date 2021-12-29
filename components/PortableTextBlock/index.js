/* eslint-disable no-param-reassign */
import React from "react"

// Reference: https://stackoverflow.com/questions/23476532/check-if-string-contains-only-letters-in-javascript
const isTag = (text) => /^[a-z]+$/i.test(text);

const PortableTextBlock = ({ childrenContent, markDefs }) => {
  const linkLookup = markDefs.reduce((links, link) => {
    const { _key: key, href } = link;
    links[key] = href;
    return links;
  }, {})

  const renderText = (text, marks) => {
    const hasLinks = marks.some((mark) => !isTag(mark));

    if (!hasLinks && marks.includes("em")) {
      return <em>{text}</em>
    } else if (hasLinks) {
      const link = linkLookup[marks[0]];
      return <a href={link} target="_blank" rel="noreferrer">{text}</a>
    } else {
      return <span>{text}</span>
    }
  }

  return (
    <>
      {childrenContent.map(({ _key, text, marks }) => (
        <React.Fragment key={_key}>
          {renderText(text, marks)}
        </React.Fragment>
      ))}
    </>
  )
}

export default PortableTextBlock;
