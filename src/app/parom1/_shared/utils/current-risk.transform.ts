import { IRiskCommunity } from '../../risk-community/model/risk-community.model';
import { IRiskCustody } from '../../risk-custody/model/risk-custody.model';

export class CurrentRiskTransform {

  /**
   *
   * @param {IRiskCommunity} community
   * @param {IRiskCustody} custody
   * @returns {Object}
   */
  static process(community: IRiskCommunity, custody: IRiskCustody): Array<any> {
    return [
      {
        style: 'tableDefault',
        table: {
          widths: ['*', '*', '*', '*', '*', '*'],
          body: [
            [{ colSpan: 6, text: 'Current RoSH', style: 'tableHeading' }, {}, {}, {}, {}, {}],
            [
              { text: '' },
              { text: 'Public', style: 'fontBold' },
              { text: 'Known adult', style: 'fontBold' },
              { text: 'Children', style: 'fontBold' },
              { text: 'Prisoners', style: 'fontBold' },
              { text: 'Staff', style: 'fontBold' }
            ],
            [
              { text: 'Community', style: 'fontBold' },
              community.riskPublic || '',
              community.riskKnownAdult || '',
              community.riskChildren || '',
              community.riskPrisoners || '',
              community.riskStaff || ''
            ],
            [
              { text: 'Custody', style: 'fontBold' },
              custody.riskPublic || '',
              custody.riskKnownAdult || '',
              custody.riskChildren || '',
              custody.riskPrisoners || '',
              custody.riskStaff || ''
            ]
          ]
        }
      }
    ];
  }
}
