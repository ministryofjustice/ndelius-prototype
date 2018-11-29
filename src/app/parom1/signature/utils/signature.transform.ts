import { ISignature } from '../model/signature.model';
import { parseDateForPDF } from '../../../_shared/utils/utils';

export class SignatureTransform {

  /**
   *
   * @param {ISignature} data
   * @returns {Object}
   */
  static process(data: ISignature): Array<any> {
    return [
      { text: 'Signature and date', style: 'sectionHeading' },
      {
        style: 'tableDefault',
        table: {
          widths: [150, '*'],
          body: [
            [{ text: 'Name', style: 'fontBold' }, data.reportAuthor || ''],
            [{ text: 'NPS Division & LDU', style: 'fontBold' }, data.division || ''],
            [{ text: 'Office address', style: 'fontBold' }, data.address || ''],
            [{ text: 'Email address', style: 'fontBold' }, data.email || ''],
            [{ text: 'Telephone number', style: 'fontBold' }, data.phone || ''],
            [{ text: 'Countersignature', style: 'fontBold' }, data.counterSignature || ''],
            [{ text: 'Role', style: 'fontBold' }, data.counterSignatureRole || ''],
            [{ text: 'Completion date', style: 'fontBold' }, parseDateForPDF(data.reportDate)]
          ]
        }
      }
    ];
  }

}
