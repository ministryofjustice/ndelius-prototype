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

  describe('Pre-Sentence Report Addendum journey', () => {

    /* Start Your Report */

    beforeEach(() => {
      configureSuite();
    });

    describe('Report Selection', () => {

      it('should display the Report Selection page', () => {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Prototype');
      });

      it('should allow the user to select the Short Format Pre-Sentence Report journey', () => {
        page.getElementById('psr-addendum').click();
      });

    });

    describe('Start report', () => {

      it('should display the Start Report page', () => {
        expect(page.getHeadingText()).toEqual('Pre-sentence Report Addendum');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* Offender Details */

    describe('Offender details', () => {

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Offender details');
      });

      it('should display the Offender Details', () => {
        expect(page.getElementByIdValue('name')).toEqual('Alice Smith');
        expect(page.getElementByIdValue('dateOfBirth-day')).toEqual('21');
        expect(page.getElementByIdValue('dateOfBirth-month')).toEqual('6');
        expect(page.getElementByIdValue('dateOfBirth-year')).toEqual('1976');
        expect(page.getElementByIdValue('address')).toEqual('1 Albert Square, Manchester, Greater Manchester, M60 2LA');
        expect(page.getElementByIdValue('phone')).toEqual('07777 777 777');
        expect(page.getElementByIdValue('pnc')).toEqual('B98793');
        expect(page.getElementByIdValue('crn')).toEqual('X087946');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* Sentencing Court Details */

    describe('Sentencing court details', () => {

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Sentencing court details');
      });

      it('should display pre-populated Sentencing court details', () => {
        expect(page.getElementByIdValue('court')).toEqual('Manchester and Salford Magistrates Court');
        expect(page.getElementByIdValue('localJusticeArea')).toEqual('21: Greater Manchester');
        expect(page.getElementByIdValue('hearingDate')).toEqual(page.getDateToday());
      });

      it('should allow changes to Sentencing court details', () => {
        page.testTextEntry('court', 'Sheffield Magistrates Court');
        expect(page.changeSelectOption('localJusticeArea', 'South Yorkshire')).toEqual('45: South Yorkshire');
        page.testTextEntry('hearingDate', '20/01/2017');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* Addendum detail */

    describe('Addendum detail', () => {

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Addendum detail');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the entry of the addendum detail', () => {
        page.testTextEntry('detail', 'Some addendum detail');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* Signature */

    describe('Signature', () => {

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Sign your addendum');
      });

      it('should display pre-populated Report Date', () => {
        expect(page.getElementByIdValue('reportDate')).toEqual(page.getDateToday());
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the completion of the form', () => {
        page.testTextEntry('reportAuthor', 'Arthur Author');
        page.testTextEntry('office', 'Sheffield Digital Studio');
        page.testTextEntry('phone', '0114 234 4343');
        page.testTextEntry('counterSignature', 'Counter signatory');
        page.testTextEntry('reportDate', '20/01/2017');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* Report Complete */

    describe('Report complete', () => {

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Addendum saved');
      });

    });

  });

  /* Save Draft Report */

  describe('Addendum - Save draft report', () => {

    beforeEach(() => {
      configureSuite();
    });

    describe('Report Selection', () => {

      it('should display the Report Selection page', () => {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Prototype');
      });

      it('should allow the user to select the Pre-Sentence Addendum journey', () => {
        page.getElementById('psr-addendum').click();
      });

    });

    it('should display the Start Report page', () => {
      expect(page.getHeadingText()).toEqual('Pre-sentence Report Addendum');
    });

    it('should continue to the Offender Details page', () => {
      page.getNextButton().click();
      expect(page.getHeadingText()).toEqual('Offender details');
    });

    it('should allow the report to be saved as a draft', () => {
      page.getCloseButton().click();
      expect(page.getHeadingText()).toEqual('Draft addendum saved');
    });

  });

  /* Give Feedback */

  describe('Addendum - Give feedback', () => {

    beforeEach(() => {
      configureSuite();
    });

    describe('Report Selection', () => {

      it('should display the Report Selection page', () => {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Prototype');
      });

      it('should allow the user to select the Pre-Sentence Addendum journey', () => {
        page.getElementById('psr-addendum').click();
      });

    });

    it('should display the Start Report page', () => {
      expect(page.getHeadingText()).toEqual('Pre-sentence Report Addendum');
    });

    it('should navigate to the Feedback page', () => {
      page.getElementById('feedback-link').click();
      expect(page.getHeadingText()).toEqual('Give feedback');
    });

    it('should allow the user to rate the service and enter feedback', () => {
      page.clickRadios('rating', 5);
      page.testTextEntry('feedback', 'Some valuable feedback');
    });

    it('should submit feedback and return to the Choose your report page', () => {
      expect(page.getElementById('feedback_error').isDisplayed()).toBeFalsy();
      page.getNextButton().click();
      expect(page.getHeadingText()).toEqual('Pre-sentence Report Addendum');

      // Clear local storage
      page.clearStorage();
    });

  });

});
