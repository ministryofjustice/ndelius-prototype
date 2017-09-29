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

  describe('Short Format Pre-Sentence Report journey', () => {

    /* Start Your Report */

    beforeEach(() => {
      configureSuite();
    });

    afterEach(() => {
      browser.waitForAngularEnabled(true);
    });

    describe('Report Selection', () => {

      it('should display the Report Selection page', () => {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Choose your report');
      });

      it('should allow the user to select the Short Format Pre-Sentence Report journey', () => {
        page.getElementById('sfpsr').click();
      });

    });

    describe('Start report', () => {

      it('should display the Start Report page', () => {
        expect(page.getHeadingText()).toEqual('Short Format Pre-sentence Report');
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
        expect(page.getElementByIdValue('name')).toEqual('Alan Smith');
        expect(page.getElementByIdValue('dob-day')).toEqual('21');
        expect(page.getElementByIdValue('dob-month')).toEqual('6');
        expect(page.getElementByIdValue('dob-year')).toEqual('1976');
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
        expect(page.getElementByIdValue('localJusticeArea')).toEqual('Greater Manchester');
        expect(page.getElementByIdValue('hearingDate')).toEqual(page.getDateToday());
      });

      it('should allow changes to Sentencing court details', () => {
        expect(page.setElementByIdValue('court', 'Some Other Court')).toEqual('Some Other Court');
        expect(page.setElementByIdValue('localJusticeArea', 'Some Other Justice Area')).toEqual('Some Other Justice Area');
        expect(page.setElementByIdValue('hearingDate', '20/01/2017')).toEqual('20/01/2017');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* Sources of Information */

    describe('Sources of information', () => {

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Sources of information');
      });

      it('should allow the selection of information sources', () => {
        page.getElementById('interviewInformationSource').click();
        page.getElementById('serviceRecordsInformationSource').click();
        page.getElementById('cpsSummaryInformationSource').click();
        page.getElementById('oasysAssessmentsInformationSource').click();
        page.getElementById('previousConvictionsInformationSource').click();
        page.getElementById('victimStatementInformationSource').click();
        page.getElementById('childrenServicesInformationSource').click();
        page.getElementById('policeInformationSource').click();
        page.getElementById('guidelinesSource').click();
        page.getElementById('otherInformationSource').click();
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* Offence Details */

    describe('Offence details', () => {

      beforeEach(() => {
        browser.waitForAngularEnabled(false);
      });

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Offence details');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        browser.waitForAngularEnabled(true);
        expect(page.getElementById('mainOffence_error').isDisplayed()).toBeTruthy();
        expect(page.getElementById('offenceSummary_error').isDisplayed()).toBeTruthy();
        expect(page.getHeadingText()).toEqual('Offence details');
      });

      it('should allow the entry of the main offence details', () => {
        expect(page.setElementByIdValue('mainOffence', 'Some Main Offence Details'))
          .toEqual('Some Main Offence Details');
      });

      it('should allow the entry of other offence details', () => {
        expect(page.setElementByIdValue('otherOffence', 'Some Other Offence Details'))
          .toEqual('Some Other Offence Details');
      });

      it('should allow the entry of the offence summary', () => {
        expect(page.setElementByIdValue('offenceSummary', 'A Summary of the offence'))
          .toEqual('A Summary of the offence');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
        browser.waitForAngularEnabled(true);
        page.getNextButton().click();
      });

    });

    /* Offence analysis */

    describe('Offence analysis', () => {

      beforeEach(() => {
        browser.waitForAngularEnabled(false);
      });

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Offence analysis');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        browser.waitForAngularEnabled(true);
        expect(page.getElementById('offenceAnalysisEntry_error').isDisplayed()).toBeTruthy();
        expect(page.getHeadingText()).toEqual('Offence analysis');
      });

      it('should allow the entry of offence analysis', () => {
        expect(page.setElementByIdValue('offenceAnalysisEntry', 'An analysis of the offence'))
          .toEqual('An analysis of the offence');
      });

      it('should allow the entry of patterns of offending', () => {
        expect(page.setElementByIdValue('patternOfOffending', 'Some patterns of offending'))
          .toEqual('Some patterns of offending');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
        browser.waitForAngularEnabled(true);
      });

    });

    /* Offender Assessment */

    describe('Offender assessment', () => {

      beforeEach(() => {
        browser.waitForAngularEnabled(false);
      });

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Offender assessment');
      });

      it('should allow the selection of Offender assessment issues', () => {
        browser.waitForAngularEnabled(true);
        page.getElementById('issueAccommodation').click();
        page.getElementById('issueEmployment').click();
        page.getElementById('issueFinance').click();
        page.getElementById('issueRelationships').click();
        page.getElementById('issueSubstance').click();
        page.getElementById('issueHealth').click();
        page.getElementById('issueBehaviour').click();
        page.getElementById('issueOther').click();
      });

      it('should allow the entry of Offender assessment details for accommodation', () => {
        expect(page.setElementByIdValue('detailsAccommodation', 'Some detail relating to accommodation'))
          .toEqual('Some detail relating to accommodation');
      });

      it('should allow the entry of Offender assessment details for employment', () => {
        expect(page.setElementByIdValue('detailsEmployment', 'Some detail relating to employment'))
          .toEqual('Some detail relating to employment');
      });

      it('should allow the entry of Offender assessment details for finance', () => {
        expect(page.setElementByIdValue('detailsFinance', 'Some detail relating to finance'))
          .toEqual('Some detail relating to finance');
      });

      it('should allow the entry of Offender assessment details for relationships', () => {
        expect(page.setElementByIdValue('detailsRelationships', 'Some detail relating to relationships'))
          .toEqual('Some detail relating to relationships');
      });

      it('should allow the entry of Offender assessment details for substance abuse', () => {
        expect(page.setElementByIdValue('detailsSubstance', 'Some detail relating to substance abuse'))
          .toEqual('Some detail relating to substance abuse');
      });

      it('should allow the entry of Offender assessment details for physical & mental health', () => {
        expect(page.setElementByIdValue('detailsHealth', 'Some detail relating to physical & mental health'))
          .toEqual('Some detail relating to physical & mental health');
      });

      it('should allow the entry of Offender assessment details for thinking & behaviour', () => {
        expect(page.setElementByIdValue('detailsBehaviour', 'Some detail relating to thinking & behaviour'))
          .toEqual('Some detail relating to thinking & behaviour');
      });

      it('should allow the entry of Offender assessment details for other issues', () => {
        expect(page.setElementByIdValue('detailsOther', 'Some detail relating to other issues'))
          .toEqual('Some detail relating to other issues');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
        browser.waitForAngularEnabled(true);
        page.getNextButton().click();
      });

    });

    /* Risk Assessment */

    describe('Risk assessment', () => {

      beforeEach(() => {
        browser.waitForAngularEnabled(false);
      });

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Risk assessment');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        browser.waitForAngularEnabled(true);
        expect(page.getElementById('likelihoodOfReOffending_error').isDisplayed()).toBeTruthy();
        expect(page.getElementById('riskOfSeriousHarm_error').isDisplayed()).toBeTruthy();
        expect(page.getHeadingText()).toEqual('Risk assessment');
      });

      it('should allow the selection of response to previous supervision', () => {
        page.getElementById('radio-1').click();
        page.getElementById('radio-2').click();
        page.getElementById('radio-4').click(); // Radio 4 hides the additional details
        page.getElementById('radio-3').click();
      });

      it('should allow the entry of the likelihood of re-offending', () => {
        expect(page.setElementByIdValue('likelihoodOfReOffending', 'Some information on the likelihood of re-offending'))
          .toEqual('Some information on the likelihood of re-offending');
      });

      it('should allow the entry of the risk of serious harm', () => {
        expect(page.setElementByIdValue('riskOfSeriousHarm', 'Some information on the risk of serious harm'))
          .toEqual('Some information on the risk of serious harm');
      });

      it('should allow the entry of additional details of previous supervision', () => {
        expect(page.setElementByIdValue('additionalPreviousSupervision', 'Additional details of previous supervision'))
          .toEqual('Additional details of previous supervision');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
        browser.waitForAngularEnabled(true);
        page.getNextButton().click();
      });

    });

    /* Conclusion */

    describe('Conclusion', () => {

      beforeEach(() => {
        browser.waitForAngularEnabled(false);
      });

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Conclusion');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        browser.waitForAngularEnabled(true);
        expect(page.getElementById('proposal_error').isDisplayed()).toBeTruthy();
        expect(page.getHeadingText()).toEqual('Conclusion');
      });

      it('should allow the entry of Proposed sentence', () => {
        expect(page.setElementByIdValue('proposal', 'Some sentencing proposal')).toEqual('Some sentencing proposal');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
        browser.waitForAngularEnabled(true);
      });

    });

    /* Check your report */

    describe('Check your report', () => {

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Check your report');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* Signature */

    describe('Signature', () => {

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Sign and date your report');
      });

      it('should display pre-populated Report Date', () => {
        expect(page.getElementByIdValue('reportDate')).toEqual(page.getDateToday());
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementById('reportAuthor_error').isDisplayed()).toBeTruthy();
        expect(page.getElementById('office_error').isDisplayed()).toBeTruthy();
        expect(page.getHeadingText()).toEqual('Sign and date your report');
      });

      it('should allow the completion of the form', () => {
        expect(page.setElementByIdValue('reportAuthor', 'Arthur Author')).toEqual('Arthur Author');
        expect(page.setElementByIdValue('office', 'Sheffield Digital Studio')).toEqual('Sheffield Digital Studio');
        expect(page.setElementByIdValue('phone', '0161 234 4343')).toEqual('0161 234 4343');
        expect(page.setElementByIdValue('counterSignature', 'Counter signatory')).toEqual('Counter signatory');
        expect(page.setElementByIdValue('reportDate', '20/01/2017')).toEqual('20/01/2017');
      });

      it('should NOT display form error messages now the form is valid', () => {
        expect(page.getElementById('reportAuthor_error').isDisplayed()).toBeFalsy();
        expect(page.getElementById('office_error').isDisplayed()).toBeFalsy();
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* Report Complete */

    describe('Report complete', () => {

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Report saved');
      });

    });

  });

  /* Save Draft Report */

  describe('Save draft report', () => {

    beforeEach(() => {
      configureSuite();
    });

    describe('Report Selection', () => {

      it('should display the Report Selection page', () => {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Choose your report');
      });

      it('should allow the user to select the Short Format Pre-Sentence Report journey', () => {
        page.getElementById('sfpsr').click();
      });

    });

    it('should display the Start Report page', () => {
      expect(page.getHeadingText()).toEqual('Short Format Pre-sentence Report');
    });

    it('should continue to the Offender Details page', () => {
      page.getNextButton().click();
      expect(page.getHeadingText()).toEqual('Offender details');
    });

    it('should allow the report to be saved as a draft', () => {
      page.getElementById('saveDraft').click();
      expect(page.getHeadingText()).toEqual('Draft report saved');
    });

  });

  /* Give Feedback */

  describe('Give feedback', () => {

    beforeEach(() => {
      configureSuite();
    });

    describe('Report Selection', () => {

      it('should display the Report Selection page', () => {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Choose your report');
      });

      it('should allow the user to select the Short Format Pre-Sentence Report journey', () => {
        page.getElementById('sfpsr').click();
      });

    });

    it('should display the Start Report page', () => {
      expect(page.getHeadingText()).toEqual('Short Format Pre-sentence Report');
    });

    it('should navigate to the Feedback page', () => {
      page.getElementById('feedback-link').click();
      expect(page.getHeadingText()).toEqual('Give feedback');
    });

    it('should display form error messages if the form is invalid and NOT continue', () => {
      page.getNextButton().click();
      expect(page.getElementById('feedback_error').isDisplayed()).toBeTruthy();
      expect(page.getHeadingText()).toEqual('Give feedback');
    });

    it('should allow the user to rate the service and enter feedback', () => {
      page.getElementById('radio-1').click();
      page.getElementById('radio-2').click();
      page.getElementById('radio-3').click();
      page.getElementById('radio-4').click();
      page.getElementById('radio-5').click();
      expect(page.setElementByIdValue('feedback', 'Some valuable feedback')).toEqual('Some valuable feedback');
    });

    it('should submit feedback and return to the Choose your report page', () => {
      expect(page.getElementById('feedback_error').isDisplayed()).toBeFalsy();
      page.getNextButton().click();
      expect(page.getHeadingText()).toEqual('Choose your report');
    });

  });

});
