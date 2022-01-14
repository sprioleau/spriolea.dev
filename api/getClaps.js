const getClaps = async (callback) => { 
  const response = await fetch("/api/getClaps");
  const { claps } = await response.json();

  if (callback && typeof callback === "function") return callback(claps);
  return claps;
}
    
export default getClaps;