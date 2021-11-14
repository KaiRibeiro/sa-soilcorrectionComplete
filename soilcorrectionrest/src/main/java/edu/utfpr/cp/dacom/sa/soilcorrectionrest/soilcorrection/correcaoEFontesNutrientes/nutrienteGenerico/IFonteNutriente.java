package edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.nutrienteGenerico;

import java.util.Set;

public interface IFonteNutriente {
    
    public double getTeorFonte();
    public Set<NutrienteAdicional> getNutrientesAdicionais();
}
