import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from "@angular/animations";
import { ActivatedRoute } from '@angular/router';
import { WordslistService } from './service/wordslist.service';

@Component({
  selector: 'app-stringreverser',
  templateUrl: './stringreverser.component.html',
  styleUrls: ['./stringreverser.component.scss'],
  animations: [
    trigger('words', [
      transition('* <=> *', [
        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))]), {optional: true})
      ])
    ])


  ]
})
export class StringreverserComponent implements OnInit {

  wordToReverse:string = '';
  words:Array<Word> = [];

  constructor(private router:ActivatedRoute, private _wordsService: WordslistService) {
    this.router.params.subscribe(res => {
      this.wordToReverse = res.word;
      this.reverse();
    })
  }

  ngOnInit(): void {
    this._wordsService.word.subscribe(res => this.words = res);
    this._wordsService.changeWord(this.words);
  }

  reverse() {
    if (this.wordToReverse) {
      let word:Word = new Word(this.wordToReverse.toUpperCase(),
            this.wordToReverse.split('').reverse().join('').toUpperCase());
      this.words.push(word);
      this.wordToReverse = '';
      this._wordsService.changeWord(this.words);
    }
  }

  remove(i:number) {
    this.words.splice(i,1);
    this._wordsService.changeWord(this.words);
  }

}

class Word {
  insertedword:string;
  reverseword:string
  constructor(insertedword: string, reverseword:string) {
    this.insertedword = insertedword;
    this.reverseword = reverseword;
  }
}

