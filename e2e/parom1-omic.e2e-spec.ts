import { PrototypePage } from './app.po';
import { browser } from 'protractor';

const testData = require('./parom1-data.json');

xdescribe('New Probation Services - Rapid Prototype', () => {

  let page: PrototypePage;

  /**
   * Setup the page and mock the jQuery call we need to use.
   */
  function configureSuite() {
    page = new PrototypePage();
    // We're using jQuery to pull in application.js in order to run the jQuery code we use in the MVP so mock it.
    browser.executeScript('$ = { getScript: function() { return true; } }');
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
  }

  describe('Parole Report (PAROM1-OMIC) journey', () => {

    /* START PAGE */

    beforeEach(() => {
      configureSuite();
    });

    describe('Report Selection', () => {

      it('should display the correct page', () => {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Prototype');
      });

      it('should allow the user to select the Parole Report (PAROM1-OMIC) journey', () => {
        page.getElementById('parom1-omic').click();
      });

    });

    /* START REPORT (POM journey) */

    describe('Start report', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Start a Parole report Parom 1 (OMIC)');
      });

      it('should include COM and POM journey options', () => {
        expect(page.getElementById('com-journey').isPresent()).toBeTruthy();
        expect(page.getElementById('pom-journey').isPresent()).toBeTruthy();
      });

      it('should allow the user to choose the POM journey', () => {
        page.getElementById('pom-journey').click();
      });

      it('should allow the user to start the journey', () => {
        page.getElementById('startButton').click();
      });

    });

    /* NEW PAGE */

    describe('Prisoner relationship (POM)', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('POM: Prisoner relationship');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.setElementByIdValue('lengthOfAssignment', testData.pom_relationship);
        page.setElementByIdValue('behaviourInPrison', testData.pom_behaviour);

        page.clickRadios('riskOfAbsconding', 2);
        page.clickRadios('rotl', 2);

        page.getElementById('riskOfAbsconding-radio-0').click();
        page.getElementById('rotl-radio-0').click();

        page.testTextEntry('riskOfAbscondingDetails', 'Some risk of absconding');
        page.testTextEntry('rotlDetails', 'Some more ROTL information');

        page.setElementByIdValue('furtherInformation', testData.pom_information);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Your recommendation', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Your recommendation');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.setElementByIdValue('yourRecommendation', testData.pom_recommendation);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Signature and date', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Signature and date');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.testTextEntry('reportAuthor', 'Axel Foley');
        expect(page.changeSelectOption('prison', 'Doncaster')).toEqual('23: Doncaster');
        page.testTextEntry('counterSignature', 'Johnny Wishbone');
        page.testTextEntry('counterSignatureRole', 'Arctic Roll');
        page.testTextEntry('reportDate', page.getDateToday());
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Report saved', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Report saved');
      });

    });

    /* ROUTE */

    describe('Route', () => {
      it('should route back to the COM and POM journey options page', () => {
        browser.get('/#/parom1-omic/');
      });
    });

    /* START REPORT (COM journey) */

    describe('Start report', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Start a Parole report Parom 1 (OMIC)');
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

    /* NEW PAGE */

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
        page.testTextEntry('name', 'Billy Bunter');
        page.testTextEntry('prisonNumber', 'P123456789');
        page.testTextEntry('nomisNumber', 'N123456789');
      });

      it('should allow the user to complete the report section', () => {
        page.clickRadios('category', 4);

        page.testTextEntry('offence', 'Theft of a pre-packed sandwich from Tesco');
        page.testTextEntry('sentence', 'Death by monkeys');

        page.getElementById('sentenceType-radio-0').click();
        page.testTextEntry('determinateReleaseDate-day', '23');
        page.testTextEntry('determinateReleaseDate-month', '05');
        page.testTextEntry('determinateReleaseDate-year', '2021');

        page.getElementById('sentenceType-radio-1').click();
        page.testTextEntry('tariffLength', 'Infinite');
        page.testTextEntry('tariffExpiryDate-day', '23');
        page.testTextEntry('tariffExpiryDate-month', '05');
        page.testTextEntry('tariffExpiryDate-year', '2021');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Prisoner relationship (COM)', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('COM: Prisoner relationship');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.setElementByIdValue('prisonerContact', testData.com_relationship);
        page.setElementByIdValue('prisonerFamilyContact', testData.com_familyContact);
        page.setElementByIdValue('prisonerStaffContact', testData.com_staffContact);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Previous risk assessment', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Previous risk assessment');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.testTextEntry('previousDate-month', '05');
        page.testTextEntry('previousDate-year', '2021');
        page.clickRadios('riskPublic', 4);
        page.clickRadios('riskKnownAdult', 4);
        page.clickRadios('riskChildren', 4);
        page.clickRadios('riskPrisoners', 4);
        page.clickRadios('riskStaff', 4);

        page.setElementByIdValue('attitude', testData.attitudeOffence);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Victims', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Victims');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.setElementByIdValue('impactOfOffence', testData.victimImpact);
        page.testTextEntry('vloContactDate', '21/03/2018');
        page.clickRadios('victimContactService', 2);
        page.clickRadios('victimPersonalStatement', 2);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('OPD pathway', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Offender personality disorder pathway');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.clickRadios('opdPathway', 2);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Interventions', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Interventions');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.setElementByIdValue('interventionsList', testData.interventionsCompleted);
        page.setElementByIdValue('interventionsSummary', testData.interventionsSummary);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Current sentence plan', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Current sentence plan');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.setElementByIdValue('sentencePlanObjectives', testData.sentencePlan);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('MAPPA', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Multi Agency Public Protection Arrangements (MAPPA)');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.testTextEntry('screenedDate', '01/05/2016');
        page.clickRadios('mappaCategory', 3);
        page.clickRadios('mappaLevel', 3);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Risk of re-offending', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Risk of re-offending');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.testTextEntry('rsrScore', '5.56');
        page.testTextEntry('ogrs3Percentage', '23%');
        page.testTextEntry('ogpProbability', '26%');
        page.testTextEntry('ovpProbability', '32%');
        page.clickRadios('riskMatrix2000', 4);
        page.clickRadios('sara', 3);

        page.setElementByIdValue('likelihoodOfReoffending', testData.likelihoodReoffending);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Risk in the community', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Risk in the community');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.clickRadios('riskPublic', 4);
        page.clickRadios('riskKnownAdult', 4);
        page.clickRadios('riskChildren', 4);
        page.clickRadios('riskPrisoners', 4);
        page.clickRadios('riskStaff', 4);
        page.clickRadios('riskSelf', 2);
        page.clickRadios('riskOthers', 2);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Risk in custody', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Risk in custody');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.clickRadios('riskPublic', 4);
        page.clickRadios('riskKnownAdult', 4);
        page.clickRadios('riskChildren', 4);
        page.clickRadios('riskPrisoners', 4);
        page.clickRadios('riskStaff', 4);
        page.clickRadios('riskSelf', 2);
        page.clickRadios('riskOthers', 2);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Risk of serious harm', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Risk of serious harm');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.setElementByIdValue('seriousHarmOthers', testData.riskOfSeriousHarm);
        page.setElementByIdValue('increaseFactors', testData.increaseFactors);
        page.setElementByIdValue('reductionFactors', testData.reductionFactors);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Release risk management plan', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Release risk management plan');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {

        page.setElementByIdValue('agencies', testData.agencies);
        page.setElementByIdValue('support', testData.support);
        page.setElementByIdValue('control', testData.control);
        page.setElementByIdValue('riskMeasures', testData.riskMeasures);
        page.setElementByIdValue('requirements', testData.requirements);
        page.setElementByIdValue('contactLevel', testData.contactLevel);
        page.setElementByIdValue('agencyActions', testData.agencyActions);
        page.setElementByIdValue('contingencyPlan', testData.contingencyPlan);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Resettlement plan for release', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Resettlement plan for release');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.setElementByIdValue('resettlementPlanForRelease', testData.resettlementPlanForRelease);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Supervision plan for release', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Supervision plan for release');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.setElementByIdValue('supervisionPlanForRelease', testData.supervisionPlanForRelease);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Your recommendation', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Your recommendation');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.setElementByIdValue('yourRecommendation', testData.recommendation);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Oral hearing considerations', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Oral hearing considerations');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.setElementByIdValue('oralHearingConsiderations', testData.oralHearingConsiderations);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Sources', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Sources');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.getElementById('previousConvictions').click();
        page.getElementById('cpsDocuments').click();
        page.getElementById('preSentenceReport').click();
        page.getElementById('judgesComments').click();
        page.getElementById('previousParoleReports').click();
        page.getElementById('paroleDossier').click();
        page.getElementById('probationCaseRecords').click();
        page.getElementById('other').click();

        page.setElementByIdValue('otherDocuments', testData.otherDocuments);
        page.setElementByIdValue('reportsAssessmentsDirections', testData.reportsAssessmentsDirections);

        page.clickRadios('sourceLimitations', 2);
        page.getElementById('sourceLimitations-radio-0').click();
        page.setElementByIdValue('sourceLimitationExplanation', testData.sourceLimitationExplanation);
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Check your report', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Check your report');
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Signature and date', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Signature and date');
      });

      it('should display form error messages if the form is invalid and NOT continue', () => {
        page.getNextButton().click();
        expect(page.getElementByClassName('error-summary').isDisplayed()).toBeTruthy();
      });

      it('should allow the user to complete the report section', () => {
        page.testTextEntry('reportAuthor', 'Billy-Ray Valentine');
        page.testTextEntry('division', 'Joy Division');
        page.testTextEntry('address', '1 Trading Places\nSome Town\nSome County\nS0 1ME');
        page.testTextEntry('email', 'user@host.com');
        page.testTextEntry('phone', '07777 777 777');
        page.testTextEntry('counterSignature', 'Nenge Mboko');
        page.testTextEntry('counterSignatureRole', 'Swiss Roll');
        page.testTextEntry('reportDate', page.getDateToday());
      });

      it('should allow the user to continue through the journey', () => {
        page.getNextButton().click();
      });

    });

    /* NEW PAGE */

    describe('Report saved', () => {

      it('should display the correct page', () => {
        expect(page.getHeadingText()).toEqual('Report saved');
      });


      xit('should generate a PDF', () => {
        page.getElementById('viewReport').click();
      });


      it('should allow the user to return to the main menu', () => {
        page.getElementById('quitReport').click();
      });

    });

    /* RETURN TO START */

    describe('Return to start page', () => {

      it('should display the correct page', () => {
        page.navigateTo();
        expect(page.getHeadingText()).toEqual('Prototype');

        // Clear local storage
        page.clearStorage();
      });

    });

  });

});
