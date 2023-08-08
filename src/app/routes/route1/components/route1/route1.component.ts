import { Component } from '@angular/core'
import { keys } from 'lodash-es'

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.scss']
})
export class Route1Component {
  keys = keys

  model: { surname: string } = { surname: null }

  submit() {
    console.log('submit', this.model.surname)
  }
}
