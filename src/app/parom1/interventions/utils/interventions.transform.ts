import { IInterventions } from '../model/interventions.model';

export class InterventionsTransform {

  /**
   *
   * @param {IInterventions} data
   * @returns {Object}
   */
  static process(data: IInterventions): Array<any> {
    return [
      { text: 'Interventions', style: 'sectionHeading' },
      { text: 'Interventions completed', style: 'fieldHeading' },
      data.interventionsList || '',
      { text: 'Interventions summary', style: 'fieldHeading' },
      data.interventionsSummary || ''
    ];
  }

}
