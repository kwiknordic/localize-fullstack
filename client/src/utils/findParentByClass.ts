export function findParentByClass(element: HTMLElement, parentClass: string): HTMLElement | null {
  const parent = element.parentElement
  if (!parent || parent.tagName === "Body") return null
  if (parent.className.includes(parentClass)) return parent
  return findParentByClass(parent, parentClass)
}