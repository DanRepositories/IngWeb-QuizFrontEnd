import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* My Components */
import { WeatherSectionComponent } from './components/weather-section/weather-section.component';

const routes: Routes = [
  { path: '', component: WeatherSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
