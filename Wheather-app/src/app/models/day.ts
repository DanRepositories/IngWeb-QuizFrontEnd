import { WeatherTypes } from './weather';

export interface Day {
  display: string,
  wheater: WeatherTypes,
  tempCelsius: number,
  tempFarenheit: number,
}
