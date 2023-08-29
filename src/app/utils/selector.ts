import { ElementRef } from '@angular/core'

export const selector = (ref: ElementRef, withBrackets = false): string => {
  const sel: string = ref.nativeElement.tagName.toLowerCase()
  return withBrackets ? `<${sel}>` : sel
}
