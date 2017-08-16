import { PrototypePage } from './app.po';

describe('New Probation Services - Rapid Prototype', () => {

  let page: PrototypePage;

  beforeEach(() => {
    page = new PrototypePage();
  });

  /* Start Your Report */

  it('should display the Start Report page', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Short Format Pre-Sentence Report');
  });

  it('should continue to the Offender details page', () => {
    page.getNextButton().click();
    expect(page.getHeadingText()).toEqual('Offender details');
  });

  /* Offender Details */

  it('should display the Offender Details', () => {
    expect(page.getElementByIdText('name')).toEqual('Alan Smith');
    expect(page.getElementByIdText('dateOfBirth')).toEqual('06/02/1976');
    expect(page.getElementByIdText('age')).toEqual('41');
    expect(page.getElementByIdText('address')).toEqual('1 Albert Square, Manchester, Greater Manchester, M60 2LA');
    expect(page.getElementByIdText('crn')).toEqual('B56789');
    expect(page.getElementByIdText('pnc')).toEqual('98793030');
  });

  it('should continue to the Sentencing Court details page', () => {
    page.getNextButton().click();
    expect(page.getHeadingText()).toEqual('Sentencing court details');
  });

  /* Sentencing Court Details */

  it('should display pre-populated Sentencing court details', () => {
    expect(page.getElementByIdValue('court')).toEqual('Manchester and Salford Magistrates Court');
    expect(page.getElementByIdValue('localJusticeArea')).toEqual('Greater Manchester');
    expect(page.getElementByIdValue('dateOfHearing')).toEqual(page.getDateToday());
  });

  it('should allow changes to Sentencing court details', () => {
    expect(page.setElementByIdValue('court', 'Some Other Court')).toEqual('Some Other Court');
    expect(page.setElementByIdValue('localJusticeArea', 'Some Other Justice Area')).toEqual('Some Other Justice Area');
    expect(page.setElementByIdValue('dateOfHearing', '20/01/2017')).toEqual('20/01/2017');
  });

  it('should continue to the Sources of information page', () => {
    page.getNextButton().click();
    expect(page.getHeadingText()).toEqual('Sources of information');
  });

  /* Sources of Information */

  it('should allow the selection of information sources', () => {
    page.getElementById('interviewInformationSource').click();
    page.getElementById('serviceRecordsInformationSource').click();
    page.getElementById('cpsSummaryInformationSource').click();
    page.getElementById('oasysAssessmentsInformationSource').click();
    page.getElementById('previousConvictionsInformationSource').click();
    page.getElementById('victimStatementInformationSource').click();
    page.getElementById('childrenServicesInformationSource').click();
    page.getElementById('policeInformationSource').click();
    page.getElementById('otherInformationSource').click();
    page.getElementById('otherInformationSource').click();
  });

  it('should continue to the Offence details page', () => {
    page.getNextButton().click();
    expect(page.getHeadingText()).toEqual('Offence details');
  });

  /* Offence Details */

  it('should display form error messages if the form is invalid and NOT continue', () => {
    page.getNextButton().click();
    expect(page.getElementById('mainOffence_error').isDisplayed()).toBeTruthy();
    expect(page.getElementById('offenceSummary_error').isDisplayed()).toBeTruthy();
    expect(page.getHeadingText()).toEqual('Offence details');
  });

  it('should allow the entry of Offence details', () => {
    expect(page.setElementByIdValue('mainOffence', 'Some Main Offence Details')).toEqual('Some Main Offence Details');
    expect(page.setElementByIdValue('otherOffence', 'Some Other Offence Details')).toEqual('Some Other Offence Details');
    expect(page.setElementByIdValue('offenceSummary', 'A Summary of the offence')).toEqual('A Summary of the offence');
  });

  it('should NOT display form error messages now the form is valid', () => {
    expect(page.getElementById('mainOffence_error').isDisplayed()).toBeFalsy();
    expect(page.getElementById('offenceSummary_error').isDisplayed()).toBeFalsy();
  });

  it('should continue to the Offence analysis page', () => {
    page.getNextButton().click();
    expect(page.getHeadingText()).toEqual('Offence analysis');
  });

  /* Offence analysis */

  it('should display form error messages if the form is invalid and NOT continue', () => {
    page.getNextButton().click();
    expect(page.getElementById('offenceAnalysis_error').isDisplayed()).toBeTruthy();
    expect(page.getHeadingText()).toEqual('Offence analysis');
  });

  it('should allow the entry of Offence Details', () => {
    expect(page.setElementByIdValue('offenceAnalysis', 'An analysis of the offence')).toEqual('An analysis of the offence');
  });

  it('should NOT display form error messages now the form is valid', () => {
    expect(page.getElementById('offenceAnalysis_error').isDisplayed()).toBeFalsy();
  });

  it('should continue to the Offender assessment issues page', () => {
    page.getNextButton().click();
    expect(page.getHeadingText()).toEqual('Offender assessment issues');
  });

  /* Offender Assessment - Issues */

  it('should allow the selection of Offender issues', () => {
    page.getElementById('issueAccommodation').click();
    page.getElementById('issueEmployment').click();
    page.getElementById('issueFinance').click();
    page.getElementById('issueDrugs').click();
    page.getElementById('issueAlcohol').click();
    page.getElementById('issueHealth').click();
    page.getElementById('issueBehaviour').click();
  });

  it('should continue to the Offender assessment detail page', () => {
    page.getNextButton().click();
    expect(page.getHeadingText()).toEqual('Offender assessment detail');
  });

  /* Offender Assessment Details */

  it('should display form error messages if the form is invalid and NOT continue', () => {
    page.getNextButton().click();
    expect(page.getElementById('offenderAssessment_error').isDisplayed()).toBeTruthy();
    expect(page.getHeadingText()).toEqual('Offender assessment details');
  });

  it('should allow the entry of Offender assessment details', () => {
    expect(page.setElementByIdValue('offenderAssessment', 'An assessment of the offender')).toEqual('An assessment of the offender');
  });

  it('should NOT display form error messages now the form is valid', () => {
    expect(page.getElementById('offenderAssessment_error').isDisplayed()).toBeFalsy();
  });

  it('should continue to the Patterns of offending page', () => {
    page.getNextButton().click();
    expect(page.getHeadingText()).toEqual('Patterns of offending');
  });

  /* Patterns of Offending */

  it('should allow the entry of Patterns of offending', () => {
    expect(page.setElementByIdValue('patternOfOffending', 'Some patterns of offending')).toEqual('Some patterns of offending');
  });

  it('should continue to the Risk assessment page', () => {
    page.getNextButton().click();
    expect(page.getHeadingText()).toEqual('Risk assessment');
  });

  /* Risk Assessment */

  it('should display form error messages if the form is invalid and NOT continue', () => {
    page.getNextButton().click();
    expect(page.getElementById('likelihoodOfReOffending_error').isDisplayed()).toBeTruthy();
    expect(page.getHeadingText()).toEqual('Risk assessment');
  });

  it('should allow the entry of Risk assessment data', () => {
    page.getElementById('radio-1').click();
    page.getElementById('radio-2').click();
    page.getElementById('radio-3').click();
    page.getElementById('radio-4').click();

    expect(page.setElementByIdValue('additionalPreviousSupervision', 'Additional details of previous supervision'))
      .toEqual('Additional details of previous supervision');

    expect(page.setElementByIdValue('likelihoodOfReOffending', 'Some information on the likelihood of re-offending'))
      .toEqual('Some information on the likelihood of re-offending');
  });

  it('should NOT display form error messages now the form is valid', () => {
    expect(page.getElementById('likelihoodOfReOffending_error').isDisplayed()).toBeFalsy();
  });

  it('should continue to the Risk of serious harm page', () => {
    page.getNextButton().click();
    expect(page.getHeadingText()).toEqual('Risk of serious harm');
  });

  /* Risk of Serious Harm */

  it('should display form error messages if the form is invalid and NOT continue', () => {
    page.getNextButton().click();
    expect(page.getElementById('riskOfSeriousHarm_error').isDisplayed()).toBeTruthy();
    expect(page.getHeadingText()).toEqual('Risk of serious harm');
  });

  it('should allow the entry of Risk of serious harm data', () => {
    expect(page.setElementByIdValue('riskOfSeriousHarm', 'Some information relating to the risk of serious harm'))
      .toEqual('Some information relating to the risk of serious harm');
  });

  it('should NOT display form error messages now the form is valid', () => {
    expect(page.getElementById('riskOfSeriousHarm_error').isDisplayed()).toBeFalsy();
  });

  it('should continue to the Conclusion page', () => {
    page.getNextButton().click();
    expect(page.getHeadingText()).toEqual('Conclusion');
  });

  /* Proposed Sentence */

  it('should display form error messages if the form is invalid and NOT continue', () => {
    page.getNextButton().click();
    expect(page.getElementById('proposal_error').isDisplayed()).toBeTruthy();
    expect(page.getHeadingText()).toEqual('Conclusion');
  });

  it('should allow the entry of Proposed sentence', () => {
    expect(page.setElementByIdValue('proposal', 'Some sentencing proposal')).toEqual('Some sentencing proposal');
  });

  it('should NOT display form error messages now the form is valid', () => {
    expect(page.getElementById('proposal_error').isDisplayed()).toBeFalsy();
  });

  it('should continue to the Signature page', () => {
    page.getNextButton().click();
    expect(page.getHeadingText()).toEqual('Signature');
  });

  /* Signature */

  it('should display pre-populated Report Date', () => {
    expect(page.getElementByIdValue('reportDate')).toEqual(page.getDateToday());
  });

  it('should display form error messages if the form is invalid and NOT continue', () => {
    page.getNextButton().click();
    expect(page.getElementById('reportAuthor_error').isDisplayed()).toBeTruthy();
    expect(page.getElementById('office_error').isDisplayed()).toBeTruthy();
    expect(page.getHeadingText()).toEqual('Signature');
  });

  it('should allow the completion of the form', () => {
    expect(page.setElementByIdValue('reportAuthor', 'Arthur Author')).toEqual('Arthur Author');
    expect(page.setElementByIdValue('office', 'Sheffield Digital Studio')).toEqual('Sheffield Digital Studio');
    expect(page.setElementByIdValue('reportDate', '20/01/2017')).toEqual('20/01/2017');
  });

  it('should NOT display form error messages now the form is valid', () => {
    expect(page.getElementById('reportAuthor_error').isDisplayed()).toBeFalsy();
    expect(page.getElementById('office_error').isDisplayed()).toBeFalsy();
  });

  it('should continue to the Report Complete page', () => {
    page.getNextButton().click();
    expect(page.getHeadingText()).toEqual('Short Format Pre-Sentence Report');
  });

  /* Report Complete */

  it('should include the correct sub-heading', () => {
    page.getNextButton().click();
    expect(page.getSubHeadingText()).toEqual('Report complete');
  });

  it('should allow the entry of notes', () => {
    expect(page.setElementByIdValue('notes', 'Some notes about this report')).toEqual('Some notes about this report');
    page.getNextButton().click();
  });

  /* Save Draft Report */

  it('should display the Start Report page', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Short Format Pre-Sentence Report');
  });

  it('should continue to the Offender Details page', () => {
    page.getNextButton().click();
    expect(page.getHeadingText()).toEqual('Offender details');
  });

  it('should allow the report to be saved as a draft', () => {
    page.getElementById('saveDraft').click();
    expect(page.getHeadingText()).toEqual('Short Format Pre-Sentence Report');
  });

  it('should include the correct sub-heading', () => {
    page.getNextButton().click();
    expect(page.getSubHeadingText()).toEqual('Draft report saved');
  });

  it('should allow the entry of notes', () => {
    expect(page.setElementByIdValue('notes', 'Some notes about this report')).toEqual('Some notes about this report');
    page.getNextButton().click();
  });

  /* Feedback */

  it('should display the Start Report page', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Short Format Pre-Sentence Report');
  });

  it('should navigate to the Feedback page', () => {
    page.getElementById('feedback-link').click();
    expect(page.getHeadingText()).toEqual('Feedback');
  });

  it('should display form error messages if the form is invalid and NOT continue', () => {
    page.getNextButton().click();
    expect(page.getElementById('feedback_error').isDisplayed()).toBeTruthy();
    expect(page.getHeadingText()).toEqual('Feedback');
  });

  it('should allow the user to rate the service and enter feedback', () => {
    page.getElementById('radio-1').click();
    page.getElementById('radio-2').click();
    page.getElementById('radio-3').click();
    page.getElementById('radio-4').click();
    page.getElementById('radio-5').click();
    expect(page.setElementByIdValue('feedback', 'Some valuable feedback')).toEqual('Some valuable feedback');
  });

  it('should submit feedback and return to the Start Report page', () => {
    expect(page.getElementById('feedback_error').isDisplayed()).toBeFalsy();
    page.getNextButton().click();
    expect(page.getHeadingText()).toEqual('Short Format Pre-Sentence Report');
  });

});
