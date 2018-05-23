import { IState } from '../reducer/state.reducers';

import { IDateOfBirth, IOffenderDetails } from '../../offender-details/model/offender-details.model';
import { IOffenceDetails } from '../../offence-details/model/offence-details.model';
import { IOffenceAnalysis } from '../../offence-analysis/model/offence-analysis.model';
import { IOffenderAssessment } from '../../offender-assessment/model/offender-assessment.model';
import { IRiskAssessment } from '../../risk-assessment/model/risk-assessment.model';
import { IProposedSentence } from '../../proposed-sentence/model/proposed-sentence.model';
import { IInformationSources } from '../../information-sources/model/information-sources.model';
import { ICourtDetails } from '../../court-details/model/court-details.model';
import { ISignature } from '../../signature/model/signature.model';

// @FIXME: DRY this up and refactor.

export class PdfContentUtil {

  /**
   *
   * @param {IState} data
   * @returns {Array<any>}
   */
  static generateContent(data: IState): Array<any> {
    return [
      { text: 'Short Format Pre-Sentence Report', style: 'reportTitle', alignment: 'center' },
      { text: 'This is a Pre-Sentence Report as defined in Section 1 58 of the Criminal Justice Act 2003.', margin: [0, 20, 0, 20] },
      PdfContentUtil.getOffenderDetails(data.offenderDetails),
      PdfContentUtil.getOffenceDetails(data.offenceDetails),
      PdfContentUtil.getOffenceAnalysis(data.offenceAnalysis),
      PdfContentUtil.getOffenderAssessment(data.offenderAssessment),
      PdfContentUtil.getRiskAssessment(data.riskAssessment),
      PdfContentUtil.getProposal(data.proposedSentence),
      PdfContentUtil.getSourcesOfInformation(data.informationSources),
      PdfContentUtil.getCourtDetails(data.courtDetails),
      PdfContentUtil.getCompletionDetails(data.signature)
    ];
  }

  /**
   *
   * @param {string} title
   * @param {string} text
   * @returns {Array<any>}
   */
  static textWithTitle(title: string, text: string): Array<any> {
    return [
      { text: title, style: 'fontBold', margin: [0, 10, 0, 5] },
      text || ''
    ];
  }

  /**
   *
   * @param {IOffenderDetails} data
   * @returns {Array<any>}
   */
  private static getOffenderDetails(data: IOffenderDetails): Array<any> {

    const parseDob = (dob: IDateOfBirth) => {
      return dob.day ? dob.day + '/' + dob.month + '/' + dob.year : '';
    };

    return [
      {
        style: 'tableDefault',
        table: {
          widths: [100, '*', 100, '*'],
          body: [
            [{ colSpan: 4, text: 'Offender details', style: 'tableHeading' }, {}, {}, {}],
            [{ text: 'Name', style: 'fontBold' }, { colSpan: 3, text: data.name || '' }, {}, {}],
            [{ text: 'Date of birth', style: 'fontBold' }, parseDob(data.dateOfBirth), { text: 'Age', style: 'fontBold' }, data.age || ''],
            [{ text: 'Address', style: 'fontBold' }, { colSpan: 3, text: data.address || '' }, {}, {}],
            [{ text: 'Delius CRN', style: 'fontBold' }, data.crn || '', { text: 'PNC ID', style: 'fontBold' }, data.pnc || '']
          ]
        }
      }
    ];
  }

  /**
   *
   * @param {IOffenceDetails} data
   * @returns {Array<any>}
   */
  private static getOffenceDetails(data: IOffenceDetails): Array<any> {
    return [
      {
        style: 'tableDefault',
        table: {
          widths: ['*'],
          body: [
            [{ text: 'Offence details', style: 'tableHeading' }],
            [
              [
                { text: 'Main offence and dates:', style: 'fontBold' },
                { text: data.mainOffence || '', margin: [0, 5, 0, 10] },
                { text: 'Other offences and dates:', style: 'fontBold' },
                { text: data.otherOffence || '', margin: [0, 5, 0, 0] }
              ]
            ]
          ]
        }
      }
    ];
  }

