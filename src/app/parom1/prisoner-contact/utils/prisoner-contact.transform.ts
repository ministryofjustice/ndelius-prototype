import { IPrisonerContact } from '../model/prisoner-contact.model';

export class PrisonerContactTransform {

  /**
   *
   * @param {IPrisonerContact} data
   * @returns {Object}
   */
  static process(data: IPrisonerContact): Array<any> {
    return [
      { text: 'Offender manager: prisoner relationship', style: 'sectionHeading', margin: [0, 20, 0, 0] },
      { text: 'Contact with the prisoner', style: 'fontBold', margin: [0, 10, 0, 0] },
      { text: data.prisonerContactDetails || '', margin: [0, 5, 0, 0] },
      { text: 'Contact with the prisoner\'s family or significant others', style: 'fontBold', margin: [0, 15, 0, 0] },
      { text: data.prisonerFamilyContact || '', margin: [0, 5, 0, 0] },
      { text: 'Contact with other relevant agencies', style: 'fontBold', margin: [0, 15, 0, 0] },
      { text: data.prisonerStaffContact || '', margin: [0, 5, 0, 0] }
    ];
  }

}
