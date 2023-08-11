import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core'
import { get, keys, merge } from 'lodash-es'
import { NgModel } from '@angular/forms'
import { IFormErrors } from '../../../../interfaces/i-form-errors'
import { defaultFormErrors } from '../../data/default-form-errors'
import { IFormError } from '../../../../interfaces/i-form-error'
import { IFormErrorComponent } from '../../../../interfaces/i-form-error-component'
import { takeUntil } from 'rxjs/operators'
import { DestroyerComponent } from '../../../app-core/components/destroyer.component'

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss']
})
export class FormErrorsComponent extends DestroyerComponent implements OnInit, AfterViewInit, OnChanges {
  readonly keys = keys

  @Input() label: string
  @Input() model: NgModel
  @Input() errors: IFormErrors = {}

  @ViewChild('errorRef', { static: true, read: ViewContainerRef }) errorRef: ViewContainerRef

  formErrors: IFormErrors = {}

  constructor(private cfr: ComponentFactoryResolver) {
    super()
  }

  ngOnInit() {
    this.setFormErrors()
  }

  ngAfterViewInit() {
    this.model.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.createErrorComponent()
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.errors && !changes.errors.firstChange) this.setFormErrors()
  }

  private setFormErrors() {
    this.formErrors = merge({}, defaultFormErrors, this.errors)
  }

  private createErrorComponent() {

    this.errorRef.clear()

    const key: string = this.model.errors ? keys(this.model.errors)[0] : null
    const formError: string | IFormError = key ? this.formErrors[key] : null

    if (formError && typeof formError === 'object' && formError.component) {

      const componentFactory: ComponentFactory<IFormErrorComponent> = this.cfr.resolveComponentFactory(formError.component)
      const componentRef: ComponentRef<IFormErrorComponent> = this.errorRef.createComponent<IFormErrorComponent>(componentFactory)

      const dataProps: string[] = formError.dataProps || []
      componentRef.instance.data = dataProps.reduce((acc: any, prop: string) => {
        acc[prop] = get(this, prop)
        return acc
      }, { key })
    }
  }
}
