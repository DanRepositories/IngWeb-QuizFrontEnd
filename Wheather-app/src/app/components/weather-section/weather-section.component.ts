import { Component } from '@angular/core';
import { Region } from '../../models/region';
import { NAMES_REGIONS } from '../../models/global-names';

@Component({
  selector: 'app-weather-section',
  templateUrl: './weather-section.component.html',
  styleUrls: ['./weather-section.component.scss']
})
export class WeatherSectionComponent {

  regions: Array<Region> = [];

  constructor() {
    NAMES_REGIONS.forEach(currentName => {
      this.regions.push(new Region(currentName));
    });
  }
}
