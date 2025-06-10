import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import { createVarEmail } from '../helper/setVarRegister';
import type { MenteeData } from '../typeData/registerType';

let dataMentee: MenteeData;

Given('User have email to be use', () => {
    createVarEmail();
    cy.fixture('DataRegMentee').then((json) => {
    dataMentee = json;
  });
});

When('User visit dealls mentoring page', () => {
    cy.visit(Cypress.env('mentoringURL'));
  }
);