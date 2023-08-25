import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CssFiltersComponent } from './components/css-filters/css-filters.component'
import { FormsModule } from '@angular/forms'
import { DirectivesModule } from '../../directives/directives.module'
import { CssFiltersDialogComponent } from './components/css-filters-dialog/css-filters-dialog.component'

@NgModule({
  declarations: [
    CssFiltersComponent,
    CssFiltersDialogComponent
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
