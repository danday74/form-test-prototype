import { Component } from '@angular/core'
import { keys } from 'lodash-es'
import { IModel } from '../../../../interfaces/i-model'

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.scss']
})
export class Route1Component {
  readonly keys = keys

  model: IModel = { surname: null }

  submit() {
    console.log('submit', this.model)
  }
}
