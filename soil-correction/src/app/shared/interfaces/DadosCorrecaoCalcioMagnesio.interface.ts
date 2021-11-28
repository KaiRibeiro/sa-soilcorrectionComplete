import { EFontesCorretivo } from './../enums/FontesCorretivo.enum';
export interface IDadosCorrecaoCalcioMagnesio {
  participacaoAtual: number;
  participacaoDesejada: number;
  fonteCalcioMagnesio: EFontesCorretivo;
  custoFonte: number;
  prnt: number;
  teorCao: number;
  teorSolo: number;
}
