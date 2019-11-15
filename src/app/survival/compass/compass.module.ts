import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompassComponent } from './compass.component';
import { CompassRoutingModule } from './compass-routing.module';
import { DegreeModule } from '../shared/components/degree/degree.module';
import { SharedModule } from 'src/app/shared/modules/shared-module/shared.module';



@NgModule({
  declarations: [
    CompassComponent
  ],
  imports: [
    CommonModule,
    DegreeModule,
    SharedModule,
    CompassRoutingModule
  ],
  exports: [
    //CompassComponent
  ]
})
export class CompassModule { }
