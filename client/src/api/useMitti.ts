import {useFetch} from "../hooks/useFetch.js"
import { ResponseDTO } from "@backend/services/responseDTO.js"
import { Params } from "@backend/services/mitti/validationSchema.js"
import { PROD, getConnectionConfig } from "./utils/connectionConfig.js"

const apiConfig = {
  endpoint: "mitti",
  ...getConnectionConfig()
}

// find a way to share params from server-side
export function useMitti(params?: Params) {
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