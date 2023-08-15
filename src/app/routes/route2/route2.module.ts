import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Route2RoutingModule } from './route2-routing.module'
import { Route2Component } from './components/route2/route2.component'
import { FormsModule } from '@angular/forms'
import { FormControlModule } from '../../modules/form-control/form-control.module'
import { FormCheckModule } from '../../modules/form-check/form-check.module'

@NgModule({
  declarations: [
    Route2Component
  ],
  imports: [
    CommonModule,
    Route2RoutingModule,
    FormsModule,
    FormControlModule,
    FormCheckModule
  ]
})
export class Route2Module {}
