import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* My Components */
import { HeaderComponent } from './components/header/header.component';
import { WeatherSectionComponent } from './components/weather-section/weather-section.component';
import { WeatherFormComponent } from './components/weather-form/weather-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherSectionComponent,
    WeatherFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
