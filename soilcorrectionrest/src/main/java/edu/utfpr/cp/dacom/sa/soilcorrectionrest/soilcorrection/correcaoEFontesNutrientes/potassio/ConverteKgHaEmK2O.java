package edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.potassio;

import edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.nutrienteGenerico.Conversao;
import lombok.NonNull;

public class ConverteKgHaEmK2O 
        implements Conversao<Double, Double> {

    @Override
    public Double converte(@NonNull Double valor) {

        if (valor <= 0) {
            throw new IllegalArgumentException();
        }

        return valor * 1.2;
    }
    
}
