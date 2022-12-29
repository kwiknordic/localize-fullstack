import { StatusCodes } from "http-status-codes";
import { notFoundError } from "../../middleware/error/errors.js";
import { Brottsplatskartan } from "./types.js";
import { ResponseDTO } from "../responseDTO.js";
import { Params } from "./validationSchema.js";
import { constructDTO } from "./constructDTO.js";

const fallbackParams = {
  baseURL: 'https://brottsplatskartan.se/api',
  endpoint: 'eventsNearby',
  coords: {
    long: 18.06,
    lat: 59.32,
  },
}

const coords = fallbackParams.coords
type Function = (param: Params) => Promise<ResponseDTO[]>

export const fetchBrottsplatskartan: Function = async ({ long = coords.long, lat = coords.lat}) => {
  const { baseURL, endpoint } = fallbackParams
  const url = `${baseURL}/${endpoint}/?lat=${lat}&lng=${long}`
  const response = await fetch(url)

  if (!response.ok) {
    if (response.status === StatusCodes.NOT_FOUND) throw new notFoundError() 
    else throw new Error(`${response.statusText}, ${response.status}`)
  }

  const json: Brottsplatskartan = await response.json()
  if (!json || !json.data) throw new notFoundError() 
  
  return constructDTO(json)
}