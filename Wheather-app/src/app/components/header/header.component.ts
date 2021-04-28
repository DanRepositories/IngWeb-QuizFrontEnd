import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedRegion: string;
  namesRegions: Array<string>;

  constructor(private helper: HelperService) {
    this.selectedRegion = '';
    this.namesRegions = ['Valparaiso', 'Metropolitana', 'Bio Bio', 'Araucania'];
  }

  ngOnInit() {}

  selectRegion(name: string, index: number) {
    this.selectedRegion = name;
    this.helper.updateRegion(index);
  }
}
