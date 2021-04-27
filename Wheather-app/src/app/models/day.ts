import { WeatherTypes } from './weather';

export interface Day {
  display: string,
  wheater: WeatherTypes,
  tempCelsius: string,
  tempFarenheit: string,
}
