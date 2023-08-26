import { ICsfUom } from '../interfaces/i-csf-uom'
import { TCsfUom } from '../types/t-csf-uom'

export const csfUoms: Readonly<{ [Key in TCsfUom]: ICsfUom }> = Object.freeze({
  degrees: {
    unit: 'deg',
    displayUnit: '\u00B0'
  },
  pixels: {
    unit: 'px',
    displayUnit: ''
  },
  percent: {
    unit: '%',
    displayUnit: '%'
  }
})
