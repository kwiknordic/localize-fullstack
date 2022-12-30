import useFetch from "../hooks/useFetch.js"
import { ResponseDTO } from "@backend/services/responseDTO.js"
import { Params } from "@backend/services/mitti/validationSchema.js"

const apiConfig = {
  url: "http://localhost",
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
  const query = params // make a string that follows convention
  return `${url}:${port}/${endpoint}/?${query}`
}