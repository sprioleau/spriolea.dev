type SortObject = Record<string, string>;
type SortDirection = "ascending" | "descending";

export default function sortAlphaByKey(
  a: SortObject,
  b: SortObject,
  key: string,
  direction: SortDirection = "ascending"
) {
  const value = direction === "ascending" ? 1 : -1;
  return a[key] > b[key] ? value : -value;
}
