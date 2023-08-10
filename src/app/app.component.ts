import { Component, OnInit } from '@angular/core'
import { TFormStyle } from './types/t-form-style'
import { StorageService } from './services/storage.service'
import { appConfig } from './app-config'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly formStyles: TFormStyle[] = appConfig.formStyle.styles
  formStyle: TFormStyle = this.getFormStyle()

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.addFormStyleCssClassToHead()
  }

  changeFormStyle(formStyle: TFormStyle) {
    this.formStyle = formStyle
    this.storageService.setItem(appConfig.formStyle.prefix, formStyle)
    this.addFormStyleCssClassToHead()
  }

  private addFormStyleCssClassToHead() {
    const html: HTMLHtmlElement = document.getElementsByTagName('html')[0]
    const prefix = `${appConfig.formStyle.prefix}-`
    const classes: string[] = html.className.split(' ').filter((clazz: string) => !clazz.startsWith(prefix))
    html.className = classes.join(' ')
    html.classList.add(prefix + this.formStyle)
  }

  private getFormStyle(): TFormStyle {
    let formStyle: TFormStyle = this.storageService.getItem(appConfig.formStyle.prefix, appConfig.formStyle.default)
    if (!this.formStyles.includes(formStyle)) formStyle = appConfig.formStyle.default
    return formStyle
  }
}
