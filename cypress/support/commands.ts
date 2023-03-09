/// <reference types="cypress" />
export {}

const getByData = (selector: string) => {
  return cy.get(`[data-test=${selector}]`);
} 

declare global {
  namespace Cypress {
    interface Chainable {
      getByData : typeof getByData
    }
  }
}

const Commands = { getByData };
export default Commands;