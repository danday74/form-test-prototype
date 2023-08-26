import { ICssFilters } from '../../../interfaces/i-css-filters'
import { keys } from 'lodash-es'
import { TCssFilter } from '../../../types/t-css-filter'

const cssFilters: ICssFilters = {
  brightness: {
    name: 'brightness',
    value: 100,
    order: null
  },
  contrast: {
    name: 'contrast',
    value: 100,
    order: null
  },
  grayscale: {
    name: 'grayscale',
    value: 0,
    order: null
  },
  saturate: {
    name: 'saturate',
    value: 100,
    order: null
  },
  sepia: {
    name: 'sepia',
    value: 0,
    order: null
  },
  'hue-rotate': {
    name: 'hue-rotate',
    value: 0,
    order: null
  },
  invert: {
    name: 'invert',
    value: 0,
    order: null
  },
  blur: {
    name: 'blur',
    value: 0,
    order: null
  },
  opacity: {
    name: 'opacity',
    value: 100,
    order: null
  }
}

for (const [idx, filter] of keys(cssFilters).entries()) {
  const fltr: TCssFilter = filter as TCssFilter
  cssFilters[fltr].order = idx
}

export const defaultCssFilters: ICssFilters = cssFilters
