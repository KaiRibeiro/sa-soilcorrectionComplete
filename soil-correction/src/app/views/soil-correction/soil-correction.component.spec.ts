import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilCorrectionComponent } from './soil-correction.component';

describe('SoilCorrectionComponent', () => {
  let component: SoilCorrectionComponent;
  let fixture: ComponentFixture<SoilCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoilCorrectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoilCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
