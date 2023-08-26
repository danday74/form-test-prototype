import { IFormErrors } from '../interfaces/i-form-errors'
import { ErrorRequiredComponent } from '../components/error-required/error-required.component'
import { ErrorMinlengthComponent } from '../components/error-minlength/error-minlength.component'

export const defaultFormErrors: IFormErrors = {
  required: {
    component: ErrorRequiredComponent,
    dataProps: ['label']
  },
  minlength: {
    component: ErrorMinlengthComponent,
    dataProps: ['label', 'model']
  }
}
