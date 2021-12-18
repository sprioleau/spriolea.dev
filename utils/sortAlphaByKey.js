const sortAlphaByKey = (a, b, key, direction = "ascending") => {
  const value = direction === "ascending" ? 1 : -1;
  return (a[key] > b[key]) ? value : -value
}

export default sortAlphaByKey;