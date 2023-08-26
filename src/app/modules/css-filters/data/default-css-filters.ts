import { ICssFilters } from '../interfaces/i-css-filters'
import { keys } from 'lodash-es'
import { TCssFilter } from '../types/t-css-filter'
import { csfUoms } from './csf-uoms'

const cssFilters: ICssFilters = {
  brightness: {
    name: 'brightness',
    value: 100,
    order: null,
    uom: csfUoms.percent
  },
  contrast: {
    name: 'contrast',
    value: 100,
    order: null,
    uom: csfUoms.percent
  },
  grayscale: {
    name: 'grayscale',
    value: 0,
    order: null,
    uom: csfUoms.percent
  },
  saturate: {
    name: 'saturate',
    value: 100,
    order: null,
    uom: csfUoms.percent
  },
  sepia: {
    name: 'sepia',
    value: 0,
    order: null,
    uom: csfUoms.percent
  },
  'hue-rotate': {
    name: 'hue-rotate',
    value: 0,
    order: null,
    uom: csfUoms.degrees
  },
  invert: {
    name: 'invert',
    value: 0,
    order: null,
    uom: csfUoms.percent
  },
  blur: {
    name: 'blur',
    value: 0,
    order: null,
    uom: csfUoms.pixels
  },
  opacity: {
    name: 'opacity',
    value: 100,
    order: null,
    uom: csfUoms.percent
  }
}

for (const [idx, filter] of keys(cssFilters).entries()) {
  const fltr: TCssFilter = filter as TCssFilter
  cssFilters[fltr].order = idx
}

export const defaultCssFilters: ICssFilters = Object.freeze(cssFilters)
