const getContributions = async (callback) => { 
  const response = await fetch("/api/getContributions");
  const { contributions } = await response.json();

  if (callback && typeof callback === "function") return callback(contributions);
  return contributions;
}
    
export default getContributions;