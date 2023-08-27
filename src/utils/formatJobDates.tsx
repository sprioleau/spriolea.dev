import formatIsoDate from "./formatIsoDate";
import icons from "../components/Icons";

export default function formatJobDates(
  start: string,
  end: string | null = null,
  isCurrent: boolean = false
) {
  const from = formatIsoDate(start);
  let to = end ? formatIsoDate(end) : null;

  if (!end && isCurrent) to = "Present";

  return (
    <>
      {from} <span className="icon p0 mi-2">{icons.arrowRightNarrow}</span> {to}
    </>
  );
}