  /**
   *
   * @param {IOffenceAnalysis} data
   * @returns {Array<any>}
   */
  private static getOffenceAnalysis(data: IOffenceAnalysis): Array<any> {
    return [
      {
        style: 'tableDefault',
        table: {
          widths: ['*'],
          body: [
            [{ text: 'Offence analysis', style: 'tableHeading' }],
            [{ text: data.offenceAnalysisEntry || '', border: [false, false, false, false] }]
          ]
        }
      },
      {
        style: 'tableDefault',
        table: {
          widths: ['*'],
          body: [
            [{ text: 'Pattern of offending', style: 'tableHeading' }],
            [{ text: data.patternOfOffending || '', border: [false, false, false, false] }]
          ]
        }
      }
    ];
  }

  /**
   *
   * @param {IOffenderAssessment} data
   * @returns {Array<any>}
   */
  private static getOffenderAssessment(data: IOffenderAssessment): Array<any> {

    const content: Array<any> = [
      {
        style: 'tableDefault',
        table: {
          widths: ['*', 35, '*', 35],
          body: [
            [{ text: 'Offender assessment issues', style: 'tableHeading', colSpan: 4 }, {}, {}, {}],
            [{ text: 'Accommodation', style: 'fontBold' }, data.issueAccommodation ? '√' : '', {
              text: 'Employment, training and education',
              style: 'fontBold'
            }, data.issueEmployment ? '√' : ''],
            [{ text: 'Finance', style: 'fontBold' }, data.issueFinance ? '√' : '', {
              text: 'Relationships',
              style: 'fontBold'
            }, data.issueRelationships ? '√' : ''],
            [{ text: 'Substance misuse', style: 'fontBold' }, data.issueSubstance ? '√' : '', {
              text: 'Physical & mental health',
              style: 'fontBold'
            }, data.issueHealth ? '√' : ''],
            [{
              text: 'Thinking and behaviour',
              style: 'fontBold'
            }, data.issueBehaviour ? '√' : '', { text: 'Other issues (specified below)', style: 'fontBold' }, data.issueOther ? '√' : '']
          ]
        }
      }
    ];

    if (data.issueAccommodation) {
      content.push(PdfContentUtil.textWithTitle('Accommodation', data.detailsAccommodation));
    }

    if (data.issueEmployment) {
      content.push(PdfContentUtil.textWithTitle('Employment', data.detailsEmployment));
    }

    if (data.issueFinance) {
      content.push(PdfContentUtil.textWithTitle('Finance', data.detailsFinance));
    }

    if (data.issueRelationships) {
      content.push(PdfContentUtil.textWithTitle('Relationships', data.detailsRelationships));
    }

    if (data.issueSubstance) {
      content.push(PdfContentUtil.textWithTitle('Substance misuse', data.detailsSubstance));
    }

    if (data.issueHealth) {
      content.push(PdfContentUtil.textWithTitle('Physical & mental health', data.detailsHealth));
    }

    if (data.issueBehaviour) {
      content.push(PdfContentUtil.textWithTitle('Thinking and behaviour', data.detailsBehaviour));
    }

    if (data.issueOther) {
      content.push(PdfContentUtil.textWithTitle('Other', data.detailsOther));
    }

    content.push({
      style: 'tableDefault',
      table: {
        widths: ['*'],
        body: [
          [{ text: 'Experience of trauma', style: 'tableHeading' }],
          [{ text: data.traumaDetails || '', border: [false, false, false, false] }]
        ]
      }
    });

    content.push({
      style: 'tableDefault',
      table: {
        widths: ['*'],
        body: [
          [{ text: 'Caring responsibilities', style: 'tableHeading' }],
          [{ text: data.caringDetails || '', border: [false, false, false, false] }]
        ]
      }
    });

    return content;
  }

