export const insertAfter = (node: HTMLElement, newNode: HTMLElement): HTMLElement => {
  return node.parentNode.insertBefore(newNode, node.nextSibling)
}
