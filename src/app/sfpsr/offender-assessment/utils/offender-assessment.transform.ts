import { IOffenderAssessment } from '../model/offender-assessment.model';
import { textWithTitleForPDF } from '../../../_shared/utils/utils';

export class OffenderAssessmentTransform {

  static process(data: IOffenderAssessment): Array<any> {
    const content: Array<any> = [
      {
        style: 'tableDefault',
        table: {
          widths: ['*'],
          body: [
            [{ text: 'Offender assessment', style: 'tableHeading' }]
          ]
        }
      },
      {
        style: 'tableDefault',
        table: {
          widths: ['*', 35, '*', 35],
          body: [
            [{ text: 'Protective factors', style: 'tableHeading', colSpan: 4 }, {}, {}, {}],
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
            }, data.issueBehaviour ? '√' : '', {
              text: 'Other issues (specified below)',
              style: 'fontBold'
            }, data.issueOther ? '√' : '']
          ]
        }
      }
    ];

    if (data.issueAccommodation) {
      content.push(textWithTitleForPDF('Accommodation', data.detailsAccommodation));
    }

    if (data.issueEmployment) {
      content.push(textWithTitleForPDF('Employment', data.detailsEmployment));
    }

    if (data.issueFinance) {
      content.push(textWithTitleForPDF('Finance', data.detailsFinance));
    }

    if (data.issueRelationships) {
      content.push(textWithTitleForPDF('Relationships', data.detailsRelationships));
    }

    if (data.issueSubstance) {
      content.push(textWithTitleForPDF('Substance misuse', data.detailsSubstance));
    }

    if (data.issueHealth) {
      content.push(textWithTitleForPDF('Physical & mental health', data.detailsHealth));
    }

    if (data.issueBehaviour) {
      content.push(textWithTitleForPDF('Thinking and behaviour', data.detailsBehaviour));
    }

    if (data.issueOther) {
      content.push(textWithTitleForPDF('Other', data.detailsOther));
    }

    content.push({
      style: 'tableDefault',
      table: {
        widths: ['*'],
        body: [
          [{ text: 'Experience of trauma', style: 'tableHeading' }],
          [{ text: data.traumaDetails || 'There is no evidence that the offender has experienced trauma.',
            border: [false, false, false, false] }]
        ]
      }
    });

    content.push({
      style: 'tableDefault',
      table: {
        widths: ['*'],
        body: [
          [{ text: 'Caring responsibilities', style: 'tableHeading' }],
          [{ text: data.caringDetails || 'There are no current or past caring responsibilities in this case.',
            border: [false, false, false, false] }]
        ]
      }
    });

    return content;
  }
}
