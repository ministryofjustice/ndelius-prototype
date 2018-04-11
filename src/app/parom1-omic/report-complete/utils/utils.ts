/**
 *
 */
interface IDate {
  day: Number;
  month: Number;
  year: Number;
}

/**
 *
 * @param {IDate} date
 * @returns {string}
 */
export const pipeDate = (date: IDate): string => {
  function zero(num) {
    return (parseInt(num, 10) < 10 ? '0' + parseInt(num, 10) : num).toString();
  }
  return zero(date.day) + '/' + zero(date.month) + '/' + date.year;
};

/**
 *
 * @param {number} num
 * @returns {string}
 */
export const pipeMonth = (num: number): string => {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][num - 1];
};

/**
 *
 * @param {boolean} bool
 * @returns {string}
 */
export const yesNo = (bool: boolean): string => {
  return bool ? 'Yes' : 'No';
};
