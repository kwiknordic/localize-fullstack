import { formatter } from "../utils/listFormatter"

async function getLocalCrime(from, to, endpoint = "eventsNearby", lat = 59.32, long = 18.06) {
  // make pages request dynamically (infinite scroll)
  let page = 1;

  const url = "https://brottsplatskartan.se/api"

  const response = await fetch(`${url}/${endpoint}/?lat=${lat}&lng=${long}&page=${page}`)
  const json = await response.json()
  const data = json.data

  return data.slice(from, to).map(entry => {
    let locations = entry.locations
      .map(obj => {
        const capital = obj.name.charAt(0).toUpperCase()
        return `${capital}${obj.name.slice(1)}`
      })
      .filter(name => name.length > 0)
    locations = locations.length === 0 ? entry.title_location : formatter.format(locations)

    return {
      id: entry.id,
      summary: entry.description,
      description: entry.content,
      image: entry.image,
      location: locations,
      date: entry.pubdate_iso8601,
    }
  })
}

  export {
    getLocalCrime
  }