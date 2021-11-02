import { ETipoSolo } from './../enums/TipoSolo.enum';
export interface IDadosGerais {
  produtor: string,
  data: Date,
  municipio: string,
  lote: string,
  areaTotal: string,
  talhao: string,
  areaTalhao: string,
  matriculaLote: string,
  texturaSolo: ETipoSolo,
  sistemaCultivo: string,
  responsavelTecnico: string,
  profundidadeAmostra: string,
  resultNum: string,
}
