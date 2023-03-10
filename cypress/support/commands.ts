/// <reference types="cypress" />

const getByData = (selector: string) => {
  return cy.get(`[data-test=${selector}]`);
}

declare global {
  namespace Cypress {
    interface Chainable {
      getByData : typeof getByData;
    }
  }
}

const e2eCommands = { getByData };
export default e2eCommands;