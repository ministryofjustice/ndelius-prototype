import { IOffenceDetails } from '../model/offence-details.model';

export class OffenceDetailsTransform {

  static process(data: IOffenceDetails): Array<any> {
    return [
      {
        style: 'tableDefault',
        table: {
          widths: ['*'],
          body: [
            [{ text: 'Offence details', style: 'tableHeading' }],
            [
              [
                { text: 'Main offence and dates:', style: 'fontBold' },
                { text: data.mainOffence || '', margin: [0, 5, 0, 10] },
                { text: 'Other offences and dates:', style: 'fontBold' },
                { text: data.otherOffence || '', margin: [0, 5, 0, 0] }
              ]
            ]
          ]
        }
      }
    ];
  }
}
