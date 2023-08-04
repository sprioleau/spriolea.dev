import getData from "./getData";

const getStats = async (callback) => {
  const { contributions } = await getData("/api/getContributions");

  const data = {
    contributions,
  };

  if (callback && typeof callback === "function") return callback(data);
  return data;
};

export default getStats;
