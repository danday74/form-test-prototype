import { Injectable } from '@angular/core'
import { TTheme } from '../types/t-theme'
import { FileService } from './file.service'
import { formatMe } from '../utils/string-utils'
import { TLod } from '../types/t-lod'
import { appConfig } from '../app-config'
import { StorageService } from './storage.service'
import { deferred } from '../utils/deferred'
import { IDeferred } from '../interfaces/i-deferred'
import { insertAfter } from '../utils/dom-utils'

@Injectable({ providedIn: 'root' })
export class ThemeService {

  private readonly urlTemplate: string = `assets/themes/{{theme}}-theme.min.css`
  private readonly themeStorageKey: string = appConfig.theme.prefix
  private readonly lodStorageKey: string = `${appConfig.theme.prefix}-lod`

  constructor(private fileService: FileService, private storageService: StorageService) {}

  getTheme(): TTheme {
    let theme: TTheme = this.storageService.getItem(this.themeStorageKey, appConfig.theme.default)
    if (!appConfig.theme.themes.includes(theme)) theme = appConfig.theme.default
    return theme
  }

  getLod(): TLod {
    let lod: TLod = this.storageService.getItem(this.lodStorageKey)
    if (lod == null) lod = this.preferredLod()
    return lod
  }

  async activateTheme(theme: TTheme): Promise<TTheme> {

    const url: string = formatMe(this.urlTemplate, { theme })

    return this.fileService.fileExists(url).toPromise().then((exists: boolean) => {
      if (exists) {
        this.storageService.setItem(this.themeStorageKey, theme)
        this.loadTheme(theme, url)
        this.addThemeCssClassToHead(theme)
        return theme
      } else {
        console.warn(`no theme file found for ${theme} - modify themes/genthemes.sh and create a theme file and then execute ... npm run genthemes`)
        return null
      }
    })
  }

  activateLod(lod: TLod) {
    this.storageService.setItem(this.lodStorageKey, lod)
    const html: HTMLHtmlElement = document.querySelector('html')
    const bsTheme: string = html.dataset.bsTheme
    if (lod !== bsTheme) html.dataset.bsTheme = lod
  }

  async deactivateOldTheme(timeout = 200): Promise<boolean> {
    const defer: IDeferred<boolean> = deferred()

    setTimeout(() => {
      const oldLink: HTMLLinkElement = document.querySelector('head > link[data-theme][data-remove]')
      if (oldLink) {
        document.head.removeChild(oldLink)
        defer.resolve(true)
      } else {
        defer.reject('unable to find a link in head to remove')
      }
    }, timeout)

    return defer.promise
  }

  private loadTheme(theme: TTheme, href: string) {
    const oldLink: HTMLLinkElement = document.querySelector('head > link[data-theme]:not([data-remove])')

    const newLink: HTMLLinkElement = document.createElement('link')
    newLink.rel = 'stylesheet'
    newLink.type = 'text/css'
    newLink.href = href
    newLink.dataset.theme = theme

    if (oldLink) {
      oldLink.dataset.remove = ''
      insertAfter(oldLink, newLink)
    } else {
      document.head.appendChild(newLink)
    }
  }

  private addThemeCssClassToHead(theme: TTheme) {
    const html: HTMLHtmlElement = document.querySelector('html')
    const prefix = `${appConfig.theme.prefix}-`
    const classes: string[] = html.className.split(' ').filter((clazz: string) => !clazz.startsWith(prefix))
    html.className = classes.join(' ')
    html.classList.add(prefix + theme)
  }

  private preferredLod(): TLod {
    const prefersDark: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  }
}
