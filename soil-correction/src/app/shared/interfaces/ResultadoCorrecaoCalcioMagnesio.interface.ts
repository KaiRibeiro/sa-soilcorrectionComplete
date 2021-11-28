import { INutrienteAdicional } from "./NutrienteAdicional.interface";

export interface IResultadoCalcioMagnesio {
  qntAplicar: number;
  custoHa: number;
  nutrientesAdicionais?: INutrienteAdicional[];
}
