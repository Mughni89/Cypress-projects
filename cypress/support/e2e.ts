import './commands'

import '../../support/step_definitions/general.ts';
import '../../support/step_definitions/mentoring.ts';

// cypress/support/e2e.ts atau cypress/support/index.ts
Cypress.on('uncaught:exception', (runnable) => {
  return false;
});