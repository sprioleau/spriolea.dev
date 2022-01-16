import getData from "./getData"

const getStats = async (callback) => { 
  const { pageViews } = await getData("/api/getPageViews");
  const { claps } = await getData("/api/getClaps");
  const { contributions } = await getData("/api/getContributions");

  const data = {
    pageViews,
    claps,
    contributions
  };

  if (callback && typeof callback === "function") return callback(data);
  return data;
}
    
export default getStats;