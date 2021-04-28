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

  region: Region;

  constructor(private helper: HelperService) {
    this.region = new Region(NAMES_REGIONS[0], 0);
  }

  ngOnInit() {
  }
}
