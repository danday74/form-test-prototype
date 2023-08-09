import { IFormErrors } from '../../../interfaces/i-form-errors'

export const defaultFormErrors: IFormErrors = {
  required: '{{ label }} required',
  minlength: '{{ model.errors.minlength.actualLength }}/{{ model.errors.minlength.requiredLength }} characters minimum'
}
