import { Injectable } from '@angular/core'
import { ThemeService } from './theme.service'
import { TTheme } from '../types/t-theme'
import { TLod } from '../types/t-lod'
import { environment } from '../../environments/environment'

@Injectable({ providedIn: 'root' })
export class AppInitService {

  constructor(private themeService: ThemeService) {}

  async init(): Promise<any> {
    console.info(`environment=${environment.name}`)
    this.initTheme()
    this.initLod()
    return true
  }

  private initTheme() {
    const theme: TTheme = this.themeService.getTheme()
    this.themeService.activateTheme(theme).then((theme: TTheme) => {
      if (theme != null) {
        setTimeout(() => {
          const removeLink: HTMLLinkElement = document.querySelector('head > link[data-remove]')
          if (removeLink) {
            document.head.removeChild(removeLink)
          } else {
            // <link rel="stylesheet" type="text/css" href="/assets/themes/init-theme.css" data-remove>
            throw Error('head > link[data-remove] avoids page jump on initial page load but it no longer exists')
          }
        }, 200)
      }
    })
  }

  private initLod() {
    const lod: TLod = this.themeService.getLod()
    this.themeService.activateLod(lod)
  }
}
