import { ICssFilters } from '../interfaces/i-css-filters'
import { keys } from 'lodash-es'
import { TCssFilter } from '../types/t-css-filter'
import { csfUoms } from './csf-uoms'

const cssFilters: ICssFilters = {
  blur: {
    name: 'blur',
    value: 0,
    order: null,
    uom: csfUoms.pixels,
    min: 0,
    max: 10,
    step: 0.1,
    dp: 1
  },
  brightness: {
    name: 'brightness',
    value: 100,
    order: null,
    uom: csfUoms.percent,
    min: 20,
    max: 200,
    step: 1,
    dp: 0
  },
  contrast: {
    name: 'contrast',
    value: 100,
    order: null,
    uom: csfUoms.percent,
    min: 20,
    max: 200,
    step: 1,
    dp: 0
  },
  grayscale: {
    name: 'grayscale',
    value: 0,
    order: null,
    uom: csfUoms.percent,
    min: 0,
    max: 100,
    step: 1,
    dp: 0
  },
  'hue-rotate': {
    name: 'hue-rotate',
    value: 0,
    order: null,
    uom: csfUoms.degrees,
    min: 0,
    max: 360,
    step: 1,
    dp: 0
  },
  invert: {
    name: 'invert',
    value: 0,
    order: null,
    uom: csfUoms.percent,
    min: 0,
    max: 100,
    step: 1,
    dp: 0
  },
  opacity: {
    name: 'opacity',
    value: 100,
    order: null,
    uom: csfUoms.percent,
    min: 20,
    max: 100,
    step: 1,
    dp: 0
  },
  saturate: {
    name: 'saturate',
    value: 100,
    order: null,
    uom: csfUoms.percent,
    min: 0,
    max: 200,
    step: 1,
    dp: 0
  },
  sepia: {
    name: 'sepia',
    value: 0,
    order: null,
    uom: csfUoms.percent,
    min: 0,
    max: 100,
    step: 1,
    dp: 0
  }
}

for (const [idx, filter] of keys(cssFilters).entries()) {
  const fltr: TCssFilter = filter as TCssFilter
  cssFilters[fltr].order = idx
}

export const defaultCssFilters: Readonly<ICssFilters> = Object.freeze(cssFilters)
