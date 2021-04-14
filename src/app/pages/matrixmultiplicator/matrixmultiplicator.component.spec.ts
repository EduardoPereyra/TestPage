import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixmultiplicatorComponent } from './matrixmultiplicator.component';

describe('MatrixmultiplicatorComponent', () => {
  let component: MatrixmultiplicatorComponent;
  let fixture: ComponentFixture<MatrixmultiplicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixmultiplicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixmultiplicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
