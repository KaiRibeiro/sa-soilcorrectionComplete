package edu.utfpr.cp.dacom.sa.soilcorrectionrest.models;

import edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.nutrienteGenerico.NutrienteAdicional;
import java.util.Set;

public class ResultadoCorrecaoPotassio {
    private final double qntAplicar;
    private final double custoHa;
    private final Set<NutrienteAdicional> nutrientesAdicionais;

    public ResultadoCorrecaoPotassio(double qntAplicar, double custoHa, Set<NutrienteAdicional> nutrientesAdicionais) {
        this.qntAplicar = qntAplicar;
        this.custoHa = custoHa;
        this.nutrientesAdicionais = nutrientesAdicionais;
    }

    public double getCustoHa() {
        return custoHa;
    }

    public double getQntAplicar() {
        return qntAplicar;
    }

    public Set<NutrienteAdicional> getNutrientesAdicionais() {
        return nutrientesAdicionais;
    }
}
