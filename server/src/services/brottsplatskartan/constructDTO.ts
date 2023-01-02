import { Brottsplatskartan } from "./types.js"
import { ResponseDTO } from "../responseDTO.js"
import { formatLocations, formatDates } from "../../utils/formatters.js"

export function constructDTO(unmappedData: Brottsplatskartan) {
  return unmappedData.data.map((obj) => {
    
    const location = [obj.title_location, ...obj.locations
      .map((loc) => `${loc.name.slice(0,1).toUpperCase()}${loc.name.slice(1)}`)
      .filter((string) => string.length > 0)
    ]
      .reverse()
      .at(0)
  
    return {
      title: obj.title_type,
      description: obj.description,
      locations: location,
      date: formatDates(obj.pubdate_iso8601),
    } as ResponseDTO
  }) 
}