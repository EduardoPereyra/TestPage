import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimaltobinaryComponent } from './decimaltobinary.component';

describe('DecimaltobinaryComponent', () => {
  let component: DecimaltobinaryComponent;
  let fixture: ComponentFixture<DecimaltobinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecimaltobinaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimaltobinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
