import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('User visit dealls mentoring page', () => {
    cy.visit(Cypress.env('mentoringURL'));
  }
);