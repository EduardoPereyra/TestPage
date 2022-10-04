import { Component, OnInit } from '@angular/core';
import {SentenceGeneratorService} from '../../service/sentence-generator.service';

@Component({
  selector: 'app-speed-typing-test',
  templateUrl: './speed-typing-test.component.html',
  styleUrls: ['./speed-typing-test.component.scss']
})
export class SpeedTypingTestComponent implements OnInit {

  sentences: any[];
  language = 'english';
  typingText: string;
  correctWords: number;
  time: any;
  interval: any;
  historicalTimes: number[];

  constructor(private sentenceGeneratorService: SentenceGeneratorService) {
  }

  ngOnInit(): void {
    this.historicalTimes = [];
    this.reset();
  }

  generateSentence(): void {
    this.reset();
    const words = this.sentenceGeneratorService.generateSentence(this.language);
    words.forEach(word => {
      this.sentences.push({
        word,
        correct: false
      });
    });
  }

  toggleFlip(language: string): void {
    this.language = language;
  }

  checkTyping(): void {
    this.correctWords = 0;
    if (this.time === 0) {
      this.startTimer();
    }
    this.typingText.split(' ').forEach((word, index) => {
      if (word === this.sentences[index].word) {
        this.correctWords += 1;
        this.sentences[index].correct = true;
        if (this.correctWords === this.sentences.length) {
          this.pauseTimer();
        }
      } else {
        this.sentences[index].correct = false;
      }
    });
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.time >= 60000) {
        this.time = 60000;
        this.pauseTimer();
      } else {
        this.time += 10;
      }
    }, 10);
  }

  pauseTimer(): void {
    this.historicalTimes.push(this.time);
    clearInterval(this.interval);
  }

  reset(): void {
    this.sentences = [];
    this.typingText = '';
    this.correctWords = 0;
    this.time = 0;
  }
}
