/// <reference types="Cypress" />

describe("Página Correção/Recuperação de Fósforo", () => {
  it("Visita a página inicial, clica em Correção de Solo e clica na aba Correção/Recuperação de Fósforo", () => {
    cy.visit("/");
    cy.contains("Correção de Solo").click();
    cy.contains("Correção/Recuperação de Fósforo").click();
    cy.contains("Essa correção de FÓSFORO, fornecerá também (kg/ha):").should(
      "exist"
    );
  });
});

describe("Teste Correção Fósforo", () => {
  it("Visita a página inicial clica em correção de solo clica na aba Correção/Recuperação de Fósforo, preenche os dados e valida: Quantidade a aplicar, custo e fornecimento", () => {
    cy.visit("/");
    cy.contains("Correção de Solo").click();
    cy.contains("Correção/Recuperação de Fósforo").click();
    cy.get(".teor").type(200);
    cy.get("mat-select[formControlName=fonteFosforo]")
      .click()
      .get("mat-option")
      .contains("MAP")
      .click()
    cy.get(".custoFonte").type(200)
    cy.get(".eficiencia").type(75)
    cy.get(".btnSalvar").click()
    cy.get(".qntAplicar").should('have.value', '111')
    cy.get(".custoHa").should('have.value', '111')
    cy.get(".nutrienteA").should('contain', 'Enxofre')
    cy.get(".nutrienteB").should('contain', 'Cálcio')
    cy.get(".qntNutrienteA").should('have.value', '111')
    cy.get(".qntNutrienteB").should('have.value', '111')
  });
});
