package edu.utfpr.cp.dacom.sa.soilcorrectionrest.models;

import edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.fosforo.FonteFosforo;

public class DadosCorrecaoFosforo {
    private final double teor;
    private final FonteFosforo fonteFosforo;
    private final double custoFonte;
    private final double eficiencia;

    public DadosCorrecaoFosforo(double teor, FonteFosforo fonteFosforo, double custoFonte, double eficiencia) {
        this.teor = teor;
        this.fonteFosforo = fonteFosforo;
        this.custoFonte = custoFonte;
        this.eficiencia = eficiencia;
    }

    public double getCustoFonte() {
        return custoFonte;
    }

    public double getEficiencia() {
        return eficiencia;
    }

    public FonteFosforo getFonteFosforo() {
        return fonteFosforo;
    }

    public double getTeor() {
        return teor;
    }

}