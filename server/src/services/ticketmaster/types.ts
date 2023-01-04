export interface Ticketmaster {
  _embedded: Embedded
  _links: Links4
  page: Page
}

export interface Embedded {
  events: Event[]
}

export interface Event {
  name: string
  type: string
  id: string
  test: boolean
  url: string
  locale: string
  images: Image[]
  sales: Sales
  dates: Dates
  classifications: Classification[]
  promoter: Promoter
  promoters: Promoter2[]
  priceRanges: PriceRange[]
  _links: Links
  _embedded: Embedded2
  seatmap?: Seatmap
}

export interface Image {
  ratio?: string
  url: string
  width: number
  height: number
  fallback: boolean
  attribution?: string
}

export interface Sales {
  public: Public
}

export interface Public {
  startDateTime: string
  startTBD: boolean
  startTBA: boolean
  endDateTime: string
}

export interface Dates {
  start: Start
  timezone: string
  status: Status
  spanMultipleDays: boolean
}

export interface Start {
  localDate: string
  localTime?: string
  dateTime?: string
  dateTBD: boolean
  dateTBA: boolean
  timeTBA: boolean
  noSpecificTime: boolean
}

export interface Status {
  code: string
}

export interface Classification {
  primary: boolean
  segment: Segment
  genre?: Genre
  subGenre?: SubGenre
  family: boolean
}

export interface Segment {
  id: string
  name: string
}

export interface Genre {
  id: string
  name: string
}

export interface SubGenre {
  id: string
  name: string
}

export interface Promoter {
  id: string
  name: string
}

export interface Promoter2 {
  id: string
  name: string
}

export interface PriceRange {
  type: string
  currency: string
  min: number
  max: number
}

export interface Links {
  self: Self
  attractions: Attraction[]
  venues: Venue[]
}

export interface Self {
  href: string
}

export interface Attraction {
  href: string
}

export interface Venue {
  href: string
}

export interface Embedded2 {
  venues: Venue2[]
  attractions: Attraction2[]
}

export interface Venue2 {
  type: string
  id: string
  test: boolean
  url: string
  locale: string
  postalCode?: string
  timezone: string
  city: City
  country: Country
  address: Address
  location: Location
  upcomingEvents: UpcomingEvents
  _links: Links2
  images?: Image2[]
}

export interface City {
  name: string
}

export interface Country {
  name: string
  countryCode: string
}

export interface Address {
  line1: string
}

export interface Location {
  longitude: string
  latitude: string
}

export interface UpcomingEvents {
  _total: number
  _filtered: number
  "mfx-se": number
}

export interface Links2 {
  self: Self2
}

export interface Self2 {
  href: string
}

export interface Image2 {
  ratio: string
  url: string
  width: number
  height: number
  fallback: boolean
}

export interface Attraction2 {
  name: string
  type: string
  id: string
  test: boolean
  url: string
  locale: string
  images: Image3[]
  classifications: Classification2[]
  upcomingEvents: UpcomingEvents2
  _links: Links3
  externalLinks?: ExternalLinks
  aliases?: string[]
}

export interface Image3 {
  ratio?: string
  url: string
  width: number
  height: number
  fallback: boolean
  attribution?: string
}

export interface Classification2 {
  primary: boolean
  segment: Segment2
  genre: Genre2
  subGenre: SubGenre2
  type: Type
  subType: SubType
  family: boolean
}

export interface Segment2 {
  id: string
  name: string
}

export interface Genre2 {
  id: string
  name: string
}

export interface SubGenre2 {
  id: string
  name: string
}

export interface Type {
  id: string
  name: string
}

export interface SubType {
  id: string
  name: string
}

export interface UpcomingEvents2 {
  _total: number
  "mfx-nl"?: number
  _filtered: number
  "mfx-se": number
  ticketmaster?: number
  "mfx-be"?: number
  tmr?: number
  ticketweb?: number
  moshtix?: number
  "mfx-dk"?: number
  "mfx-de"?: number
  "mfx-ch"?: number
  "mfx-pl"?: number
  "mfx-cz"?: number
}

export interface Links3 {
  self: Self3
}

export interface Self3 {
  href: string
}

export interface ExternalLinks {
  facebook?: Facebook[]
  musicbrainz?: Musicbrainz[]
  homepage?: Homepage[]
  youtube?: Youtube[]
  itunes?: Itune[]
  lastfm?: Lastfm[]
  wiki?: Wiki[]
  spotify?: Spotify[]
  twitter?: Twitter[]
  instagram?: Instagram[]
}

export interface Facebook {
  url: string
}

export interface Musicbrainz {
  id: string
}

export interface Homepage {
  url: string
}

export interface Youtube {
  url: string
}

export interface Itune {
  url: string
}

export interface Lastfm {
  url: string
}

export interface Wiki {
  url: string
}

export interface Spotify {
  url: string
}

export interface Twitter {
  url: string
}

export interface Instagram {
  url: string
}

export interface Seatmap {
  staticUrl: string
}

export interface Links4 {
  first: First
  self: Self4
  next: Next
  last: Last
}

export interface First {
  href: string
}

export interface Self4 {
  href: string
}

export interface Next {
  href: string
}

export interface Last {
  href: string
}

export interface Page {
  size: number
  totalElements: number
  totalPages: number
  number: number
}
