import { Component, OnInit, AfterContentChecked, DoCheck, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss'],
})

export class BubbleComponent implements AfterViewChecked {

  constructor() {

    
  }
  ngAfterViewChecked(){
    console.log("bubble routed");
  }
}
