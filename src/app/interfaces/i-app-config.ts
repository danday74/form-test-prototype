import { TTheme } from '../types/t-theme'

export interface IAppConfig {
  theme: {
    themes: TTheme[]
    default: TTheme
    prefix: string
  }
}
