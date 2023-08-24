import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CssFiltersComponent } from './components/css-filters/css-filters.component'
import { FormsModule } from '@angular/forms'
import { DirectivesModule } from '../../directives/directives.module'

@NgModule({
  declarations: [
    CssFiltersComponent
  ],
  exports: [
    CssFiltersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule
  ]
})
export class CssFiltersModule {}
