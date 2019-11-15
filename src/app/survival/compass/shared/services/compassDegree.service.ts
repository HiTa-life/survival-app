import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private degree: Subject<number>;

  constructor() {
    this.degree = new Subject();
   }
}
