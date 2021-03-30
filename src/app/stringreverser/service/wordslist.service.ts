import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordslistService {

  private words = new BehaviorSubject<any>([{insertedword:'HOLA', reverseword:'ALOH'}]);
  word = this.words.asObservable();

  constructor() { }

  changeWord(word) {
    this.words.next(word)
  }
}
