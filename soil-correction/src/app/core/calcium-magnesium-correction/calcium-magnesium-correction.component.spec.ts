import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalciumMagnesiumCorrectionComponent } from './calcium-magnesium-correction.component';

describe('CalciumMagnesiumCorrectionComponent', () => {
  let component: CalciumMagnesiumCorrectionComponent;
  let fixture: ComponentFixture<CalciumMagnesiumCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalciumMagnesiumCorrectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalciumMagnesiumCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
