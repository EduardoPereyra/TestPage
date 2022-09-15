import {Component, OnInit} from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import {ActivatedRoute} from '@angular/router';
import {WordslistService} from './service/wordslist.service';
import {Word} from './utils/interface/word';

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

  wordToReverse: string;
  words: Array<Word>;

  constructor(private router: ActivatedRoute, private wordsService: WordslistService) {
    this.router.params.subscribe(res => {
      this.wordToReverse = res.word;
      this.reverse();
    });
  }

  ngOnInit(): void {
    this.wordToReverse = '';
    this.words = [];
    this.wordsService.word.subscribe(res => this.words = res);
    this.wordsService.changeWord(this.words);
  }

  reverse(): void {
    if (this.wordToReverse) {
      const word: Word = {
        insertedword: this.wordToReverse.toUpperCase(),
        reverseword: this.wordToReverse.split('').reverse().join('').toUpperCase()
      };
      this.words.push(word);
      this.wordToReverse = '';
      this.wordsService.changeWord(this.words);
    }
  }

  remove(i: number): void {
    this.words.splice(i, 1);
    this.wordsService.changeWord(this.words);
  }

}
