import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormControlComponent } from './components/form-control/form-control.component'
import { DirectivesModule } from '../../directives/directives.module'
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    FormControlComponent
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
