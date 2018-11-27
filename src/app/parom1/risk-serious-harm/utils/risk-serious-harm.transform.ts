import { IRiskSeriousHarm } from '../model/risk-serious-harm.model';

export class RiskSeriousHarmTransform {

  /**
   *
   * @param {IRiskSeriousHarm} data
   * @returns {Object}
   */
  static process(data: IRiskSeriousHarm): Array<any> {
    return [
      { text: 'Nature of the risk to all relevant groups', style: 'sectionHeading' },
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
      {
        text: 'Likelihood of further offending',
        style: 'fieldHeading'
      },
      data.likelihoodOfReoffending || '',
      {
        text: 'If in closed conditions, does the prisoner pose an absconding risk?',
        style: 'fieldHeading'
      },
      data.abscondingRisk || '',
      {
        text: 'Details of the absconding risk',
        style: 'fieldHeading'
      },
      data.abscondingRiskDetails || '',
    ];
  }

}
