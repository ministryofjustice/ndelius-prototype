/**
 *
 */
import { IMultiFieldDate } from '../interface/three-field-date.interface';

/**
 *
 * @param {IMultiFieldDate} date
 * @returns {string}
 */
export const pipeDate = (date: IMultiFieldDate): string => {
  function zero(num) {
    return (parseInt(num, 10) < 10 ? '0' + parseInt(num, 10) : num).toString();
  }
  return !date.day ? '' : zero(date.day) + '/' + zero(date.month) + '/' + date.year;
};

/**
 *
 * @param {number} num
 * @returns {string}
 */
export const pipeMonth = (num: number): string => {
  return !num ? '' : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][num - 1];
};

/**
 *
 * @param {boolean} bool
 * @returns {string}
 */
export const pipeYesNo = (bool: boolean): string => {
  return typeof bool === 'undefined' ? '' : bool ? 'Yes' : 'No';
};

/**
 *
 * @param {IMultiFieldDate} dob
 * @returns {String}
 */
export const parseDateForPDF = (dob: IMultiFieldDate): string => {
  return dob.day ? dob.day + '/' + dob.month + '/' + dob.year : '';
};

/**
 *
 * @param {string} title
 * @param {string} text
 * @returns {Array<any>}
 */
export const textWithTitleForPDF = (title: string, text: string): Array<any> => {
  return [
    { text: title, style: 'fontBold', margin: [0, 10, 0, 5] },
    text || ''
  ];
};
