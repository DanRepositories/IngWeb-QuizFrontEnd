import { Component, OnInit } from '@angular/core';
import { Region } from '../../models/region';
import { NAMES_REGIONS } from '../../models/global-names';
import { HelperService } from 'src/app/services/helper-service.service';

@Component({
  selector: 'app-weather-section',
  templateUrl: './weather-section.component.html',
  styleUrls: ['./weather-section.component.scss']
})
export class WeatherSectionComponent implements OnInit {

  regions: Array<Region> = [];
  currentRegion: number;

  constructor(private helper: HelperService) {
    NAMES_REGIONS.forEach((currentName, index) => {
      this.regions.push(new Region(currentName, index));
    });
  }

  ngOnInit() {
    this.helper.updatedNumberRegion.subscribe(numberRegion => {
      this.currentRegion = numberRegion;
    });

    this.currentRegion = 0;
  }
}
