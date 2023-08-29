import { Injectable } from '@angular/core'
import { ThemeService } from './theme.service'
import { TTheme } from '../types/t-theme'
import { TLod } from '../types/t-lod'
import { environment } from '../../environments/environment'
import { StorageService } from './storage.service'
import { differenceInHours } from 'date-fns'
import { csfStorageKeys } from '../modules/css-filters/data/csf-storage-keys'
import { appConfig } from '../app-config'
import { values } from 'lodash-es'

@Injectable({ providedIn: 'root' })
export class AppInitService {

  constructor(private themeService: ThemeService, private storageService: StorageService) {}

  async init(): Promise<any> {
    console.info(`environment=${environment.name}`)
    this.cacheBust()
    this.initTheme()
    this.initLod()
    return true
  }

  private cacheBust() {
    const lastSeen: Date = this.storageService.getItem('last-seen')
    let bust = false

    if (lastSeen) {
      const diff: number = differenceInHours(new Date(), lastSeen)
      if (diff > 2) bust = true
    } else {
      bust = true
    }

    if (bust) {
      console.info('busting your cache')
      const prefix: string = appConfig.theme.prefix
      const myKeys: string[] = [prefix, `${prefix}-lod`, ...values(csfStorageKeys)]
      myKeys.forEach((key: string) => this.storageService.removeItem(key))
    }
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
            // <link rel="stylesheet" type="text/css" href="assets/themes/init-theme.css" data-remove>
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
