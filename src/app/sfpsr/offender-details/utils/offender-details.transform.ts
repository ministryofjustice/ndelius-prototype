import { IOffenderDetails } from '../model/offender-details.model';
import { parseDateForPDF } from '../../../_shared/utils/utils';

export class OffenderDetailsTransform {

  static process(data: IOffenderDetails): Array<any> {
    return [
      {
        style: 'tableDefault',
        table: {
          widths: [100, '*', 100, '*'],
          body: [
            [{ colSpan: 4, text: 'Offender details', style: 'tableHeading' }, {}, {}, {}],
            [{ text: 'Name', style: 'fontBold' }, { colSpan: 3, text: data.name || '' }, {}, {}],
            [{ text: 'Date of birth', style: 'fontBold' }, parseDateForPDF(data.dateOfBirth), {
              text: 'Age',
              style: 'fontBold'
            }, data.age || ''],
            [{ text: 'Address', style: 'fontBold' }, { colSpan: 3, text: data.address || '' }, {}, {}],
            [{ text: 'Delius CRN', style: 'fontBold' }, data.crn || '', {
              text: 'PNC ID',
              style: 'fontBold'
            }, data.pnc || '']
          ]
        }
      }
    ];
  }
}
