import { IOffenderDetails } from '../../offender-details/model/offender-details.model';
import { ICourtDetails } from '../../court-details/model/court-details.model';

export function defaultOffenderDetails(): IOffenderDetails {

  function getAge(dateString): number {

    const today = new Date();
    const birthDate = new Date(dateString);
    const m = today.getMonth() - birthDate.getMonth();

    let age = today.getFullYear() - birthDate.getFullYear();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return {
    name: 'Alan Smith',
    address: '1 Albert Square, Manchester, Greater Manchester, M60 2LA',
    dateOfBirth: {
      day: 21,
      month: 6,
      year: 1976
    },
    age: getAge('06/21/1976'),
    crn: 'X087946',
    pnc: '',
    saved: true
  };
}

export function defaultCourtDetails(): ICourtDetails {
  return {
    court: 'Manchester and Salford Magistrates Court',
    localJusticeArea: 'Greater Manchester',
    hearingDate: void 0,
    saved: true
  };
}
