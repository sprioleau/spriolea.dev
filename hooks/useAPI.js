import React from "react"

const useAPI = (url, options) => {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url, options)
        const json = await response.json()
        setData(json)
        setIsLoading(false)
      } catch (errorMesssage) {
        setError(errorMesssage)
        setIsLoading(false)
      }
    }

    fetchData();
  }, [url, options])

  return { data, error, isLoading };
}

export default useAPI;