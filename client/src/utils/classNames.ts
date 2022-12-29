export function cls(...args) {
  let classes = args.filter((className) => {
    if (className === null || className === undefined) return
    if (typeof className === 'object') return
    return className
  })

  return classes.join(' ')
}
