package edu.utfpr.cp.dacom.sa.soilcorrectionrest.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.utfpr.cp.dacom.sa.soilcorrectionrest.models.DadosCorrecaoCalcioMagnesio;
import edu.utfpr.cp.dacom.sa.soilcorrectionrest.models.ResultadoCorrecaoCalcioMagnesio;
import edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.calcioMagnesio.CorrecaoCalcioMagnesio;
import edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.calcioMagnesio.FonteCalcioMagnesio;

@RestController
public class CorrecaoCalcioMagnesioController {

    @CrossOrigin
    @PostMapping("/correcaocalciomagnesio")
    public ResultadoCorrecaoCalcioMagnesio equilibrioCorrecao(@RequestBody DadosCorrecaoCalcioMagnesio dadosCorrecaoCalcioMagnesio) {
        CorrecaoCalcioMagnesio correcaoCalcioMagnesio = new CorrecaoCalcioMagnesio();

        var qntAplicar = correcaoCalcioMagnesio.calculaQuantidadeAplicar(dadosCorrecaoCalcioMagnesio.getParticipacaoDesejada(), dadosCorrecaoCalcioMagnesio.getPrnt());
        var custoHa = correcaoCalcioMagnesio.calculaCusto(dadosCorrecaoCalcioMagnesio.getCustoFonte(), qntAplicar);
        var nutrientesAdicionais = correcaoCalcioMagnesio.getNutrientesAdicionais(qntAplicar, dadosCorrecaoCalcioMagnesio.getFonteCalcioMagnesio());


        return new ResultadoCorrecaoCalcioMagnesio(qntAplicar, custoHa, nutrientesAdicionais);
    }
}
