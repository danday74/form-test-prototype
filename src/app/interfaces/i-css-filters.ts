import { TCssFilter } from '../types/t-css-filter'

export interface ICssFilters extends Record<TCssFilter, number> {
  brightness: number
  contrast: number
  grayscale: number
  saturate: number
  sepia: number
  invert: number
  opacity: number
}
