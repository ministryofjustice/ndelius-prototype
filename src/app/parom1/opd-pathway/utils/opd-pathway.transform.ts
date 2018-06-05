import { IOffenderPersonalityDisorderPathway } from '../model/opd-pathway.model';

export class OpdPathwayTransform {

  /**
   *
   * @param {IPrisonerDetails} data
   * @returns {Object}
   */
  static process(data: IOffenderPersonalityDisorderPathway): Array<any> {
    return [
      { text: 'OPD pathway consideration', style: 'fieldHeading' },
      data.opdPathway || ''
    ];
  }

}
