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

  async init(): Promise<boolean> {
    console.info(`environment=${environment.name}`)
    this.cacheBust()
    const result: boolean = await this.initTheme()
    this.initLod()
    return result
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

  private async initTheme(): Promise<boolean> {
    try {
      const t: TTheme = this.themeService.getTheme()

      const theme: TTheme = await this.themeService.activateTheme(t)
      if (theme == null) throw Error('failed to activate theme')

      const success: boolean = await this.themeService.deactivateOldTheme(100)
      if (!success) throw Error('failed to deactivate old theme')

      return true
    } catch (err: any) {
      const msg: string = err.message || err
      console.error(`on app init, ${msg}`)
      return false
    }
  }

  private initLod() {
    const lod: TLod = this.themeService.getLod()
    this.themeService.activateLod(lod)
  }
}
