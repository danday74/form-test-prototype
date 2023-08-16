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

  private formCheck: HTMLInputElement

  ngAfterViewInit() {
    const children: HTMLCollection = this.containerRef.nativeElement.children
    this.setFormCheck(children)
    this.checkProjectedContent(children)
    this.setId()
  }

  private setFormCheck(children: HTMLCollection) {
    const els: Element[] = Array.from(children)
    this.formCheck = els.find((el: Element) => {
      const formCheck: HTMLInputElement = el as HTMLInputElement
      return formCheck.tagName === 'INPUT' && (formCheck.type === 'checkbox' || formCheck.type === 'radio')
    }) as HTMLInputElement
    if (this.formCheck) this.formCheck.classList.add('form-check-input')
  }

  private checkProjectedContent(children: HTMLCollection) {
    const expectedChildrenCount: number = this.label ? 2 : 1
    if (children.length !== expectedChildrenCount || !this.model || !this.formCheck) {
      let msg = 'only one <input type="checkbox"> or <input type="radio"> element should be content projected to <app-form-check>'
      msg += ' and it must have [(ngModel)] or an equivalent'
      throw Error(msg)
    }
  }

  private setId() {
    setTimeout(() => {
      this.id = this.formCheck.id || v4()
      this.formCheck.id = this.id
    })
  }
}
