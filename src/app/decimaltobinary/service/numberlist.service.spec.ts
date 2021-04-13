import { TestBed } from '@angular/core/testing';

import { NumberlistService } from './numberlist.service';

describe('NumberlistService', () => {
  let service: NumberlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
