export class MentoringPage {
  searchMentor(value: string) {
    cy.get('[id="searchMentor"]').click();
    cy.get('[id="searchMentor"]').type(value);
  }
  selectMentor() {
    cy.get('[class*="mt-4 grid"]').click();
  }
  clickRequestingSession() {
    cy.get('[class*="mt-3"]').contains('Ajukan Jadwal').click();
  }
  topicSelection(value: string) {
    cy.get('[id="book-session-form"]').contains(value).click();
    cy.get('[id*="request-session-btn"]').click();
  }
  proposeSchedule() {
    //Pilih Hari//
    cy.get('[class*="ProposeDateRange"]').click();
    cy.get('[class="rmdp-day "]').eq(0).click();
    cy.get('[class*="rmdp-range"]').click();
    //Pilih Jam//
    cy.get('[id="proposedTimes_0_startTime"]').type('2000');
    cy.get('[id="proposedTimes_0_endTime"]').type('2100');
    cy.get('[id*="pick-schedule"]').click();
  }
  completeProfile(value: string) {
    cy.get('[id="fullName"]').type('Jaka');
    cy.get('[id="whatsapp"]').type('628523456789');
    cy.get('[id="email"]').type(value);
    cy.get('[id="birthDate"]').type('11111991');
    cy.get('[id*="personal-information"]').click();
  }
  passwordCreation(value: string) {
    cy.get('[id="password"]').type(value);
    cy.get('[id="confirmPassword"]').type(value);
    cy.get('[class*="ant-checkbox-wrapper"]').eq(0).click();
    cy.get('[class*="ant-checkbox-wrapper"]').eq(1).click();
    cy.get('[id*="finish-request"]').click();
  }
  sessionRequestedSuccessfully() {
    cy.contains('Sesi mentoring kamu telah dikirimkan!');
  }
}