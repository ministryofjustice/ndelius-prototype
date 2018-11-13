import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AgePipe } from '../_shared/pipe/age.pipe';

import { VERSION } from 'environments/version';

interface IQueryParams {
  name: string;
  prison: string;
  prisonImage: string;
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

  version = 'v' + VERSION.version + ' (' + VERSION.hash + ')';

  offenderData: any;

  /**
   *
   * @type {Object}
   */
  queryParams: IQueryParams = {
    name: 'Alice Smith',
    prisonImage: '',
    prison: 'Doncaster',
    prisonNumber: 'P98793-123',
    nomisNumber: 'N2124214-3423',
    address: '1 Albert Square, Manchester, Greater Manchester, M60 2LA',
    phone: '07777 777 777',
    dobDay: 21,
    dobMonth: 6,
    dobYear: 1976,
    age: this.agePipe.transform('06/21/1976'),
    crn: 'X087946',
    pnc: 'B98793',
    court: 'Manchester and Salford Magistrates Court',
    localJusticeArea: 'Greater Manchester'
  };

  /**
   *
   */
  parom1Offenders = [
    {
      name: 'Estela Smith',
      prisonImage: '961579331',
      prison: 'Doncaster',
      prisonNumber: 'P98793-123',
      nomisNumber: 'N2124214-3423',
      address: '1 Albert Square, Manchester, Greater Manchester, M60 2LA',
      phone: '07777 777 777',
      dobDay: 11,
      dobMonth: 6,
      dobYear: 1971,
      age: this.agePipe.transform('11/06/1971'),
      crn: 'D889517',
      pnc: 'B98793',
      court: 'Manchester and Salford Magistrates Court',
      localJusticeArea: 'Greater Manchester'
    },
    {
      name: 'David Hayden',
      prisonImage: '',
      prison: 'Doncaster',
      prisonNumber: 'P98793-123',
      nomisNumber: '',
      address: '1 Albert Square, Manchester, Greater Manchester, M60 2LA',
      phone: '07777 777 777',
      dobDay: 21,
      dobMonth: 6,
      dobYear: 1976,
      age: this.agePipe.transform('21/06/1976'),
      crn: 'D226477',
      pnc: 'B98793',
      court: 'Manchester and Salford Magistrates Court',
      localJusticeArea: 'Greater Manchester'
    }
  ];

  /**
   *
   */
  constructor(private http: HttpClient, private agePipe: AgePipe) {
    this.http.get('/assets/data/stub.json').subscribe((data) => {
      this.offenderData = data['offenders'];
    });
  }

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

}
