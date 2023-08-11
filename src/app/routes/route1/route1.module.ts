import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Route1RoutingModule } from './route1-routing.module'
import { Route1Component } from './components/route1/route1.component'
import { FormErrorsModule } from '../../modules/form-errors/form-errors.module'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    Route1Component
  ],
  imports: [
    CommonModule,
    Route1RoutingModule,
    FormsModule,
    FormErrorsModule
  ]
})
export class Route1Module {}
