import { useState, useEffect } from 'react'

const useAPI = (initialUrl, initialParams = {}, skip = false) => {
  const [url, updateUrl] = useState(initialUrl)
  const [params, updateParamsHooks] = useState(initialParams)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const queryString = () => {
    return `name=${params.name}`
  }

    const updateParams = (value) => {
      console.log(`Adress:${url} Params: ${params.name}`)
      updateParamsHooks({name: value});
    }

useEffect(() => {
    const fetchData = async () => {
      if (skip) {
        return
      }  
      setIsLoading(true)
        try {
          
          const response = await fetch(`${url}${queryString()}`)
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
    }, [skip, url, params])

    return { data, isLoading, hasError, errorMessage, updateUrl, updateParams }
}

export default useAPI