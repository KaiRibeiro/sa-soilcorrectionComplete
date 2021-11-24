import { Component, OnInit, ViewChild } from '@angular/core';
import { CalciumMagnesiumCorrectionComponent } from 'src/app/core/calcium-magnesium-correction/calcium-magnesium-correction.component';
import { GeneralDataComponent } from 'src/app/core/general-data/general-data.component';
import { PhosphorusCorrectionComponent } from 'src/app/core/phosphorus-correction/phosphorus-correction.component';
import { PotassiumCorrectionComponent } from 'src/app/core/potassium-correction/potassium-correction.component';

@Component({
  selector: 'app-soil-correction',
  templateUrl: './soil-correction.component.html',
  styleUrls: ['./soil-correction.component.scss']
})
export class SoilCorrectionComponent implements OnInit {

  @ViewChild('generalDataComponent') generalDataComponent: GeneralDataComponent;
  @ViewChild('phosphorusCorrectionComponent') phosphorusCorrectionComponent: PhosphorusCorrectionComponent;
  @ViewChild('potassiumCorrectionComponent') potassiumCorrectionComponent: PotassiumCorrectionComponent;
  @ViewChild('calciumMagCorrectionComponent') calciumMagCorrectionComponent: CalciumMagnesiumCorrectionComponent;


  constructor() { }

  ngOnInit(): void {
  }

}
