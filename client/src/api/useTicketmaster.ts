import {useFetch} from "../hooks/useFetch.js"
import { ResponseDTO } from "@backend/services/responseDTO.js"
import { Params } from "@backend/services/ticketmaster/validationSchema.js"
import { PROD, getConnectionConfig } from "./utils/connectionConfig.js"

const apiConfig = {
  endpoint: "events",
  ...getConnectionConfig()
}

export function useTicketmaster(params?: Params) {
  const url = constructURL(params)
  return useFetch<ResponseDTO[]>(url)
}

function constructURL(params?: Params) {
  const { url, endpoint, port } = apiConfig
  if (!params || Object.keys(params) && PROD) return `${url}/${endpoint}`
  if (!params || Object.keys(params) && !PROD) return `${url}:${port}/${endpoint}`

  const query = new URLSearchParams({...params}).toString();
  if (PROD) return `${url}/${endpoint}/?${query}`
  return `${url}:${port}/${endpoint}/?${query}`
}