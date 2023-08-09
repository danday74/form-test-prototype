import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

// https://stackoverflow.com/a/43172992/1205871
@Directive({ selector: '[appVar]' })
export class AppVarDirective {
  private context: {
    $implicit: unknown
    appVar: unknown
  } = {
    $implicit: null,
    appVar: null
  }
  private hasView = false

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  @Input()
  set appVar(context: unknown) {
    this.context.$implicit = this.context.appVar = context

    if (!this.hasView) {
      this.vcRef.createEmbeddedView(this.templateRef, this.context)
      this.hasView = true
    }
  }
}
