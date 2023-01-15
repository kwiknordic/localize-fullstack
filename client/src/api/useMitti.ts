import {useFetch} from "../hooks/useFetch.js"
import { ResponseDTO } from "@backend/services/responseDTO.js"
import { Params } from "@backend/services/mitti/validationSchema.js"

// change URL to wherever the Backend is

const apiConfig = {
  url: "https://localize-production.up.railway.app",
  port: "5001",
  endpoint: "mitti"
}

// find a way to share params from server-side
export function useMitti(params?: Params) {
  const url = constructURL(params)
  return useFetch<ResponseDTO[]>(url)
}

function constructURL(params?: Params) {
  const { url, port, endpoint } = apiConfig
  if (!params || Object.keys(params)) return `${url}:${port}/${endpoint}`

  const query = Object
    .entries(params)
    .map(entry => `${entry.at(0)}=${entry.at(1)}`)
    .reduce((from, to) => `${from}&${to}`)

  return `${url}:${port}/${endpoint}/?${query}`
}