import { TestBed } from '@angular/core/testing';

import { WordslistService } from './wordslist.service';

describe('WordslistService', () => {
  let service: WordslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
