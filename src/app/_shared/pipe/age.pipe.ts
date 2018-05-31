import { Pipe, PipeTransform } from '@angular/core';

import { IMultiFieldDate } from '../interface/three-field-date.interface';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  /**
   *
   * @param {IMultiFieldDate | string} dateOfBirth
   * @returns {number}
   */
  transform(dateOfBirth: IMultiFieldDate | string): number {
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
