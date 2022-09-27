import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbar = [
    {
      title: 'NEWBIE',
      links : [
        {
          title: 'Manual String reverser',
          url: 'stringreverser'
        },
        {
          title: 'Decimal to Binary',
          url: 'decimaltobinary'
        }
      ]
    },
    {
      title: 'BEGINNER',
      links : [
        {
          title: 'Sentence Generator',
          url: 'sentencegenerator'
        },
        {
          title: 'Matrix Multiplicator',
          url: 'matrixmultiplicator'
        }
      ]
    },
    {
      title: 'INTERMEDIATE',
      links : [
        {
          title: 'TO-DO App',
          url: 'todoapp'
        },
        {
          title: 'Quiz App',
          url: 'quizapp'
        },
        {
          title: 'Currency Converter',
          url: 'currencyconverter'
        },
        {
          title: 'Speed Typing Test',
          url: 'speedtypingtest'
        }
      ]
    },
    {
      title: 'ADVANCED',
      links : [
        {
          title: 'Real-Time Chat',
          url: 'chat'
        },
        {
          title: 'E-Commerce App',
          url: 'ecommerceapp'
        },
        {
          title: 'Chess Game',
          url: 'chessgame'
        },
        {
          title: 'Online Document Editor',
          url: 'onlinedocumenteditor'
        },
      ]
    },
    {
      title: 'EXPERT',
      links : [
        {
          title: 'Trading Bot',
          url: 'tradingbot'
        },
        {
          title: 'Netflix',
          url: 'netflix'
        },
        {
          title: 'Fake News Detector',
          url: 'fakenews'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
