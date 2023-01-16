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
  if (!params && PROD) return `${url}/${endpoint}`
  if (!params && !PROD) return `${url}:${port}/${endpoint}`

  const formattedParams = Object.entries(params!)
  .filter((param) => param[1] !== undefined)
  .map(param => [param[0], String(param[1])])
  
  const query = new URLSearchParams(formattedParams).toString();
  if (PROD) return `${url}/${endpoint}/?${query}`
  return `${url}:${port}/${endpoint}/?${query}`
}