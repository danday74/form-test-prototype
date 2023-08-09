import { IAppConfig } from './interfaces/i-app-config'

export const appConfig: IAppConfig = Object.freeze({
  formStyle: {
    styles: ['current', 'modern', 'bootstrap'],
    default: 'current',
    prefix: 'x3ui'
  }
})
