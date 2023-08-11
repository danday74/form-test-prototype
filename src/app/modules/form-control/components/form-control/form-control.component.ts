import { AfterViewInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core'
import { NgModel } from '@angular/forms'
import { v4 } from 'uuid'
import { IFormErrors } from '../../../../interfaces/i-form-errors'
import { fixUnits } from '../../../../utils/string-utils'

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() label: string
  @Input() errors: IFormErrors = {}
  @Input() inline = false
  @Input() labelWidth: string = null
  @Input() labelMaxWidth: string = null

  @ContentChild(NgModel) model: NgModel
  @ViewChild('containerRef') containerRef: ElementRef<HTMLDivElement>

  id: string

  private formControl: HTMLInputElement | HTMLSelectElement

  ngOnInit() {
    this.fixUnits()
  }

  ngAfterViewInit() {
    const children: HTMLCollection = this.containerRef.nativeElement.children
    this.setFormControl(children)
    this.checkProjectedContent(children)
    this.setId()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.labelWidth && !changes.labelWidth.firstChange) this.fixUnits()
    if (changes.labelMaxWidth && !changes.labelMaxWidth.firstChange) this.fixUnits()
  }

  private setFormControl(children: HTMLCollection) {
    const els: Element[] = Array.from(children)
    this.formControl = els.find((el: Element) => el.tagName === 'INPUT' || el.tagName === 'SELECT') as HTMLInputElement | HTMLSelectElement
  }

  private checkProjectedContent(children: HTMLCollection) {
    const expectedChildrenCount: number = this.label ? 3 : 2
    if (children.length !== expectedChildrenCount || !this.model || !this.formControl) {
      throw Error('only one <select> or one <input> element should be content projected to <app-form-control> and it must have [(ngModel)] or an equivalent')
    }
  }

  private setId() {
    setTimeout(() => {
      this.id = this.formControl.id || v4()
      this.formControl.id = this.id
    })
  }

  private fixUnits() {
    this.labelWidth = fixUnits(this.labelWidth)
    this.labelMaxWidth = fixUnits(this.labelMaxWidth)
  }
}
