import { useEffect, useState } from "react";

export interface FetchState<T> {
  data: T | undefined;
  loading: boolean;
  error: Error | undefined;
}

const useFetch = <T>(url: string): FetchState<T> => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};

export default useFetch;