import { AfterViewInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core'
import { NgModel } from '@angular/forms'
import { v4 } from 'uuid'
import { IFormErrors } from '../../../form-errors/interfaces/i-form-errors'
import { fixUnits } from '../../../../utils/string-utils'
import { TFormControl } from '../../types/t-form-control'

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() label: string
  @Input() errors: IFormErrors = {}
  @Input() floating = false // https://getbootstrap.com/docs/5.3/forms/floating-labels
  @Input() inline = false
  @Input() labelWidth: string = null
  @Input() labelMaxWidth: string = null

  @ContentChild(NgModel) model: NgModel
  @ViewChild('containerRef') containerRef: ElementRef<HTMLDivElement>

  isFloating: boolean = this.floating
  isInline: boolean = this.inline
  id: string

  private formControl: TFormControl
  private prevWarn: string

  ngOnInit() {
    this.fixUnits()
    this.fixFloatingAndInline()
  }

  ngAfterViewInit() {
    const children: HTMLCollection = this.containerRef.nativeElement.children
    this.setFormControl(children)
    this.checkProjectedContent(children)
    this.setId()
    this.fixFloatingAndInline()
  }

  ngOnChanges(changes: SimpleChanges) {
    if ((changes.labelWidth && !changes.labelWidth.firstChange) || (changes.labelMaxWidth && !changes.labelMaxWidth.firstChange)) {
      this.fixUnits()
    }

    if ((changes.floating && !changes.floating.firstChange) || (changes.inline && !changes.inline.firstChange) || (changes.label && !changes.label.firstChange)) {
      this.fixFloatingAndInline()
    }
  }

  private setFormControl(children: HTMLCollection) {
    const els: Element[] = Array.from(children)
    this.formControl = els.find((el: Element) => {
      const formControl: TFormControl = el as TFormControl
      return formControl.tagName === 'TEXTAREA' || formControl.tagName === 'SELECT' || this.isAllowedInput(formControl)
    }) as TFormControl
    if (this.formControl) {
      const formControlClass: string = this.formControl.tagName === 'SELECT' ? 'form-select' : 'form-control'
      this.formControl.classList.add(formControlClass)
    }
  }

  private checkProjectedContent(children: HTMLCollection) {
    const expectedChildrenCount: number = this.label ? 3 : 2
    if (children.length !== expectedChildrenCount || !this.model || !this.formControl) {
      let msg = 'only one <input> <select> or <textarea> element should be content projected to <app-form-control>'
      msg += ' and it must have [(ngModel)] or an equivalent - checkboxes and radios should use <app-form-check> instead'
      throw Error(msg)
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

  private fixFloatingAndInline() {
    let isFloating: boolean = this.floating
    let isInline: boolean = this.inline

    if (isFloating && !this.label) {
      this.warn('floating label (floating=true) requested but no label provided', 'floating')
      isFloating = false
    }

    if (isInline && !this.label) {
      this.warn('inline label (inline=true) requested but no label provided', 'inline')
      isInline = false
    }

    if (isFloating && this.formControl && !this.isAllowedInput(this.formControl)) {
      this.warn('a floating label (floating=true) is only supported on an allowed <input>', 'floating')
      isFloating = false
    }

    if (isFloating && isInline) {
      this.warn('a label cannot be both floating (floating=true) and inline (inline=true)', 'inline')
      isInline = false
    }

    if (isFloating && this.formControl) {
      const placeholder: string = this.formControl.getAttribute('placeholder')
      if (placeholder == null) this.formControl.setAttribute('placeholder', this.label)
    }

    this.isFloating = isFloating
    this.isInline = isInline

    // this.cdRef.detectChanges()
  }

  private warn(message: string, labelType: 'inline' | 'floating') {
    setTimeout(() => {
      const id: string = this.label || this.id
      if (id) {
        const msg = `${message} \u2013 ${labelType} label '${id}' turned off`
        if (this.prevWarn !== msg) {
          this.prevWarn = msg
          console.warn(msg)
        }
      }
    })
  }

  private isAllowedInput(formControl: TFormControl): boolean {
    return formControl.tagName === 'INPUT' && formControl.type !== 'checkbox' && formControl.type !== 'radio'
  }
}
