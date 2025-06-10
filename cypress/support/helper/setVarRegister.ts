import * as env from '../../../cypress.env.json';
import type { MenteeData } from '../typeData/registerType';

const { domainEmail } = env;

function getUniqueNumber(n: number) {
  return new Date().getTime().toString().substring(n);
}

function getUserMail() {
  return 'mentee' + getUniqueNumber(7);
}

const emailMentee = `${getUserMail()}@${domainEmail}`;

let menteeData: MenteeData = {
    emailMentee
};
  
export function createVarEmail() {
  cy.writeFile('./cypress/fixtures/DataRegMentee.json', menteeData);
};