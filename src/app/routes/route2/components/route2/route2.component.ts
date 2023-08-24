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

  model: IModel = {
    age: null,
    surname: '',
    username: '',
    description: '',
    car: '',
    agree1: false,
    agree2: false,
    accept1: false,
    accept2: false,
    pet: ''
  }

  submit() {
    console.log('submit', this.model)
  }

  trackByFunc(_idx: number, car: ICar): string {
    return car.value
  }

  carChange(car: string) {
    this.model.car = car
  }
}
