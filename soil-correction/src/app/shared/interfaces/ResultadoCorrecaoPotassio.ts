import { INutrienteAdicional } from "./NutrienteAdicional.interface";

export interface IResultadoCorrecaoPotassio {
  qntAplicar: number;
  custoHa: number;
  nutrientesAdicionais?: INutrienteAdicional[];
}
