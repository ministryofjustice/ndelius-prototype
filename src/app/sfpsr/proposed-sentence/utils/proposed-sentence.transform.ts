import { IProposedSentence } from '../model/proposed-sentence.model';

export class ProposedSentenceTransform {

  static process(data: IProposedSentence): Array<any> {
    return [
      {
        style: 'tableDefault',
        table: {
          widths: ['*'],
          body: [
            [{ text: 'Proposed sentence (including length and any sentence components)', style: 'tableHeading' }]
          ]
        }
      },
      { text: data.proposal, margin: [0, 10, 0, 0] }
    ];
  }
}
