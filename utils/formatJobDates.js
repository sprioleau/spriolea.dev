import formatIsoDate from "./formatIsoDate";
import icons from "../components/Icons";

const formatJobDates = (start, end = null, isCurrent = false) => {
  const from = formatIsoDate(start);
  let to = end ? formatIsoDate(end) : null;

  if (!end && isCurrent) to = "Present";

  return <>{from} <span className="icon p0 mi-2">{icons.arrowRightNarrow}</span> {to}</>;
};

export default formatJobDates;
