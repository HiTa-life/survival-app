import { Component, OnInit, Input } from '@angular/core';
import { DegreeService } from 'src/app/survival/bubble/shared/services/degree.service';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss'],
})
export class DegreeComponent {
  @Input() degree: number;
//protected degree: number;

  constructor (){}    

}
