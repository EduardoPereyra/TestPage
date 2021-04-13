import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringreverserComponent } from './stringreverser.component';

describe('StringreverserComponent', () => {
  let component: StringreverserComponent;
  let fixture: ComponentFixture<StringreverserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringreverserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringreverserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
