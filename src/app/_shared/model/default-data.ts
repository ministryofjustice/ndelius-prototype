import { IOffenderDetails } from '../../sfpsr/offender-details/model/offender-details.model';
import { ICourtDetails } from '../../sfpsr/court-details/model/court-details.model';

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
    phone: '07777 777 777',
    dateOfBirth: {
      day: 21,
      month: 6,
      year: 1976
    },
    age: getAge('06/21/1976'),
    crn: 'X087946',
    pnc: 'B98793',
    saved: true,
    valid: true
  };
}

export function defaultCourtDetails(): ICourtDetails {

  function today(): string {

    function zero(num): string {
      return num < 10 ? '0' + num : num.toString();
    }

    const date: Date = new Date();
    return zero(date.getDate()) + '/' + zero(date.getMonth() + 1) + '/' + date.getFullYear();
  }

  return {
    court: 'Manchester and Salford Magistrates Court',
    localJusticeArea: 'Greater Manchester',
    hearingDate: today(),
    saved: true,
    valid: true
  };
}

export function localJusticeAreas(): Array<string> {
  return [
    'Avon and Somerset',
    'Bedfordshire',
    'Cambridgeshire',
    'Cardiff',
    'Carmarthen',
    'Ceredigion',
    'Cheshire',
    'Cleveland',
    'Conwy',
    'Cynon Valley',
    'De Brycheiniog (south Brecknockshire)',
    'Denbighshire',
    'Durham',
    'Cumbria',
    'Derbyshire',
    'Devon and Cornwall',
    'Dorset',
    'Essex',
    'Flintshire',
    'Gloucestershire',
    'Greater London',
    'Greater Manchester',
    'Gwent',
    'Gwynedd',
    'Hampshire (and the Isle of Wight)',
    'Hertfordshire',
    'Humberside',
    'Kent',
    'Lancashire',
    'Leicestershire (and Rutland)',
    'Lincolnshire',
    'Llanelli',
    'Merseyside',
    'Merthyr Tydfil',
    'Miskin, Rhondda Cynon Taff',
    'Montgomeryshire',
    'Neath Port Talbot',
    'Newcastle and Ogmore',
    'Norfolk',
    'Northamptonshire',
    'Northumbria (Northumberland and Tyne and Wear)',
    'North Yorkshire',
    'Nottinghamshire',
    'Pembrokeshire',
    'Radnorshire and North Brecknock',
    'South Yorkshire',
    'Staffordshire',
    'Suffolk',
    'Surrey',
    'Sussex',
    'Swansea County',
    'Thames Valley (Berkshire, Buckinghamshire, Oxfordshire)',
    'Vale of Glamorgan',
    'Warwickshire',
    'West Mercia (Herefordshire, Shropshire, Worcestershire)',
    'West Midlands',
    'West Yorkshire',
    'Wiltshire',
    'Wrexham Maelor',
    'Ynys Môn/Anglesey'
  ];
}
