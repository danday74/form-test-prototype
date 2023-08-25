import { map } from 'lodash-es'
import { defaultCssFilters } from './default-css-filters'
import { TCssFilter } from '../../../types/t-css-filter'

export const defaultCssFiltersOrder: TCssFilter[] = map(defaultCssFilters, (_value: number, filter: string) => filter as TCssFilter)
