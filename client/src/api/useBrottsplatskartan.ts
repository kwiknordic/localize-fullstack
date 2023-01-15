import {useFetch} from "../hooks/useFetch.js"
import { ResponseDTO } from "@backend/services/responseDTO.js"
import { Params } from "@backend/services/brottsplatskartan/validationSchema.js"
import { PROD, getConnectionConfig } from "./utils/connectionConfig.js"

let apiConfig = {
  endpoint: "brottsplatskartan",
  ...getConnectionConfig()
}

export function useBrottsplatskartan(params?: Params) {
  const url = constructURL(params)
  return useFetch<ResponseDTO[]>(url)
}

function constructURL(params?: Params) {
  const { url, endpoint, port } = apiConfig
  if (!params || Object.keys(params) && PROD) return `${url}/${endpoint}`
  if (!params || Object.keys(params) && !PROD) return `${url}:${port}/${endpoint}`

  const query = Object
  .entries(params)
  .map(entry => `${entry.at(0)}=${entry.at(1)}`)
  .reduce((long, lat) => `${long}&${lat}`)

  if (PROD) return `${url}/${endpoint}/?${query}`
  return `${url}:${port}/${endpoint}/?${query}`
}