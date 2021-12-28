const getKeyValue = (object, path) => {
  return path.split(".").reduce((obj, key) => obj[key], object)
}

export default getKeyValue;