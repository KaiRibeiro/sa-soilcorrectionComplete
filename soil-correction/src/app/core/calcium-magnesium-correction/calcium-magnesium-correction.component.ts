import { IResultadoCalcioMagnesio } from './../../shared/interfaces/ResultadoCorrecaoCalcioMagnesio.interface';
import { IDadosCorrecaoCalcioMagnesio } from './../../shared/interfaces/DadosCorrecaoCalcioMagnesio.interface';
import { EFontesCorretivo } from '../../shared/enums/FontesCorretivo.enum';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-calcium-magnesium-correction',
  templateUrl: './calcium-magnesium-correction.component.html',
  styleUrls: ['./calcium-magnesium-correction.component.scss']
})
export class CalciumMagnesiumCorrectionComponent implements OnInit {

  @Input() calcio: number;
  @Input() magnesio: number;
  @Input() ctcCmol: number;
  @Input() vAtual: number;

  calciumMagnesiumCorrectionForm: FormGroup;
  participacaoAtualCalcio = 0;
  participacaoAtualMagnesio = 0;
  fontesCorretivo = EFontesCorretivo;
  results: IResultadoCalcioMagnesio;
  dadosCorrecao: IDadosCorrecaoCalcioMagnesio;
  vApos = 0;
  nutrienteA = '';
  nutrienteB = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
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
      qntAplicar: 0,
      custoHa: 0,
    };
    this.participacaoAtualCalcio = Number(
      ((this.calcio * 100) / this.ctcCmol).toFixed(2));
    this.participacaoAtualMagnesio = Number(
      ((this.magnesio * 100) / this.ctcCmol).toFixed(2));
  }

  corrigir(): void {
    this.results = {
      qntAplicar: 0,
      custoHa: 0,
    };
    if (this.results.nutrientesAdicionais) {
      this.results.nutrientesAdicionais = [];
    }
    if (!this.calciumMagnesiumCorrectionForm.valid) return;
    this.dadosCorrecao = {
      participacaoAtual: ((this.calcio * 100) / this.ctcCmol)/100,
      participacaoDesejada:
        this.calciumMagnesiumCorrectionForm.controls['participacaoDesejadaCalcio'].value/100,
      fonteCalcioMagnesio:
        this.calciumMagnesiumCorrectionForm.controls['fonteCorretivo'].value,
      custoFonte: this.calciumMagnesiumCorrectionForm.controls['custoFonte'].value,
      prnt: this.calciumMagnesiumCorrectionForm.controls['prnt'].value/100,
      teorCao: this.calciumMagnesiumCorrectionForm.controls['teorCAO'].value,
      teorSolo: this.calcio,
    };
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json; charset=UTF-8');
    this.http
      .post<IResultadoCalcioMagnesio>(
        'http://localhost:8080/correcaocalciomagnesio',
        this.dadosCorrecao,
        { headers: headers }
      )
      .subscribe({
        next: (data) => {
          this.results = data;
          this.results.custoHa = Number(this.results.custoHa.toFixed(2));
          this.results.qntAplicar = Number(this.results.qntAplicar.toFixed(2));
          if (this.results.nutrientesAdicionais)
          switch (this.dadosCorrecao.fonteCalcioMagnesio) {
            case this.fontesCorretivo.Gesso_Agricola:
              this.results.nutrientesAdicionais[0].correcaoAdicional = Number((this.results.nutrientesAdicionais[0].correcaoAdicional).toFixed(2));
              this.nutrienteB = 'Enxofre';
              break;
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

}
