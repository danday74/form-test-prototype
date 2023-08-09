import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TypeofPipe } from './typeof/typeof.pipe'

@NgModule({
  declarations: [
    TypeofPipe
  ],
  exports: [
    TypeofPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule {}
