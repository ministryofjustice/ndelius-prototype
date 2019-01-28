import { IOffenderPersonalityDisorderPathway } from '../model/opd-pathway.model';
import { parseDateForPDF } from '../../../_shared/utils/utils';

export class OpdPathwayTransform {

  /**
   *
   * @param {IPrisonerDetails} data
   * @returns {Object}
   */
  static process(data: IOffenderPersonalityDisorderPathway): Array<any> {

    let returnObj;

    returnObj = {
      style: 'tableDefault',
      table: {
        widths: ['*', '*'],
        body: [
          [{ colSpan: 2, text: 'Offender Personality Disorder (OPD) pathway', style: 'tableHeading' }, {}],
          [{ text: 'Date of OPD screen', style: 'fontBold' }, parseDateForPDF(data.opdScreeningDate)],
          [{ text: 'OPD criteria met', style: 'fontBold' }, data.opdPathway]
        ]
      }
    };

    if (data.opdPathway === 'Yes') {
      returnObj.table.body.push(
        [{ text: 'Consultation or formulation received', style: 'fontBold' }, data.consultationOrFormulation]
      );
    }

    return [returnObj];
  }
}
