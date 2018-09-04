/**
 *
 * @param {IMultiFieldDate} dob
 * @returns {String}
 */
import { IMultiFieldDate } from '../../../_shared/interface/three-field-date.interface';

export const parseDateForPDF = (dob: IMultiFieldDate) => {
  return dob.day ? dob.day + '/' + dob.month + '/' + dob.year : '';
};
