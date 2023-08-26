import { TCssFilter } from '../types/t-css-filter'
import { ICsfUom } from './i-csf-uom'

export interface ICssFilter {
  name: TCssFilter
  value: number
  order: number
  uom: ICsfUom
}
