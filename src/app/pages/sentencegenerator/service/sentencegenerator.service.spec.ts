import { TestBed } from '@angular/core/testing';

import { SentencegeneratorService } from './sentencegenerator.service';

describe('SentencegeneratorService', () => {
  let service: SentencegeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentencegeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
