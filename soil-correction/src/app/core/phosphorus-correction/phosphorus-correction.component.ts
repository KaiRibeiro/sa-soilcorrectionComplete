import { EFontesFosforo } from './../../shared/enums/FontesFosforo.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phosphorus-correction',
  templateUrl: './phosphorus-correction.component.html',
  styleUrls: ['./phosphorus-correction.component.scss'],
})
export class PhosphorusCorrectionComponent implements OnInit {
  phosphorusCorrectionForm: FormGroup;
  fonteFosforo = EFontesFosforo;
  results: {
    qntAplicar: any,
    custoHa: any,
    nutrienteA: any,
    nutrienteB: any,
    qntNutrienteA: any,
    qntNutrienteB: any,
  };
  dadosCorrecao: {
    teor: any,
    fonteFosforo: any,
    custoFonte: any,
  }

  constructor(private formBuilder: FormBuilder) {
    this.phosphorusCorrectionForm = this.formBuilder.group({
      teor: [null, Validators.required],
      fonteFosforo: [null, Validators.required],
      custoFonte: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.results = {
      qntAplicar: null,
      custoHa: null,
      nutrienteA: null,
      nutrienteB: null,
      qntNutrienteA: null,
      qntNutrienteB: null,
    }
  }

  corrigir(): void {
    if(this.phosphorusCorrectionForm.errors)
      return;
    this.dadosCorrecao = {
      teor: this.phosphorusCorrectionForm.controls['teor'].value,
      fonteFosforo: this.phosphorusCorrectionForm.controls['fonteFosforo'].value,
      custoFonte: this.phosphorusCorrectionForm.controls['custoFonte'].value,
    };
    this.results = {
      custoHa: 111,
      nutrienteA: "Enxofre",
      nutrienteB: "Cálcio",
      qntAplicar: 111,
      qntNutrienteA: 111,
      qntNutrienteB: 111,
    }
  }
}
