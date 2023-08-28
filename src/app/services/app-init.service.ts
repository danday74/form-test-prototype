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
    this.themeService.activateTheme(theme).then()
  }

  private initLod() {
    const lod: TLod = this.themeService.getLod()
    this.themeService.activateLod(lod)
  }
}
