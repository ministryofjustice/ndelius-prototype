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
      data.opdPathway === 'No' ?
        'The prisoner has not met the OPD screening criteria and has not been considered for pathway services.' :
        data.opdPathway === 'Yes' ?
          'The prisoner has met the OPD screening criteria and has been considered for pathway services.' :
          data.opdPathway || ''
    ];
  }

}
