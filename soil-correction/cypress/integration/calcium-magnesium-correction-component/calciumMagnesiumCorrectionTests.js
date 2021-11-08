/// <reference types="Cypress" />

describe("Página Correção/Recuperação de Cálcio e Magnésio", () => {
  it("Visita a página inicial, clica em Correção de Solo e clica na aba Correção/Recuperação de Cálcio e Magnésio", () => {
    cy.visit("/");
    cy.contains("Correção de Solo").click();
    cy.contains("Correção/Recuperação de Cálcio e Magnésio").click();
    cy.contains("% de participação do CÁLCIO na CTC, desejada:").should(
      "exist"
    );
  });
});

describe("Teste Cálcio e Magnésio", () => {
  it("Visita a página inicial clica em correção de solo clica na aba Correção/Recuperação de Cálcio e Magnésio, preenche os dados e valida: Quantidade a aplicar, custo, V%", () => {
    cy.visit("/");
    cy.contains("Correção de Solo").click();
    cy.contains("Correção/Recuperação de Cálcio e Magnésio").click();
    cy.get(".participacaoAtualCalcio").should('have.value', '111');
    cy.get(".participacaoAtualMagnesio").should('have.value', '111');
    cy.get(".vAtual").should('have.value', '111');
    cy.get(".participacaoDesejadaCalcio").type(20)
    cy.get("mat-select[formControlName=fonteCorretivo]")
      .click()
      .get("mat-option")
      .contains("Gesso Agrícola")
      .click()
    cy.get(".custoFonte").type(200)
    cy.get(".prnt").type(20)
    cy.get(".teorCAO").type(20)
    cy.get(".btnSalvar").click()
    cy.get(".qntAplicar").should('have.value', '111')
    cy.get(".custoHa").should('have.value', '111')
    cy.get(".vApos").should('have.value', '111')
    cy.get(".calcioApos").should('have.value', '111')
    cy.get(".magnesioApos").should('have.value', '111')
  });
});
