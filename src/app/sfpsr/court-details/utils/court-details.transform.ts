import { ICourtDetails } from '../model/court-details.model';
import { SharedUtil } from '../../_shared/utils/shared.util';

export class CourtDetailsTransform {

  static process(data: ICourtDetails): Array<any> {
    return [
      {
        style: 'tableDefault',
        table: {
          widths: [100, '*'],
          body: [
            [{ colSpan: 2, text: 'Sentencing court details', style: 'tableHeading' }, {}],
            [{ text: 'Court', style: 'fontBold' }, data.court || ''],
            [{ text: 'Date of hearing', style: 'fontBold' }, SharedUtil.parseDate(data.hearingDate)],
            [{ text: 'Local justice area', style: 'fontBold' }, data.localJusticeArea || '']
          ]
        }
      }
    ];
  }
}
