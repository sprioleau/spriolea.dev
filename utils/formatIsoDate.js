const formatIsoDate = (isoDate) => {
  const [year, month] = isoDate.split("-")
  return `${month}-${year}`
}

export default formatIsoDate;