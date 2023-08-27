export default function getFilenameDate() {
  const date = new Date();
  const [rawMonth, rawDay, year] = date.toLocaleDateString().split("/");
  const month = rawMonth.length === 1 ? `0${rawMonth}` : rawMonth;
  const day = rawDay.length === 1 ? `0${rawDay}` : rawDay;
  return `${year}-${month}-${day}`;
}
