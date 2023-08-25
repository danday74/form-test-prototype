import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CssFiltersComponent } from './components/css-filters/css-filters.component'
import { FormsModule } from '@angular/forms'
import { DirectivesModule } from '../../directives/directives.module'
import { CssFiltersDialogComponent } from './components/css-filters-dialog/css-filters-dialog.component'
import { PipesModule } from '../../pipes/pipes.module'

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
    DirectivesModule,
    PipesModule
  ]
})
export class CssFiltersModule {}
