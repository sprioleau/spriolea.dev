const composeClasses = (classesObject) => {
  const classList = Object.entries(classesObject);

  let newClassList = [];

  classList.forEach(([classString, condition]) => {
    const validString = typeof condition === "string" && condition === "";
    const validBoolean = typeof condition === "boolean" && condition === true;
    const classIsDefined = classString !== undefined;
    const validCondition = (validString || validBoolean) && classIsDefined;

    if (!validCondition) return;
    newClassList = newClassList.concat(classString);
  });

  return newClassList.join(" ");
};

export default composeClasses;
