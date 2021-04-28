import { Day } from './day';
import { WeatherTypes } from './weather';

export class Region {
  display: string;
  week: Array<Day> = [];

  constructor(name: string) {
    this.display = name;

    let days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    days.forEach(nameDay => {
      const randomDay: Day = this.createRandomDay(nameDay);
      this.week.push(randomDay);
    });
  }

  createRandomDay(name: string) {
    const tempCelsius = Math.trunc(Math.random() * 30);
    const tempFarenheit = Math.trunc((tempCelsius * 1.8) + 32)
    let weather: WeatherTypes;

    if (tempCelsius < 5) {
      weather = WeatherTypes.TORMENTA;
    } else if (tempCelsius < 15) {
      weather = WeatherTypes.LLUVIOSO;
    } else if (tempCelsius < 25) {
      weather = WeatherTypes.NUBLADO;
    } else {
      weather = WeatherTypes.SOLEADO;
    }

    const day: Day = {
      display: name, 
      tempCelsius: tempCelsius, 
      tempFarenheit: tempFarenheit, 
      weather: weather,
    }
    return day;
  }
}