import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  exports: [
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
  ]
})
export class AngularMaterialModule { }
