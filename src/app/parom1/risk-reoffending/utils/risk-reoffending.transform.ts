import { IRiskReoffending } from '../model/risk-reoffending.model';

export class RiskReoffendingTransform {

  /**
   *
   * @param {IRiskReoffending} data
   * @returns {Object}
   */
  static process(data: IRiskReoffending): Array<any> {
    return [
      { text: 'Risk of reoffending', style: 'sectionHeading' },
      {
        style: 'tableDefault',
        table: {
          widths: ['*', '*'],
          body: [
            [{ text: 'RSR', style: 'fontBold' }, data.rsrScore || '' || ''],
            [{ text: 'OGRS3', style: 'fontBold' }, data.ogrs3Percentage || ''],
            [{ text: 'OGP', style: 'fontBold' }, data.ogpProbability || ''],
            [{ text: 'OVP', style: 'fontBold' }, data.ovpProbability],
            [{ text: 'Risk matrix 2000', style: 'fontBold' }, data.riskMatrix2000 || ''],
            [{ text: 'SARA', style: 'fontBold' }, data.sara || '']
          ]
        }
      },
      { text: 'Likelihood of further offending', style: 'fieldHeading' },
      data.likelihoodOfReoffending || '',
    ];
  }

}
