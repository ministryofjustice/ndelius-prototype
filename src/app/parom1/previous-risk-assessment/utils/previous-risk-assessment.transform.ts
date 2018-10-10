import { pipeMonth } from '../../../_shared/utils/utils';
import { IPreviousRiskAssessment } from '../model/previous-risk-assessment.model';

export class PreviousRiskAssessmentTransform {

  /**
   *
   * @param {IPrisonerContact} data
   * @returns {Object}
   */
  static process(data: IPreviousRiskAssessment): Array<any> {

    let section: Array<any> = [
      { text: 'Risk of Serious Harm (RoSH) at point of sentence', style: 'sectionHeading', margin: [0, 20, 0, 0] }
    ];

    if (data.roshCompleted === 'No') {
      section = section.concat(['The RoSH at point of sentence is not available.']);
    } else {
      section = section.concat([
        {
          text: [{ text: 'Completed: ', style: 'fontBold' },
            pipeMonth(data.previousDate.month) + ' ' + (data.previousDate.year || '')
          ], margin: [0, 5, 0, 0]
        },
        {
          style: 'tableDefault',
          table: {
            widths: ['*', '*', '*', '*', '*'],
            body: [
              [{ text: 'Public', style: 'fontBold' }, { text: 'Known adult', style: 'fontBold' }, {
                text: 'Children',
                style: 'fontBold'
              },
                { text: 'Prisoners', style: 'fontBold' }, { text: 'Staff', style: 'fontBold' }],
              [data.riskPublic || '', data.riskKnownAdult || '', data.riskChildren || '',
                data.riskPrisoners || '', data.riskStaff || '']
            ]
          }
        }
      ]);
    }

    return section.concat([
      { text: 'Attitude to index offence', style: 'sectionHeading', margin: [0, 10, 0, 0] },
      data.attitude || '',
      { text: 'Attitude to previous offending', style: 'sectionHeading', margin: [0, 10, 0, 0] },
      data.attitudePrevious || ''
    ]);
  }
}
