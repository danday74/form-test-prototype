import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppVarDirective } from './app-var/app-var.directive'

@NgModule({
  declarations: [
    AppVarDirective
  ],
  exports: [
    AppVarDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule {}
