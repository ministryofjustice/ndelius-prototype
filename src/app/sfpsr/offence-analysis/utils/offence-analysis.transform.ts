import { IOffenceAnalysis } from '../model/offence-analysis.model';

export class OffenceAnalysisTransform {

  static process(data: IOffenceAnalysis): Array<any> {
    return [
      {
        style: 'tableDefault',
        table: {
          widths: ['*'],
          body: [
            [{ text: 'Offence analysis', style: 'tableHeading' }],
            [{ text: data.offenceAnalysisEntry || '', border: [false, false, false, false] }]
          ]
        }
      },
      {
        style: 'tableDefault',
        table: {
          widths: ['*'],
          body: [
            [{ text: 'Pattern of offending', style: 'tableHeading' }],
            [{ text: data.patternOfOffending || '', border: [false, false, false, false] }]
          ]
        }
      }
    ];
  }
}
