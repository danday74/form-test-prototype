import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TypeofPipe } from './typeof/typeof.pipe'
import { CasePipe } from './case/case.pipe'
import { ReplacePipe } from './replace/replace.pipe'

@NgModule({
  declarations: [
    CasePipe,
    ReplacePipe,
    TypeofPipe
  ],
  exports: [
    CasePipe,
    ReplacePipe,
    TypeofPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule {}
