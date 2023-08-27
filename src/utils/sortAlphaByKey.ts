// type SortObject = Record<string, string>;
type SortDirection = "ascending" | "descending";

export default function sortAlphaByKey<T>(
  a: T,
  b: T,
  key: keyof T,
  direction: SortDirection = "ascending"
) {
  const value = direction === "ascending" ? 1 : -1;
  return a[key] > b[key] ? value : -value;
}
