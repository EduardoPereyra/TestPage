import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentenceGeneratorService {
  sentences: Array<string> = [];

  verbs: Array<string>;
  nouns: Array<string>;
  adjectives: Array<string>;
  adverbs: Array<string>;
  preposition: Array<string>;

  constructor() {
  }

  loadWords(language): void {
    if (language === 'english') {
      this.nouns = ['bird', 'watch', 'kid', 'plastic', 'duck', 'teacher', 'old man', 'professor', 'kitty', 'dog'];
      this.verbs = ['kick', 'run', 'fly', 'dodged', 'cut', 'turn', 'died', 'breath', 'sleep', 'kill'];
      this.adjectives = ['beautiful', 'vague', 'professional', 'lover', 'silly', 'tough', 'weak', 'hot', 'brilliant', 'sticky'];
      this.adverbs = ['slow', 'stylishly', 'precisely', 'quickly', 'sadly', 'humbly', 'proudly', 'frightfully', 'calmly', 'passionately'];
      this.preposition = ['down', 'inside', 'up', 'in', 'over', 'under', 'close', 'through', 'across', 'towards'];
    } else {
      this.nouns = ['pajaro', 'reloj', 'chico', 'plastico', 'pato', 'maestro', 'viejo', 'profesor', 'gatito', 'perro'];
      this.verbs = ['pateo', 'corrió', 'voló', 'esquivó', 'cortó', 'giró', 'murió', 'respiró', 'durmió', 'mató'];
      this.adjectives = ['hermoso', 'vago', 'profesional', 'amoroso', 'tonto', 'duro', 'blando', 'caliente', 'brillante', 'pegajoso'];
      this.adverbs = ['lento', 'elegantemente', 'precisamente', 'rapidamente', 'tristemente', 'humildemente', 'orgullosamente', 'espantosamente', 'calmadamente', 'apasionadamente'];
      this.preposition = ['abajo', 'adentro', 'arriba', 'en', 'sobre', 'debajo', 'cerca', 'mediante', 'a través de', 'hacia'];
    }
  }

  generateSentence(language: string): string[] {
    this.loadWords(language);
    let random: string;
    const rand1 = this.randomGen();
    const rand2 = this.randomGen();
    const rand3 = this.randomGen();
    const rand4 = this.randomGen();
    const rand5 = this.randomGen();
    const rand6 = this.randomGen();

    if (language === 'english') {
      random = 'The ' + this.adjectives[rand1] + ' ' + this.nouns[rand2] + ' ' +
        this.adverbs[rand3] + ' ' + this.verbs[rand4] + ' because the ' + this.nouns[rand1] + ' ' +
        this.adverbs[rand1] + ' ' + this.verbs[rand1] + ' ' + this.preposition[rand1] + ' the ' +
        this.adjectives[rand2] + ' ' + this.nouns[rand5] + ' that, it converts into ' + this.adjectives[rand3] + ', ' +
        this.adjectives[rand4] + ' ' + this.nouns[rand6] + '.';
    } else {
      random = 'El ' + this.adjectives[rand1] + ' ' + this.nouns[rand2] + ' ' +
        this.adverbs[rand3] + ' ' + this.verbs[rand4] + ' porque un ' + this.nouns[rand1] + ' ' +
        this.adverbs[rand1] + ' ' + this.verbs[rand1] + ' ' + this.preposition[rand1] + ' un ' +
        this.adjectives[rand2] + ' ' + this.nouns[rand5] + ' que, se convirtio en ' + this.adjectives[rand3] + ', ' +
        this.adjectives[rand4] + ' ' + this.nouns[rand6] + '.';
    }

    this.sentences.pop();
    this.sentences.push(random);
    return this.sentences[0].split(' ');
  }

  randomGen(): number {
    return Math.floor(Math.random() * 10);
  }
}
