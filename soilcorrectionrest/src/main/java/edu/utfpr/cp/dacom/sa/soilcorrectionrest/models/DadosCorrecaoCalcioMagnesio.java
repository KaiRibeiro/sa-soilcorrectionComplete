package edu.utfpr.cp.dacom.sa.soilcorrectionrest.models;

import edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.calcioMagnesio.FonteCalcioMagnesio;

public class DadosCorrecaoCalcioMagnesio {
    private final double participacaoAtual;
    private final double participacaoDesejada;
    private final FonteCalcioMagnesio fonteCalcioMagnesio;
    private final double custoFonte;
    private final double prnt;
    private final double teorCao;
    private final double teorSolo;

    public DadosCorrecaoCalcioMagnesio(double participacaoAtual, double participacaoDesejada, FonteCalcioMagnesio fonteCalcioMagnesio, double custoFonte, double prnt, double teorCao, double teorSolo) {
        this.participacaoAtual = participacaoAtual;
        this.participacaoDesejada = participacaoDesejada;
        this.fonteCalcioMagnesio = fonteCalcioMagnesio;
        this.custoFonte = custoFonte;
        this.prnt = prnt;
        this.teorCao = teorCao;
        this.teorSolo = teorSolo;
    }

    public double getCustoFonte() {
        return custoFonte;
    }

    public FonteCalcioMagnesio getFonteCalcioMagnesio() {
        return fonteCalcioMagnesio;
    }

    public double getParticipacaoAtual() {
        return participacaoAtual;
    }

    public double getParticipacaoDesejada() {
        return participacaoDesejada;
    }

    public double getPrnt() {
        return prnt;
    }

    public double getTeorCao() {
        return teorCao;
    }

    public double getTeorSolo() {
        return teorSolo;
    }

}