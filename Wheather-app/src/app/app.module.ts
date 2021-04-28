import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* My Modules */
import { AngularMaterialModule} from './modules/angular-material/angular-material.module';

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
    AngularMaterialModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
