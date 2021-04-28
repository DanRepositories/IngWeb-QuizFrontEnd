import { Day } from './day';
import { WeatherTypes } from './weather';

export class Region {
  display: string;
  week: Array<Day> = [];

  constructor(name: string, temperature: number) {
    this.display = name;

    let days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    days.forEach(day => {
      this.week.push({display: day, tempCelsius: temperature, tempFarenheit: temperature, weather: WeatherTypes.SOLEADO});
    });
  }
}