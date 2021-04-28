import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private numberRegion = new BehaviorSubject<number>(1);
  public updatedNumberRegion = this.numberRegion.asObservable();

  constructor() { }

  public updateRegion(numRegion: number) {
    this.numberRegion.next(numRegion);
  }
}
