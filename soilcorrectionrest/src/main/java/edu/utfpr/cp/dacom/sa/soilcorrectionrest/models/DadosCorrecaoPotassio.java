package edu.utfpr.cp.dacom.sa.soilcorrectionrest.models;

import edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.potassio.FontePotassio;

public class DadosCorrecaoPotassio {
    private final double participacaoAtual;
    private final double participacaoDesejada;
    private final FontePotassio fontePotassio;
    private final double custoFonte;
    private final double teorSolo;

    public DadosCorrecaoPotassio(double participacaoAtual, double participacaoDesejada, FontePotassio fontePotassio, double custoFonte, double teorSolo) {
        this.participacaoAtual = participacaoAtual;
        this.participacaoDesejada = participacaoDesejada;
        this.fontePotassio = fontePotassio;
        this.custoFonte = custoFonte;
        this.teorSolo = teorSolo;
    }

    public double getCustoFonte() {
        return custoFonte;
    }

    public FontePotassio getFontePotassio() {
        return fontePotassio;
    }

    public double getParticipacaoDesejada() {
        return participacaoDesejada;
    }

    public double getParticipacaoAtual() {
        return participacaoAtual;
    }

    public double getTeorSolo() {
        return teorSolo;
    }

}