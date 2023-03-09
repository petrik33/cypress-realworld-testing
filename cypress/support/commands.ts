/// <reference types="cypress" />
import { MountReactComponentOptions, mount as reactMount } from 'cypress/react'
import { ReactNode } from 'react';

const getByData = (selector: string) => {
  return cy.get(`[data-test=${selector}]`);
}

const mount = (component: ReactNode, options?: Partial<MountReactComponentOptions> | undefined, rerenderKey?: string | undefined) => {
  return reactMount(component, options);
}

declare global {
  namespace Cypress {
    interface Chainable {
      getByData : typeof getByData;
      mount: typeof mount;
    }
  }
}

const Commands = { getByData, mount };
export default Commands;