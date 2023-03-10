import e2eCommands from "./commands";
import componentCommands from "./component";

Cypress.Commands.add('getByData', e2eCommands.getByData);
Cypress.Commands.add('mount', componentCommands.mount)