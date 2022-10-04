import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SentenceGeneratorService} from '../../service/sentence-generator.service';

@Component({
  selector: 'app-sentencegenerator',
  templateUrl: './sentencegenerator.component.html',
  styleUrls: ['./sentencegenerator.component.scss']
})
export class SentencegeneratorComponent implements OnInit {

  sentences: Array<string>;
  language = 'english';

  constructor(private router: ActivatedRoute, private sentenceGeneratorService: SentenceGeneratorService) {
    this.router.params.subscribe(() => this.generateSentence());
  }

  ngOnInit(): void {
    this.sentences = [];
  }

  generateSentence(): void {
    this.sentences = this.sentenceGeneratorService.generateSentence(this.language);
  }

  toggleFlip(language: string): void {
    this.language = language;
  }
}
