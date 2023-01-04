import { StatusCodes } from "http-status-codes";
import { notFoundError } from "../../middleware/error/errors.js";
import { Ticketmaster } from "./types.js";
import { Params } from "./validationSchema.js";
import { API_KEY } from "../../consts.js";
import { ResponseDTO } from "../responseDTO.js";
/* import { constructDTO } from "./constructDTO.js"; */

const fallbackParams = {
  baseURL: 'https://app.ticketmaster.com',
  endpoint: 'discovery/v2/events',
  query: {
    city: "Stockholm",
    countryCode: "SE",
    sort: "date,asc",
    size: "25",
    page: "0"
  },
}

const query = fallbackParams.query
//type Function = (param: Params) => Promise<ResponseDTO[]>
type Function = (param: Params) => Promise<any>

export const fetchTicketmaster: Function = async ({city = query.city, countryCode = query.countryCode, page = query.page}) => {
  const { baseURL, endpoint } = fallbackParams
  const { size, sort } = query

  const searchParams = new URLSearchParams({city, countryCode, page, size, sort}).toString();
  const url = `${baseURL}/${endpoint}?${searchParams}&apikey=${API_KEY}`
  const response = await fetch(url)

  if (!response.ok) {
    if (response.status === StatusCodes.NOT_FOUND) throw new notFoundError() 
    else throw new Error(`${response.statusText}, ${response.status}`)
  }

  const json: Ticketmaster = await response.json()
  if (!json || !json._embedded.events) throw new notFoundError() 
  
  return json
  //return constructDTO(json)
}