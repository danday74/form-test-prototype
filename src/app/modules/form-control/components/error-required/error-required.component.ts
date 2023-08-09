import { Component, Input } from '@angular/core'
import { IFormErrorComponent } from '../../../../interfaces/i-form-error-component'

@Component({
  selector: 'app-error-required',
  templateUrl: './error-required.component.html',
  styleUrls: ['./error-required.component.scss']
})
export class ErrorRequiredComponent implements IFormErrorComponent {
  @Input() data: any
}
