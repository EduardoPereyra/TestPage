import { SentencegeneratorService } from './service/sentencegenerator.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NumberlistService } from '../decimaltobinary/service/numberlist.service';

@Component({
  selector: 'app-sentencegenerator',
  templateUrl: './sentencegenerator.component.html',
  styleUrls: ['./sentencegenerator.component.scss']
})
export class SentencegeneratorComponent implements OnInit {

  sentences:Array<String>;

  verbs:Array<String>;
  nouns:Array<String>;
  adjectives:Array<String>;
  adverbs:Array<String>;
  preposition:Array<String>;

  constructor(private router:ActivatedRoute, private _sentenceService: SentencegeneratorService) {
    this.router.params.subscribe(()=> this.generateSentence());
  }

  ngOnInit(): void {
    this.sentences = [];
    this._sentenceService.word.subscribe(res => this.sentences = res);
    this._sentenceService.changeWord(this.sentences);
    this.nouns = ["pajaro", "reloj", "chico", "plastico", "pato", "maestro", "viejo", "profesor", "gatito", "perro"];
    this.verbs = ["pateo", "corrió", "voló", "esquivó", "cortó", "giró", "murió", "respiró", "durmió", "mató"];
    this.adjectives = ["hermoso", "vago", "profesional", "amoroso", "tonto", "duro", "blando", "caliente", "brillante", "pegajoso"];
    this.adverbs = ["lento", "elegantemente", "precisamente", "rapidamente", "tristemente", "humildemente", "orgullosamente", "espantosamente", "calmadamente", "apasionadamente"];
    this.preposition = ["abajo", "adentro", "arriba", "en", "sobre", "debajo", "cerca", "mediante", "a través de", "hacia"];
  }

  generateSentence():void {
    if(this.sentences) {
      let random:String = '';
      let rand1 = this.randomGen();
      let rand2 = this.randomGen();
      let rand3 = this.randomGen();
      let rand4 = this.randomGen();
      let rand5 = this.randomGen();
      let rand6 = this.randomGen();

      random = "El " + this.adjectives[rand1] + " " + this.nouns[rand2] + " " +
       this.adverbs[rand3] + " " + this.verbs[rand4] + " porque un " + this.nouns[rand1] + " " +
        this.adverbs[rand1] + " " + this.verbs[rand1] + " " + this.preposition[rand1] + " un " +
        this.adjectives[rand2] + " " + this.nouns[rand5] + " que, se convirtio en " + this.adjectives[rand3] + ", " +
         this.adjectives[rand4] + " " + this.nouns[rand6] + ".";

      this.sentences.pop();
      this.sentences.push(random);
      this._sentenceService.changeWord(this.sentences);
    }
  }

  randomGen():number{
    return Math.floor(Math.random() * 10);
  }
}
