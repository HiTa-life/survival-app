import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {
  private degree: Subject<number>;

  constructor() {
    this.degree = new Subject();

    window.setTimeout(
      () => { window.ondeviceorientation = (event) => this.degree.next(event.gamma) }, 
      5000
      );
  }
  getDegree(): Observable<number> {
    return this.degree.asObservable();
  }
}

