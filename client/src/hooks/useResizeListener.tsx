import { useEffect, useState } from 'react'

// add typescript to timer and this-keyword
function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

export function useResizeListener() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      setWidth(window.innerWidth)
    }, 500)

    window.addEventListener('resize', debouncedHandleResize)
    return () => window.removeEventListener('resize', debouncedHandleResize)
  })

  return width
}