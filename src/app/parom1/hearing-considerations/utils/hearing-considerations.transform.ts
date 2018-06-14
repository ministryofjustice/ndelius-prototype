import { IHearingConsiderations } from '../model/hearing-considerations.model';

export class HearingConsiderationsTransform {

  /**
   *
   * @param {IHearingConsiderations} data
   * @returns {Object}
   */
  static process(data: IHearingConsiderations): Array<any> {
    return [
      { text: 'Oral hearing', style: 'sectionHeading' },
      data.oralHearingConsiderations || '',
    ];
  }

}
