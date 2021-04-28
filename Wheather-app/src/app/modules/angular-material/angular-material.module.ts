import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  exports: [
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
  ]
})
export class AngularMaterialModule { }
