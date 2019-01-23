import { IRiskPrisoner } from '../model/risk-prisoner.model';

export class RiskPrisonerTransform {

  /**
   *
   * @param {IRiskCustody} data
   * @returns {Object}
   */
  static process(data: IRiskPrisoner): Array<any> {
    return [
      {
        style: 'tableDefault',
        table: {
          widths: [100, '*', '*'],
          body: [
            [{ colSpan: 3, text: 'Risk to the prisoner', style: 'tableHeading' }, {}, {}],
            [
              { text: '' },
              { text: 'Self harming risk', style: 'fontBold' },
              { text: 'Risk of serious harm from others', style: 'fontBold' }
            ],
            [
              { text: 'Community', style: 'fontBold' },
              data.selfHarmCommunity || '',
              data.selfHarmCustody || ''
            ],
            [
              { text: 'Custody', style: 'fontBold' },
              data.harmOthersCommunity || '',
              data.harmOthersCustody || ''
            ]
          ]
        }
      }
    ];
  }
}
