import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormControlComponent } from './components/form-control/form-control.component'
import { FormErrorsModule } from '../form-errors/form-errors.module'

@NgModule({
  declarations: [
    FormControlComponent
  ],
  exports: [
    FormControlComponent
  ],
  imports: [
    CommonModule,
    FormErrorsModule
  ]
})
export class FormControlModule {}
