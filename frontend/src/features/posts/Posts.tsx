import React from 'react'
import { useBrottsplatskartan } from '../../api/brottsplatskartan/useBrottsplatskartan.js'
import Entry from './Entry.js'

function Posts() {
  const { posts, loading, error } = useBrottsplatskartan(undefined, 18.5)

  if (error) return <span>{error.name}: {error.message}</span>
  if (loading) return <span>Loading...</span>

  // I get error if I don't have this due to "undefined"-possibility. Any workaround?
  if (!posts) return <span>No posts received. Please refresh the page.</span>

  return (
    <div className='posts-wrapper'>
      {posts.map(entry => (
        <Entry key={entry.id} data={entry} />
      ))}
    </div>
  )
}

export default Posts