import { Day } from './day';
import { WeatherTypes } from './weather';

export class Region {
  display: string;
  week: Array<Day>;

  constructor(name: string) {
    this.display = name;

    let days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    for (let i = 0; i < 7; ++i) {
      this.week[i].display = days[i];
      this.week[i].tempCelsius = 0;
      this.week[i].tempFarenheit = 0;
      this.week[i].wheater = WeatherTypes.SOLEADO;
    }
  }
}