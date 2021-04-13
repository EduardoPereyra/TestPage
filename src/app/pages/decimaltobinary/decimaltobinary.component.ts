import { NumberlistService } from './service/numberlist.service';
import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DecimalBinary } from './utils/decimalbinary';

@Component({
  selector: 'app-decimaltobinary',
  templateUrl: './decimaltobinary.component.html',
  styleUrls: ['./decimaltobinary.component.scss'],
  animations: [
    trigger('numbers', [
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
export class DecimaltobinaryComponent implements OnInit {

  numberToBinary:number;
  numbers:Array<DecimalBinary>;
  error:boolean;

  constructor(private router:ActivatedRoute, private _numberService: NumberlistService) {
    this.router.params.subscribe(res => {
      this.numberToBinary = res.word;
      this.toBinary();
    })
  }

  ngOnInit(): void {
    this.numberToBinary= null;
    this.numbers = [];
    this._numberService.word.subscribe(res => this.numbers = res);
    this._numberService.changeWord(this.numbers);
  }

  toBinary():void {
    if (this.numberToBinary && this.numberToBinary <= 9999999999999999999999999999999999999999999999) {
      let word:DecimalBinary = {insertednumber: this.numberToBinary,
        binarynumber:this.numberToBinary.toString(2)};
      this.numbers.push(word);
      this.numberToBinary = null;
      this._numberService.changeWord(this.numbers);
    }
  }

  remove(i:number):void {
    this.numbers.splice(i,1);
    this._numberService.changeWord(this.numbers);
  }
}
