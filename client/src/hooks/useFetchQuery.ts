import { useQuery } from "@tanstack/react-query";

export interface FetchState<T> {
  data: T | undefined;
  loading: boolean;
  error: unknown;
}

export const useFetchQuery = <T,>(url: string): FetchState<T> => {
  const abortController = new AbortController();
  const { isLoading: loading, error, data } = useQuery({
    queryKey: [url],
    queryFn: () =>
    fetch(url, { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => data)
  });

  return { data, loading, error };
};