  /**
   *
   * @param {IRiskAssessment} data
   * @returns {Array<any>}
   */
  private static getRiskAssessment(data: IRiskAssessment): Array<any> {
    return [
      {
        style: 'tableDefault',
        table: {
          widths: ['*'],
          body: [
            [{ text: 'Risk assessment', style: 'tableHeading' }]
          ]
        }
      },
      [
        { text: 'Likelihood of further offending', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.likelihoodOfReOffending || '',
        { text: 'Risk of serious harm', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.riskOfSeriousHarm || '',
        { text: 'Response to previous supervision', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.previousSupervisionResponse || '',
        { text: 'Details on previous supervision', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.additionalPreviousSupervision || ''
      ]
    ];
  }

  /**
   *
   * @param {IProposedSentence} data
   * @returns {Array<any>}
   */
  private static getProposal(data: IProposedSentence): Array<any> {
    return [
      {
        style: 'tableDefault',
        table: {
          widths: ['*'],
          body: [
            [{ text: 'Proposed sentence (including length and any sentence components)', style: 'tableHeading' }]
          ]
        }
      },
      { text: data.proposal, margin: [0, 10, 0, 0] }
    ];
  }

  /**
   *
   * @param {IInformationSources} data
   * @returns {Array<any>}
   */
  private static getSourcesOfInformation(data: IInformationSources): Array<any> {

    const content: Array<any> = [
      {
        style: 'tableDefault',
        table: {
          widths: ['*', 35, '*', 35],
          body: [
            [{ text: 'Sources of information', style: 'tableHeading', colSpan: 4 }, {}, {}, {}],
            [{ text: 'Interview', style: 'fontBold' }, data.interviewInformationSource ? '√' : '', {
              text: 'Service Records',
              style: 'fontBold'
            }, data.serviceRecordsInformationSource ? '√' : ''],
            [{ text: 'CPS Summary', style: 'fontBold' }, data.cpsSummaryInformationSource ? '√' : '', {
              text: 'Previous OASys Assessments',
              style: 'fontBold'
            }, data.oasysAssessmentsInformationSource ? '√' : ''],
            [{
              text: 'Previous Convictions',
              style: 'fontBold'
            }, data.previousConvictionsInformationSource ? '√' : '', {
              text: 'Victim Statement',
              style: 'fontBold'
            }, data.victimStatementInformationSource ? '√' : ''],
            [{ text: 'Sentencing guidelines', style: 'fontBold' }, data.guidelinesSource ? '√' : '', {
              text: 'Police information',
              style: 'fontBold'
            }, data.policeInformationSource ? '√' : ''],
            [{
              text: 'Children Services Checks',
              style: 'fontBold'
            }, data.childrenServicesInformationSource ? '√' : '', {
              text: 'Other (specified below)',
              style: 'fontBold'
            }, data.otherInformationSource ? '√' : '']
          ]
        }
      }
    ];

    if (data.otherInformationSource) {
      content.push([
        { text: 'Other', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.otherInformationDetails || ''
      ]);
    }

    return content;
  }

  /**
   *
   * @param {ICourtDetails} data
   * @returns {Array<any>}
   */
  private static getCourtDetails(data: ICourtDetails): Array<any> {
    return [
      {
        style: 'tableDefault',
        table: {
          widths: [100, '*'],
          body: [
            [{ colSpan: 2, text: 'Sentencing court details', style: 'tableHeading' }, {}],
            [{ text: 'Court', style: 'fontBold' }, data.court || ''],
            [{ text: 'Date of hearing', style: 'fontBold' }, data.hearingDate || ''],
            [{ text: 'Local justice area', style: 'fontBold' }, data.localJusticeArea || '']
          ]
        }
      }
    ];
  }

  /**
   *
   * @param {ISignature} data
   * @returns {Array<any>}
   */
  private static getCompletionDetails(data: ISignature): Array<any> {
    return [
      {
        style: 'tableDefault',
        table: {
          widths: ['*', '*'],
          body: [
            [{ colSpan: 2, text: 'Completion details', style: 'tableHeading' }, {}],
            [{ text: 'Report author', style: 'fontBold' }, data.reportAuthor || ''],
            [{ text: 'Office', style: 'fontBold' }, data.office || ''],
            [{ text: 'Court office phone number', style: 'fontBold' }, data.phone || ''],
            [{ text: 'Signature', style: 'fontBold' }, ''],
            [{ text: 'Counter signature *', style: 'fontBold' }, ''],
            [{ text: 'Start date', style: 'fontBold' }, data.startDate || ''],
            [{ text: 'Completion date', style: 'fontBold' }, data.reportDate || '']
          ]
        }
      },
      { text: '* (if required)', margin: [0, 10, 0, 5] }
    ];
  }

}
