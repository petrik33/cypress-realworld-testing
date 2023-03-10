/// <reference types="cypress" />
import { MountReactComponentOptions, mount as reactMount } from 'cypress/react'
import { ReactNode } from 'react'
import "tailwindcss/tailwind.css"

const mount = (component: ReactNode, options?: Partial<MountReactComponentOptions> | undefined, rerenderKey?: string | undefined) => {
  return reactMount(component, options);
}

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

const componentCommands = { mount };
export default componentCommands;