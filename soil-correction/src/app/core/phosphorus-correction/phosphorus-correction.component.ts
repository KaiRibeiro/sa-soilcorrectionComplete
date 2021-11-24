import { IDadosCorrecaoFosforo } from './../../shared/interfaces/DadosCorrecaoFosforo.interface';
import { IResultadoCorrecaoFosforo } from './../../shared/interfaces/ResultadoCorrecaoFosforo';
import { EFontesFosforo } from './../../shared/enums/FontesFosforo.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-phosphorus-correction',
  templateUrl: './phosphorus-correction.component.html',
  styleUrls: ['./phosphorus-correction.component.scss'],
})
export class PhosphorusCorrectionComponent implements OnInit {

  @Input() fosforo: number;

  phosphorusCorrectionForm: FormGroup;
  fonteFosforo = EFontesFosforo;
  results: IResultadoCorrecaoFosforo;
  dadosCorrecao: IDadosCorrecaoFosforo;
  nutrienteA = '';
  nutrienteB = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.phosphorusCorrectionForm = this.formBuilder.group({
      teor: [null, Validators.required],
      fonteFosforo: [null, Validators.required],
      custoFonte: [null, Validators.required],
      eficiencia: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.results = {
      qntAplicar: 0,
      custoHa: 0,
    };
  }

  corrigir(): void {
    this.results = {
      qntAplicar: 0,
      custoHa: 0,
    };
    if (this.results.nutrientesAdicionais) {
      this.results.nutrientesAdicionais = [];
    }
    if (!this.phosphorusCorrectionForm.valid) return;
    this.dadosCorrecao = {
      teor: this.phosphorusCorrectionForm.controls['teor'].value,
      fonteFosforo:
        this.phosphorusCorrectionForm.controls['fonteFosforo'].value,
      custoFonte: this.phosphorusCorrectionForm.controls['custoFonte'].value,
      eficiencia: this.phosphorusCorrectionForm.controls['eficiencia'].value,
    };

    if(this.fosforo >= this.dadosCorrecao.teor) {
      this.dadosCorrecao.teor = 0;
    } else {
      this.dadosCorrecao.teor = this.dadosCorrecao.teor - this.fosforo;
    }

    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json; charset=UTF-8');
    this.http
      .post<IResultadoCorrecaoFosforo>(
        'http://localhost:8080/correcaofosforo',
        this.dadosCorrecao,
        { headers: headers }
      )
      .subscribe({
        next: (data) => {
          this.results = data;
          this.results.custoHa = Number((this.results.custoHa).toFixed(2));
          this.results.qntAplicar = Number((this.results.qntAplicar).toFixed(2));
          if (this.results.nutrientesAdicionais)
            switch (this.dadosCorrecao.fonteFosforo) {
              case this.fonteFosforo.Superfosfato_Simples:
                this.results.nutrientesAdicionais[0].correcaoAdicional = Number((this.results.nutrientesAdicionais[0].correcaoAdicional).toFixed(2));
                this.results.nutrientesAdicionais[1].correcaoAdicional = Number((this.results.nutrientesAdicionais[1].correcaoAdicional).toFixed(2));
                this.nutrienteA = 'Cálcio';
                this.nutrienteB = 'Enxofre';
                break;
              case this.fonteFosforo.Superfosfato_Triplo:
                this.results.nutrientesAdicionais[0].correcaoAdicional = Number((this.results.nutrientesAdicionais[0].correcaoAdicional).toFixed(2));
                this.nutrienteB = 'Cálcio';
                break;
              case this.fonteFosforo.MAP:
                this.results.nutrientesAdicionais[0].correcaoAdicional = Number((this.results.nutrientesAdicionais[0].correcaoAdicional).toFixed(2));
                this.nutrienteB = 'Nitrogênio';
                break;
            }
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
