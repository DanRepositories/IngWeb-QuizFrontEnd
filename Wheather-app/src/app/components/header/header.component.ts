import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helper-service.service';
import { NAMES_REGIONS } from '../../models/global-names';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  disabledMenu: boolean = false;
  selectedRegion: string;
  namesRegions: Array<string>;

  constructor(private helper: HelperService) {
    this.namesRegions = [...NAMES_REGIONS];
    this.selectedRegion = this.namesRegions[0];
  }

  selectRegion(name: string, index: number) {
    this.selectedRegion = name;
    this.helper.setRegion(index);
  }
}
