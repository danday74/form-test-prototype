import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TypeofPipe } from './typeof/typeof.pipe'
import { CasePipe } from './case/case.pipe'

@NgModule({
  declarations: [
    TypeofPipe,
    CasePipe
  ],
  exports: [
    TypeofPipe,
    CasePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule {}
