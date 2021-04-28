import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper-service.service';
import { NAMES_REGIONS, NAMES_DAYS } from '../../models/global-names';
import { WeatherTypes } from '../../models/weather';
import { Day } from '../../models/day';

interface formInfo {
  region: number,
  weather: string,
  day: number,
  temperature: number,
  degrees: number,
}

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent {

  weatherInfo: FormGroup;

  namesRegions: Array<string> = [...NAMES_REGIONS];
  namesDays = NAMES_DAYS;

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private helper: HelperService,
    ) {
    this.weatherInfo = this._fb.group({
      region: [0, [Validators.required]],
      weather: ['', [Validators.required]],
      day: [0, [Validators.required]],
      temperature: [0, [Validators.required]],
      degrees: [0, [Validators.required]],
    })
  }

  onSubmit() {
    const values: formInfo = this.weatherInfo.getRawValue();
    const numDay = values.day - 1;
    const numRegion = values.region - 1;
    const newDay = this.makeDayFromValues(values);
    this.helper.updateDay(newDay, numDay, numRegion);
    this.router.navigate(['']);
  }

  private makeDayFromValues(values: formInfo) {
    let day: Day = {display: '', tempCelsius: 0, tempFarenheit: 0, weather: WeatherTypes.SOLEADO};

    // check if celsius
    if (1 == values.degrees) {
      day.tempCelsius = values.temperature;
      day.tempFarenheit = this.celsiusToFar(values.temperature);
    } else {
      day.tempFarenheit = values.temperature;
      day.tempCelsius = this.farToCelsius(values.temperature);
    }

    day.display = NAMES_DAYS[values.day - 1];
    return day;
  }

  private celsiusToFar(celsius: number) {
    const far = (celsius * 9 / 5) + 32;
    return Math.trunc(far);
  }

  private farToCelsius(far: number) {
    const celsius = (far - 32) * 5 / 9;
    return Math.trunc(celsius);
  }
}
