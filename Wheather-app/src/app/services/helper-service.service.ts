import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { NAMES_REGIONS } from '../models/global-names';
import { Region } from '../models/region';
import { Day } from '../models/day';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  regions: Array<Region> = [];
  _currentNumberRegion = new BehaviorSubject<number>(0);
  currentNumberRegion = this._currentNumberRegion.asObservable();

  constructor() {
    NAMES_REGIONS.forEach((name, index) => {
      this.regions.push(new Region(name, index));
    });
  }

  updateDay(day: Day, numDay: number, numRegion: number) {
    this.regions[numRegion].week[numDay] = day;
    this.setRegion(numRegion);
  }

  setRegion(numRegion: number) {
    this._currentNumberRegion.next(numRegion);
  }
}
