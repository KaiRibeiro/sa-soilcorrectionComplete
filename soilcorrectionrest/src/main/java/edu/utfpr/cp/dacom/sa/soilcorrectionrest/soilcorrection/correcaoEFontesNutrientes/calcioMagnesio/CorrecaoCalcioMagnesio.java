package edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.calcioMagnesio;

import edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.nutrienteGenerico.ICorrecaoNutriente;

public class CorrecaoCalcioMagnesio 
        implements ICorrecaoNutriente<FonteCalcioMagnesio> {

    public double calculaQuantidadeAplicar(
        double qtdeFonteAdicionar, 
        double prntPercent) {

        if (qtdeFonteAdicionar <= 0) {
            throw new IllegalArgumentException();
        }

        if (prntPercent <= 0) {
            throw new IllegalArgumentException();
        }

        return qtdeFonteAdicionar / prntPercent;
    }
}
