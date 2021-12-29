const formatIsoDate = (isoDate, format = null) => {
  const [year, month] = isoDate.split("-");
  if (format === "YYYY") return year;
  return `${month}-${year}`
}

export default formatIsoDate;