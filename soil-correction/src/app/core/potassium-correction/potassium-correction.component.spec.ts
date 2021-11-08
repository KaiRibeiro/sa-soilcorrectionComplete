import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotassiumCorrectionComponent } from './potassium-correction.component';

describe('PotassiumCorrectionComponent', () => {
  let component: PotassiumCorrectionComponent;
  let fixture: ComponentFixture<PotassiumCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotassiumCorrectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotassiumCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
