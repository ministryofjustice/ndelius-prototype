import { IVictimIssues } from '../model/victim-issues.model';
import { parseDateForPDF } from '../../../_shared/utils/utils';

export class VictimsTransform {

  /**
   *
   * @param {IPrisonerContact} data
   * @returns {Object}
   */
  static process(data: IVictimIssues): Array<any> {
    return [
      { text: 'Victims', style: 'sectionHeading', margin: [0, 20, 0, 0] },
      { text: 'Victim impact', style: 'fieldHeading' },
      data.impactOfOffence || '',
      {
        text: [{ text: 'VLO contacted on: ', style: 'fontBold' },
          parseDateForPDF(data.vloContactDate)
        ], margin: [0, 10, 0, 0]
      },
      { text: 'Victim Contact Service engagement', style: 'fieldHeading' },
      data.victimContactService || '',
      { text: 'Victim Personal Statement', style: 'fieldHeading' },
      data.victimPersonalStatement || ''
    ];
  }

}
