import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberlistService {

  private numbers = new BehaviorSubject<any>([]);
  word = this.numbers.asObservable();

  constructor() { }

  changeWord(number):void {
    this.numbers.next(number)
  }
}
