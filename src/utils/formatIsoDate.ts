export default function formatIsoDate(isoDate: string, format?: "YYYY") {
  const [year, month] = isoDate.split("-");
  if (format === "YYYY") return year;
  return `${month}-${year}`;
}
