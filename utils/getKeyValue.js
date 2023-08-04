const getKeyValue = (object, path) => path.split(".").reduce((obj, key) => obj[key], object);

export default getKeyValue;
