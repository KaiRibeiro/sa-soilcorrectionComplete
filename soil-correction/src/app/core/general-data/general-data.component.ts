import { IResultadoEquilibrioCorrecao } from './../../shared/interfaces/ResultadoEquilibrioCorrecao.interface';
import { IDadosGerais } from './../../shared/interfaces/DadosGerais.interface';
import { INutrientes } from '../../shared/interfaces/Nutrientes.interface';
import { ETipoSolo } from './../../shared/enums/TipoSolo.enum';
import { ETexturaSoloMedia } from './../../shared/enums/TexturaSoloMedia.enum';
import { ETexturaSoloArgiloso } from './../../shared/enums/TexturaSoloArgiloso.enum';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.scss'],
})
export class GeneralDataComponent implements OnInit {
  generalForm: FormGroup;
  IdeaisSoloArgiloso = ETexturaSoloArgiloso;
  IdeaisSoloMedia = ETexturaSoloMedia;
  tiposSolo = ETipoSolo;
  nutrientes: INutrientes;
  dadosGerais: IDadosGerais;
  results: IResultadoEquilibrioCorrecao;

  @ViewChild('resultados') resultados: ElementRef;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.generalForm = this.formBuilder.group({
      produtor: [null, Validators.required],
      data: [null, Validators.required],
      municipio: [null, Validators.required],
      lote: [null, Validators.required],
      areaTotal: [null, Validators.required],
      talhao: [null, Validators.required],
      areaTalhao: [null, Validators.required],
      matriculaLote: [null, Validators.required],
      texturaSolo: [null, Validators.required],
      sistemaCultivo: [null, Validators.required],
      responsavelTecnico: [null, Validators.required],
      profundidadeAmostra: [null, Validators.required],
      resultNum: [null, Validators.required],
      fosforo: [null, Validators.required],
      potassio: [null, Validators.required],
      calcio: [null, Validators.required],
      magnesio: [null, Validators.required],
      enxofre: [null, Validators.required],
      aluminio: [null, Validators.required],
      hal: [null, Validators.required],
      mo: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.results = {
      ctccmol: 0,
      scmol: 0,
      carbono: 0,
      mo: 0,
      vatual: 0,
    }
  }

  salvar(): void {
    if(this.generalForm.errors)
      return;
    this.nutrientes = {
      fosforo: this.generalForm.controls['fosforo'].value,
      potassio: this.generalForm.controls['potassio'].value,
      calcio: this.generalForm.controls['calcio'].value,
      magnesio: this.generalForm.controls['magnesio'].value,
      enxofre: this.generalForm.controls['enxofre'].value,
      aluminio: this.generalForm.controls['aluminio'].value,
      aluminioHidrogenio: this.generalForm.controls['hal'].value,
      mo: this.generalForm.controls['mo'].value,
    };

    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json; charset=UTF-8')
    this.http.post<IResultadoEquilibrioCorrecao>('http://localhost:8080/equilibriocorrecao', this.nutrientes, {headers: headers}).subscribe({
      next: data => {
        this.results = data;
      },
      error: error => {
        console.log(error);
      }
    });


    this.resultados.nativeElement.scrollIntoView();
  }
}
