import { useState, useEffect } from 'react'
const useAPI = (url) => {
  const [data, setData] = useState(null)
useEffect(() => {
    const fetchData = async () => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result.name)
        })
      }
      fetchData()
    }, [])
return { data }
  }
export default useAPI