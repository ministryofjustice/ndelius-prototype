import { IOffenderPersonalityDisorderPathway } from '../model/opd-pathway.model';
import { parseDateForPDF } from '../../../_shared/utils/utils';

export class OpdPathwayTransform {

  /**
   *
   * @param {IPrisonerDetails} data
   * @returns {Object}
   */
  static process(data: IOffenderPersonalityDisorderPathway): Array<any> {

    if (data.opdPathway === 'Yes') {
      return [
        {
          style: 'tableDefault',
          table: {
            widths: ['*', '*'],
            body: [
              [{ colSpan: 2, text: 'Offender Personality Disorder (OPD) pathway', style: 'tableHeading' }, {}],
              [{ text: 'Screening date', style: 'fontBold' }, parseDateForPDF(data.opdScreeningDate)]
            ]
          }
        }
      ];
    } else {
      return [
        { text: 'Offender Personality Disorder (OPD) pathway', style: 'sectionHeading' },
        {
          text: { text: data.notScreenedReason }, margin: [0, 5, 0, 10]
        }
      ];
    }

  }
}
