export default function getKeyValue(object: any, path: string) {
  return path.split(".").reduce((obj, key) => obj[key], object);
}
