import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offender-details',
  templateUrl: './offender-details.component.html'
})
export class OffenderDetailsComponent {

  @Input() public data: any;

  /**
   * Return a date string as DD/MM/YYYY
   * @param dateString
   * @returns {string}
   */
  pipeDate(dateString: string): string {
    if (!dateString) {
      return '';
    }
    const splitDate = dateString.substr(0, dateString.indexOf(' ')).split('-');
    return [splitDate[2], splitDate[1], splitDate[0]].join('/');
  }

  /**
   *
   * @param {string} dateString
   * @returns {number}
   */
  pipeAge(dateString: string): number {
    if (!dateString) {
      return 0;
    }
    const today = new Date(),
      splitDate = dateString.substr(0, dateString.indexOf(' ')).split('-'),
      birthDate = new Date(
        [splitDate[1], splitDate[2], splitDate[0]].join('/')
      ),
      m = today.getMonth() - birthDate.getMonth(),
      age = today.getFullYear() - birthDate.getFullYear();

    return m < 0 || (m === 0 && today.getDate() < birthDate.getDate())
      ? age - 1
      : age;
  }

  /**
   * Return the gender string
   * @param num
   * @returns {string}
   */
  pipeGender(num: number) {
    return num === 545 ? 'Male' : 'Female';
  }

  /**
   * Return the gender string
   * @param num
   * @returns {string}
   */
  pipeTitle(num: number) {
    return num === 984 ? 'Mr' : 'Ms';
  }

}
