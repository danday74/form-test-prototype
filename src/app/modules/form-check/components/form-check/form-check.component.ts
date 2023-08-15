import { AfterViewInit, Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core'
import { NgModel } from '@angular/forms'
import { v4 } from 'uuid'

@Component({
  selector: 'app-form-check',
  templateUrl: './form-check.component.html',
  styleUrls: ['./form-check.component.scss']
})
export class FormCheckComponent implements AfterViewInit {
  @Input() label: string
  @Input() inline = false
  @Input() switch = false

  @ContentChild(NgModel) model: NgModel
  @ViewChild('containerRef') containerRef: ElementRef<HTMLDivElement>

  id: string

  private formControl: HTMLInputElement

  ngAfterViewInit() {
    const children: HTMLCollection = this.containerRef.nativeElement.children
    this.setFormControl(children)
    this.checkProjectedContent(children)
    this.setId()
  }

  private setFormControl(children: HTMLCollection) {
    const els: Element[] = Array.from(children)
    this.formControl = els.find((el: Element) => {
      const inputCheck: HTMLInputElement = el as HTMLInputElement
      return inputCheck.tagName === 'INPUT' && (inputCheck.type === 'checkbox' || inputCheck.type === 'radio')
    }) as HTMLInputElement
  }

  private checkProjectedContent(children: HTMLCollection) {
    const expectedChildrenCount: number = this.label ? 2 : 1
    if (children.length !== expectedChildrenCount || !this.model || !this.formControl) {
      throw Error('only one <input type="checkbox"> or one <input type="radio"> element should be content projected to <app-form-check> and it must have [(ngModel)] or an equivalent')
    }
  }

  private setId() {
    setTimeout(() => {
      this.id = this.formControl.id || v4()
      this.formControl.id = this.id
    })
  }
}
