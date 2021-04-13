import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DecimalBinary } from '../utils/decimalbinary';

@Injectable({
  providedIn: 'root'
})
export class NumberlistService {

  private numbers = new BehaviorSubject<any>([]);
  word = this.numbers.asObservable();

  constructor() { }

  changeWord(number:Array<DecimalBinary>):void {
    this.numbers.next(number)
  }
}
