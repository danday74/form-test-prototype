import { Component, OnInit } from '@angular/core'
import { TFormStyle } from './types/t-form-style'
import { StorageService } from './services/storage.service'
import { appConfig } from './app-config'
import { getNextItemInArray } from './utils/array-utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  formStyle: TFormStyle = this.getFormStyle()

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.addFormStyleCssClassToHead()
  }

  toggleFormStyle() {
    const nextFormStyle: TFormStyle = getNextItemInArray(appConfig.formStyle.styles, this.formStyle)
    this.formStyle = nextFormStyle
    this.storageService.setItem(appConfig.formStyle.prefix, nextFormStyle)
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
    if (!appConfig.formStyle.styles.includes(formStyle)) formStyle = appConfig.formStyle.default
    return formStyle
  }
}
