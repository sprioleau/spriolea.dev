import getKeyValue from "./getKeyValue";

export default function organizeByKey<T>(array: T[], path: string) {
  return array.reduce((result, item) => {
    const property = getKeyValue(item, path);

    if (!result[property]) {
      result[property] = [item];
    } else {
      result[property].push(item);
    }
    return result;
  }, {} as Record<string, T[]>);
}
