const getData = async (url) => { 
  let data = null;

  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  
  return data;
}
    
export default getData;