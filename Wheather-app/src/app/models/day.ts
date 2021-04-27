import { WeatherTypes } from './weather';

export interface Day {
  display: string,
  weather: WeatherTypes,
  tempCelsius: number,
  tempFarenheit: number,
}
