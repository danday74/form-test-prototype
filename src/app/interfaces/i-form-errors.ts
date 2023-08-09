import { IFormError } from './i-form-error'

export interface IFormErrors extends Record<string, string | IFormError> {
  // add optional props as needed
  minlength?: string | IFormError
  pattern?: string | IFormError
  required?: string | IFormError
}
