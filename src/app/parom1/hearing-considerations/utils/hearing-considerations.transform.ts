import { IHearingConsiderations } from '../model/hearing-considerations.model';

export class HearingConsiderationsTransform {

  /**
   *
   * @param {IHearingConsiderations} data
   * @returns {Object}
   */
  static process(data: IHearingConsiderations): Array<any> {
    return [
      { text: 'Oral hearing considerations', style: 'sectionHeading' },
      data.oralHearingConsiderations || '',
    ];
  }

}
