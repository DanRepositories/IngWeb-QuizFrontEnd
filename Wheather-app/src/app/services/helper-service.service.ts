import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface formInfo {
  region: number,
  weather: number,
  day: number,
  temperature: number,
  degrees: string,
}

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private numberRegion = new BehaviorSubject<number>(0);
  public updatedNumberRegion = this.numberRegion.asObservable();

  private _formValues = new BehaviorSubject<formInfo>({region: 0, weather: 0, day: 0, temperature: 0, degrees: ""});
  public formValues = this._formValues.asObservable();

  constructor() { }

  public updateRegion(numRegion: number) {
    this.numberRegion.next(numRegion);
  }

  public updateDay(info: formInfo) {
    this._formValues.next(info);
  }
}
