import { IOffenderAssessment } from '../model/offender-assessment.model';
import { SharedUtil } from '../../_shared/utils/shared.util';

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
            [{ text: 'Issues', style: 'tableHeading', colSpan: 4 }, {}, {}, {}],
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
      content.push(SharedUtil.textWithTitle('Accommodation', data.detailsAccommodation));
    }

    if (data.issueEmployment) {
      content.push(SharedUtil.textWithTitle('Employment', data.detailsEmployment));
    }

    if (data.issueFinance) {
      content.push(SharedUtil.textWithTitle('Finance', data.detailsFinance));
    }

    if (data.issueRelationships) {
      content.push(SharedUtil.textWithTitle('Relationships', data.detailsRelationships));
    }

    if (data.issueSubstance) {
      content.push(SharedUtil.textWithTitle('Substance misuse', data.detailsSubstance));
    }

    if (data.issueHealth) {
      content.push(SharedUtil.textWithTitle('Physical & mental health', data.detailsHealth));
    }

    if (data.issueBehaviour) {
      content.push(SharedUtil.textWithTitle('Thinking and behaviour', data.detailsBehaviour));
    }

    if (data.issueOther) {
      content.push(SharedUtil.textWithTitle('Other', data.detailsOther));
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
