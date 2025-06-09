import './commands'

import '../../support/step_definitions/general';
import '../../support/step_definitions/mentoring';

// cypress/support/e2e.ts atau cypress/support/index.ts
Cypress.on('uncaught:exception', (runnable) => {
  return false;
});