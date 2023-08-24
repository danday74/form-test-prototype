import { Component } from '@angular/core'
import { TTheme } from './types/t-theme'
import { appConfig } from './app-config'
import { ThemeService } from './services/theme.service'
import { TLod } from './types/t-lod'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly themes: TTheme[] = appConfig.theme.themes
  theme: TTheme = this.themeService.getTheme()
  lod: TLod = this.themeService.getLod()

  constructor(private themeService: ThemeService) {}

  changeTheme(theme: TTheme) {
    this.themeService.activateTheme(theme).then((theme: TTheme) => {
      if (theme) this.theme = theme
    })
  }

  toggleLod() {
    this.lod = this.lod === 'light' ? 'dark' : 'light'
    this.themeService.activateLod(this.lod)
  }

  trackByFunc(_idx: number, theme: TTheme): TTheme {
    return theme
  }
}
