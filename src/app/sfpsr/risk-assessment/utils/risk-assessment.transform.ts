import { IRiskAssessment } from '../model/risk-assessment.model';

export class RiskAssessmentTransform {

  static process(data: IRiskAssessment): Array<any> {
    return [
      {
        style: 'tableDefault',
        table: {
          widths: ['*'],
          body: [
            [{ text: 'Risk assessment', style: 'tableHeading' }]
          ]
        }
      },
      [
        { text: 'Likelihood of further offending', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.likelihoodOfReOffending || '',
        { text: 'Risk of serious harm', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.riskOfSeriousHarm || '',
        { text: 'Response to previous supervision', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.previousSupervisionResponse || '',
        { text: 'Details on previous supervision', style: 'fontBold', margin: [0, 10, 0, 5] },
        data.additionalPreviousSupervision || ''
      ]
    ];
  }
}
