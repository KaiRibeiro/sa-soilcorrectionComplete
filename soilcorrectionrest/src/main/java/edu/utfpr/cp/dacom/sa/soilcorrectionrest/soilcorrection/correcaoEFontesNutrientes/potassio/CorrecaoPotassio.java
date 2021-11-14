package edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.potassio;

import edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.nutrienteGenerico.ICorrecaoNutriente;
import edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.nutrienteGenerico.ICorrecaoNutrienteQuantidadeAplicar;

public class CorrecaoPotassio 
        implements 
            ICorrecaoNutriente<FontePotassio>,
            ICorrecaoNutrienteQuantidadeAplicar<FontePotassio> {

    public double calculaNecessidadeAdicionarCMolcDm3 (
        double teorSolo,
        double participacaoCTCExistente,
        double participacaoCTCDesejada) {

            if (teorSolo <= 0) {
                throw new IllegalArgumentException();
            }

            if (participacaoCTCExistente <= 0) {
                throw new IllegalArgumentException();
            }

            if (participacaoCTCDesejada <= 0) {
                throw new IllegalArgumentException();
            }

            return (teorSolo 
                    * participacaoCTCDesejada 
                    / participacaoCTCExistente) 
                    - teorSolo;
    }

}
