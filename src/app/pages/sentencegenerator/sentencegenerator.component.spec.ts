import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentencegeneratorComponent } from './sentencegenerator.component';

describe('SentencegeneratorComponent', () => {
  let component: SentencegeneratorComponent;
  let fixture: ComponentFixture<SentencegeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentencegeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentencegeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
