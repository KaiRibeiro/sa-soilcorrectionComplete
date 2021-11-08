/// <reference types="Cypress" />

describe('Página Dados Gerais', () => {
  it('Visita a página inicial e clica em Correção de Solo', () => {
    cy.visit('/')
    cy.contains('Correção de Solo').click()
    cy.contains('Geral').should('exist')
  })
})

describe('Salvar Dados Gerais', () => {
  it('Visita a página inicial e clica em Correção de Solo preenche os dados e clica em salvar, valida S Cmol, CTC cmol, V% Atual', () => {
    cy.visit('/')
    cy.contains('Correção de Solo').click()
    cy.contains('Geral').should('exist')
    cy.get('.produtor').type('João')
    cy.get('.data').type('20/12/2021')
    cy.get('.municipio').type('Cornélio Procópio')
    cy.get('.lote').type('Lote A')
    cy.get('.areaTotal').type('200')
    cy.get('.talhao').type('Talhao A')
    cy.get('.areaTotal').type('200')
    cy.get('.areaTalhao').type('200')
    cy.get('.matriculaLote').type('A')
    cy.get('mat-select[formControlName=texturaSolo]').click().get('mat-option').contains('Argiloso').click();
    cy.contains('Argiloso +40% de argila').should('exist')
    cy.get('mat-select[formControlName=sistemaCultivo]').click().get('mat-option').contains('Plantio Direto').click();
    cy.get('.responsavelTecnico').type('João')
    cy.get('.profundidadeAmostra').type('200')
    cy.get('.resultNum').type('1')
    cy.get('.fosforo').type('200')
    cy.get('.potassio').type('200')
    cy.get('.calcio').type('200')
    cy.get('.magnesio').type('200')
    cy.get('.enxofre').type('200')
    cy.get('.aluminio').type('200')
    cy.get('.hal').type('200')
    cy.get('.btnSalvar').click()
    cy.get('.scmol').should('have.value', '111')
    cy.get('.ctccmol').should('have.value', '111')
    cy.get('.vatual').should('have.value', '111')
  })
})
