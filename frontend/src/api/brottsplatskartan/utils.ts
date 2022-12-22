import { Root, Entry } from "./types.js"

export function constructBrottsplatsData(unmappedData: Root | undefined) {
  // do I need to safe-guard here?
  if (!unmappedData) return undefined

  return unmappedData.data.map((obj) => {
    
    const locations = obj.locations
      .map((location) => location.name)
      .filter((string) => string.length > 0)
  
    return {
      id: obj.id,
      title: obj.title_type,
      description: obj.description,
      locations: [obj.title_location, ...locations],
    } as Entry
  }) 
}