import { AfterViewInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core'
import { keys, merge } from 'lodash-es'
import { NgModel } from '@angular/forms'
import { v4 } from 'uuid'
import { IFormErrors } from '../../../../interfaces/i-form-errors'
import { defaultFormErrors } from '../../data/default-form-errors'

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit, AfterViewInit, OnChanges {
  readonly keys = keys

  @Input() label: string
  @Input() errors: IFormErrors = {}

  @ContentChild(NgModel) model: NgModel
  @ViewChild('containerRef') containerRef: ElementRef<HTMLDivElement>

  id: string
  formErrors: any = {}

  private formControl: HTMLInputElement | HTMLSelectElement

  ngOnInit() {
    this.setFormErrors()
  }

  ngAfterViewInit() {
    const expectedChildrenCount: number = this.label ? 3 : 2
    const children: HTMLCollection = this.containerRef.nativeElement.children
    const els: Element[] = Array.from(children)
    this.formControl = els.find((el: Element) => el.tagName === 'INPUT' || el.tagName === 'SELECT') as HTMLInputElement | HTMLSelectElement

    if (children.length !== expectedChildrenCount || !this.model || !this.formControl) {
      throw Error('only one <select> or one <input> element should be content projected to <app-form-control> and it must have [(ngModel)] or an equivalent')
    }

    setTimeout(() => {
      this.id = this.formControl.id || v4()
      this.formControl.id = this.id
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.errors && !changes.errors.firstChange) this.setFormErrors()
  }

  private setFormErrors() {
    this.formErrors = merge({}, defaultFormErrors, this.errors)
  }
}
