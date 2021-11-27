import { EFontesPotassio } from './../enums/FontesPotassio.enum';
export interface IDadosCorrecaoPotassio {
  participacaoAtual: number;
  participacaoDesejada: number;
  fontePotassio: EFontesPotassio;
  custoFonte: number;
  teorSolo: number;
}
