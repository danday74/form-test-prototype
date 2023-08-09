import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormControlComponent } from './components/form-control/form-control.component'

@NgModule({
  declarations: [
    FormControlComponent
  ],
  exports: [
    FormControlComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormControlModule {}
