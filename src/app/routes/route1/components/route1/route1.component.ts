import { Component } from '@angular/core'
import { keys } from 'lodash-es'
import { cars } from 'src/app/data/cars'
import { IModel } from '../../../../interfaces/i-model'
import { ICar } from '../../../../interfaces/i-car'

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.scss']
})
export class Route1Component {
  readonly keys = keys
  readonly cars: ICar[] = cars

  model: IModel = { age: null, surname: '', car: '' }

  submit() {
    console.log('submit', this.model)
  }
}
