import './commands'

import './step_definitions/general';
import './step_definitions/mentoring';

// cypress/support/e2e.ts atau cypress/support/index.ts
Cypress.on('uncaught:exception', (runnable) => {
  return false;
});