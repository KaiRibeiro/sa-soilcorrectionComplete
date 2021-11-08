/// <reference types="Cypress" />

describe("Página Correção/Recuperação de Fósforo", () => {
  it("Visita a página inicial, clica em Correção de Solo e clica na aba Correção/Recuperação de Potássio", () => {
    cy.visit("/");
    cy.contains("Correção de Solo").click();
    cy.contains("Correção/Recuperação de Potássio").click();
    cy.contains("Participação atual do POTÁSSIO na CTC do solo:").should(
      "exist"
    );
  });
});

describe("Teste Correção Potássio", () => {
  it("Visita a página inicial clica em correção de solo clica na aba Correção/Recuperação de Potássio, preenche os dados e valida: Quantidade a aplicar, custo", () => {
    cy.visit("/");
    cy.contains("Correção de Solo").click();
    cy.contains("Correção/Recuperação de Potássio").click();
    cy.get(".participacaoAtual").should('have.value', '111');
    cy.get(".participacaoDesejada").type(2)
    cy.get("mat-select[formControlName=fontePotassio]")
      .click()
      .get("mat-option")
      .contains("Cloreto de Potassio")
      .click()
    cy.get(".custoFonte").type(200)
    cy.get(".btnSalvar").click()
    cy.get(".qntAplicar").should('have.value', '111')
    cy.get(".custoHa").should('have.value', '111')
  });
});
