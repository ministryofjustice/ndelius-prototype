import { IPrisonerDetails } from '../model/prisoner-details.model';
import { IMultiFieldDate } from '../../../_shared/interface/three-field-date.interface';

export class PrisonerDetailsTransform {

  /**
   *
   * @param {IPrisonerDetails} data
   * @returns {Object}
   */
  static process(data: IPrisonerDetails): Object {

    /**
     *
     * @param {IMultiFieldDate} date
     * @returns {string}
     */
    function parseDate(date: IMultiFieldDate) {
      return date.day ? date.day + '/' + date.month + '/' + date.year : '';
    }

    const prisonerDetails = {
      style: 'tableDefault',
      table: {
        widths: [100, '*', 100, '*'],
        body: [
          [{ colSpan: 4, text: 'Prisoner details', style: 'tableHeading' }, {}, {}, {}],
          [{ text: 'HMP / YOI', style: 'fontBold' }, data.prison || '', { text: 'Report date', style: 'fontBold' }, ''],
          [{ text: 'Prison number', style: 'fontBold' }, data.prisonNumber || '', {
            text: 'Category',
            style: 'fontBold'
          }, data.category || ''],
          [{ text: 'Name', style: 'fontBold' }, { text: data.name || '', colSpan: 3 }],
          [{ text: 'Offence', style: 'fontBold' }, { text: data.offence || '', colSpan: 3 }],
          [{ text: 'Sentence', style: 'fontBold' }, { text: data.sentence || '', colSpan: 3 }]
        ]
      }
    };

    if (data.sentenceType && data.sentenceType.toLowerCase() === 'determinate') {
      prisonerDetails.table.body.push(
        [
          { text: 'Eligibility date', style: 'fontBold' }, { text: parseDate(data.determinateEligibilityDate), colSpan: 3 }
        ]
      );
      prisonerDetails.table.body.push(
        [
          { text: 'Release date', style: 'fontBold' }, { text: parseDate(data.determinateReleaseDate), colSpan: 3 }
        ]
      );
    } else if (data.sentenceType && data.sentenceType.toLowerCase() === 'indeterminate') {
      prisonerDetails.table.body.push(
        [{ text: 'Tariff length', style: 'fontBold' }, data.tariffLength || '', {
          text: 'Expiry date',
          style: 'fontBold'
        }, parseDate(data.tariffExpiryDate)]
      );
    }

    return prisonerDetails;
  }

}
