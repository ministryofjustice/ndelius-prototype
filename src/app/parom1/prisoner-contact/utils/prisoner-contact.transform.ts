import { IPrisonerContact } from '../model/prisoner-contact.model';

export class PrisonerContactTransform {

  /**
   *
   * @param {IPrisonerContact} data
   * @returns {Object}
   */
  static process(data: IPrisonerContact): Array<any> {
    return [
      { text: 'Prisoner relationship', style: 'sectionHeading' },
      data.prisonerContactDetails || '',
      { text: data.prisonerFamilyContact || '', margin: [0, 15, 0, 0] },
      { text: data.prisonerStaffContact || '', margin: [0, 15, 0, 0] }
    ];
  }

}
