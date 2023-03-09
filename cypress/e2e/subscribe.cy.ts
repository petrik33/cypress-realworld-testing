/// <reference types="cypress" />

describe('Newsletter Subscribe Form', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
      .wait(50)
  })

  const subscribe = (email: string) => {
    cy.getByData("email-input")
      .should('exist')
      .type(email)

    cy.getByData("submit-button")
      .should('exist')
      .click()
  }

  it('allows users to subscribe to email list', () => {
    subscribe('tom@aol.com');

    cy.getByData("success-message")
      .should('exist')
      .contains('tom@aol.com')
  })

  it('does NOT allow an invalid email adress', () => {
    subscribe('tom');

    cy.getByData("success-message")
      .should('not.exist')
  })

  it('does NOT allow subscribing twice', () => {
    const emailAlreadySubscribed = 'john@example.com';

    subscribe(emailAlreadySubscribed);

    cy.getByData("server-error-message")
      .should('exist')
  })
})