/// <reference types="Cypress" />

describe("Página inicial", () => {
  it("Visita a página inicial e encontra a topbar", () => {
    cy.visit("/");
    cy.contains("Soil Correction").should("exist");
  });
});

describe("Teste navegação", () => {
  it("Visita a página inicial clica em correção de solo e volta para a home pela topbar", () => {
    cy.visit("/");
    cy.contains("Correção de Solo").click();
    cy.get("a").click();
    cy.contains("Soil Correction").should("exist");
    cy.contains("Correção de Solo").should("exist");
  });
});
