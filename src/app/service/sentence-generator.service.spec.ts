import { TestBed } from '@angular/core/testing';

import { SentenceGeneratorService } from './sentence-generator.service';

describe('SentenceGeneratorService', () => {
  let service: SentenceGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentenceGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
