import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Route1RoutingModule } from './route1-routing.module'
import { Route1Component } from './components/route1/route1.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    Route1Component
  ],
  imports: [
    CommonModule,
    Route1RoutingModule,
    FormsModule
  ]
})
export class Route1Module {}
