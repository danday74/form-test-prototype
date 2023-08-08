import { Component } from '@angular/core'
import { keys } from 'lodash-es'

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.scss']
})
export class Route1Component {
  keys = keys
  bsSurname: string
  curSurname: string

  bsSubmit() {
    console.log('bsSubmit', this.bsSurname)
  }

  curSubmit() {
    console.log('curSubmit', this.curSurname)
  }
}
