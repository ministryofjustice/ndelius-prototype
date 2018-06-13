import { IRiskCustody } from '../model/risk-custody.model';

export class RiskCustodyTransform {

  /**
   *
   * @param {IRiskCustody} data
   * @returns {Object}
   */
  static process(data: IRiskCustody): Array<any> {
    return [
      { text: 'Risk in custody', style: 'sectionHeading' },
      {
        style: 'tableDefault',
        table: {
          widths: ['*', '*', '*', '*', '*'],
          body: [
            [{ text: 'Public', style: 'fontBold' }, { text: 'Known adult', style: 'fontBold' }, { text: 'Children', style: 'fontBold' },
              { text: 'Prisoners', style: 'fontBold' }, { text: 'Staff', style: 'fontBold' }],
            [data.riskPublic || '', data.riskKnownAdult || '', data.riskChildren || '', data.riskPrisoners || '', data.riskStaff || '']
          ]
        }
      }
    ];
  }

}
