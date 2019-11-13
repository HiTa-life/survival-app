import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../modules/shared-module/shared.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule, 
    SharedModule
  ], 
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
