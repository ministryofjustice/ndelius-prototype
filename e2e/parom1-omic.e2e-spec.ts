import { PrototypePage } from './app.po';
import { browser } from 'protractor';

describe('New Probation Services - Rapid Prototype', () => {

  let page: PrototypePage;

  /**
   * Setup the page and mock the jQuery call we need to use.
   */
  function configureSuite() {
    page = new PrototypePage();
    // We're using jQuery to pull in application.js in order to run the jQuery code we use in the MVP so mock it.
    browser.executeScript('$ = { getScript: function() { return true; } }');
  }

  describe('Parole Report (PAROM1-OMIC) journey', () => {

    /* Start Your Report */

    beforeEach(() => {
      configureSuite();
    });

    describe('Report Selection', () => {

      it('should display the correct page', () => {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Demonstration');
      });

      it('should allow the user to select the Parole Report (PAROM1-OMIC) journey', () => {
        page.getElementById('parom1-omic').click();
      });

    });

    /* Start report */

    describe('Start report', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Start a Parole report PAROM1-OMIC');
      });

      it('should include COM and POM journey options', () => {
        expect(page.getElementById('com-journey').isPresent()).toBeTruthy();
        expect(page.getElementById('pom-journey').isPresent()).toBeTruthy();
      });

      it('should allow the user to choose the COM journey', () => {
        page.getElementById('com-journey').click();
      });

      it('should allow the user to start the journey', () => {
        page.getElementById('startButton').click();
      });

    });

    /* Prisoner details */

    describe('Prisoner details', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Prisoner details');
      });

      it('should display pre-populated details', () => {
        expect(page.getElementByIdValue('prison')).toEqual('23: Doncaster');
        expect(page.getElementByIdValue('name')).toEqual('Alan Smith');
        expect(page.getElementByIdValue('prisonNumber')).toEqual('P98793-123');
        expect(page.getElementByIdValue('nomisNumber')).toEqual('N2124214-3423');
      });

      it('should allow the user to edit the pre-populated data', () => {
        expect(page.changeSelectOption('prison', 'Leeds')).toEqual('62: Leeds');
        expect(page.setElementByIdValue('name', 'Billy Bunter')).toEqual('Billy Bunter');
        expect(page.setElementByIdValue('prisonNumber', 'P123456789')).toEqual('P123456789');
        expect(page.setElementByIdValue('nomisNumber', 'N123456789')).toEqual('N123456789');
      });

      it('should allow the user to select the prisoner\'s category', () => {
        page.clickRadios('category', 4);
      });

      it('should allow the user to enter the prisoner\'s sentence', () => {
        expect(page.setElementByIdValue('sentence', 'Death by monkeys')).toEqual('Death by monkeys');
      });

      it('should allow the user to select the sentence type as "Determinate" and enter the release/parole date', () => {
        page.getElementById('sentenceType-radio-0').click();
        expect(page.setElementByIdValue('determinateReleaseDate-day', '23')).toEqual('23');
        expect(page.setElementByIdValue('determinateReleaseDate-month', '05')).toEqual('05');
        expect(page.setElementByIdValue('determinateReleaseDate-year', '2021')).toEqual('2021');
      });

      it('should allow the user to select the sentence type as "Indeterminate", enter tariff length and expiry date', () => {
        page.getElementById('sentenceType-radio-1').click();
        expect(page.setElementByIdValue('tariffLength', 'Infinite')).toEqual('Infinite');
        expect(page.setElementByIdValue('tariffExpiryDate-day', '23')).toEqual('23');
        expect(page.setElementByIdValue('tariffExpiryDate-month', '05')).toEqual('05');
        expect(page.setElementByIdValue('tariffExpiryDate-year', '2021')).toEqual('2021');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* Prisoner knowledge */

    describe('Prisoner knowledge', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Prisoner knowledge');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementById('prisonerContact_error').isDisplayed()).toBeTruthy();
        expect(page.getElementById('prisonerFamilyContact_error').isDisplayed()).toBeTruthy();
        expect(page.getElementById('prisonerStaffContact_error').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        expect(page.setElementByIdValue('prisonerContact', 'Some prisoner contact information'))
          .toEqual('Some prisoner contact information');
        expect(page.setElementByIdValue('prisonerFamilyContact', 'Some prisoner family contact information'))
          .toEqual('Some prisoner family contact information');
        expect(page.setElementByIdValue('prisonerStaffContact', 'Some prisoner staff contact information'))
          .toEqual('Some prisoner staff contact information');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* Prisoner knowledge */

    describe('Previous risk assessment', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Previous risk assessment');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementById('previousDate_error').isDisplayed()).toBeTruthy();
        expect(page.getElementById('riskPublic_error').isDisplayed()).toBeTruthy();
        expect(page.getElementById('riskKnownAdult_error').isDisplayed()).toBeTruthy();
        expect(page.getElementById('riskChildren_error').isDisplayed()).toBeTruthy();
        expect(page.getElementById('riskPrisoners_error').isDisplayed()).toBeTruthy();
        expect(page.getElementById('riskStaff_error').isDisplayed()).toBeTruthy();
        expect(page.getElementById('attitude_error').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        expect(page.setElementByIdValue('previousDate-month', '05'))
          .toEqual('05');
        expect(page.setElementByIdValue('previousDate-year', '2021'))
          .toEqual('2021');

        page.clickRadios('riskPublic', 4);

        expect(page.setElementByIdValue('attitude', 'Some prisoner attitude information'))
          .toEqual('Some prisoner attitude information');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

  });

});
