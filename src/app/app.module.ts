import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PipesModule } from './pipes/pipes.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}