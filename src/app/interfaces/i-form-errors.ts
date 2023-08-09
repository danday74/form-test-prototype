import { IFormError } from './i-form-error'

export interface IFormErrors {
  // add optional props as needed
  minlength?: IFormError | string
  pattern?: IFormError | string
  required?: IFormError | string
}
