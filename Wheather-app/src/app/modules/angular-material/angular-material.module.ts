import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  exports: [
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
  ]
})
export class AngularMaterialModule { }
