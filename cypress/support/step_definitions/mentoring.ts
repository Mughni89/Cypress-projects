import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MentoringPage } from '../pages/dealls/mentoringPage';
import type { MenteeData } from '../typeData/registerType';

export let dataMentee: MenteeData;

const mentor = new MentoringPage();

When('User search and select a mentor', () => {
  mentor.searchMentor('Fuyunghai');
  mentor.selectMentor();
});

When('User requesting for session', () => {
  cy.fixture('DataRegMentee.json').then((dataMentee: MenteeData) => {
    mentor.clickRequestingSession();
    mentor.topicSelection('Personal Development');
    mentor.proposeSchedule();
    mentor.completeProfile(dataMentee.emailMentee);
    mentor.passwordCreation('P@ssword');
  });
});

Then('User success request mentoring session', () => {
  mentor.sessionRequestedSuccessfully();
});