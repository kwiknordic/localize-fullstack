import { useEffect, useState } from "react";

export interface FetchState<T> {
  data: T | undefined;
  loading: boolean;
  error: Error | boolean;
}

export const useFetch = <T,>(url: string): FetchState<T> => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    setError(false)
    let isCancelled = false
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled) setData(data);
      })
      .catch((error) => {
        if (!isCancelled) setError(error);
      })
      .finally(() => {
        setLoading(false);
      })

      return () => {
        abortController.abort()
        isCancelled = true 
      };

}, [url]);

  return { data, loading, error };
};