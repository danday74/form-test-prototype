import { Component, Input } from '@angular/core'
import { IFormErrorComponent } from '../../../../interfaces/i-form-error-component'

@Component({
  selector: 'app-error-minlength',
  templateUrl: './error-minlength.component.html',
  styleUrls: ['./error-minlength.component.scss']
})
export class ErrorMinlengthComponent implements IFormErrorComponent {
  @Input() data: any
}
