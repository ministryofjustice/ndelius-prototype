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

export class PdfContentUtil {

  static generateContent(data: IState) {
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

  private static getOffenderDetails(data: IOffenderDetails) {

    let parseDob = (dob: IDateOfBirth) => {
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

  private static getOffenceDetails(data: IOffenceDetails) {
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

  private static getOffenceAnalysis(data: IOffenceAnalysis) {
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

  private static getOffenderAssessment(data: IOffenderAssessment) {

    let content: Array<any> = [
      {
        style: 'tableDefault',
        table: {
          widths: ['*', 35, '*', 35],
          body: [
            [{ text: 'Offender assessment issues', style: 'tableHeading', colSpan: 4 }, {}, {}, {}],
            [{ text: 'Accommodation', style: 'fontBold' }, data.issueAccommodation ? '√' : '', { text: 'Employment, training and education', style: 'fontBold' }, data.issueEmployment ? '√' : ''],
            [{ text: 'Finance', style: 'fontBold' }, data.issueFinance ? '√' : '', { text: 'Relationships', style: 'fontBold' }, data.issueRelationships ? '√' : ''],
            [{ text: 'Substance misuse', style: 'fontBold' }, data.issueSubstance ? '√' : '', { text: 'Physical & mental health', style: 'fontBold' }, data.issueHealth ? '√' : ''],
            [{ text: 'Thinking and behaviour', style: 'fontBold' }, data.issueBehaviour ? '√' : '', { text: 'Other issues (specified below)', style: 'fontBold' }, data.issueOther ? '√' : '']
          ]
        }
      }
    ];

    if (data.issueAccommodation) {
      content.push([
        { text: 'Accommodation', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.detailsAccommodation || ''
      ]);
    }

    if (data.issueEmployment) {
      content.push([
        { text: 'Employment', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.detailsEmployment || ''
      ]);
    }

    if (data.issueFinance) {
      content.push([
        { text: 'Finance', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.detailsFinance || ''
      ]);
    }

    if (data.issueRelationships) {
      content.push([
        { text: 'Relationships', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.detailsRelationships|| ''
      ]);
    }

    if (data.issueSubstance) {
      content.push([
        { text: 'Substance misuse', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.detailsSubstance|| ''
      ]);
    }

    if (data.issueHealth) {
      content.push([
        { text: 'Physical & mental health', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.detailsHealth|| ''
      ]);
    }

    if (data.issueBehaviour) {
      content.push([
        { text: 'Thinking and behaviour', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.detailsBehaviour|| ''
      ]);
    }

    if (data.issueOther) {
      content.push([
        { text: 'Other', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.detailsOther|| ''
      ]);
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

  private static getRiskAssessment(data: IRiskAssessment) {
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

  private static getProposal(data: IProposedSentence) {
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
      { text: data.proposal, margin: [0, 10, 0, 0] },
    ];
  }

  private static getSourcesOfInformation(data: IInformationSources): Array<any> {

    let content: Array<any> = [
      {
        style: 'tableDefault',
        table: {
          widths: ['*', 35, '*', 35],
          body: [
            [{ text: 'Sources of information', style: 'tableHeading', colSpan: 4 }, {}, {}, {}],
            [{ text: 'Interview', style: 'fontBold' }, data.interviewInformationSource ? '√' : '', { text: 'Service Records', style: 'fontBold' }, data.serviceRecordsInformationSource ? '√' : ''],
            [{ text: 'CPS Summary', style: 'fontBold' }, data.cpsSummaryInformationSource ? '√' : '', { text: 'Previous OASys Assessments', style: 'fontBold' }, data.oasysAssessmentsInformationSource ? '√' : ''],
            [{ text: 'Previous Convictions', style: 'fontBold' }, data.previousConvictionsInformationSource ? '√' : '', { text: 'Victim Statement', style: 'fontBold' }, data.victimStatementInformationSource ? '√' : ''],
            [{ text: 'Sentencing guidelines', style: 'fontBold' }, data.guidelinesSource ? '√' : '', { text: 'Police information', style: 'fontBold' }, data.policeInformationSource ? '√' : ''],
            [{ text: 'Children Services Checks', style: 'fontBold' }, data.childrenServicesInformationSource ? '√' : '', { text: 'Other (specified below)', style: 'fontBold' }, data.otherInformationSource ? '√' : '']
          ]
        }
      }
    ];

    if (data.otherInformationSource) {
      content.push([
        { text: 'Other', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.otherInformationDetails|| ''
      ]);
    }

    return content;
  }

  private static getCourtDetails(data: ICourtDetails) {
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

  private static getCompletionDetails(data: ISignature) {
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
