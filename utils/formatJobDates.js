import formatIsoDate from "./formatIsoDate";

const formatJobDates = (start, end = null, isCurrent = false) => {
  const from = formatIsoDate(start);
  let to = end ? formatIsoDate(end) : null;

  if (!end && isCurrent) to = "Present";

  return `${from} ⟶ ${to}`
}

export default formatJobDates;