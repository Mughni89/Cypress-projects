import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MentoringPage } from '../pages/dealls/mentoringPage';

const mentor = new MentoringPage();

When('User search and select a mentor', () => {
  mentor.searchMentor('Fuyunghai');
  mentor.selectMentor();
});

When('User requesting for session', () => {
  mentor.clickRequestingSession();
  mentor.topicSelection('Personal Development');
  mentor.proposeSchedule();
  mentor.completeProfile();
  mentor.passwordCreation('P@ssword');
});

Then('User success request mentoring session', () => {
  mentor.sessionRequestedSuccessfully();
});