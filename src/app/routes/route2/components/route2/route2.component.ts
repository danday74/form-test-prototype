import { Component } from '@angular/core'
import { keys } from 'lodash-es'
import { IModel } from '../../../../interfaces/i-model'

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component {
  readonly keys = keys

  model: IModel = { surname: '', car: '' }

  submit() {
    console.log('submit', this.model)
  }
}
