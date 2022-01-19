import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlayComponent } from './components/play/play.component';
import { TotalsComponent } from './components/totals/totals.component';

import { RoundRestService } from './services/http/impl/round.service.impl';
import { LoadingService } from './services/loading/loading.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayComponent,
    TotalsComponent
  ],
  imports: [
    APP_ROUTING,
    HttpClientModule,
    BrowserModule
  ],
  providers: [RoundRestService, LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
