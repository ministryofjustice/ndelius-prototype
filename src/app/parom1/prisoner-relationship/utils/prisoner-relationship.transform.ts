import { IPrisonerRelationship } from '../model/prisoner-relationship.model';

export class PrisonerRelationshipTransform {

  /**
   *
   * @param {IPrisonerRelationship} data
   * @returns {Object}
   */
  static process(data: IPrisonerRelationship): Array<any> {
    return [
      { text: 'Prisoner relationship', style: 'sectionHeading' },
      data.prisonerContact || '',
      { text: data.prisonerFamilyContact || '', margin: [0, 15, 0, 0] },
      { text: data.prisonerStaffContact || '', margin: [0, 15, 0, 0] }
    ];
  }

}
