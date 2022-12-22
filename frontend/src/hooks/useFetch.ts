import { useEffect, useState } from 'react'

interface Params {
  url: string
  options: any
}

interface Response {
  data: any
  loading: boolean
  error: null | Error
}

const useFetch = ({ url, options }: Params): Response => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
  }, [url, options])

  return { data, loading, error }
}

export default useFetch
