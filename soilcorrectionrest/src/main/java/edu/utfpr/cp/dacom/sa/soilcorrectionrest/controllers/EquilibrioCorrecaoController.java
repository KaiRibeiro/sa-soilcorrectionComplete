package edu.utfpr.cp.dacom.sa.soilcorrectionrest.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.utfpr.cp.dacom.sa.soilcorrectionrest.models.Nutrientes;
import edu.utfpr.cp.dacom.sa.soilcorrectionrest.models.ResultadoEquilibrioCorrecao;
import edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.valoresIdeais.EquilibrioCorrecaoCTC;

@RestController
public class EquilibrioCorrecaoController {

    public double SCmol;
    public double CTCcmol;
    public double moPercentual;

    @CrossOrigin
    @PostMapping("/equilibriocorrecao")
    public ResultadoEquilibrioCorrecao equilibrioCorrecao(@RequestBody Nutrientes novosNutrientes) {

        EquilibrioCorrecaoCTC equilibrioCorrecaoCTC = new EquilibrioCorrecaoCTC();

        this.SCmol = equilibrioCorrecaoCTC.calculaSCmol(novosNutrientes.getPotassio(),
                novosNutrientes.getCalcio(), novosNutrientes.getMagnesio());

        this.CTCcmol = equilibrioCorrecaoCTC.calculaCTCCmol(novosNutrientes.getPotassio(),
                novosNutrientes.getCalcio(), novosNutrientes.getMagnesio(), novosNutrientes.getAluminioHidrogenio());

        this.moPercentual = equilibrioCorrecaoCTC.calculaMOPercentual(novosNutrientes.getMo());

        return new ResultadoEquilibrioCorrecao(this.SCmol, this.CTCcmol,
                equilibrioCorrecaoCTC.calculaVPercentual(this.SCmol, this.CTCcmol), this.moPercentual,
                equilibrioCorrecaoCTC.calculaCarbono(this.moPercentual));
    }
}
