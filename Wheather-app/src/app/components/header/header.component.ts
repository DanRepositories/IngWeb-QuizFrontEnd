import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedRegion: string;
  namesRegions: Array<string>;

  constructor() {
    this.selectedRegion = '';
    this.namesRegions = ['Valparaiso', 'Metropolitana', 'Bio Bio', 'Araucania'];
  }

  selectRegion(name: string) {
    this.selectedRegion = name;
  }
}
