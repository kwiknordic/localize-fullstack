import { Ticketmaster } from "./types.js"
import { ResponseDTO } from "../responseDTO.js"
import { formatDates } from "../../utils/formatters.js"

export function constructDTO(unmappedData: Ticketmaster) {
  return unmappedData._embedded.events.map((obj) => {
  
  const title = `${obj.name} - ${obj.classifications[0].segment.name} (${obj.classifications[0].genre?.name ?? "Other"})`
  const description = `
   Pris inklusive avgifter: ${obj.priceRanges[1].max} SEK
  `

    return {
      title: title,
      description: description.trim(),
      locations: obj._embedded.venues[0].address.line1,
      date: formatDates(obj.dates.start.localDate),
    } as ResponseDTO
  }) 
}