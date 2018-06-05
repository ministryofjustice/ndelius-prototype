import { pipeMonth } from '../../../_shared/utils/utils';
import { IPreviousRiskAssessment } from '../model/previous-risk-assessment.model';

export class PreviousRiskAssessmentTransform {

  /**
   *
   * @param {IPrisonerRelationship} data
   * @returns {Object}
   */
  static process(data: IPreviousRiskAssessment): Array<any> {
    return [
      { text: 'Previous risk assessment', style: 'sectionHeading', margin: [ 0, 20, 0, 0 ] },
      {
        text: [{ text: 'Completed: ', style: 'fontBold' },
          pipeMonth(data.previousDate.month) + ' ' + (data.previousDate.year || '')
        ], margin: [ 0, 5, 0, 10 ]
      },
      /*
      { text: 'Risk factors from the previous risk assessment', style: 'fieldHeading' },
      */
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
      },
      { text: 'Attitude to index offence', style: 'sectionHeading', margin: [ 0, 10, 0, 0 ] },
      data.attitude || ''
    ];
  }

}
