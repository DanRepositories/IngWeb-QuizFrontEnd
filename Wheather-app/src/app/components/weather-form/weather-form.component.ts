import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper-service.service';
import { NAMES_REGIONS, NAMES_DAYS } from '../../models/global-names';

export interface formInfo {
  region: number,
  weather: number,
  day: number,
  temperature: number,
  degrees: string,
}

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent {

  weatherInfo: FormGroup;

  namesRegions: Array<string> = [...NAMES_REGIONS];
  days = NAMES_DAYS;

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private helper: HelperService,
    ) {
    this.weatherInfo = this._fb.group({
      region: [0, [Validators.required]],
      weather: [0, [Validators.required]],
      day: [0, [Validators.required]],
      temperature: [0, [Validators.required]],
      degrees: ['', [Validators.required]],
    })
  }

  onSubmit() {
    console.log(this.weatherInfo.getRawValue());
    this.router.navigate(['']);
  }


}
