import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentencegeneratorService {
  private sentences = new BehaviorSubject<any>([]);
  word = this.sentences.asObservable();

  constructor() { }

  changeWord(sentence:Array<String>):void {
    this.sentences.next(sentence);
  }
}
