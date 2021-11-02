import { IDadosGerais } from './../../shared/interfaces/DadosGerais.interface';
import { INutrientesCTC } from './../../shared/interfaces/NutrientesCTC.interface';
import { ETipoSolo } from './../../shared/enums/TipoSolo.enum';
import { ETexturaSoloMedia } from './../../shared/enums/TexturaSoloMedia.enum';
import { ETexturaSoloArgiloso } from './../../shared/enums/TexturaSoloArgiloso.enum';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  nutrientes: INutrientesCTC;
  dadosGerais: IDadosGerais;
  results: {
    scmol: any,
    ctccmol: any,
    vatual: any,
  };

  @ViewChild('resultados') resultados: ElementRef;

  constructor(private formBuilder: FormBuilder) {
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
    });
  }

  ngOnInit(): void {
    this.results = {
      scmol: null,
      ctccmol: null,
      vatual: null,
    }
  }

  salvar(): void {
    if(this.generalForm.errors)
      return;
    this.dadosGerais = {
      areaTalhao: this.generalForm.controls['areaTalhao'].value,
      areaTotal: this.generalForm.controls['areaTotal'].value,
      data: this.generalForm.controls['data'].value,
      lote: this.generalForm.controls['lote'].value,
      matriculaLote: this.generalForm.controls['matriculaLote'].value,
      municipio: this.generalForm.controls['municipio'].value,
      produtor: this.generalForm.controls['produtor'].value,
      profundidadeAmostra: this.generalForm.controls['profundidadeAmostra'].value,
      responsavelTecnico: this.generalForm.controls['responsavelTecnico'].value,
      resultNum: this.generalForm.controls['resultNum'].value,
      sistemaCultivo: this.generalForm.controls['sistemaCultivo'].value,
      talhao: this.generalForm.controls['talhao'].value,
      texturaSolo: this.generalForm.controls['texturaSolo'].value,
    };
    this.nutrientes = {
      aluminio: this.generalForm.controls['aluminio'].value,
      aluminioHidrogenio: this.generalForm.controls['hal'].value,
      calcio: this.generalForm.controls['calcio'].value,
      enxofre: this.generalForm.controls['enxofre'].value,
      fosforo: this.generalForm.controls['fosforo'].value,
      magnesio: this.generalForm.controls['magnesio'].value,
      potassio: this.generalForm.controls['potassio'].value,
    };
    this.results = {
      scmol: 111,
      ctccmol: 111,
      vatual: 111,
    }
    this.resultados.nativeElement.scrollIntoView();
  }
}
