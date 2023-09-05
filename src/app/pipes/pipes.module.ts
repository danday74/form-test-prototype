import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TypeofPipe } from './typeof/typeof.pipe'
import { CasePipe } from './case/case.pipe'
import { ReplacePipe } from './replace/replace.pipe'
import { AbsPipe } from './abs/abs.pipe'

@NgModule({
  declarations: [
    CasePipe,
    ReplacePipe,
    TypeofPipe,
    AbsPipe
  ],
  exports: [
    CasePipe,
    ReplacePipe,
    TypeofPipe,
    AbsPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule {}
