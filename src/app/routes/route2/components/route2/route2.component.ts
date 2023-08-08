import { Component } from '@angular/core'
import { keys } from 'lodash-es'

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component {
  keys = keys

  model: { surname: string } = { surname: null }

  submit() {
    console.log('submit', this.model.surname)
  }
}
