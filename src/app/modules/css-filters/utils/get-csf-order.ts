import { ICssFilter } from '../interfaces/i-css-filter'
import { sortBy, values } from 'lodash-es'
import { ICssFilters } from '../interfaces/i-css-filters'
import { TCssFilter } from '../types/t-css-filter'

export const getCsfOrder = (filters: ICssFilters): TCssFilter[] => {
  const fltrs: ICssFilter[] = values(filters)
  const sortedFilters: ICssFilter[] = sortBy(fltrs, ['order'])
  return sortedFilters.map((filter: ICssFilter) => filter.name)
}
