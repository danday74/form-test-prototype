import { IAppConfig } from './interfaces/i-app-config'

export const appConfig: IAppConfig = Object.freeze({
  theme: {
    themes: ['current', 'modern', 'bootstrap', 'bootstrap-plus'],
    default: 'current',
    prefix: 'x3ui'
  }
})
