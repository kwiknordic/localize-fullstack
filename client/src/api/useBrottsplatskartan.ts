import {useFetch} from "../hooks/useFetch.js"
import { ResponseDTO } from "@backend/services/responseDTO.js"
import { Params } from "@backend/services/brottsplatskartan/validationSchema.js"

const apiConfig = {
  url: "https://localize-production.up.railway.app",
  port: "5001",
  endpoint: "brottsplatskartan"
}

export function useBrottsplatskartan(params?: Params) {
  const url = constructURL(params)
  return useFetch<ResponseDTO[]>(url)
}

function constructURL(params?: Params) {
  const { url, port, endpoint } = apiConfig
  if (!params || Object.keys(params)) return `${url}:${port}/${endpoint}`

  const query = Object
  .entries(params)
  .map(entry => `${entry.at(0)}=${entry.at(1)}`)
  .reduce((long, lat) => `${long}&${lat}`)

  return `${url}:${port}/${endpoint}/?${query}`
}