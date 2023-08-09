import { Type } from '@angular/core'

export interface IFormError {
  component: Type<any>
  dataProps: string[]
}
