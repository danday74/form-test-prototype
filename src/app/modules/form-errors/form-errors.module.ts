import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ErrorRequiredComponent } from './components/error-required/error-required.component'
import { ErrorMinlengthComponent } from './components/error-minlength/error-minlength.component'
import { FormErrorsComponent } from './components/form-errors/form-errors.component'
import { DirectivesModule } from '../../directives/directives.module'
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    FormErrorsComponent,
    ErrorRequiredComponent,
    ErrorMinlengthComponent
  ],
  exports: [
    FormErrorsComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule
  ]
})
export class FormErrorsModule {}
