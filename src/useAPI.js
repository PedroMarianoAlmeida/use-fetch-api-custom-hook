import { useState, useEffect } from 'react'

const useAPI = (initialUrl, skip = false) => {
  const [url, updateUrl] = useState(initialUrl)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

useEffect(() => {
    const fetchData = async () => {
      if (skip) {
        return
      }  
      setIsLoading(true)
        try {
            const response = await fetch(url)
            const result = await response.json()
            if (response.ok) {
              setData(result.name)
            } else {
              setHasError(true)
              setErrorMessage(`Error: ${result.error}`)
            }
            setIsLoading(false)
          } catch (err) {
            setHasError(true)
            setErrorMessage(err.message)
            setIsLoading(false)
          }
        }
      fetchData()
    }, [skip, url])
return { data, isLoading, hasError, errorMessage, updateUrl }
  }
export default useAPI