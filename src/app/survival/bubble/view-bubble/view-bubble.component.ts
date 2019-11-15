import { Component, OnInit, Input } from '@angular/core';
import { DegreeService } from '../shared/services/degree.service';

@Component({
  selector: 'app-view-bubble',
  templateUrl: './view-bubble.component.html',
  styleUrls: ['./view-bubble.component.scss'],
})
export class ViewBubbleComponent  {
@Input() degree: number;
 // protected degree: number;

  constructor() { }
}
