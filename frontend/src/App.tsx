import { useState } from 'react'
import { brottsplatskartanURL } from './api/brottskartan/brottsplatskartanURL.js'
import useFetch from './hooks/useFetch.js'

interface Response {
  data: Data
  loading: boolean
  error: null | Error
}

interface Data {
  links: any[]
  meta: {
    [key: string]: string
  }
  data: Entries[]
}

export interface Entries {
  id: number
  title: string
  locations: string[]
  description: string
  image: string
}

function App(): JSX.Element {
  const [count, setCount] = useState(0)
  const { data, loading, error }: Response = useFetch(brottsplatskartanURL(undefined, 18.5))

  if (error) return <span>{error.name}: {error.message}</span>
  if (loading) return <span>Loading...</span>

  // Should I have Interface for the original data.data properties too, to get intellisense?
  // Should I have any, or string, nothing at all at location-param and obj-param above?

  const entries: Entries[] = data.data.map((obj: any) => {
    const { id, title_type, title_location, description, image } = obj
    const locations = obj.locations
      .map((location: any) => location.name)
      .filter((string: string) => string.length > 0)

    return {
      id: id,
      title: title_type,
      description: description,
      locations: [title_location, ...locations],
      image: image,
    }
  })

  return (
    <>
      {entries.map((entry) => {
        const { id, title, description, locations } = entry
        return (
          <>
            <div key={id}>
              <h1>{title}</h1>
              <span>{description}</span>
              <ul>
                {locations.map((location) => <li key={location}>{location}</li>)}
              </ul>
            </div>
            <hr />
          </>
        )
      })}
    </>
  )
}

export default App
