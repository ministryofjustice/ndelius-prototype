import { ICourtDetails } from '../model/court-details.model';
import { parseDateForPDF } from '../../../_shared/utils/utils';

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
            [{ text: 'Date of hearing', style: 'fontBold' }, parseDateForPDF(data.hearingDate)],
            [{ text: 'Local justice area', style: 'fontBold' }, data.localJusticeArea || '']
          ]
        }
      }
    ];
  }
}
