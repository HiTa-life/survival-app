import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DegreeComponent } from './degree.component';
import { SharedModule } from 'src/app/shared/modules/shared-module/shared.module';



@NgModule({
  declarations: [
    DegreeComponent
  ],
  imports: [
    CommonModule, 
    SharedModule
  ], 
  exports : [
    DegreeComponent
  ]
})
export class DegreeModule { }
