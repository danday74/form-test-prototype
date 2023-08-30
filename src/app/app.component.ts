import { Component } from '@angular/core'
import { TTheme } from './types/t-theme'
import { appConfig } from './app-config'
import { ThemeService } from './services/theme.service'
import { TLod } from './types/t-lod'
import { StorageService } from './services/storage.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly themes: TTheme[] = appConfig.theme.themes
  theme: TTheme = this.themeService.getTheme()
  lod: TLod = this.themeService.getLod()

  constructor(private themeService: ThemeService, private storageService: StorageService) {}

  onBeforeUnload() {
    this.storageService.setItem('last-seen', new Date())
  }

  async changeTheme(t: TTheme): Promise<boolean> {

    if (t === this.theme) return true

    try {
      const theme: TTheme = await this.themeService.activateTheme(t)
      if (theme == null) throw Error('failed to activate theme')
      this.theme = theme

      const success: boolean = await this.themeService.deactivateOldTheme()
      if (!success) throw Error('failed to deactivate old theme')

      return true
    } catch (err: any) {
      const msg: string = err.message || err
      console.error(msg)
      return false
    }
  }

  toggleLod() {
    this.lod = this.lod === 'light' ? 'dark' : 'light'
    this.themeService.activateLod(this.lod)
  }

  trackByFunc(_idx: number, theme: TTheme): TTheme {
    return theme
  }
}
