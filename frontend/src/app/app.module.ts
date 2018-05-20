import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiService } from 'src/app/services/api.service';
import { HeaderComponent, SharedModule } from './shared';
import { LoginComponent } from 'src/app/views/login/login.component';
import { KioskComponent } from 'src/app/views/kiosk/kiosk.component';
import { OnTapComponent } from 'src/app/views/on-tap/on-tap.component';
import { BeersComponent } from 'src/app/views/beers/beers.component';
import { BreweriesComponent } from 'src/app/views/breweries/breweries.component';
import { HistoryComponent } from 'src/app/views/history/history.component';
import { NotFoundComponent } from 'src/app/views/not-found/not-found.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    KioskComponent,
    OnTapComponent,
    BeersComponent,
    BreweriesComponent,
    HistoryComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
