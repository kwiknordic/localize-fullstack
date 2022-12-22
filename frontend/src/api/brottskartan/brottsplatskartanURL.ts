const params = {
  url: 'https://brottsplatskartan.se/api',
  endpoint: 'eventsNearby',
  coords: {
    long: 18.06,
    lat: 59.32,
  },
}

export function brottsplatskartanURL(lat?: number, long?: number) {
  const { url, endpoint, coords } = params
  lat = lat ?? coords.lat
  long = long ?? coords.long

  return {
    url: `${url}/${endpoint}/?lat=${lat}&lng=${long}`,
    options: {
      method: 'GET',
    },
  }
}
