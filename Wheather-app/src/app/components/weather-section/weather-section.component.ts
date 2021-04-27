import { Component } from '@angular/core';
import { Region } from '../../models/region';

@Component({
  selector: 'app-weather-section',
  templateUrl: './weather-section.component.html',
  styleUrls: ['./weather-section.component.scss']
})
export class WeatherSectionComponent {

  regions: Array<Region> = [];

  constructor() {
    let namesRegions = ['Valparaiso', 'Metropolitana', 'Bio Bio', 'Araucania'];

    namesRegions.forEach(currentName => {
      this.regions.push(new Region(currentName));
    });
  }
}
