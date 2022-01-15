const getPageViews = async (callback) => { 
  const response = await fetch("/api/getPageViews");
  const { pageViews } = await response.json();

  if (callback && typeof callback === "function") return callback(pageViews);
  return pageViews;
}
    
export default getPageViews;