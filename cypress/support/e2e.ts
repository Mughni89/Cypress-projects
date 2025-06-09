import './commands'

// cypress/support/e2e.ts atau cypress/support/index.ts
Cypress.on('uncaught:exception', (runnable) => {
  return false;
});