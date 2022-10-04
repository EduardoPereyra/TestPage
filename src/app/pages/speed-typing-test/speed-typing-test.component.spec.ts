import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedTypingTestComponent } from './speed-typing-test.component';

describe('SpeedTypingTestComponent', () => {
  let component: SpeedTypingTestComponent;
  let fixture: ComponentFixture<SpeedTypingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedTypingTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedTypingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
