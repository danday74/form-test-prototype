import { TFormStyle } from '../types/t-form-style'

export interface IAppConfig {
  formStyle: {
    styles: TFormStyle[]
    default: TFormStyle
    prefix: string
  }
}
