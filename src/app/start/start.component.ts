import { Component } from '@angular/core';

interface IQueryParams {
  name: string;
  address: string;
  phone: string;
  dobDay: number;
  dobMonth: number;
  dobYear: number;
  age: number;
  crn: string;
  pnc: string;
  court: string;
  localJusticeArea: string;
}

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html'
})
export class StartComponent {

  /**
   *
   * @type {Object}
   */
  queryParams: IQueryParams = {
    name: 'Alan Smith',
    address: '1 Albert Square, Manchester, Greater Manchester, M60 2LA',
    phone: '07777 777 777',
    dobDay: 21,
    dobMonth: 6,
    dobYear: 1976,
    age: this.getAge('06/21/1976'),
    crn: 'X087946',
    pnc: 'B98793',
    court: 'Manchester and Salford Magistrates Court',
    localJusticeArea: 'Greater Manchester'
  };

  /**
   *
   */
  constructor() {
    // Empty
  }

  /**
   *
   * @param dateString
   * @returns {number}
   */
  private getAge(dateString): number {

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
