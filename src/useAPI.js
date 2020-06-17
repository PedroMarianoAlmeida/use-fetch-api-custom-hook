import { useState, useEffect } from 'react'
const useAPI = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true)
        fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result.name)
          setIsLoading(false)
        })
      }
      fetchData()
    }, [])
return { data, isLoading }
  }
export default useAPI