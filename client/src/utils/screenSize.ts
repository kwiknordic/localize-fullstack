export function getMinWidth() {
  const clientWidth = window.document.body.getBoundingClientRect().width * 0.9
  const minWidth = clientWidth < 450 ? clientWidth : 450
  return minWidth
}

export function getClientHeightNonHeader() {
  const height = window.innerHeight
  const header = window.document.body.querySelector("header") as HTMLElement
  if (!header) return "100vh"
  return `${height - header.offsetHeight}px`
}