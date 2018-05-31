/**
 *
 */
import { isUndefined } from 'util';
import { IMultiFieldDate } from '../../../_shared/interface/three-field-date.interface';

/**
 *
 * @param {IDate} date
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
export const yesNo = (bool: boolean): string => {
  return isUndefined(bool) ? '' : bool ? 'Yes' : 'No';
};
