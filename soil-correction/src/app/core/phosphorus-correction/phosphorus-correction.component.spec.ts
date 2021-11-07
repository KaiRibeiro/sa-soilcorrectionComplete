import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhosphorusCorrectionComponent } from './phosphorus-correction.component';

describe('PhosphorusCorrectionComponent', () => {
  let component: PhosphorusCorrectionComponent;
  let fixture: ComponentFixture<PhosphorusCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhosphorusCorrectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhosphorusCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
