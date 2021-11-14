package edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.fosforo;

import edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.nutrienteGenerico.Conversao;
import lombok.NonNull;

public class ConverteMgDm3EmKgHa implements Conversao<Double, Double> {

    @Override
    public Double converte(@NonNull Double valor) {

        if (valor <= 0) {
            throw new IllegalArgumentException();
        }

        return valor * 2;
    }
}