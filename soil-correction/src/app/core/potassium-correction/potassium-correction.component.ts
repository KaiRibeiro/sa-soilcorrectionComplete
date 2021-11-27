import { IDadosCorrecaoPotassio } from './../../shared/interfaces/DadosCorrecaoPotassio.interface';
import { IResultadoCorrecaoPotassio } from './../../shared/interfaces/ResultadoCorrecaoPotassio';
import { EFontesPotassio } from './../../shared/enums/FontesPotassio.enum';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-potassium-correction',
  templateUrl: './potassium-correction.component.html',
  styleUrls: ['./potassium-correction.component.scss'],
})
export class PotassiumCorrectionComponent implements OnInit {
  @Input() potassio: number;
  @Input() ctcCmol: number;

  potassiumCorrectionForm: FormGroup;
  fontePotassio = EFontesPotassio;
  participacaoAtual = 0;
  results: IResultadoCorrecaoPotassio;
  dadosCorrecao: IDadosCorrecaoPotassio;
  nutrienteA = '';
  nutrienteB = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.potassiumCorrectionForm = this.formBuilder.group({
      participacaoDesejada: [null, Validators.required],
      fontePotassio: [null, Validators.required],
      custoFonte: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.results = {
      qntAplicar: 0,
      custoHa: 0,
    };
    this.participacaoAtual = Number(
      ((this.potassio * 100) / this.ctcCmol).toFixed(2)
    );
  }

  corrigir(): void {
    this.results = {
      qntAplicar: 0,
      custoHa: 0,
    };
    if (this.results.nutrientesAdicionais) {
      this.results.nutrientesAdicionais = [];
    }
    if (!this.potassiumCorrectionForm.valid) return;
    this.dadosCorrecao = {
      participacaoAtual: this.participacaoAtual/100,
      participacaoDesejada:
        this.potassiumCorrectionForm.controls['participacaoDesejada'].value/100,
      fontePotassio:
        this.potassiumCorrectionForm.controls['fontePotassio'].value,
      custoFonte: this.potassiumCorrectionForm.controls['custoFonte'].value,
      teorSolo: this.potassio,
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
      .post<IResultadoCorrecaoPotassio>(
        'http://localhost:8080/correcaopotassio',
        this.dadosCorrecao,
        { headers: headers }
      )
      .subscribe({
        next: (data) => {
          this.results = data;
          this.results.custoHa = Number(this.results.custoHa.toFixed(2));
          this.results.qntAplicar = Number(this.results.qntAplicar.toFixed(2));
          if (this.results.nutrientesAdicionais)
          switch (this.dadosCorrecao.fontePotassio) {
            case this.fontePotassio.Sulfato_Potassio:
              this.results.nutrientesAdicionais[0].correcaoAdicional = Number((this.results.nutrientesAdicionais[0].correcaoAdicional).toFixed(2));
              this.nutrienteB = 'Enxofre';
              break;
            case this.fontePotassio.Sulfato_Potassio_Mag:
              this.results.nutrientesAdicionais[0].correcaoAdicional = Number((this.results.nutrientesAdicionais[0].correcaoAdicional).toFixed(2));
              this.nutrienteB = 'Enxofre';
              this.nutrienteA = 'Magnésio';
              break;
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
