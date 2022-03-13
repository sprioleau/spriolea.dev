const sortByYearAndTitle = (a, b) => {
  const aYear = parseInt(a.year, 10);
  const bYear = parseInt(b.year, 10);
  if (aYear === bYear) {
    return b.title - a.title;
  }

  return aYear > bYear ? -1 : 1;
};

export default sortByYearAndTitle;
