import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormControlComponent } from './components/form-control/form-control.component'
import { DirectivesModule } from '../../directives/directives.module'
import { PipesModule } from '../../pipes/pipes.module'
import { ErrorRequiredComponent } from './components/error-required/error-required.component'
import { ErrorMinlengthComponent } from './components/error-minlength/error-minlength.component'
import { FormErrorsComponent } from './components/form-errors/form-errors.component'

@NgModule({
  declarations: [
    FormControlComponent,
    ErrorRequiredComponent,
    ErrorMinlengthComponent,
    FormErrorsComponent
  ],
  exports: [
    FormControlComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule
  ]
})
export class FormControlModule {}