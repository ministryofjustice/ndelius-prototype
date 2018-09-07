import { IMappa } from '../model/mappa.model';
import { parseDateForPDF } from '../../_shared/utils/parseDate.util';

export class MappaTransform {

  /**
   *
   * @param {IMappa} data
   * @returns {Object}
   */
  static process(data: IMappa): Array<any> {

    switch (data.eligibleForMappa) {
      case 'No':
        return [
          { text: 'MAPPA', style: 'sectionHeading' },
          {
            text: { text: 'The prisoner is not eligible for MAPPA' }, margin: [0, 5, 0, 10]
          }
        ];
      case 'Yes':
        return [
          { text: 'MAPPA', style: 'sectionHeading' },
          {
            text: [{ text: 'MAPPAQ completed on ', style: 'fontBold' }, parseDateForPDF(data.screenedDate)],
            margin: [0, 5, 0, 10]
          },
          {
            style: 'tableDefault',
            margin: [0, 15, 0, 15],
            table: {
              widths: ['*', '*'],
              body: [
                [{ text: 'Prisoner\'s current MAPPA category', style: 'fontBold' }, {
                  text: 'Prisoner\'s current MAPPA level',
                  style: 'fontBold'
                }],
                [data.mappaCategory || '', data.mappaLevel || '']
              ]
            }
          }
        ];
      default:
        return;
    }
  }
}
