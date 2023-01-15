import {useFetch} from "../hooks/useFetch.js"
import { ResponseDTO } from "@backend/services/responseDTO.js"
import { Params } from "@backend/services/ticketmaster/validationSchema.js"

// change URL to wherever the Backend is

const apiConfig = {
  url: "https://localize-production.up.railway.app",
  endpoint: "events"
}

export function useTicketmaster(params?: Params) {
  const url = constructURL(params)
  return useFetch<ResponseDTO[]>(url)
}

function constructURL(params?: Params) {
  const { url, endpoint } = apiConfig
  if (!params || Object.keys(params)) return `${url}/${endpoint}`

  const query = new URLSearchParams({...params}).toString();
  return `${url}/${endpoint}/?${query}`
}