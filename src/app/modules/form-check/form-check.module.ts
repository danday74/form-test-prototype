import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormCheckComponent } from './components/form-check/form-check.component'

@NgModule({
  declarations: [
    FormCheckComponent
  ],
  exports: [
    FormCheckComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormCheckModule {}
