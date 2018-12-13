import { ISignature } from '../model/signature.model';
import { parseDateForPDF } from '../../../_shared/utils/utils';

export class SignatureTransform {

  static process(data: ISignature): Array<any> {
    return [
      {
        style: 'tableDefault',
        table: {
          widths: ['*', '*'],
          body: [
            [{ colSpan: 2, text: 'Completion details', style: 'tableHeading' }, {}],
            [{ text: 'Report author', style: 'fontBold' }, data.reportAuthor || ''],
            [{ text: 'Office', style: 'fontBold' }, data.office || ''],
            [{ text: 'Court office phone number', style: 'fontBold' }, data.phone || ''],
            [{ text: 'Signature', style: 'fontBold' }, data.reportAuthor || ''],
            [{ text: 'Counter signature *', style: 'fontBold' }, data.counterSignature || ''],
            [{ text: 'Start date', style: 'fontBold' }, data.startDate || ''],
            [{ text: 'Completion date', style: 'fontBold' }, parseDateForPDF(data.reportDate)]
          ]
        }
      },
      { text: '* (if required)', margin: [0, 10, 0, 5] }
    ];
  }
}
