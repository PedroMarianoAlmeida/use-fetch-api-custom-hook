import { useState, useEffect } from 'react'
const useAPI = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(url)
            const result = await response.json()
            if (response.ok) {
              setData(result.name)
            } else {
              setHasError(true)
              setErrorMessage(`Error: ${result.error}`)
              console.log(result)
            }
            setIsLoading(false)
          } catch (err) {
            setHasError(true)
            setErrorMessage(err.message)
            setIsLoading(false)
          }
        }
      fetchData()
    }, [])
return { data, isLoading, hasError, errorMessage }
  }
export default useAPI