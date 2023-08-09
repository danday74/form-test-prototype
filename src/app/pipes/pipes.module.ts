import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InterpolatePipe } from './interpolate/interpolate.pipe'

@NgModule({
  declarations: [
    InterpolatePipe
  ],
  exports: [
    InterpolatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule {}
