import {useFetch} from "../hooks/useFetch.js"
import { ResponseDTO } from "@backend/services/responseDTO.js"
import { Params } from "@backend/services/ticketmaster/validationSchema.js"

// change URL to wherever the Backend is

const apiConfig = {
  url: "http://192.168.1.132",
  port: "5001",
  endpoint: "events"
}

export function useTicketmaster(params?: Params) {
  const url = constructURL(params)
  return useFetch<ResponseDTO[]>(url)
}

function constructURL(params?: Params) {
  const { url, port, endpoint } = apiConfig
  if (!params || Object.keys(params)) return `${url}:${port}/${endpoint}`

  const query = new URLSearchParams({...params}).toString();
  return `${url}:${port}/${endpoint}/?${query}`
}