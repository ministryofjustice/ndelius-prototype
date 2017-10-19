import { Injectable } from '@angular/core';
import { IDateOfBirth } from '../offender-details/model/offender-details.model';

@Injectable()
export class CheckReportService {

  /**
   *
   * @param {string} state
   * @param model
   * @returns {Array<Object>}
   */
  configureItems(state: string, model: any): Array<Object> {

    /**
     *
     * @param {IDateOfBirth} date
     * @returns {string}
     */
    function getDate(date: IDateOfBirth): string {
      function zero(num: number): string {
        return !num ? void 0 : num < 10 ? '0' + num : num.toString();
      }

      return zero(date.day) + '/' + zero(date.month) + '/' + date.year;
    }

    /**
     *
     * @param modelItem
     * @param {boolean} yesNo
     * @returns {string}
     */
    function isSaved(modelItem: any, yesNo?: boolean): string {
      return modelItem && modelItem !== '' ? yesNo ? 'Yes' : 'Saved' : yesNo ? 'No' : 'Not started';
    }

    /**
     *
     * @param modelItem
     * @returns {boolean}
     */
    function isInvalid(modelItem: any): boolean {
      return !modelItem || modelItem === '';
    }

    const configuredArr: Array<Object> = [];

    switch (state) {
      case 'offenderDetails': {
        configuredArr.push({ label: 'Name', value: model.name, invalid: isInvalid(model.name) });
        configuredArr.push({
          label: 'Date of birth',
          value: getDate(model.dateOfBirth),
          invalid: isInvalid(model.dateOfBirth.day) || isInvalid(model.dateOfBirth.month) || isInvalid(model.dateOfBirth.year)
        });
        configuredArr.push({ label: 'Address', value: model.address, invalid: isInvalid(model.address) });
        configuredArr.push({ label: 'PNC ID', value: model.pnc });
        configuredArr.push({ label: 'Delius CRN', value: model.crn });
        break;
      }
      case 'courtDetails': {
        configuredArr.push({ label: 'Court', value: model.court, invalid: isInvalid(model.court) });
        configuredArr.push({
          label: 'Local justice area',
          value: model.localJusticeArea,
          invalid: isInvalid(model.localJusticeArea)
        });
        configuredArr.push({
          label: 'Date of hearing',
          value: model.hearingDate,
          invalid: isInvalid(model.hearingDate)
        });
        break;
      }
      case 'informationSources': {
        configuredArr.push({ label: 'Interview', value: isSaved(model.interviewInformationSource, true) });
        configuredArr.push({ label: 'Service records', value: isSaved(model.serviceRecordsInformationSource, true) });
        configuredArr.push({ label: 'CPS summary', value: isSaved(model.cpsSummaryInformationSource, true) });
        configuredArr.push({
          label: 'Previous OASys assessments',
          value: isSaved(model.oasysAssessmentsInformationSource, true)
        });
        configuredArr.push({
          label: 'Previous convictions',
          value: isSaved(model.previousConvictionsInformationSource, true)
        });
        configuredArr.push({ label: 'Victim statement', value: isSaved(model.victimStatementInformationSource, true) });
        configuredArr.push({
          label: 'Children services checks',
          value: isSaved(model.childrenServicesInformationSource, true)
        });
        configuredArr.push({ label: 'Police information', value: isSaved(model.policeInformationSource, true) });
        configuredArr.push({ label: 'SMART sentencing tool', value: isSaved(model.smartToolSource, true) });
        configuredArr.push({ label: 'Sentencing guidelines', value: isSaved(model.guidelinesSource, true) });
        configuredArr.push({ label: 'Other', value: isSaved(model.otherInformationSource, true) });
        break;
      }
      case 'offenceDetails': {
        configuredArr.push({
          label: 'Main offence & dates',
          value: isSaved(model.mainOffence),
          invalid: isInvalid(model.mainOffence)
        });
        configuredArr.push({ label: 'Other offences & dates', value: isSaved(model.otherOffence) });
        configuredArr.push({
          label: 'Brief summary of the offence',
          value: isSaved(model.offenceSummary),
          invalid: isInvalid(model.offenceSummary)
        });
        break;
      }
      case 'offenceAnalysis': {
        configuredArr.push({
          label: 'Offence analysis',
          value: isSaved(model.offenceAnalysisEntry),
          invalid: isInvalid(model.offenceAnalysisEntry)
        });
        configuredArr.push({ label: 'Patterns of offending', value: isSaved(model.patternOfOffending) });
        break;
      }
      case 'offenderAssessment': {
        configuredArr.push({ label: 'Accommodation', value: isSaved(model.issueAccommodation, true) });
        configuredArr.push({ label: 'Employment', value: isSaved(model.issueEmployment, true) });
        configuredArr.push({ label: 'Finance', value: isSaved(model.issueFinance, true) });
        configuredArr.push({ label: 'Relationships', value: isSaved(model.issueRelationships, true) });
        configuredArr.push({ label: 'Drugs', value: isSaved(model.issueDrugs, true) });
        configuredArr.push({ label: 'Alcohol', value: isSaved(model.issueAlcohol, true) });
        configuredArr.push({ label: 'Physical & mental health', value: isSaved(model.issueHealth, true) });
        configuredArr.push({ label: 'Thinking & behaviour', value: isSaved(model.issueBehaviour, true) });
        break;
      }
      case 'riskAssessment': {
        configuredArr.push({
          label: 'Likelihood of re-offending',
          value: isSaved(model.likelihoodOfReOffending),
          invalid: isInvalid(model.likelihoodOfReOffending)
        });
        configuredArr.push({
          label: 'Risk of serious harm',
          value: isSaved(model.riskOfSeriousHarm),
          invalid: isInvalid(model.riskOfSeriousHarm)
        });
        configuredArr.push({
          label: 'Response to previous supervision',
          value: model.previousSupervisionResponse,
          invalid: isInvalid(model.previousSupervisionResponse)
        });
        configuredArr.push({
          label: 'Additional details on previous supervision',
          value: isSaved(model.additionalPreviousSupervision)
        });
        break;
      }
      case 'proposedSentence': {
        configuredArr.push({
          label: 'Proposed sentence',
          value: isSaved(model.proposedSentence),
          invalid: isInvalid(model.proposedSentence)
        });
        break;
      }
    }
    return configuredArr;
  }

}
