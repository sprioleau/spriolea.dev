export default function emptyArrayOfLength(length: number) {
  return Array.from({ length }).map((_, index) => index);
}
