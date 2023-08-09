import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DestroyerComponent } from './components/destroyer.component'

@NgModule({
  declarations: [
    DestroyerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DestroyerComponent
  ]
})
export class AppCoreModule {}
