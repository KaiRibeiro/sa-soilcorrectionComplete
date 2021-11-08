import { EFontesPotassio } from './../../shared/enums/FontesPotassio.enum';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-potassium-correction',
  templateUrl: './potassium-correction.component.html',
  styleUrls: ['./potassium-correction.component.scss']
})
export class PotassiumCorrectionComponent implements OnInit {

  potassiumCorrectionForm: FormGroup;
  fontePotassio = EFontesPotassio;
  participacaoAtual = 0;
  results: {
    qntAplicar: any,
    custoHa: any,
  };
  dadosCorrecao: {
    participacaoDesejada: any,
    fontePotassio: any,
    custoFonte: any,
  }

  constructor(private formBuilder: FormBuilder) {
    this.potassiumCorrectionForm = this.formBuilder.group({
      participacaoDesejada: [null, Validators.required],
      fontePotassio: [null, Validators.required],
      custoFonte: [null, Validators.required],
    });
   }

  ngOnInit(): void {
    this.results = {
      qntAplicar: null,
      custoHa: null,
    }
    this.participacaoAtual = 111;
  }

  corrigir(): void {
    if(this.potassiumCorrectionForm.errors)
      return;
    this.dadosCorrecao = {
      participacaoDesejada: this.potassiumCorrectionForm.controls['participacaoDesejada'].value,
      fontePotassio: this.potassiumCorrectionForm.controls['fontePotassio'].value,
      custoFonte: this.potassiumCorrectionForm.controls['custoFonte'].value,
    };
    this.results = {
      custoHa: 111,
      qntAplicar: 111,
    }
  }

}
