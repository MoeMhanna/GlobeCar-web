import { NgModule } from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


const mat_modules =[
  MatInputModule,
  MatButtonModule,
  MatIconModule,
];

@NgModule({


  exports: [
    mat_modules,
  ],
  imports: [
    mat_modules,
  ]
})
export class MaterialModule { }
