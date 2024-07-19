import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollHandlerService {

  scroll$ = new BehaviorSubject({
    inPercentage: 0,
    inPixels: 0,
    inNumberOfScreens: 0
  })
}
