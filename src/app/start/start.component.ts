import { Component } from '@angular/core';

interface IQueryParams {
  name: string;
  prison: string;
  prisonNumber: string;
  nomisNumber: string;
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
    prison: 'Doncaster',
    prisonNumber: 'P98793-123',
    nomisNumber: 'N2124214-3423',
    address: '1 Albert Square, Manchester, Greater Manchester, M60 2LA',
    phone: '07777 777 777',
    dobDay: 21,
    dobMonth: 6,
    dobYear: 1976,
    age: StartComponent.getAge('06/21/1976'),
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
  private static getAge(dateString): number {
    const today = new Date(),
      birthDate = new Date(dateString),
      m = today.getMonth() - birthDate.getMonth(),
      age = today.getFullYear() - birthDate.getFullYear();

    return m < 0 || (m === 0 && today.getDate() < birthDate.getDate()) ? age - 1 : age;
  }

}
