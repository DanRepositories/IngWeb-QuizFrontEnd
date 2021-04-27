import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* My Components */
import { WeatherSectionComponent } from './components/weather-section/weather-section.component';
import { WeatherFormComponent } from './components/weather-form/weather-form.component';

const routes: Routes = [
  { path: '', component: WeatherSectionComponent },
  { path: 'update-info', component: WeatherFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
