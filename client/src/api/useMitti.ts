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
  if (!params || Object.keys(params) && PROD) return `${url}/${endpoint}`
  if (!params || Object.keys(params) && !PROD) return `${url}:${port}/${endpoint}`

  const query = Object
    .entries(params)
    .map(entry => `${entry.at(0)}=${entry.at(1)}`)
    .reduce((from, to) => `${from}&${to}`)

  if (PROD) return `${url}:${port}/${endpoint}/?${query}`
  return `${url}/${endpoint}/?${query}`
}