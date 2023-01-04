export function getWidth() {
  const clientWidth = window.document.body.getBoundingClientRect().width * 0.88
  const width = clientWidth < 450 ? clientWidth : 450
  return width
}

/* export function getClientHeightNonHeader(...args: number[]) {
  const availableHeight = window.innerHeight
  const header = window.document.body.querySelector("header") as HTMLElement
  const additionalHeight = args.reduce((current, next) => current + next) 

  if (header && additionalHeight) return Number(availableHeight - header.offsetHeight - availableHeight)
  if (header && !additionalHeight) return Number(availableHeight - header.offsetHeight)
  if (!header && additionalHeight) return additionalHeight
  return null
} */