import { Component, OnInit } from '@angular/core';
import { TitleService } from './shared/services/title.service';

@Component({
  selector: 'app-survival',
  templateUrl: './survival.component.html',
  styleUrls: ['./survival.component.scss'],
})
export class SurvivalComponent {
  //title: string = "Hello";

  protected title: string;

  constructor() {}

}
