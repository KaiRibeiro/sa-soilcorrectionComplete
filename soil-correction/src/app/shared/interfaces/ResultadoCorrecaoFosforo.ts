import { INutrienteAdicional } from "./NutrienteAdicional.interface";

export interface IResultadoCorrecaoFosforo {
  qntAplicar: number;
  custoHa: number;
  nutrientesAdicionais?: INutrienteAdicional[];
}
