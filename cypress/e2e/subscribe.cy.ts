/// <reference types="cypress" />

describe('Newsletter Subscribe Form', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
      .wait(50);
  })

  it('allows users to subscribe to email list', () => {
    cy.getByData("email-input")
      .should('exist')
      .type('tom@aol.com');

    cy.getByData("submit-button")
      .should('exist')
      .click()

    cy.getByData("success-message")
      .should('exist')
      .contains('tom@aol.com')
  })

  it('does NOT allow an invalid email adress', () => {
    cy.getByData("email-input")
      .should('exist')
      .type('tom');

    cy.getByData("submit-button")
      .should('exist')
      .click()

    cy.getByData("success-message")
      .should('not.exist')
  })
})