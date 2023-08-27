type ClassObject = Record<string, boolean>;

export default function composeClasses(classesObject: ClassObject) {
  const classList = Object.entries(classesObject);

  let newClassList: string[] = [];

  classList.forEach(([classString, condition]) => {
    const validString = typeof condition === "string" && condition === "";
    const validBoolean = typeof condition === "boolean" && condition === true;
    const classIsDefined = classString !== undefined;
    const validCondition = (validString || validBoolean) && classIsDefined;

    if (!validCondition) return;
    newClassList = newClassList.concat(classString);
  });

  return newClassList.join(" ");
}
