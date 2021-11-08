import { EFontesCorretivo } from '../../shared/enums/FontesCorretivo.enum';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calcium-magnesium-correction',
  templateUrl: './calcium-magnesium-correction.component.html',
  styleUrls: ['./calcium-magnesium-correction.component.scss']
})
export class CalciumMagnesiumCorrectionComponent implements OnInit {

  calciumMagnesiumCorrectionForm: FormGroup;
  participacaoAtualCalcio = 0;
  participacaoAtualMagnesio = 0;
  fontesCorretivo = EFontesCorretivo;
  vAtual = 0;
  results: {
    qntAplicar: any,
    calcioApos: any,
    magnesioApos: any,
    custoHa: any,
    vApos: any,
  };
  dadosCorrecao: {
    participacaoDesejadaCalcio: any,
    fonteCorretivo: any,
    prnt: any,
    teorCAO: any,
    custoFonte: any,
  }

  constructor(private formBuilder: FormBuilder) {
    this.calciumMagnesiumCorrectionForm = this.formBuilder.group({
      participacaoDesejadaCalcio: [null, Validators.required],
      fonteCorretivo: [null, Validators.required],
      prnt: [null, Validators.required],
      teorCAO: [null, Validators.required],
      custoFonte: [null, Validators.required],
    });
   }

  ngOnInit(): void {
    this.results = {
      qntAplicar: null,
      calcioApos: null,
      magnesioApos: null,
      custoHa: null,
      vApos: null,
    };
    this.participacaoAtualCalcio = 111;
    this.participacaoAtualMagnesio = 111;
    this.vAtual = 111;
  }

  corrigir(): void {
    if(this.calciumMagnesiumCorrectionForm.errors)
      return;
    this.dadosCorrecao = {
      participacaoDesejadaCalcio: this.calciumMagnesiumCorrectionForm.controls['participacaoDesejadaCalcio'].value,
      fonteCorretivo: this.calciumMagnesiumCorrectionForm.controls['fonteCorretivo'].value,
      prnt: this.calciumMagnesiumCorrectionForm.controls['prnt'].value,
      teorCAO: this.calciumMagnesiumCorrectionForm.controls['teorCAO'].value,
      custoFonte: this.calciumMagnesiumCorrectionForm.controls['custoFonte'].value,
    };
    this.results = {
      qntAplicar: 111,
      calcioApos: 111,
      magnesioApos: 111,
      custoHa: 111,
      vApos: 111,
    }
  }

}
