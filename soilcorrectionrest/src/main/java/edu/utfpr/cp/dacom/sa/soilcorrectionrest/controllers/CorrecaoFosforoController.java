package edu.utfpr.cp.dacom.sa.soilcorrectionrest.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.utfpr.cp.dacom.sa.soilcorrectionrest.models.DadosCorrecaoFosforo;
import edu.utfpr.cp.dacom.sa.soilcorrectionrest.models.ResultadoCorrecaoFosforo;
import edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.fosforo.CorrecaoFosforo;
import edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.fosforo.ConverteMgDm3EmKgHa;
import edu.utfpr.cp.dacom.sa.soilcorrectionrest.soilcorrection.correcaoEFontesNutrientes.fosforo.ConverteKgHaEmP2O5;

@RestController
public class CorrecaoFosforoController {

    @CrossOrigin
    @PostMapping("/correcaofosforo")
    public ResultadoCorrecaoFosforo correcaoFosforo(@RequestBody DadosCorrecaoFosforo dadosCorrecaoFosforo) {
        CorrecaoFosforo correcaoFosforo = new CorrecaoFosforo();

        var teorFosforoAdicionarKgHa = new ConverteMgDm3EmKgHa().converte(dadosCorrecaoFosforo.getTeor());
        var teorFosforoAdicionarP2O5 = new ConverteKgHaEmP2O5().converte(teorFosforoAdicionarKgHa);
        var necessidadeFosforo = correcaoFosforo.calculaEficienciaNutriente(teorFosforoAdicionarP2O5,
                (dadosCorrecaoFosforo.getEficiencia() / 100));
        var qntAplicar = correcaoFosforo.calculaQuantidadeAplicar(necessidadeFosforo,
                dadosCorrecaoFosforo.getFonteFosforo());
        var custoHa = correcaoFosforo.calculaCusto(qntAplicar, dadosCorrecaoFosforo.getCustoFonte());
        var nutrientesAdicionais = correcaoFosforo.getNutrientesAdicionais(
            qntAplicar, 
            dadosCorrecaoFosforo.getFonteFosforo());

        return new ResultadoCorrecaoFosforo(qntAplicar, custoHa, nutrientesAdicionais);
    }
}
