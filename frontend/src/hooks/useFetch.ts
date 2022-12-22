import { useEffect, useState } from 'react'

interface FetchState<T> {
  data: T | undefined
  loading: boolean
  error: Error | undefined
}

const useFetch = <T>(url: string, options: {}): FetchState<T> => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  return { data, loading, error }
}

export default useFetch
