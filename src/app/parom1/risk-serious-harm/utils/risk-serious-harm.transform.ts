import { IRiskSeriousHarm } from '../model/risk-serious-harm.model';

export class RiskSeriousHarmTransform {

  /**
   *
   * @param {IRiskSeriousHarm} data
   * @returns {Object}
   */
  static process(data: IRiskSeriousHarm): Array<any> {
    return [
      { text: 'Risk of serious harm', style: 'sectionHeading' },
      { text: 'Risk of serious harm details', style: 'fieldHeading' },
      data.seriousHarmOthers || '',
      {
        text: 'Factors likely to increase risk of serious harm',
        style: 'fieldHeading'
      },
      data.increaseFactors || '',
      {
        text: 'Factors likely to decrease risk of serious harm',
        style: 'fieldHeading'
      },
      data.reductionFactors || '',
    ];
  }

}
