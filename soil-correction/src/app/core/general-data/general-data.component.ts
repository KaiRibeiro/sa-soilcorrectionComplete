import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.scss'],
})
export class GeneralDataComponent implements OnInit {
  generalForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.generalForm = this.formBuilder.group({
      produtor: [null],
      data: [null],
      municipio: [null],
      lote: [null],
      areaTotal: [null],
      talhao: [null],
      areaTalhao: [null],
      matriculaLote: [null],
      texturaSolo: [null],
      sistemaCultivo: [null],
      responsavelTecnico: [null],
      profundidadeAmostra: [null],
      resultNum: [null],
      fosforo: [null],
      potassio: [null],
      calcio: [null],
      magnesio: [null],
      enxofre: [null],
      aluminio: [null],
      hal: [null],
    });
  }

  ngOnInit(): void {}
}
