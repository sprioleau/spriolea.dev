const formatNumber = (number) => {
  return number.toLocaleString("en-US", {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    minimumIntegerDigits: 1,
  });
}

export default formatNumber;