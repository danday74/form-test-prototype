import { TCssFilter } from '../types/t-css-filter'

export interface ICssFilters extends Record<TCssFilter, number> {
  blur: number
  brightness: number
  contrast: number
  grayscale: number
  'hue-rotate': number
  invert: number
  opacity: number
  saturate: number
  sepia: number
}
