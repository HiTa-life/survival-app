import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survival',
  templateUrl: './survival.component.html',
  styleUrls: ['./survival.component.scss'],
})
export class SurvivalComponent  {
//title: string = "Hello";

protected title: String;

  constructor() {
    this.title = "Hello";
   }
    
  ngOnInit() {}

}
