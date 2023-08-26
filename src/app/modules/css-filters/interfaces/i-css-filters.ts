import { TCssFilter } from '../types/t-css-filter'
import { ICssFilter } from './i-css-filter'

export interface ICssFilters extends Record<TCssFilter, ICssFilter> {
  blur: ICssFilter
  brightness: ICssFilter
  contrast: ICssFilter
  grayscale: ICssFilter
  'hue-rotate': ICssFilter
  invert: ICssFilter
  opacity: ICssFilter
  saturate: ICssFilter
  sepia: ICssFilter
}
