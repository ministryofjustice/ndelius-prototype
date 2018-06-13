import { IRiskPrisoner } from '../model/risk-prisoner.model';

export class RiskCustodyTransform {

  /**
   *
   * @param {IRiskCustody} data
   * @returns {Object}
   */
  static process(data: IRiskPrisoner): Array<any> {
    return [
      { text: 'Risk to the prisoner', style: 'sectionHeading', margin: [0, 20, 0, 0] },
      { text: 'Does the prisoner pose a self harming risk in the community?', style: 'fieldHeading' },
      data.selfHarmCommunity || '',
      { text: 'Does the prisoner pose a self harming risk in custody?', style: 'fieldHeading' },
      data.selfHarmCustody || '',
      { text: 'Is the prisoner at risk of serious harm from others in the community?', style: 'fieldHeading' },
      data.harmOthersCommunity || '',
      { text: 'Is the prisoner at risk of serious harm from others in custody?', style: 'fieldHeading' },
      data.harmOthersCustody || ''
    ];
  }

}
