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

    describe('Report Selection', () => {

      it('should display the Report Selection page', () => {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Prototype');
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

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Offence details');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the entry of the main offence details', () => {
        page.testTextEntry('mainOffence', 'Some Main Offence Details');
      });

      it('should allow the entry of other offence details', () => {
        page.testTextEntry('otherOffence', 'Some Other Offence Details');
      });

      it('should allow the entry of the offence summary', () => {
        page.testTextEntry('offenceSummary', 'A Summary of the offence');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* Offence analysis */

    describe('Offence analysis', () => {

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Offence analysis');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the entry of offence analysis', () => {
        page.testTextEntry('offenceAnalysisEntry', 'An analysis of the offence');
      });

      it('should allow the entry of patterns of offending', () => {
        page.testTextEntry('patternOfOffending', 'Some patterns of offending');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* Offender Assessment */

    describe('Offender assessment', () => {

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Offender assessment');
      });

      it('should allow the selection of Offender assessment issues', () => {
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
        page.testTextEntry('detailsAccommodation', 'Some detail relating to accommodation');
      });

      it('should allow the entry of Offender assessment details for employment', () => {
        page.testTextEntry('detailsEmployment', 'Some detail relating to employment');
      });

      it('should allow the entry of Offender assessment details for finance', () => {
        page.testTextEntry('detailsFinance', 'Some detail relating to finance');
      });

      it('should allow the entry of Offender assessment details for relationships', () => {
        page.testTextEntry('detailsRelationships', 'Some detail relating to relationships');
      });

      it('should allow the entry of Offender assessment details for substance abuse', () => {
        page.testTextEntry('detailsSubstance', 'Some detail relating to substance abuse');
      });

      it('should allow the entry of Offender assessment details for physical & mental health', () => {
        page.testTextEntry('detailsHealth', 'Some detail relating to physical & mental health');
      });

      it('should allow the entry of Offender assessment details for thinking & behaviour', () => {
        page.testTextEntry('detailsBehaviour', 'Some detail relating to thinking & behaviour');
      });

      it('should allow the entry of Offender assessment details for other issues', () => {
        page.testTextEntry('detailsOther', 'Some detail relating to other issues');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* Risk Assessment */

    describe('Risk assessment', () => {

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Risk assessment');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the selection of response to previous supervision', () => {
        page.getElementById('previousSupervisionResponse-radio-0').click();
        page.getElementById('previousSupervisionResponse-radio-1').click();
        page.getElementById('previousSupervisionResponse-radio-3').click(); // Last one hides input
        page.getElementById('previousSupervisionResponse-radio-2').click();
      });

      it('should allow the entry of the likelihood of re-offending', () => {
        page.testTextEntry('likelihoodOfReOffending', 'Some information on the likelihood of re-offending');
      });

      it('should allow the entry of the risk of serious harm', () => {
        page.testTextEntry('riskOfSeriousHarm', 'Some information on the risk of serious harm');
      });

      it('should allow the entry of additional details of previous supervision', () => {
        page.testTextEntry('additionalPreviousSupervision', 'Additional details of previous supervision');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* Proposal */

    describe('Proposal', () => {

      it('should route', () => {
        expect(page.getHeadingText()).toEqual('Proposal');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the entry of Proposed sentence', () => {
        page.testTextEntry('proposal', 'Some sentencing proposal');
        page.clickRadios('diversity', 2);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
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
        expect(page.getHeadingText()).toEqual('Report saved');
      });

    });

  });

  /* Save Draft Report */

  describe('SFPSR - Save draft report', () => {

    beforeEach(() => {
      configureSuite();
    });

    describe('Report Selection', () => {

      it('should display the Report Selection page', () => {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Prototype');
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
      page.getCloseButton().click();
      expect(page.getHeadingText()).toEqual('Draft report saved');
    });

  });

  /* Give Feedback */

  describe('SFPSR - Give feedback', () => {

    beforeEach(() => {
      configureSuite();
    });

    describe('Report Selection', () => {

      it('should display the Report Selection page', () => {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Prototype');
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

    it('should allow the user to rate the service and enter feedback', () => {
      page.clickRadios('rating', 5);
      page.testTextEntry('feedback', 'Some valuable feedback');
    });

    it('should submit feedback and return to the Choose your report page', () => {
      page.getNextButton().click();
      expect(page.getHeadingText()).toEqual('Short Format Pre-sentence Report');

      // Clear local storage
      page.clearStorage();
    });

  });

});
