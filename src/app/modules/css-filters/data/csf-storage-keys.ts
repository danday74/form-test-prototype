import { appConfig } from '../../../app-config'
import { ICsfStorageKeys } from '../interfaces/i-csf-storage-keys'

const prefix: string = appConfig.theme.prefix

export const csfStorageKeys: ICsfStorageKeys = {
  filter: `${prefix}-css-filter`,
  filters: `${prefix}-css-filters`,
  targetValue: `${prefix}-css-filters-target`,
  dismissed: `${prefix}-css-filters-dismissed`
}
