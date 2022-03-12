const MetaTag = ({ data }) => {
  const getAttributes = ([propertyName, propertyValue], [contentName, contentValue]) => ({
    [propertyName]: propertyValue,
    [contentName]: contentValue,
  });

  return (
    <>
      {data.map((attribute) => {
        const [property, content] = Object.entries(attribute);

        return (
          <meta key={property} {...getAttributes(property, content)} />
        );
      })}
    </>
  );
};

export default MetaTag;
