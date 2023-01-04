export interface Brottsplatskartan {
  links: any[]
  meta: Meta
  data: Content[]
}

interface Content {
  id: number
  pubdate_iso8601: string
  pubdate_unix: string
  title_type: string
  title_location: string
  description: string
  content: string
  locations: Location[]
  lat: number
  lng: number
  image: string
  permalink: string
}

interface Location {
  name: string
  prio: number
}
interface Meta {
  nearbyInKm: number
  nearbyCount: number
  numTries: number
}