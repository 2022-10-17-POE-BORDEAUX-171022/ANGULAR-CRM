import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MediaqueriesComponent } from './cours/mediaqueries/mediaqueries.component';
registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent, MediaqueriesComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
