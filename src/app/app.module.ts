import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PipesModule } from './pipes/pipes.module'
import { AppInitService } from './services/app-init.service'
import { HttpClientModule } from '@angular/common/http'
import { CssFiltersModule } from './modules/css-filters/css-filters.module'

const appInit = (appInitService: AppInitService) => (): Promise<any> => appInitService.init()

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    PipesModule,
    CssFiltersModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
