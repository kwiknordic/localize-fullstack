import useFetch from "../../hooks/useFetch.js";
import { Root } from "./types.js"
import { constructBrottsplatsData } from "./utils.js";

export const useBrottsplatskartan = (long?: number, lat?: number) => {
  const { url, options } = constructFetchParams(long, lat)
  const { data, loading, error } = useFetch<Root>(url, options)
  
  const posts = constructBrottsplatsData(data)
  return { posts, loading, error }
}

const fallbackParams = {
  baseURL: 'https://brottsplatskartan.se/api',
  endpoint: 'eventsNearby',
  coords: {
    long: 18.06,
    lat: 59.32,
  },
}

function constructFetchParams(lat?: number, long?: number) {
  const { baseURL, endpoint, coords } = fallbackParams
  lat = lat ?? coords.lat
  long = long ?? coords.long

  return {
    url: `${baseURL}/${endpoint}/?lat=${lat}&lng=${long}`,
    options: {
      method: 'GET',
    },
  }
}
