import { IRiskCommunity } from '../model/risk-community.model';


export class RiskCommunityTransform {

  /**
   *
   * @param {IRiskCommunity} data
   * @returns {Object}
   */
  static process(data: IRiskCommunity): Array<any> {
    return [
      { text: 'Risk in the community', style: 'sectionHeading' },
      {
        style: 'tableDefault',
        table: {
          widths: ['*', '*', '*', '*', '*'],
          body: [
            [{ text: 'Public', style: 'fontBold' }, { text: 'Known adult', style: 'fontBold' }, {
              text: 'Children',
              style: 'fontBold'
            }, { text: 'Prisoners', style: 'fontBold' }, {
              text: 'Staff',
              style: 'fontBold'
            }], [data.riskPublic || '', data.riskKnownAdult || '', data.riskChildren || '', data.riskPrisoners || '', data.riskStaff || '']
          ]
        }
      }
    ];
  }

}
