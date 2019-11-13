import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurvivalComponent } from './survival.component';
import { SurvivalRoutingModule } from './survival-routing.module';
import { SharedModule } from '../shared/modules/shared-module/shared.module';
import { FooterModule } from '../shared/components/footer/footer.module';






@NgModule({
  declarations: [
    SurvivalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,   
    SurvivalRoutingModule,
    FooterModule
  ],
  exports: [
    //SurvivalComponent
  ]
})
export class SurvivalModule { }
