package edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.nutrienteGenerico;

public interface Conversao<T, R> {

    public R converte(T valor);
}
