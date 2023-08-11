import { Component } from '@angular/core'
import { keys } from 'lodash-es'
import { cars } from '../../../../data/cars'
import { IModel } from '../../../../interfaces/i-model'
import { ICar } from '../../../../interfaces/i-car'

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component {
  readonly keys = keys
  readonly cars: ICar[] = cars

  model: IModel = { username: '', surname: '', car: '' }

  submit() {
    console.log('submit', this.model)
  }

  carChange(car: string) {
    this.model.car = car
  }
}
