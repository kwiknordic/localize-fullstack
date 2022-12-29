import { Brottsplatskartan } from "./types.js"
import { ResponseDTO } from "../responseDTO.js"
import { formatLocations, formatDates } from "../../utils/formatters.js"

export function constructDTO(unmappedData: Brottsplatskartan) {
  return unmappedData.data.map((obj) => {
    
    const locations = obj.locations
      .map((location) => location.name)
      .filter((string) => string.length > 0)
  
    return {
      title: obj.title_type,
      description: obj.description,
      locations: formatLocations.format([obj.title_location, ...locations]),
      date: formatDates(obj.pubdate_iso8601),
    } as ResponseDTO
  }) 
}