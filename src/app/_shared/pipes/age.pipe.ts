import { Pipe, PipeTransform } from '@angular/core';

/**
 *
 */
export interface IThreeFieldDate {
  day: number;
  month: number;
  year: number;
}

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  /**
   *
   * @param {IThreeFieldDate | string} dateOfBirth
   * @returns {number}
   */
  transform(dateOfBirth: IThreeFieldDate | string): number {
    const dateString = typeof dateOfBirth === 'string' ? dateOfBirth : dateOfBirth.month + '/' + dateOfBirth.day + '/' + dateOfBirth.year;
    const today = new Date();
    const birthDate = new Date(dateString);
    const m = today.getMonth() - birthDate.getMonth();

    let age = today.getFullYear() - birthDate.getFullYear();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

}
