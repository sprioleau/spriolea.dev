const sortByYearAndTitle = (a, b) => {
  const aYear = Number(a.yearBuilt.slice(0, 4));
  const bYear = Number(b.yearBuilt.slice(0, 4));

  if (aYear === bYear) return b.title - a.title;
  return aYear > bYear ? -1 : 1;
};

export default sortByYearAndTitle;
