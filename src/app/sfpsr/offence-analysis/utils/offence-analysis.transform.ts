import { IOffenceAnalysis } from '../model/offence-analysis.model';

export class OffenceAnalysisTransform {

  static process(data: IOffenceAnalysis): Array<any> {
    return [
      { text: 'Offence analysis:', style: 'fontBold', margin: [0, 10, 0, 0] },
      { text: data.offenceAnalysisEntry || '', margin: [0, 5, 0, 10] },
      { text: 'Pattern of offending:', style: 'fontBold', margin: [0, 10, 0, 0] },
      { text: data.patternOfOffending || '', margin: [0, 5, 0, 10] }
    ];
  }
}
