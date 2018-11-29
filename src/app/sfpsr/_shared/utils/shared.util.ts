import { IMultiFieldDate } from '../../../_shared/interface/three-field-date.interface';

export class SharedUtil {
  /**
   *
   * @param {IMultiFieldDate} dob
   * @returns {String}
   */
  static parseDate(dob: IMultiFieldDate) {
    return dob.day ? dob.day + '/' + dob.month + '/' + dob.year : '';
  }

  /**
   *
   * @param {string} title
   * @param {string} text
   * @returns {Array<any>}
   */
  static textWithTitle(title: string, text: string): Array<any> {
    return [
      { text: title, style: 'fontBold', margin: [0, 10, 0, 5] },
      text || ''
    ];
  }
}
